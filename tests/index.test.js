import {expect, test, vi} from 'vitest';
import {Dialog} from '../src/index.js';

HTMLElement.prototype.getAnimations = vi.fn(() => []);
vi.spyOn(document, 'baseURI', 'get').mockImplementation(() => 'https://localhost');

const createDialog = () => {
    return new Promise(resolve => {
        const dialog = new Dialog({
            id: 'id',
            className: 'className',
            styleSheets: ['/dialog.css'],
            content: 'content',
            open: () => resolve({dialog})
        });
    });
};

const {dialog} = await createDialog();

test('set className', () => {
    expect(dialog.element.className).toBe('className');
});

test('set id', () => {
    expect(dialog.element.id).toBe('id');
});

test('set content', () => {
    expect(dialog.element.textContent).toBe('content');
});

test('attach/detach styleSheets', async () => {
    expect(document.head.querySelector('[href="https://localhost/dialog.css"]')).not.toBeNull();
    await dialog.close();
    expect(document.head.querySelector('[href="https://localhost/dialog.css"]')).toBeNull();
});

test('change content', async () => {
    await dialog.content('changed content');
    expect(dialog.element.textContent).toBe('changed content');
});

test('open/close dialog', async () => {
    await dialog.close();
    expect(dialog.element.hasAttribute('open')).toBeFalsy();
    await dialog.open();
    expect(dialog.element.hasAttribute('open')).toBeTruthy();
});

test('manual resolve/reject dialog', async () => {
    dialog.then(value => expect(value).toBe('resolve'));
    dialog.catch(value => expect(value).toBe('reject'));

    await dialog.resolve('resolve');
    await dialog.close();
    await dialog.open();
    await dialog.reject('reject');
});

test('resolve/reject dialog via actions', async () => {
    await dialog.content(`
        <button data-dialog-state="resolve">
        <button data-dialog-state="reject">
    `);

    dialog.then(value => expect(value).toBe('resolved'));
    dialog.catch(value => expect(value).toBe('rejected'));

    const [resolveBtn, rejectBtn] = dialog.element.querySelectorAll('button');

    resolveBtn.addEventListener('click', () => dialog.resolve('resolved'));
    rejectBtn.addEventListener('click', () => dialog.reject('rejected'));

    await dialog.close();
    await dialog.open();
    resolveBtn.click();
    await dialog.close();
    await dialog.open();
    rejectBtn.click();
});

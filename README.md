# Dialog

<p>
    <a href="https://www.npmjs.com/package/@js4y/dialog"><img src="https://img.shields.io/badge/dependencies-none-green.svg" alt="none dependencies"></a>
    <a href="https://www.npmjs.com/package/@js4y/dialog"><img src="https://img.shields.io/npm/v/%40js4y%2Fdialog" alt="npm"></a>
    <a href="https://www.npmjs.com/package/@js4y/dialog"><img src="https://deno.bundlejs.com/badge?q=@js4y/dialog&treeshake=[*]" alt="npm bundle size"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/%40js4y%2Fdialog" alt="license"></a>
</p>

A tiny dependency-free javascript library built on a [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) with minimal configuration, yet sufficiently variable.

Live Demo: https://bukacekd.github.io/Dialog

## Features

- closing the dialog using the `escape` key
- closing the dialog by click on the [backdrop](#styling) or element with the [corresponding data attribute](#actions)
- loading [external styles](#stylesheets)
- preventing scrolling of the page when displaying the dialog
- simple [configuration](#configuration) and [api](#properties)

## Installation

Npm

```bash
npm install @js4y/dialog
```

CDN

```bash
<script src="https://unpkg.com/@js4y/dialog/dist/index.js"></script>
```

## Usage

Npm

```javascript
import {Dialog} from '@js4y/dialog';

new Dialog({
    content: 'Hello world!'
});
```

CDN

```javascript
<script src="https://unpkg.com/@js4y/dialog/dist/index.js"></script>

<script>
    new js4y.components.Dialog({
        content: 'Hello world!'
    });
<script>
```

## Configuration

The library offers a set of configuration items. Below is an overview of them.

```javascript
new Dialog({
    className?: string,
    id?: string,
    content: string | AsyncFunction | Function | HTMLElement,
    open?: Function,
    close?: Function,
    styleSheets?: Array<string>
});
```

### className

required: `false`, type: `string`

CSS class of dialog.

```javascript
new Dialog({
    className: 'my-dialog',
});
```

### id

required: `false`, type: `string`

CSS Identifier of dialog. If you try to create multiple dialogs with the same identifier, only one will appear on the page - this prevents possible duplicates on the page.

```javascript
const dialog1 = new Dialog({
    id: 'my-dialog',
    content: 'old content',
});

const dialog2 = new Dialog({
    id: 'my-dialog',
    content: 'new content',
});

dialog1 === dialog2;
```

According to the example above, only the dialog with the content "new-content" is displayed in the page.

### content

required: `true`, type: `string` | `AsyncFunction` | `Function` | `HTMLElement`

The content that will be displayed.

```javascript
new Dialog({
    content: 'Hello <b>world</b>!',
});

new Dialog({
    content: document.querySelector('template'),
});

new Dialog({
    content: async (e, signal) => {
        const response = await fetch('<url>', {signal}),
              data     = await response.text();

        e.content(data);
    }
});
```

The first parameter of the callback function corresponds to the dialog instance and the second to the [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object.

### open

required: `false`, type: `Function`

The function is fired when the dialog is opened. The function parameter corresponds to the dialog instance.

```javascript
new Dialog({
    open: dialog => console.log('opened', dialog),
});
```

### close

required: `false`, type: `Function`

The function is fired when the dialog is closed. The function parameter corresponds to the dialog instance.

```javascript
new Dialog({
    close: => console.log('closed', dialog),
});
```

### styleSheets

required: `false`, type: `Array<string>`

List of url addresses of external css styles. Styles are loaded asynchronously

```javascript
new Dialog({
    styleSheets: ['/dialog.css'],
});
```

Styles can be loaded directly as dialog content.

```javascript
new Dialog({
    content: `
        <link href="/dialog.css" rel="stylesheet">
        Hello <b>world</b>!
    `,
});
```

In both cases, the dialog only appears when all css styles are loaded or fail to load.

## Properties

### element: HTMLDialogElement

An instance of the dialog element on the page.

```javascript
new Dialog({
    content: async e => {
        await e.content('<button data-dialog-action="close">close</button>');

        e.element.querySelector('button').addEventListener('click', () => {
            console.log('was clicked');
        });
    }
});
```

## Methods

### abort()

Cancels the display of the dialog if its content is loaded by the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/fetch) extended by [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) and has not yet been displayed.

```javascript
const dialog = new Dialog({
    content: async (e, signal) => {
        const response = await fetch('<url>', {signal}),
              data     = await response.text();

        e.content(data);
    }
});

dialog.abort();
```

### open(delay?: number): Promise

Opens the dialog immediately or with a delay.

```javascript
dialog.open();
```

### close(delay?: number): Promise

Close the dialog immediately or with a delay.

```javascript
dialog.close(3000);
```

### content(value: string | AsyncFunction | Function | HTMLElement, delay?: number): Promise

Changes the content of the dialog - immediately or with a delay.

```javascript
dialog.content('🎉');
```

The use of the method can be useful in the case of displaying the loader during a long-running request.

```javascript
new Dialog({
    content: async (e, signal) => {
        e.content('please wait...');

        const response = await fetch('<url>', {signal}),
              data     = await response.text();

        await e.content(data);
    }
});
```

### resolve(value?: any): Promise

Executes the callback function of `then` method. The `then` method is always executed only once regardless of the number of calls to the `resolve` method.

```javascript
dialog.resolve('😀');
```

### reject(reason?: any): Promise

Executes the callback function of `catch` method. The `catch` method is always executed only once regardless of the number of calls to the `reject` method.

```javascript
dialog.reject('😢');
```

### then(callback: `AsyncFunction | Function`): Dialog

Callback function that is executed after calling the `resolve` method.

```javascript
dialog.then(value => console.log(value));
dialog.resolve('😀');
```

### catch(callback: `AsyncFunction | Function`): Dialog

Callback function that is executed after calling the `catch` method.

```javascript
dialog.catch(reason => console.log(reason));
dialog.reject('😢');
```

## Actions

Html elements inside the dialog can call some methods - the prerequisite is the existence of the corresponding data attribute:

| Selector | Description |
| - | - |
| `[data-dialog-action="close"]`  | Closes the dialog. |
| `[data-dialog-state="resolve"]`  | Executes the callback function of `then` method. |
| `[data-dialog-state="reject"]`  | Executes the callback function of `reject` method. |

Actions can be combined with each other.

```javascript
new Dialog({
    content: `
        Are you sure?
        <button data-dialog-action="resolve close">Yes</button>
        <button data-dialog-action="reject close">No</button>
    `,
})
.then(() => console.log('resolve'))
.catch(() => console.log('reject'));
```

## Styling

By default, the dialog cannot be closed by clicking on the backdrop. However, this can be easily changed by adding the css style below to your application.

```css
dialog::backdrop {
    pointer-events: none;
}
```

The dialog does not contain any styles, except for the basic styles specific to each browser. Two css selectors are available for animation purposes:

| Selector | Description |
| - | - |
| `[data-dialog-state="open"]`  | State indicating the opening of a dialog. |
| `[data-dialog-state="close"]`  | State indicating the closing of a dialog. |

Examples of animated dialogs:

```css
dialog,
dialog::backdrop {
    opacity: 0;
    transition: opacity .3s;
}

[data-dialog-state="open"],
[data-dialog-state="open"]::backdrop {
    opacity: 1;
}

// or

dialog {
    translate: 0 15%;
}

dialog,
dialog::backdrop {
    opacity: 0;
    transition: opacity .3s, translate .3s;
}

[data-dialog-state="open"],
[data-dialog-state="open"]::backdrop {
    opacity: 1;
    translate: none;
}

[data-dialog-state="close"] {
    translate: 0 -15%;
}
```

## Browser support

| ![alt chrome](images/chrome.png) | ![alt edge](images/edge.png)  | ![alt firefox](images/firefox.png)  | ![alt opera](images/opera.png) | ![alt safari](images/safari.png) |
| :-: | :-: | :-: | :-: | :-: |
| Chrome 84+ | Edge 84+ | Firefox 98+ | Opera 70+ | Safari 15.4+ |

## License

The project is licensed under [MIT license](https://opensource.org/license/mit/).

## Related

- [Loader](https://github.com/bukacekd/Loader) - A tiny dependency-free javascript loading spinner component with minimal configuration.
- [lock-scroll](https://github.com/bukacekd/lock-scroll) - A set of methods to lock scrolling within an element or an entire page.
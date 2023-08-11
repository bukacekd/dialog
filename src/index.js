const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const STATES = {
	FULFILLED: 0,
	PENDING: 1
};

let dialogInstances = new Set(),
    scrolloptions   = {},
    visibleDialogs  = new Set();

export class Dialog {

	#abort = new AbortController();
	#callbacks;
	#canClearTimeouts = true;
	#closeTimeout;
	#events;
	#openTimeout;
	#reject;
	#resolve;
	#sourceTarget;
	#state = STATES.PENDING;
	#styleSheets = new Map();

	constructor({className, content, id, open, close, styleSheets} = {}) {
		const instance = [...dialogInstances].find(dialog => dialog.element.id === id);

		if (instance) {
			instance.content(content);
			return instance;
		}

		this.#callbacks = {close, open};
		this.element    = document.createElement('dialog');

		this.#findStyleSheets([].concat(styleSheets).filter(sheet => typeof sheet === 'string'));

		this.#events = {
			click: this.#onClick.bind(this),
			keydown: this.#onKeydown.bind(this),
			pointerdown: this.#onPointerdown.bind(this)
		};

		if (className) {
			this.element.className = className;
		}

		if (id) {
			this.element.id = id;
		}

		this.content(content);
		dialogInstances.add(this);
	}

	get #hasContent() {
		return this.element.childNodes.length > 0;
	}

	get #isLastVisible() {
		return [...visibleDialogs].pop() === this;
	}

	#attachStyleSheets() {
		return Promise.allSettled([...this.#styleSheets].map(([url, sheet]) => new Promise((resolve, reject) => {
			if (sheet) {
				return resolve();
			}

			const resource = document.createElement('link');
			resource.href = url;
			resource.rel = 'stylesheet';
			resource.addEventListener('load', resolve);
			resource.addEventListener('error', reject);
			document.head.appendChild(resource);
			this.#styleSheets.set(url, resource);
		})));
	}

	#clearTimeouts() {
		if (this.#canClearTimeouts) {
			clearTimeout(this.#closeTimeout);
			clearTimeout(this.#openTimeout);
		}

		this.#canClearTimeouts = true;
	}

	#detachStyleSheets() {
		[...this.#styleSheets].forEach(([url, sheet]) => {
			sheet.remove();
			this.#styleSheets.set(url, null);
		});
	}

	#findStyleSheets(styleSheets) {
		styleSheets.forEach(sheet => {
			const url = typeof sheet === 'string' ? new URL(sheet, document.baseURI).href : sheet.href;

			if (!this.#styleSheets.has(url)) {
				this.#styleSheets.set(url, null);
				sheet.remove?.();
			}
		});
	}

	#lockScroll(force) {
		if (visibleDialogs.size > 0) {
			return;
		}

		if (force) {
			if (isIOS) {
				scrolloptions = {left: window.scrollX, top: window.scrollY, behavior: 'instant'};
				document.documentElement.style.cssText = `left: -${scrolloptions.left}px; position: fixed; top: -${scrolloptions.top}px;`;
			} else {
				document.documentElement.style.cssText = `overflow: hidden; padding-right: ${window.innerWidth - document.documentElement.getBoundingClientRect().width}px`;
			}
		} else {
			document.documentElement.style.cssText = null;
			isIOS && document.documentElement.scrollTo(scrolloptions);
		}
	}

	#onClick(e) {
		if (this.#isLastVisible) {
			if (this.#sourceTarget === document.documentElement && e.target === document.documentElement) {
				this.#wasClickedInBackdrop(e) && this.close();
			} else {
				const target = e.target.closest('[data-dialog-action]');

				if (target) {
					const actions = e.target.dataset.dialogAction.toLowerCase().split(/\s+/);

					(async () => {
						for (let action of actions) {
							await this[action]?.();
						}
					})();
				}
			}
			this.#sourceTarget = null;
		}
	}

	#onKeydown(e) {
		if (e.key === 'Escape' && this.#isLastVisible) {
			e.preventDefault();
			this.close();
		}
	}

	#onPointerdown(e) {
		if (this.#isLastVisible) {
			if (e.target === document.documentElement) {
				// prevent user-select in firefox
				e.preventDefault();
			}

			this.#sourceTarget = e.target;
		}
	}

	#resolveAnimations() {
		return Promise.allSettled(this.element.getAnimations().map(animation => animation.finished));
	}

	async #resolveCallback(callback, value) {
		if (this.#state === STATES.PENDING) {
			await callback?.(value);
		}
        this.#state = STATES.FULFILLED;
        return Promise.resolve();
	}

	#wasClickedInBackdrop(e) {
		const {left, right, top, bottom} = this.element.getBoundingClientRect();
		return left > e.clientX || right < e.clientX || top > e.clientY || bottom < e.clientY;
	}

	abort() {
		this.#abort.abort();
		this.#abort = new AbortController();

		if (!this.#hasContent) {
			visibleDialogs.delete(this);
		}
		return this;
	}

	async close(delay) {
		this.#clearTimeouts();

		if (typeof delay === 'number' && delay > 0) {
			await new Promise(resolve => {this.#closeTimeout = setTimeout(() => resolve(), delay)});
		}

		if (this.element.open) {
			document.removeEventListener('click', this.#events.click);
			document.removeEventListener('keydown', this.#events.keydown);
			document.removeEventListener('pointerdown', this.#events.pointerdown);

			this.element.dataset.dialogState = 'close';
			await this.#resolveAnimations();

			dialogInstances.delete(this);
			visibleDialogs.delete(this);

			this.element.close();
			this.element.remove();
			this.#lockScroll(false);
			this.#detachStyleSheets();
			this.#callbacks.close?.(this);
			await this.reject();
			this.#state = STATES.PENDING;
		}

		return Promise.resolve();
	}

	async content(value, delay) {
		if (value != null) {
			this.#clearTimeouts();
			this.abort();

			if (typeof value === 'function') {
				return value(this, this.#abort.signal);
			}

			const element = document.createElement('div');

			if (value instanceof HTMLElement) {
				element.append(value instanceof HTMLTemplateElement ? value.content.cloneNode(true) : value);
			} else {
				element.innerHTML = value;
			}

			this.#findStyleSheets([...element.querySelectorAll('link[rel="stylesheet"]')]);
			await this.#attachStyleSheets();
			this.element.replaceChildren(...element.childNodes);
		}

		this.#canClearTimeouts = false;

		return this.open(delay);
	}

    async open(delay) {
		this.#clearTimeouts();

		if (typeof delay === 'number' && delay > 0) {
			await new Promise(resolve => this.#openTimeout = setTimeout(() => resolve(), delay));
		}

		if (!this.element.open && this.#hasContent) {
			await this.#attachStyleSheets();

			document.addEventListener('click', this.#events.click);
			document.addEventListener('keydown', this.#events.keydown);
			document.addEventListener('pointerdown', this.#events.pointerdown);

			if (!document.contains(this.element)) {
				document.body.appendChild(this.element);
			}

			this.#lockScroll(true);
			this.element.showModal();
			this.element.dataset.dialogState = 'open';

			dialogInstances.add(this);
			visibleDialogs.add(this);

			await this.#resolveAnimations();
			this.#callbacks.open?.(this);
		}

		return Promise.resolve();
	}

    then(callback) {
		if (typeof callback === 'function') {
			this.#resolve = callback;
		}
		return this;
	}

	catch(callback) {
		if (typeof callback === 'function') {
			this.#reject = callback;
		}
		return this;
	}

	reject(reason) {
		return this.#resolveCallback(this.#reject, reason);
	}

	resolve(value) {
		return this.#resolveCallback(this.#resolve, value);
	}
}

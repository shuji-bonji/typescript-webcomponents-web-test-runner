export class SampleComponent extends HTMLElement {
  static get observedAttributes() {
    return ['message'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = `<p>Hello, Web Test Runner!</p>`;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'message') {
      this.shadowRoot!.querySelector('p')!.textContent = newValue;
    }
  }
}

customElements.define('sample-component', SampleComponent);
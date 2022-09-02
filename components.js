'use strict';
// @ts-check

class BasicGreetingElement extends HTMLElement {

  static observedAttributes = ['name'];

  #name = 'World';
  #title;

  constructor() {
    super();
  }

  /**
   * Executes when element is added to the DOM
   */
  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName === 'name') {
      this.#name = newValue;
    }
    this.#render();
  }

  #render() {
    if (this.childElementCount === 0) {
      this.#title = document.createElement('h1');
      this.append(this.#title);
    }
    this.#title.innerHTML = `Hello, ${this.#name}!`;
  }

}

window.customElements.define('basic-greeting', BasicGreetingElement);
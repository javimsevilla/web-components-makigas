'use strict';
// @ts-check

class BasicGreetingElement extends HTMLElement {

  constructor() {
    super();
  }

  /**
   * Executes when element is added to the DOM
   */
  connectedCallback() {
    let title = document.createElement('h1');
    title.innerHTML = 'Hello, World!';
    this.append(title);
  }

}

window.customElements.define('basic-greeting', BasicGreetingElement);
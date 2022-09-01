'use strict';
// @ts-check

class BasicGreetingElement extends HTMLElement {

  constructor() {
    super();
  }

}

window.customElements.define('basic-greeting', BasicGreetingElement);
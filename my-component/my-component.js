class MyComponent extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    // Element functionality written in here.
    this.action = this.action.bind(this);
  }

  // NOTE: Runs at the start of the component
  connectedCallback() {
    this.innerHTML = `
    <section class="my-com-section">
      <p>This is a web component!</p>
      <button id="js-btn">Click Me</button>
    </section>
    `; // Setting the HTML template
    
    this.querySelector('#js-btn').addEventListener('click', this.action);
  }

  // NOTE: Runs at the end of the component life cycle
  disconnectedCallback() {
    this.querySelector('#js-btn').removeEventListener('click', this.action);
  }

  action() {
    console.warn('>>> CLICKED!!! <<<');
  }
}

// Registers the custom element with the browser's Custom Elements registry
customElements.define('my-component', MyComponent);

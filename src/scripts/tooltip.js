class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); // allows access to the shadow dom via the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('tool-tip', Tooltip);
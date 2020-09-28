const template = document.createElement('template');

template.innerHTML += `
    
    <style>
        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 2;
        }

        .tooltip-popup-message {
            position: absolute;
            bottom: 125%;
            z-index: 10;
            width: 150px;
            background: white;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
            font-size: 0.8em;
            line-height: 1.2;
            border-radius: 0.5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: 0.3s;
        }

        .tooltip-icon:hover ~ .tooltip-popup-message{
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.8, 0, 0.1, 2);
        }

        .tooltip-text {
            display: inline-block;
            font-size: 1em;
        }

        .tooltip-text:hover ~ .tooltip-popup-message {
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.8, 0, 0.1, 2);
        }

        .tooltip-svg {
            font-size: 1em;
            width: 1em;
            display: inline-block;
            fill: inherit;
            position: relative;
            top: 2px;
        }

        .tooltip-svg:hover ~ .tooltip-popup-message {
            transform: scale(1);
            transition: transform 0.5s cubic-bezier(0.8, 0, 0.1, 2);
        }
    </style>


    <div class="tooltip-container">

        <span class="tooltip-text">
            <slot name="text" />
        </span>

        <span class="tooltip-svg">
            <slot name="svg" />
        </span>

        <div class="tooltip-popup-message">
            <slot name="popup-message" />
        </div>

    </div>
`;

class Tooltip extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); // allows access to the shadow dom via the shadow root
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        const tipType = this.getAttribute("type");
        const tooltipSvg = this.shadowRoot.querySelector('.tooltip-svg');
        const tooltipText = this.shadowRoot.querySelector('.tooltip-text');

        if (tipType === "svg") {
            tooltipText.style.display = "none";
        } else {
            tooltipSvg.style.display = "none";
        }

        if (popupColor) {
            PopupMessage.style.color = popupColor;
        }

        if (popupBGColor) {
            PopupMessage.style.backgroundColor = popupBGColor;
        }

        if (popupWidth) {
            PopupMessage.style.width = popupWidth;
        }
    }
}

window.customElements.define('tool-tip', Tooltip);
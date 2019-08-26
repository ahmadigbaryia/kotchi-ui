import { buildShadowRoot } from "../wcUtils.js";

const template = document.createElement("template");
template.innerHTML = `
<button></button>
`;

class UIKitButton extends HTMLElement {
	constructor() {
		super();
		buildShadowRoot(template, this);
		this.elems = {
			elem: this.shadowRoot.querySelector("button"),
		};
	}

	static get observedAttributes() {
		return ["uik-text"];
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		switch (attrName) {
		case "uik-text":
			this.elems.elem.innerText = newVal;
			break;
		default:
			break;
		}
	}

	get uikText() {
		return this.getAttribute("uik-text");
	}
	set uikText(val) {
		if (val) {
			this.setAttribute("uik-text", val);
		} else {
			this.removeAttribute("uik-text");
			this.elems.elem.innerText = "";
		}
	}
}

window.customElements.define("uik-button", UIKitButton);
export default UIKitButton;

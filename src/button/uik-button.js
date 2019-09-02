import { buildShadowRoot } from "../wcUtils.js";
import keys from "lodash/keys";
import toCamelCase from "lodash/camelCase";
import { ButtonAttributes } from "./config";

const template = document.createElement("template");
template.innerHTML = `
	<div class='container'>
		<span class='icon'></span>
		<button class='button'></button>
	</div>
`;

/**
 * Button element
 * attributes: [text, style]
 */
class UIKitButton extends HTMLElement {
	constructor() {
		super();
		buildShadowRoot(template, this);
		this.elements = {
			button: this.shadowRoot.querySelector("button.button"),
			container: this.shadowRoot.querySelector("div.container"),
			icon: this.shadowRoot.querySelector("span.icon"),
		};
	}

	static get observedAttributes() {
		return keys(ButtonAttributes);
	}

	attributeChangedCallback(attribute, oldValue, newValue) {
		if (
			ButtonAttributes[attribute] &&
			ButtonAttributes[attribute].changeHandler
		) {
			ButtonAttributes[attribute].changeHandler.apply(this, [
				oldValue,
				newValue,
			]);
		}
	}
}

//Define a public API for the attributes to be used as properties as well
UIKitButton.observedAttributes.forEach(function(attribute) {
	Object.defineProperty(UIKitButton.prototype, toCamelCase(attribute), {
		set: function(value) {
			if (ButtonAttributes[attribute].setter) {
				ButtonAttributes[attribute].setter.apply(this, [
					attribute,
					value,
				]);
			}
		},
		get: function() {
			if (ButtonAttributes[attribute].getter) {
				return ButtonAttributes[attribute].getter.apply(this, [
					attribute,
				]);
			}
			return null;
		},
	});
});

window.customElements.define("uik-button", UIKitButton);
export default UIKitButton;

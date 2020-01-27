import keys from "lodash/keys";
import _isFunction from "lodash/isFunction";

import BaseElement from "../../baseElement";
import attributesConfig, { Size, Style } from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "../../utils/wcUtils";

const tagName = "kui-button";
/**
 * Button element
 */
class KUIButton extends BaseElement {
	constructor() {
		super({ templateConfig, attributesConfig });
		this.elements = {
			button: this.shadowRoot.querySelector(
				templateConfig.selectors.button
			)
		};
	}
	static get observedAttributes() {
		return keys(attributesConfig);
	}
	static get Style() {
		return Style;
	}
	static get Size() {
		return Size;
	}
	static defineCustomElement() {
		if(!KUIButton.defined){
			defineCustomElement({
				componentClass: KUIButton,
				tagName,
				attributesConfig
			});
			KUIButton.defined = true;
		}
	}
	addClickHandler(handler) {
		if (_isFunction(handler)) {
			this.elements.button.addEventListener("click", handler);
		}
	}
	removeClickHandler(handler) {
		if (handler) {
			this.elements.button.removeEventListener("click", handler);
		}
	}
}
export { KUIButton as default, tagName };
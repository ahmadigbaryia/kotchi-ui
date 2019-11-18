import keys from "lodash/keys";

import BaseElement from "../baseElement";
import { defineCustomElement } from "../utils/wcUtils";
import { attributesConfig, tagName } from "./config";
import templateConfig from "./template";

/**
 * Button element
 */
class UIKitButton extends BaseElement {
	constructor() {
		super({ templateConfig, attributesConfig });
		this.elements = {
			button: this.shadowRoot.querySelector(
				templateConfig.selectors.button
			),
			icon: this.shadowRoot.querySelector(templateConfig.selectors.icon)
		};
	}

	static get observedAttributes() {
		return keys(attributesConfig);
	}
}
defineCustomElement({
	componentClass: UIKitButton,
	tagName,
	attributesConfig
});

export default UIKitButton;

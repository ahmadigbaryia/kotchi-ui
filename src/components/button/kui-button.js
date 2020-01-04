import keys from "lodash/keys";

import BaseElement from "../../baseElement";
import { defineCustomElement } from "../../utils/wcUtils";
import { attributesConfig, tagName, Style, Size } from "./config";
import templateConfig from "./template";

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

}

defineCustomElement({
	componentClass: KUIButton,
	tagName,
	attributesConfig
});

export default KUIButton;

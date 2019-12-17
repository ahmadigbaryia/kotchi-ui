import {
	buildShadowRoot,
	buildComponentContents,
	changeHandlerWrapper
} from "../utils/wcUtils";

class BaseElement extends HTMLElement {
	constructor({ templateConfig, attributesConfig, useShadow = true }) {
		super();
		this.templateConfig = templateConfig;
		this.attributesConfig = attributesConfig;
		const { template } = this.templateConfig;
		if (useShadow) {
			buildShadowRoot(template, this);
		} else {
			buildComponentContents(template, this);
		}
	}

	attributeChangedCallback(attribute, oldValue, newValue) {
		const { tagName, attributesConfig } = this;
		const attributeChangedHandler =
			attributesConfig[attribute] &&
			attributesConfig[attribute].attributeChangedHandler;
		if (attributeChangedHandler) {
			changeHandlerWrapper({
				attributesConfig,
				attribute,
				tagName,
				oldValue,
				newValue,
				attributeChangedHandler
			});
		}
	}
}

export default BaseElement;

import { buildShadowRoot, changeHandler } from "../utils/wcUtils";

class BaseElement extends HTMLElement {
	constructor(templateConfig, attributesConfig) {
		super();
		buildShadowRoot(templateConfig.template, this);
		this.attributesConfig = attributesConfig;
	}

	attributeChangedCallback(attribute, oldValue, newValue) {
		const attributeConfig = this.attributesConfig[attribute];
		const { tagName } = this;
		if (attributeConfig && attributeConfig.attributeChangedHandler) {
			changeHandler({
				attributesConfig: this.attributesConfig,
				attribute,
				tagName,
				oldValue,
				newValue,
				changeHandler: attributeConfig.attributeChangedHandler.bind(this),
			});
		}
	}
}

export default BaseElement;

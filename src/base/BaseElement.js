import {
	buildShadowRoot,
	buildComponentContents,
	changeHandlerWrapper
} from "Utils/wcUtils";
import { containerHelper, containedHelper } from "Utils/ElementHelper";

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
				attributeChangedHandler,
				component: this
			});
		}
	}

	connectedCallback({ element, allowedChildren = [], allowedParents = [] } = {}) {
		if (allowedChildren.length > 0) {
			const usedTypes = containerHelper.validateChildren({
				element,
				allowedChildren,
				tagName: this.tagName
			});
			containerHelper.registerChildren({
				usedTypes,
				definedCallback: this.childrenDefinedCallback.bind(this)
			});
		}
		if (allowedParents.length > 0) {
			containedHelper.validateParent({
				element,
				allowedParents,
				tagName: this.tagName
			});
		}
	}
}

export default BaseElement;

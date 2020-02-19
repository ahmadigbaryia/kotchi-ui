import _toCamelCase from "lodash/camelCase";

import {
	buildShadowRoot,
	buildComponentContents,
	changeHandlerWrapper,
	setDefaultValues
} from "Utils/wcUtils";
import { containerHelper, containedHelper } from "Utils/elementHelper";

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
			attributesConfig[attribute].attributeChangedHandler || (() => {});
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
			const { childrenTypes, children } = containerHelper.validateChildren({
				element,
				allowedChildren,
				tagName: this.tagName
			});
			containerHelper.registerChildren({
				childrenTypes,
				definedCallback: this.childrenDefinedCallback.bind(this, {children})
			});
		}
		if (allowedParents.length > 0) {
			containedHelper.validateParent({
				element,
				allowedParents,
				tagName: this.tagName
			});
		}
		setDefaultValues(this);
	}
}

export default BaseElement;
import BaseElement from "./BaseElement";
import { validateParent } from "Utils/validators";

/**
 * Base Contained Element
 */
class BaseContainedElement extends BaseElement {
	constructor({ templateConfig, attributesConfig, useShadow = true }) {
		super({ templateConfig, attributesConfig, useShadow });
	}
	connectedCallback({ element, allowedParents }) {
		super.connectedCallback();
		validateParent({
			element,
			allowedParents,
			tagName: this.tagName
		});
	}
}
export { BaseContainedElement as default };

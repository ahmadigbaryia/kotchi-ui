import BaseElement from "./BaseElement";
import { validateChildren } from "Utils/validators";

/**
 * Base Container Element
 */
class BaseContainerElement extends BaseElement {
	constructor({ templateConfig, attributesConfig, useShadow = true }) {
		super({ templateConfig, attributesConfig, useShadow });
	}
	connectedCallback({ element, allowedChildren }) {
		super.connectedCallback();
		const childrenTypes = validateChildren({
			element,
			allowedChildren,
			tagName: this.tagName
		});
		if (childrenTypes.length > 0) {
			const elementsDefinedPromise = [];
			for (let i = 0; i < childrenTypes.length; i++) {
				elementsDefinedPromise.push(
					customElements.whenDefined(childrenTypes[i])
				);
			}
			Promise.all(elementsDefinedPromise).then(() =>
				this.childrenDefinedCallback()
			);
		}
	}
	childrenDefinedCallback() {
		//should be overriden by subclass
	}
}
export { BaseContainerElement as default };

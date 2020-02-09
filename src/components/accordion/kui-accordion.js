import keys from "lodash/keys";

import BaseElement from "Base/baseElement";
import attributesConfig from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "Utils/wcUtils";

const tagName = "kui-accordion";
const allowedChildren = ["kui-section"];

/**
 * Accordion element
 */
class KUIAccordion extends BaseElement {
	constructor() {
		super({ templateConfig, attributesConfig });
		this.elements = {
			accordion: this.shadowRoot.querySelector(
				templateConfig.selectors.accordion
			),
			sectionsContainer: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionsContainer
			)
		};
	}
	connectedCallback() {
		super.connectedCallback({
			element: this.elements.sectionsContainer,
			allowedChildren
		});
	}

	childrenDefinedCallback() {
		//Go over the sections and register them
		console.log("Accordion children are ready ...");
	}

	static get observedAttributes() {
		return keys(attributesConfig);
	}

	static defineCustomElement() {
		if (!KUIAccordion.defined) {
			defineCustomElement({
				componentClass: KUIAccordion,
				tagName,
				attributesConfig
			});
			KUIAccordion.defined = true;
		}
	}
	setSectionExpandedHandler(handler) {
		// auto-generated method
	}
	getAllSections() {
		// auto-generated method
	}
	getExpandedSections() {
		// auto-generated method
	}
	collapseAllSections() {
		// auto-generated method
	}
	expandAllSections() {
		// auto-generated method
	}
	expandSection(sectionId) {
		// auto-generated method
	}
	collapseSection(sectionId) {
		// auto-generated method
	}
}
export { KUIAccordion as default, tagName };

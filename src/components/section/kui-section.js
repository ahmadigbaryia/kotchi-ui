import keys from "lodash/keys";

import BaseElement from "Base/baseElement";
import attributesConfig from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "Utils/wcUtils";

const tagName = "kui-section";
const allowedParents = ["kui-accordion"];

/**
 * Section element
 */
class KUISection extends BaseElement {
	constructor() {
		super({ templateConfig, attributesConfig });
		this.elements = {
			section: this.shadowRoot.querySelector(
				templateConfig.selectors.section
			),
			sectionIcon: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionIcon
			),
			sectionTitle: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionTitle
			),
			sectionExpanderIcon: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionExpanderIcon
			),
			sectionBody: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionBody
			),
			sectionTitleContainer: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionTitleContainer
			)
		};
	}

	connectedCallback() {
		super.connectedCallback({
			element: this,
			allowedParents
		});
	}

	static get observedAttributes() {
		return keys(attributesConfig);
	}
	static defineCustomElement() {
		if (!KUISection.defined) {
			defineCustomElement({
				componentClass: KUISection,
				tagName,
				attributesConfig
			});
			KUISection.defined = true;
		}
	}
}
export { KUISection as default, tagName };

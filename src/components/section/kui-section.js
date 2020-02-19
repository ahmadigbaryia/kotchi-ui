import keys from "lodash/keys";

import BaseElement from "Base/baseElement";
import attributesConfig, { tagName, Events, Collapsable } from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "Utils/wcUtils";
import { elementHelper } from "Utils/elementHelper";

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
			sectionBody: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionBody
			),
			sectionTitleContainer: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionTitleContainer
			),
			sectionActions: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionActions
			),
			sectionActionsContainer: this.shadowRoot.querySelector(
				templateConfig.selectors.sectionActionsContainer
			)
		};
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
	addCollapseAction() {
		this.elements.sectionActionsContainer.appendChild(
			templateConfig.collapseActionIconTemplate.cloneNode(true).content,
			this.elements.sectionActionsContainer.firstChild
		);
		const icon = this.elements.sectionActionsContainer.querySelector(
			templateConfig.selectors.collapseSectionIcon
		);
		icon.addEventListener("click", () => {
			this.elements.section.classList.toggle("kui-collapsed");
			elementHelper.dispatchEvent({
				element: this,
				eventName: Events.ExpandChanged,
				data: { id: this.getAttribute("id"), component: this }
			});
		});
	}
	removeCollapseAction() {
		
	}
	addCollapseHeaderBehavior() {}
	removeCollapseHeaderBehavior() {}
}
export { KUISection as default, tagName, Events };

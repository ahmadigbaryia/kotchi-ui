import keys from "lodash/keys";

import BaseElement from "Base/baseElement";
import attributesConfig, { tagName, Events, Collapsable } from "./config";
import KUIIcon from "../icon";
import templateConfig from "./template";
import { defineCustomElement } from "Utils/wcUtils";
import { elementHelper } from "Utils/elementHelper";

function collapseExpandHandler(icon) {
	if (icon.getAttribute("kui-rotate") === KUIIcon.Rotate.Rotate180) {
		icon.removeAttribute("kui-rotate");
		this.elements.section.classList.add("kui-collapsed");
	} else {
		icon.setAttribute("kui-rotate", KUIIcon.Rotate.Rotate180);
		this.elements.section.classList.remove("kui-collapsed");
	}
	elementHelper.dispatchEvent({
		element: this,
		eventName: Events.ExpandChanged,
		data: { id: this.getAttribute("id"), component: this }
	});
}

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
		this.expandHandler = function(e) {
			const target = e.currentTarget;
			if (target === this.elements.sectionTitleContainer ) {
				console.log("Header click");
			} else {
				const isExpanded =
					target.getAttribute("kui-rotate") === KUIIcon.Rotate.Rotate180;
				if (isExpanded) {
					target.removeAttribute("kui-rotate");
				} else {
					target.setAttribute("kui-rotate", KUIIcon.Rotate.Rotate180);
				}
			}
			this.elements.section.classList.toggle("kui-collapsed");
			elementHelper.dispatchEvent({
				element: this,
				eventName: Events.ExpandChanged,
				data: { id: this.getAttribute("id"), component: this }
			});
		}.bind(this);
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
		icon.addEventListener("click", this.expandHandler);
	}
	removeCollapseAction() {
		const icon = this.elements.sectionActionsContainer.querySelector(
			templateConfig.selectors.collapseSectionIcon
		);
		icon.removeEventListener("click", this.expandHandler);
		icon.remove();
	}
	addCollapseHeaderBehavior() {
		this.elements.sectionTitleContainer.addEventListener("click", this.expandHandler);
	}
	removeCollapseHeaderBehavior() {
		this.elements.sectionTitleContainer.removeEventListener("click", this.expandHandler);
	}
}

export { KUISection as default, tagName, Events };

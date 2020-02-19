import keys from "lodash/keys";

import BaseElement from "Base/baseElement";
import attributesConfig, { tagName } from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "Utils/wcUtils";
import { Events as KUISectionEvents } from "../section";

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
		this.sectionsMap = {};
		this.sections = [];
	}
	static get observedAttributes() {
		return keys(attributesConfig);
	}
	static defineCustomElement() {
		if(!KUIAccordion.defined){
			defineCustomElement({
				componentClass: KUIAccordion,
				tagName,
				attributesConfig
			});
			KUIAccordion.defined = true;
		}
	}
	connectedCallback() {
		super.connectedCallback({
			element: this.elements.sectionsContainer,
			allowedChildren
		});
	}

	childrenDefinedCallback({ children = [] } = {}) {
		this.sectionsMap = {};
		this.sections = children;
		for (let i = 0; i < children.length; i++) {
			const section = children[i];
			const sectionId = section.getAttribute("id") || `section_${i}`;
			this.sectionsMap[sectionId] = section;
		}
	}
	/**
	 * Add a handler for when a section becomes visible or hidden
	 * @param { Function } handler		The handler to be triggered when the event occur
	 * @returns { Function } The handler
	 * @memberof KUIAccordion
	 */
	addSectionExpandChangedHandler(handler) {
		this.addEventListener(KUISectionEvents.ExpandChanged, handler);
		return handler;
	}
	/**
	 * Removes the given handler from the component
	 * @param { Function } handler		The handler to be removed
	 * @memberof KUIAccordion
	 */
	removeSectionExpandChangedHandler(handler) {
		if (handler) {
			this.removeEventListener(KUISectionEvents.ExpandChanged, handler);
		}
	}
	/**
	 * Get all the accordion's sections components
	 * @returns { Array } All the sections as component instances
	 * @memberof KUIAccordion
	 */
	getAllSections() {
		return this.sections;
	}
	/**
	 * Get only the accordion's expanded sections components
	 * @returns { Array } The expanded sections as component instances
	 * @memberof KUIAccordion
	 */
	getExpandedSections() {
		return this.sections.filter(section =>
			section.getAttribute("kui-expand")
		);
	}
	/**
	 * Get only the accordion's collapsed sections components
	 * @returns { Array } The collapsed sections as component instances
	 * @memberof KUIAccordion
	 */
	getCollapsedSections() {
		return this.sections.filter(
			section => !section.getAttribute("kui-expand")
		);
	}
	/**
	 * Collapse all the accordion's sections
	 * @memberof KUIAccordion
	 */
	collapseAllSections() {
		this.sections.forEach(section => section.removeAttribute("kui-expand"));
	}
	/**
	 * Expand all the accordion's sections
	 * @memberof KUIAccordion
	 */
	expandAllSections() {
		this.sections.forEach(section =>
			section.setAttribute("kui-expand", "true")
		);
	}
	/**
	 * Expand the given section
	 * @param { [String|Number] } sectionId		The [section id|order] to be expanded
	 * @memberof KUIAccordion
	 */
	expandSection(sectionId) {
		const id =
			typeof sectionId === "number" ? `section_${sectionId}` : sectionId;
		this.sectionsMap[id].setAttribute("kui-expand", "true");
	}
	/**
	 * Collapse the given section
	 * @param { [String|Number] } sectionId		The [section id|order] to be collapsed
	 * @memberof KUIAccordion
	 */
	collapseSection(sectionId) {
		const id =
			typeof sectionId === "number" ? `section_${sectionId}` : sectionId;
		this.sectionsMap[id].removeAttribute("kui-expand");
	}
}
export { KUIAccordion as default, tagName };
import _isUndefined from "lodash/isUndefined";
import { Types, typeValidator, isTrueAttribute } from "../../core/validators";
import {
	booleanSetter,
	booleanGetter,
	useShadowDom,
} from "../../core/utils/customElementUtils";
import templateGenerator from "./template";
import { Events as KUISectionEvents } from "../kui-section";

import {
	kuiCustomElement,
	attribute,
	attributeValidator,
	attributeChangeHandler,
} from "../../core";

const tagName = "kui-accordion";

/**
 * Accordion element
 * Only kui-section children are allowed
 */
@kuiCustomElement({ tagName, allowedChildren: ["kui-section"] })
class KUIAccordion extends HTMLElement {
	@attributeValidator([typeValidator(Types.Number)])
	@attribute
	kuiExpandedChildIndex = 0;

	@attributeValidator([typeValidator(Types.Boolean)])
	@attribute({ setter: booleanSetter, getter: booleanGetter })
	kuiAutoCollapse = true;

	lastExpandedIndex = -1;

	constructor() {
		super();
		const { template, selectors } = templateGenerator.call(this, tagName);
		useShadowDom({ host: this, template });
		this.elements = {
			accordion: this.shadowRoot.querySelector(selectors.accordion),
			contentsContainer: this.shadowRoot.querySelector(
				selectors.contentsContainer
			),
			sections: [],
		};
	}

	sectionExpandChangedHandler(index, expanded) {
		if (
			this.kuiAutoCollapse &&
			expanded &&
			this.lastExpandedIndex !== -1 &&
			this.lastExpandedIndex !== index
		) {
			this.elements.sections[this.lastExpandedIndex].collapse();
		}
		this.lastExpandedIndex = index;
	}

	childrenConnectedCallback(children) {
		this.elements.sections = children;
		this.elements.sections.forEach((section, index) =>
			section.on(
				KUISectionEvents.ExpandChanged,
				this.sectionExpandChangedHandler.bind(this, index)
			)
		);
		if (isTrueAttribute(this.kuiAutoCollapse)) {
			this.collapseAllKeepingOneExpanded();
		}
	}

	@attributeChangeHandler
	kuiExpandedChildIndexChangeHandler({ newValue }) {
		this.expandSection(newValue);
	}

	@attributeChangeHandler
	kuiAutoCollapseChangeHandler({ newValue }) {
		if (isTrueAttribute(newValue)) {
			this.collapseAllKeepingOneExpanded();
		}
	}

	getTagName() {
		return tagName;
	}

	collapseAll() {
		this.elements.sections.forEach((section) => section.collapse(false));
	}
	collapseAllKeepingOneExpanded() {
		const lastExpandedIndex =
			this.lastExpandedIndex === -1
				? Number.parseInt(this.kuiExpandedChildIndex)
				: this.lastExpandedIndex;
		this.collapseAll();
		this.expandSection(lastExpandedIndex);
	}
	expandSection(index) {
		const section = this.elements.sections[index];
		if (!_isUndefined(section)) section.expand();
	}
}

export default KUIAccordion;

//Here you can add and export any enums you find useful for this component
import { applyClassName } from "Utils/wcUtils";
import { isValueOf } from "Utils/validators";
import isString from "lodash/isString";

const tagName = "kui-section";

const Style = {
	Default: "kui-section-default",
	Primary: "kui-section-primary",
	Secondary: "kui-section-secondary",
	Information: "kui-section-info",
	Dangerous: "kui-section-dangerous",
	Warning: "kui-section-warning",
	Success: "kui-section-success"
};

const Events = {
	ExpandChanged: "kui-section:expand-changed"
};

const Collapsable = {
	Header: "kui-collapsable-by-header",
	Icon: "kui-collapsable-by-icon",
	None: "",
};

const attributesConfig = {
	"kui-title": {
		attributeChangedHandler: function({ component, newValue }) {
			const { sectionTitle } = component.elements;
			sectionTitle.innerHTML = newValue;
		}
	},
	"kui-icon": {
		attributeChangedHandler: function({ component, newValue }) {
			const { sectionIcon } = component.elements;
			sectionIcon.setAttribute("kui-icon", newValue);
		}
	},
	"kui-style": {
		defaultValue: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { section } = component.elements;
			const defaultValue = attributesConfig["kui-style"].defaultValue;
			applyClassName({
				oldValue,
				newValue,
				element: section,
				defaultValue
			});
		},
		validators: [isString, isValueOf(Style)]
	},
	"kui-collapsable": {
		attributeChangedHandler: function({ component, oldValue, newValue }) {
			if (oldValue === Collapsable.Header) {
				component.removeCollapseHeaderBehavior();
			}
			if (oldValue === Collapsable.Icon) {
				component.removeCollapseAction();
			}
			if (newValue === Collapsable.Header) {
				component.addCollapseHeaderBehavior();
			}
			if (newValue === Collapsable.Icon) {
				component.addCollapseAction();
			}
		},
		validators: [isString, isValueOf(Collapsable)]
	}
};

export { attributesConfig as default, tagName, Events, Collapsable };

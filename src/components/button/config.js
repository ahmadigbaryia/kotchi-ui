import isString from "lodash/isString";

import { applyClassName, booleanSetter } from "Utils/wcUtils";
import { isTrue, isValueOf, isBooleanAttribute } from "Utils/validators";

const Style = {
	Default: "kui-button-default",
	Primary: "kui-button-primary",
	Secondary: "kui-button-secondary",
	Information: "kui-button-info",
	Dangerous: "kui-button-dangerous",
	Warning: "kui-button-warning",
	Success: "kui-button-success",
	Link: "kui-button-link"
};

const Size = {
	Normal: "",
	Small: "kui-button-small",
	Large: "kui-button-large",
	Block: "kui-button-block"
};

const attributesConfig = {
	"kui-text": {
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.innerText = newValue || "";
		},
		validators: [isString]
	},
	"kui-style": {
		defaultValue: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-style"].defaultValue;
			applyClassName({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [isString, isValueOf(Style)]
	},
	"kui-size": {
		defaultValue: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-size"].defaultValue;
			applyClassName({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [isString, isValueOf(Size)]
	},
	"kui-outline": {
		defaultValue: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.classList.add("outline");
			} else {
				button.classList.remove("outline");
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-disabled": {
		defaultValue: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.classList.add("disabled");
				button.setAttribute("disabled", "");
			} else {
				button.classList.remove("disabled");
				button.removeAttribute("disabled");
			}
		},
		validators: [isBooleanAttribute]
	}
};

export {attributesConfig as default, Style, Size};
import { applyClassName, booleanSetter } from "../../utils/wcUtils";
import { isTrue, isValueOf, isBooleanAttribute } from "../../utils/validators";
import isString from "lodash/isString";

export const tagName = "kui-button";

export const Style = {
	Default: "kui-button-default",
	Primary: "kui-button-primary",
	Secondary: "kui-button-secondary",
	Information: "kui-button-info",
	Dangerous: "kui-button-dangerous",
	Warning: "kui-button-warning",
	Success: "kui-button-success",
	Link: "kui-button-link"
};

export const Size = {
	Normal: "",
	Small: "kui-button-small",
	Large: "kui-button-large",
	Block: "kui-button-block"
};

export const attributesConfig = {
	"kui-text": {
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.innerText = newValue || "";
		},
		validators: [isString]
	},
	"kui-style": {
		default: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-style"].default;
			applyClassName({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [isString, isValueOf(Style)]
	},
	"kui-size": {
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-size"].default;
			applyClassName({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [isString, isValueOf(Size)]
	},
	"kui-outline": {
		default: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.classList.add("outline");
			} else {
				button.classList.remove("outline");
				component.removeAttribute("kui-outline");
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-disabled": {
		default: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.classList.add("disabled");
				button.setAttribute("disabled", "");
			} else {
				button.classList.remove("disabled");
				button.removeAttribute("disabled");
				component.removeAttribute("kui-disabled");
			}
		},
		validators: [isBooleanAttribute]
	}
};

import { applyClassName } from "../../utils/wcUtils";
import { Types, isTrue, isValueOf, isBooleanAttribute } from "../../utils/validators";
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
		type: Types.STRING,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.innerText = newValue || "";
		},
		validators: [isString]
	},
	"kui-style": {
		type: Types.STRING,
		default: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultStyle = attributesConfig["kui-style"].default;
			applyClassName({ oldValue, newValue, element: button, defaultStyle });
		},
		validators: [isString, isValueOf(Style)]
	},
	"kui-outline": {
		type: Types.BOOLEAN,
		default: false,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.className = button.className.replace("outline", "") + " outline";
			} else {
				button.className = button.className.replace("outline", "");
				component.removeAttribute("kui-outline");
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-disabled": {
		type: Types.BOOLEAN,
		default: false,
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				button.className = button.className.replace("disabled", "") + " disabled";
				button.setAttribute("disabled", "");
			} else {
				button.className = button.className.replace("disabled", "");
				button.removeAttribute("disabled");
				component.removeAttribute("kui-disabled");
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-size": {
		type: Types.STRING,
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultSize = attributesConfig["kui-size"].default;
			applyClassName({ oldValue, newValue, element: button, defaultSize });
		},
		validators: [isString, isValueOf(Size)]
	}
};

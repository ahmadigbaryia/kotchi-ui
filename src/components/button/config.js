import { applyClassName } from "../../utils/wcUtils";
import { isTrue, isValueOf } from "../../utils/validators";
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
			const defaultStyle = attributesConfig["kui-style"].default;
			applyClassName({ oldValue, newValue, element: button, defaultStyle });
		},
		validators: [isString, isValueOf(Style)]
	},
	"kui-outline": {
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.className = button.className.replace("outline", "");
			if (isTrue(newValue) || newValue === "") {
				button.className += " outline";
			}
		}
	},
	"kui-disabled": {
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.className = button.className.replace("disabled", "");
			button.disabled = button.kuiDisabled = false;
			if (isTrue(newValue) || newValue === "") {
				button.className += " disabled";
				button.disabled = button.kuiDisabled = true;
			}
		}
	},
	"kui-size": {
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultSize = attributesConfig["kui-size"].default;
			applyClassName({ oldValue, newValue, element: button, defaultSize });
		},
		validators: [isString, isValueOf(Size)]
	}
};

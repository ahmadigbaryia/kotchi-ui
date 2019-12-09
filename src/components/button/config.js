import { applyClassName } from "../../utils/wcUtils";
import { isTrue, isValueOf } from "../../utils/validators";
import isString from "lodash/isString";

export const tagName = "uik-button";

export const Style = {
	Default: "uik-button-default",
	Primary: "uik-button-primary",
	Secondary: "uik-button-secondary",
	Information: "uik-button-info",
	Dangerous: "uik-button-dangerous",
	Warning: "uik-button-warning",
	Success: "uik-button-success",
	Link: "uik-button-link"
};

export const Size = {
	Normal: "",
	Small: "uik-button-small",
	Large: "uik-button-large"
};

export const attributesConfig = {
	"uik-text": {
		attributeChangedHandler: function({ newValue }) {
			const { button } = this.elements;
			button.innerText = newValue || "";
		},
		validators: [isString]
	},
	"uik-style": {
		default: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue }) {
			const { button } = this.elements;
			const defaultStyle = attributesConfig["uik-style"].default;
			applyClassName({ oldValue, newValue, element: button, defaultStyle });
		},
		validators: [isString, isValueOf(Style)]
	},
	"uik-outline": {
		attributeChangedHandler: function({ newValue }) {
			const { button } = this.elements;
			button.className = button.className.replace("outline", "");
			if (isTrue(newValue) || newValue === "") {
				button.className += " outline";
			}
		}
	},
	"uik-disabled": {
		attributeChangedHandler: function({ newValue }) {
			const { button } = this.elements;
			button.className = button.className.replace("disabled", "");
			button.disabled = false;
			button.uikDisabled = false;
			if (isTrue(newValue) || newValue === "") {
				button.className += " disabled";
				button.disabled = true;
				button.uikDisabled = true;
			}
		}
	},
	"uik-size": {
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue }) {
			const { button } = this.elements;
			const defaultSize = attributesConfig["uik-size"].default;
			applyClassName({ oldValue, newValue, element: button, defaultSize });
		},
		validators: [isString, isValueOf(Size)]
	}
};

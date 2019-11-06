import { isTrue, isValueOf } from "../wcUtils.js";
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
	Link: "uik-button-link",
};

export const Size = {
	Normal: "",
	Small: "uik-button-small",
	Large: "uik-button-large",
};

export const attributesConfig = {
	"uik-text": {
		type: "String",
		description: "The text of the button",
		attributeChangedHandler: function({ newValue }) {
			const { button } = this.elements;
			button.innerText = newValue || "";
		},
		validators: [isString],
	},
	"uik-style": {
		type: "ButtonStyleEnum",
		description:
			"The style of the button, one of the following values only { Default, Primary, Secondary, Information, Dangerous, Warning, Success, Link }",
		default: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue }) {
			const { button } = this.elements;
			const defaultStyle = attributesConfig["uik-style"].default;
			if (newValue) {
				if (oldValue) {
					button.className = button.className.replace(oldValue, newValue);
				} else {
					button.className += ` ${newValue}`;
				}
			} else if (oldValue) {
				button.className = button.className.replace(oldValue, defaultStyle);
			}
		},
		validators: [isString, isValueOf(Style)],
	},
	"uik-outline": {
		type: "Boolean",
		description: "Apply the outline style on the button",
		attributeChangedHandler: function({ newValue }) {
			const { button } = this.elements;
			button.className = button.className.replace("outline", "");
			if (isTrue(newValue) || newValue === "") {
				button.className += " outline";
			}
		},
	},
	"uik-disabled": {
		type: "Boolean",
		description: "Disable the button",
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
		},
	},
	"uik-size": {
		type: "ButtonSizeEnum",
		description: "The size to apply on the button [Large, Small]",
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue }) {
			const { button } = this.elements;
			const defaultSize = attributesConfig["uik-size"].default;
			if (newValue) {
				if (oldValue) {
					button.className = button.className.replace(oldValue, newValue);
				} else {
					button.className += ` ${newValue}`;
				}
			} else if (oldValue) {
				button.className = button.className.replace(oldValue, defaultSize);
			}
		},
		validators: [isString, isValueOf(Size)],
	},
	"uik-icon": {
		type: "String",
		description: "Set an icon to the button, can be a CSS class name, URL or base64 encoded icon",
		default: "",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("with-icon", "");
			if (newValue) {
				this.elements.container.className += "with-icon";
				// this.elements.icon set according the input
			}
		},
	},
	"uik-toggleable": {
		type: "Boolean",
		description: "Is the button toggalble",
		default: "false",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("toggleable", "");
			if (isTrue(newValue)) {
				this.elements.container.className += "toggleable";
			}
		},
	},
	"uik-selected": {
		type: "Boolean",
		description: "Is the button selected (applicable only when toggleable is true)",
		default: "false",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("selected", "");
			if (isTrue(newValue)) {
				this.elements.container.className += "selected";
			}
		},
	},
};

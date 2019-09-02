import { isTrue } from "../wcUtils.js";
import isString from "lodash/isString";

export const ButtonStyleEnum = {
	Default: "DEFAULT",
	Primary: "PRIMARY",
	Secondary: "SECONDARY",
	Information: "INFORMATION",
	Dangerous: "DANGEROUS",
	Warning: "WARNING",
	Success: "SUCCESS",
	Text: "TEXT",
	Link: "LINK",
};

export const ButtonSizeEnum = {
	Small: "SMALL",
	Normal: "NORMAL",
	Large: "LARGE",
};

const defaultSetter = function(attribute, value) {
	if (!ButtonAttributes[attribute].validate(attribute, value)) return false;
	const transformedValue = applyTransformers(
		ButtonAttributes[attribute].transformers,
		value
	);
	if (transformedValue) {
		this.setAttribute(attribute, transformedValue);
	} else {
		this.removeAttribute(attribute);
	}
};
const defaultGetter = function(attribute) {
	return this.getAttribute(attribute);
};
const defaultValidate = function(attribute, value) {
	const { validators } = ButtonAttributes[attribute];
	if (validators.length > 0) {
		for (let i = 0; i < validators.length; i++) {
			if (!validators[i](value)) return false;
		}
	}
	return true;
};
const applyTransformers = function(transformers = [], value) {
	let tv = value;
	if (transformers.length > 0) {
		for (let i = 0; i < transformers.length; i++) {
			tv = transformers[i](tv);
		}
	}
	return tv;
};

export const ButtonAttributes = {
	"uik-text": {
		type: "String",
		description: "The text of the button",
		changeHandler: function(oldValue, newValue) {
			if (!ButtonAttributes["uik-text"].validate("uik-text", newValue)) return false;
			const transformedValue = applyTransformers(
				ButtonAttributes["uik-text"].transformers,
				newValue
			);
			this.elements.button.innerText = transformedValue || "";
		},
		validators: [isString],
		setter: defaultSetter,
		getter: defaultGetter,
		validate: defaultValidate,
	},
	"uik-style": {
		type: "ButtonStyleEnum",
		description:
			"The style to apply on the button [Default, Primary, Secondary, Information, Dangerous, Warning, Success, Link, Text]",
		default: ButtonStyleEnum.Default,
		changeHandler: function(oldValue, newValue) {
			// TODO: typecheck first
			if (newValue) {
				if (oldValue) {
					this.elements.container.className.replace(
						ButtonStyleEnum[oldValue],
						ButtonStyleEnum[newValue]
					);
				}
				this.elements.container.className += ` ${ButtonStyleEnum[newValue]}`;
			} else {
				this.elements.container.className.replace(
					ButtonStyleEnum[oldValue],
					ButtonAttributes["uik-style"].default
				);
			}
		},
	},
	"uik-outlined": {
		type: "Boolean",
		description: "Should apply the outlined style on the button",
		default: "false",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("outlined-button", "");
			if (isTrue(newValue)) {
				this.elements.container.className += "outlined-button";
			}
		},
	},
	"uik-selected": {
		type: "Boolean",
		description:
			"Is the button selected (applicable only when toggleable is true)",
		default: "false",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("selected", "");
			if (isTrue(newValue)) {
				this.elements.container.className += "selected";
			}
		},
	},
	"uik-disabled": {
		type: "Boolean",
		description: "Is the button disabled",
		default: "false",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("disabled", "");
			this.elements.button.disabled = false;
			if (isTrue(newValue)) {
				this.elements.container.className += "disabled";
				this.elements.button.disabled = true;
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
	"uik-size": {
		type: "ButtonSizeEnum",
		description: "The size to apply on the button [Large, Normal, Small]",
		default: "Normal",
		changeHandler: function(oldValue, newValue) {
			if (newValue) {
				if (oldValue)
					this.elements.container.className.replace(
						ButtonSizeEnum[oldValue],
						ButtonSizeEnum[newValue]
					);
				else
					this.elements.container.className +=
						ButtonSizeEnum[newValue];
			}
		},
	},
	"uik-icon": {
		type: "String",
		description:
			"Set an icon to the button, can be a CSS class name, URL or base64 encoded icon",
		default: "",
		changeHandler: function(oldValue, newValue) {
			this.elements.container.className.replace("with-icon", "");
			if (newValue) {
				this.elements.container.className += "with-icon";
				// this.elements.icon set according the input
			}
		},
	},
};

import { applyClassName } from "../../utils/wcUtils";
import { isValueOf } from "../../utils/validators";
import isString from "lodash/isString";

export const tagName = "uik-icon";

export const Size = {
	Normal: "",
	Small: "uik-button-small",
	Large: "uik-button-large"
};

export const faVersion = "5.11.2";

export const attributesConfig = {
	"uik-label": {
		type: "String",
		description: "The icon's label",
		attributeChangedHandler: function({ newValue, component }) {
			component.addScreenReaderSupport({ label: newValue });
		}
	},
	"uik-icon": {
		type: "String",
		description: "The icon to be used from the available fontawesome icons",
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString]
	},
	"uik-size": {
		type: "Size",
		description: "The size of the icon",
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {},
		validators: [isString, isValueOf(Size)]
	},
	"uik-fixed-width": {
		type: "Boolean",
		description: "Apply the fixed width style on the icon",
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"uik-list-icon": {
		type: "Boolean",
		description: "Replace default bullets in unordered lists",
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"uik-bordered": {
		type: "Boolean",
		description: "Adds a border arround the icon",
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"uik-pull": {
		type: "['Right', 'Left']",
		description: "Pull quotes or article icons",
		default: "Left",
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"uik-animated": {
		type: "Boolean",
		description: "Makes the icon spins",
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"uik-rotate": {
		type: "['90', '180', '270']",
		description: "Rotates the icon",
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"uik-flip": {
		type: "['h', 'v']",
		description: "Filps the icon horizontaly or vertically",
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	}
};

import { applyClassName } from "../../utils/wcUtils";
import { isValueOf } from "../../utils/validators";
import isString from "lodash/isString";

export const tagName = "uik-icon";

export const Size = {
	Normal: "",
	Small: "uik-button-small",
	Large: "uik-button-large"
};

export const attributesConfig = {
	"uik-label": {
		type: "String",
		description: "The icon's label",
		attributeChangedHandler: function({ newValue }) {
			this.addScreenReaderSupport({ label: newValue });
		}
	},
	"uik-icon-name": {
		type: "String",
		description: "The icon name",
		attributeChangedHandler: function({ oldValue, newValue }) {
			const { icon } = this.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString]
	},
	"uik-size": {
		type: "Size",
		description: "The size of the icon",
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue }) {},
		validators: [isString, isValueOf(Size)]
	},
	"uik-fixed-width": {
		type: "Boolean",
		description: "Apply the fixed width style on the icon",
		attributeChangedHandler: function({ newValue }) {}
	},
	"uik-list-icon": {
		type: "Boolean",
		description: "Replace default bullets in unordered lists",
		attributeChangedHandler: function({ newValue }) {}
	},
	"uik-bordered": {
		type: "Boolean",
		description: "Adds a border arround the icon",
		attributeChangedHandler: function({ newValue }) {}
	},
	"uik-pull": {
		type: "['Right', 'Left']",
		description: "Pull quotes or article icons",
		default: "Left",
		attributeChangedHandler: function({ oldValue, newValue }) {}
	},
	"uik-animated": {
		type: "Boolean",
		description: "Makes the icon spins",
		attributeChangedHandler: function({ newValue }) {}
	},
	"uik-rotate": {
		type: "['90', '180', '270']",
		description: "Rotates the icon",
		attributeChangedHandler: function({ oldValue, newValue }) {}
	},
	"uik-flip": {
		type: "['h', 'v']",
		description: "Filps the icon horizontaly or vertically",
		attributeChangedHandler: function({ oldValue, newValue }) {}
	}
};

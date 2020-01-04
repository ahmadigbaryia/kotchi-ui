import { applyClassName } from "../../utils/wcUtils";
import { isValueOf } from "../../utils/validators";
import isString from "lodash/isString";

export const tagName = "kui-icon";

export const PullDirection = {
	Left: "fa-pull-left",
	Right: "fa-pull-right",
};

export const Rotate = {
	Rotate90: "fa-rotate-90",
	Rotate180: "fa-rotate-180",
	Rotate270: "fa-rotate-270"
};

export const Flip = {
	FlipVer: "fa-flip-vertical",
	FlipHor: "fa-flip-horizontal",
	FlipBoth: "fa-flip-both"
};

export const Animate = {
	Spin: "fa-spin",
	Pulse: "fa-pulse",
};
export const Size = {
	Normal: "",
	XSmall: "fa-xs",
	Small: "fa-sm",
	Large: "fa-lg",
	X2: "fa-2x",
	X3: "fa-3x",
	X4: "fa-4x",
	X5: "fa-5x",
	X6: "fa-6x",
	X7: "fa-7x",
	X8: "fa-8x",
	X9: "fa-9x",
	X10: "fa-10x"
};

export const faVersion = "5.11.2";

export const attributesConfig = {
	"kui-label": {
		attributeChangedHandler: function({ newValue, component }) {
			component.addScreenReaderSupport({ label: newValue });
		},
		validators: [isString]
	},
	"kui-icon": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString]
	},
	"kui-size": {
		default: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(Size)]
	},
	"kui-fixed-width": {
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"kui-list-icon": {
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"kui-bordered": {
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"kui-pulled": {
		default: "Left",
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"kui-animated": {
		attributeChangedHandler: function({ newValue, component }) {}
	},
	"kui-rotate": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"kui-flip": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	}
};

import isString from "lodash/isString";

import { applyClassName, booleanSetter } from "Utils/wcUtils";
import { isTrue, isValueOf, isBooleanAttribute } from "Utils/validators";

const Animate = {
	Spin: "fa-spin",
	Pulse: "fa-pulse",
};
const Flip = {
	FlipVer: "fa-flip-vertical",
	FlipHor: "fa-flip-horizontal",
	FlipBoth: "fa-flip-both"
};
const PullDirection = {
	Left: "fa-pull-left",
	Right: "fa-pull-right",
};
const Rotate = {
	Rotate90: "fa-rotate-90",
	Rotate180: "fa-rotate-180",
	Rotate270: "fa-rotate-270"
};
const Size = {
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
const FixedWidth = "fa-fw";
const Bordered = "fa-border";


const attributesConfig = {
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
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(Size)]
	},
	"kui-fixed-width": {
		defaultValue: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { icon } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				icon.classList.add(FixedWidth);
			} else {
				icon.classList.remove(FixedWidth);
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-bordered": {
		defaultValue: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { icon } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				icon.classList.add(Bordered);
			} else {
				icon.classList.remove(Bordered);
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-pulled": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(PullDirection)]
	},
	"kui-animate": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(Animate)]
	},
	"kui-rotate": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(Rotate)]
	},
	"kui-flip": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { icon } = component.elements;
			applyClassName({ oldValue, newValue, element: icon });
		},
		validators: [isString, isValueOf(Flip)]
	}
};

export { attributesConfig as default, Animate, Flip, PullDirection, Rotate, Size, FixedWidth, Bordered };
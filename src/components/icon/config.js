import isString from "lodash/isString";
import { applyClassName, booleanSetter } from "../../utils/wcUtils";
import { isTrue, isValueOf, isBooleanAttribute } from "../../utils/validators";
import {Animate, Bordered, Flip, PullDirection, Rotate, Size, FixedWidth } from "./kui-icon";

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
		default: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { icon } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				icon.classList.add(FixedWidth);
			} else {
				icon.classList.remove(FixedWidth);
				component.removeAttribute("kui-fixed-width");
			}
		},
		validators: [isBooleanAttribute]
	},
	"kui-bordered": {
		default: false,
		setter: booleanSetter,
		attributeChangedHandler: function({ newValue, component }) {
			const { icon } = component.elements;
			if (isTrue(newValue) || newValue === "") {
				icon.classList.add(Bordered);
			} else {
				icon.classList.remove(Bordered);
				component.removeAttribute("kui-bordered");
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

export default attributesConfig;
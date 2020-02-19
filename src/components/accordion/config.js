//Here you can add and export any enums you find useful for this component
import { booleanSetter } from "Utils/wcUtils";
import { isBooleanAttribute } from "Utils/validators";

const tagName = "kui-accordion";


const attributesConfig = {
	"kui-toggle": {
		defaultValue: false,
		setter: booleanSetter,
		validators: [isBooleanAttribute]
	},
	"kui-collapse-icon": {
		defaultValue: "fas fa-arrow-up",
		attributeChangedHandler: function({ newValue, component }) {
			// const { sections } = component;
			// sections.forEach(section =>
			// 	section.elements.sectionCollapseIcon.setAttribute(
			// 		"kui-icon",
			// 		newValue
			// 	)
			// );
		}
	}
};

export {attributesConfig as default, tagName };
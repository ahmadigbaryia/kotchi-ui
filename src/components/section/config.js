//Here you can add and export any enums you find useful for this component

const attributesConfig = {
//	"ATTRIBUTE_NAME": {
//		defaultValue: "",
//      setter: function to be called when elm.setAttribute is called,
//      getter: function to be called when elm.getAttribute or elm.ATTRIBUTE_NAME is called,
//		attributeChangedHandler: function({ oldValue, newValue, component }) {
//          // When ever the attribute changes this method get called
//		},
//		validators: [] // a list of validators to be called before handeling the change
//	},
	"kui-title": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"kui-icon": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
};

export {attributesConfig as default};
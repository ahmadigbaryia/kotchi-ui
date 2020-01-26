import _toCamelCase from "lodash/camelCase";
import _isFunction from "lodash/isFunction";
import _isUndefined from "lodash/isUndefined";
import { isTrue } from "./validators";

/**
 * Executes an array of validators one after the other till one fails or all succeed
 */
function applyValidators({
	attribute,
	tagName,
	validators = [],
	value,
	isRequired = false
}) {
	if (validators.length > 0) {
		if (value === null && isRequired) {
			console.log(`${tagName}.${attribute} is required`);
			return false;
		}
		for (let i = 0; i < validators.length; i++) {
			if (value && _isFunction(validators[i]) && !validators[i](value)) {
				console.error(`${tagName}.${attribute}:\nvalue:'${value}' failed ${validators[i].name} validation`);
				return false;
			}
		}
	}
	return true;
}

/**
 * Executes an array of transformers one after the other manipulating the given value, and return the final transformed value
 */
function applyTransformers({ transformers = [], value }) {
	let tv = value;
	if (transformers.length > 0) {
		for (let i = 0; i < transformers.length; i++) {
			if (_isFunction(transformers[i])) {
				tv = transformers[i](tv);
			}
		}
	}
	return tv;
}

function beforeChangeValue({ attributesConfig, attribute, tagName, value }) {
	const attributeConfig = attributesConfig[attribute];
	const { validators, transformers, isRequired } = attributeConfig;
	if (!applyValidators({ attribute, tagName, validators, value, isRequired }))
		return { isValid: false };
	const transformedValue = applyTransformers({ transformers, value });
	return { transformedValue, isValid: true };
}

function defaultSetter({ component, attributesConfig, attribute, value }) {
	const { tagName } = component;
	const { validators, isRequired } = attributesConfig[attribute];
	const valid = applyValidators({ attribute, tagName, validators, value, isRequired });
	if (valid) {
		component.setAttribute(attribute, value);
	}
}

function defaultGetter({ component, attribute }) {
	return component.getAttribute(attribute);
}

export function booleanSetter({ component, attribute, value }) {
	isTrue(value) ? component.setAttribute(attribute, "") : component.removeAttribute(attribute);
}

export function buildShadowRoot(template, host) {
	window.ShadyCSS && window.ShadyCSS.styleElement(host);
	host.attachShadow({ mode: "open" });
	host.shadowRoot.appendChild(template.content.cloneNode(true));
}

export function buildComponentContents(template, host) {
	window.ShadyCSS && window.ShadyCSS.styleElement(host);
	host.innerHTML = "";
	host.appendChild(template.content.cloneNode(true));
}

/**
 * wraps a change handler with the following procedure,
 * first validate the change then apply transformations on the attribute and finaly apply the user's change handler
 */
export function changeHandlerWrapper({
	attributesConfig,
	attribute,
	tagName,
	oldValue,
	newValue,
	attributeChangedHandler,
	component
}) {
	const { transformedValue, isValid } = beforeChangeValue({
		attributesConfig,
		attribute,
		tagName,
		value: newValue
	});
	if (isValid) {
		attributeChangedHandler({
			attribute,
			oldValue,
			newValue: transformedValue,
			component
		});
	} else if(!oldValue && oldValue !== "") {
		// The attribute is a boolean one and the old value was falsy
		component.removeAttribute(attribute);
	} else {
		// Set back the old value back
		component.setAttribute(attribute, oldValue);
	}
}

/**
 * Defines a custom element while exposing public API for all the attributes
 */
export function defineCustomElement({
	componentClass,
	attributesConfig,
	tagName
}) {
	//Define a public API for the attributes to be used as properties as well
	componentClass.observedAttributes.forEach(function(attribute) {
		Object.defineProperty(
			componentClass.prototype,
			_toCamelCase(attribute),
			{
				enumerable: true,
				set: function(value) {
					const attributeConfig = attributesConfig[attribute];
					if (_isFunction(attributeConfig.setter)) {
						attributeConfig.setter.call(this, {
							component: this,
							attributesConfig,
							attribute,
							value
						});
					} else if (
						attributeConfig.setter === true ||
						_isUndefined(attributeConfig.setter)
					) {
						defaultSetter.call(this, {
							component: this,
							attributesConfig,
							attribute,
							value
						});
					}
				},
				get: function() {
					const attributeConfig = attributesConfig[attribute];
					if (_isFunction(attributeConfig.getter)) {
						return attributeConfig.getter.call(this, {
							component: this,
							attributesConfig,
							attribute
						});
					} else if (
						attributeConfig.getter === true ||
						_isUndefined(attributeConfig.getter)
					) {
						return defaultGetter.call(this, {
							component: this,
							attribute,
							defaultValue: attributesConfig[attribute].default
						});
					}
					return attributesConfig[attribute].default;
				}
			}
		);
	});
	window.customElements.define(tagName, componentClass);
}

export function applyClassName({
	oldValue,
	newValue,
	element,
	defaultValue = ""
}) {
	const { classList } = element;
	if (newValue) {
		if (oldValue) {
			classList.remove.apply(classList, oldValue.split(" "));
		}
		classList.add.apply(classList, newValue.split(" "));
	} else if (oldValue) {
		classList.remove.apply(classList, oldValue.split(" "));
		classList.add.apply(classList, defaultValue.split(" "));
	}
}

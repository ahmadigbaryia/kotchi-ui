import _isUndefined from "lodash/isUndefined";
import _isNull from "lodash/isNull";
import { isTrueAttribute } from "../validators";

export function defaultPropertyGetter({ component, attribute, defaultValue }) {
	if (component.getAttribute(attribute) === null &&
		!(_isUndefined(defaultValue) || _isNull(defaultValue))) {
		component.setAttribute(attribute, String(defaultValue));
	}
	return component.getAttribute(attribute);
}

export function defaultPropertySetter({ component, attribute, value }) {
	component.setAttribute(attribute, value);
}

export function booleanSetter({ component, attribute, value }) {
	isTrueAttribute(value) ? component.setAttribute(attribute, "") : component.removeAttribute(attribute);
}

export function booleanGetter({ component, attribute }) {
	return (component.hasAttribute(attribute));
}

export function useShadowDom({ host, template, mode = "open" }) {
	window.ShadyCSS && window.ShadyCSS.styleElement(this);
	host.attachShadow({ mode });
	host.shadowRoot.appendChild(template.content.cloneNode(true));
}

export function getSlotNodes(slot) {
	return !slot.assignedNodes ? [] : slot.assignedNodes().filter(node => node.nodeType === 1); //Only element nodes are relavant
}

export function getSlotNodesTags(slot) {
	const arr = getSlotNodes(slot).map(node => node.tagName.toLowerCase());
	return [... new Set(arr)];
}

export function validateChildren({ element, allowedChildren, tagName }) {
	const children = getSlotNodes(element);
	const childrenTypes = [... new Set(children.map(node => node.tagName.toLowerCase()))];
	const notAllowedChildren = childrenTypes.filter((type) => allowedChildren.indexOf(type) === -1);
	if (notAllowedChildren.length > 0) {
		throw new Error(`${notAllowedChildren.join(", ")} can't be children of ${tagName}`);
	}
	return { children, childrenTypes };
}

export function registerChildren({ childrenTypes = [], children = [], definedCallback = () => { } }) {
	if (childrenTypes.length > 0) {
		const whenDefinedPromises = [];
		for (let i = 0; i < childrenTypes.length; i++) {
			whenDefinedPromises.push(
				customElements.whenDefined(childrenTypes[i])
			);
		}
		Promise.all(whenDefinedPromises).then(() => definedCallback(children));
	}
}
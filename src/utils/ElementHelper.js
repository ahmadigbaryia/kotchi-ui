/**
 * Validates if the container element contains only allowed children elements
 *
 * @returns a list of the found allowed elements tag names
 */
function validateChildren({ element, allowedChildren, tagName }) {
	const childrenTypes = [];
	const children = [];
	
	const assignedNodes = !element.assignedNodes ? [] : 
		element.assignedNodes().filter(node => node.nodeType === 1); //Only element nodes are relavant
	if (assignedNodes.length > 0) {
		for (let i = 0; i < assignedNodes.length; i++) {
			let childTagName = assignedNodes[i].tagName.toLowerCase();
			if (allowedChildren.indexOf(childTagName) === -1) {
				const acs = allowedChildren.join(", ");
				throw new Error(
					`${tagName} element accepts only [${acs}] elements as children, but it has ${childTagName}`
				);
			} else {
				if (childrenTypes.indexOf(childTagName) === -1) {
					childrenTypes.push(childTagName);
				}
				children.push(assignedNodes[i]);
			}
		}
	}
	return { childrenTypes, children };
}

function registerChildren({ childrenTypes = [], definedCallback }) {
	if (childrenTypes.length > 0) {
		const whenDefinedPromises = [];
		for (let i = 0; i < childrenTypes.length; i++) {
			whenDefinedPromises.push(
				customElements.whenDefined(childrenTypes[i])
			);
		}
		Promise.all(whenDefinedPromises).then(() => definedCallback());
	}
}

/**
 * Validates if the contained element is a child of only allowed parent elements
 *
 */
function validateParent({ element, allowedParents, tagName }) {
	if (element.hasChildNodes()) {
		let parentNode = element.parentNode;
		const aps = allowedParents.join(", ");
		if (parentNode) {
			const parentTagName = parentNode.tagName.toLowerCase();
			if (allowedParents.indexOf(parentTagName) === -1) {
				throw new Error(`${tagName} must be a child of ${aps}`);
			}
		} else {
			throw new Error(`${tagName} must be a child of ${aps}`);
		}
	}
}

function dispatchEvent({ element, eventName, data }) {
	element.dispatchEvent(
		new CustomEvent(eventName, {
			detail: { element, ...data },
			bubbles: true // important, the default is false, we need this to pierce the shadow dom boundaries
		})
	);
}

export const containerHelper = {
	validateChildren,
	registerChildren
};
export const containedHelper = {
	validateParent
};
export const elementHelper = {
	dispatchEvent
};

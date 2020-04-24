import _camelCase from "lodash/camelCase";
import _isFunction from "lodash/isFunction";
import _isUndefined from "lodash/isUndefined";
import { getObservedAttributes } from "../utils/customElementData";
import {
	validateChildren,
	registerChildren,
} from "../utils/customElementUtils";

const definedElements = {};
export default function kuiCustomElement({
	tagName,
	allowedChildren = [],
	allowedParents = [],
}) {
	return function (ComponentClass) {
		class KUICustomElement extends ComponentClass {
			connectedCallback() {
				if (_isFunction(ComponentClass.prototype.connectedCallback)) {
					ComponentClass.prototype.connectedCallback.call(this);
				}
				syncAttributes.call(this, tagName);
				handleChildren.call(this, { allowedChildren, tagName });
				handleParents.call(this, { allowedParents, tagName });
			}

			attributeChangedCallback(attribute, oldValue, newValue) {
				const targetChangeHandler = `${_camelCase(
					attribute
				)}ChangeHandler`;
				logger.info(`Calling ${targetChangeHandler}`);
				this[targetChangeHandler].call(this, {
					attribute,
					oldValue,
					newValue,
				});
			}

			static get observedAttributes() {
				const attrs = getObservedAttributes({ tagName });
				logger.info(`Observing [${attrs.join(", ")}] for ${tagName}`);
				return attrs;
			}
		}

		defineCustomElement.call(this, { tagName, KUICustomElement });

		return KUICustomElement;
	};
}

function syncAttributes(tagName) {
	const attributes = getObservedAttributes({ tagName });
	attributes.forEach((attr) => {
		console.log(`${attr} = ${this[_camelCase(attr)]}`);
	});
}

function handleParents({ tagName, allowedParents }) {
	if (allowedParents.length > 0) {
		logger.info(tagName);
		logger.info(allowedParents);
	}
}
function handleChildren({ tagName, allowedChildren }) {
	if (allowedChildren.length > 0) {
		if (_isUndefined(this.elements.contentsContainer)) {
			throw new Error(
				`${tagName} class should have contentsContainer element`
			);
		}
		const { childrenTypes, children } = validateChildren({
			element: this.elements.contentsContainer,
			allowedChildren,
			tagName,
		});
		const definedCallback = this.childrenConnectedCallback
			? this.childrenConnectedCallback.bind(this)
			: () => {};
		registerChildren({
			childrenTypes,
			children,
			definedCallback,
		});
	}
}

function defineCustomElement({ tagName, KUICustomElement }) {
	logger.info(`defining ${tagName} ... `);
	if (!definedElements[tagName]) {
		definedElements[tagName] = true;
		logger.info(`Creating new instance of ${tagName} ... `);
		window.customElements.define(tagName, KUICustomElement);
		logger.info(`${tagName} is now defined`);
	} else {
		logger.info(`${tagName} is already defined`);
	}
}

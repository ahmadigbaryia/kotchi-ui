import _isFunction from "lodash/isFunction";
import { Types, typeValidator, isTrueAttribute } from "../../core/validators";
import {
	booleanSetter,
	booleanGetter,
	useShadowDom,
} from "../../core/utils/customElementUtils";
import templateGenerator from "./template";

import {
	kuiCustomElement,
	attribute,
	attributeValidator,
	attributeChangeHandler,
	applyStyle,
} from "../../core";

const tagName = "kui-button";

const Style = {
	Primary: `${tagName}-primary`,
	Secondary: `${tagName}-secondary`,
	Information: `${tagName}-info`,
	Danger: `${tagName}-danger`,
	Warning: `${tagName}-warning`,
	Success: `${tagName}-success`,
	Link: `${tagName}-link`,
};

const Size = {
	Small: `${tagName}-small`,
	Large: `${tagName}-large`,
	Block: `${tagName}-block`,
};

/**
 * Button element
 */
@kuiCustomElement({ tagName })
class KUIButton extends HTMLElement {
	@attributeValidator([typeValidator(Style)])
	@attribute
	kuiStyle = Style.Secondary;

	@attributeValidator([typeValidator(Size)])
	@attribute
	kuiSize;

	@attributeValidator([typeValidator(Types.Boolean)])
	@attribute({ setter: booleanSetter, getter: booleanGetter })
	kuiOutline = false;

	@attributeValidator([typeValidator(Types.Boolean)])
	@attribute({ setter: booleanSetter, getter: booleanGetter })
	kuiDisabled = false;

	constructor() {
		super();
		const { template, selectors } = templateGenerator.call(this, tagName);
		useShadowDom({ host: this, template });
		this.elements = {
			button: this.shadowRoot.querySelector(selectors.button),
		};
	}

	@attributeChangeHandler
	@applyStyle("button")
	kuiStyleChangeHandler({newValue, oldValue}) {
		if(isTrueAttribute(this.kuiOutline)) {
			this.applyOutlineButtonStyle(true, newValue, oldValue);
		}
	}

	@attributeChangeHandler
	@applyStyle("button")
	kuiSizeChangeHandler() {}

	@attributeChangeHandler
	kuiOutlineChangeHandler({newValue}) {
		this.applyOutlineButtonStyle(isTrueAttribute(newValue), this.kuiStyle);
	}

	@attributeChangeHandler
	@applyStyle({
		element: "button",
		className: "disabled",
		attributeName: "disabled",
	})
	kuiDisabledChangeHandler() {}

	applyOutlineButtonStyle(outline, newStyle, oldStyle) {
		const newOutlineStyle = newStyle.replace(`${tagName}-`, "");
		if(outline) {
			this.elements.button.classList.add(`${tagName}-outline-${newOutlineStyle}`);
			this.elements.button.classList.remove(newStyle);
		} else {
			this.elements.button.classList.remove(`${tagName}-outline-${newOutlineStyle}`);
			this.elements.button.classList.add(newStyle);
		}
		if(oldStyle) {
			const oldOutlineStyle = oldStyle.replace(`${tagName}-`, "");
			this.elements.button.classList.remove(`${tagName}-outline-${oldOutlineStyle}`);
		}
	}

	addClickHandler(handler) {
		if (_isFunction(handler)) {
			this.elements.button.addEventListener("click", handler);
		}
	}

	removeClickHandler(handler) {
		if (handler) {
			this.elements.button.removeEventListener("click", handler);
		}
	}

	getTagName() {
		return tagName;
	}

	static get Style() {
		return Style;
	}

	static get Size() {
		return Size;
	}
}

export default KUIButton;

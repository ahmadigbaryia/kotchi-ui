import _isFunction from "lodash/isFunction";
import { Types, typeValidator } from "../../validators";
import {
	booleanSetter,
	booleanGetter,
	useShadowDom,
} from "../../utils/customElementUtils";
import templateGenerator from "./template";

import {
	kuiCustomElement,
	attribute,
	attributeValidator,
	attributeChangeHandler,
	applyStyle,
} from "../../decorators";

const tagName = "kui-button";

const Style = {
	Default: `${tagName}-default`,
	Primary: `${tagName}-primary`,
	Secondary: `${tagName}-secondary`,
	Information: `${tagName}-info`,
	Dangerous: `${tagName}-dangerous`,
	Warning: `${tagName}-warning`,
	Success: `${tagName}-success`,
	Link: `${tagName}-link`,
};

const Size = {
	Normal: "",
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
	kuiStyle = Style.Default;

	@attributeValidator([typeValidator(Size)])
	@attribute
	kuiSize = Size.Normal;

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
	kuiStyleChangeHandler() {}

	@attributeChangeHandler
	@applyStyle("button")
	kuiSizeChangeHandler() {}

	@attributeChangeHandler
	@applyStyle({ element: "button", className: "outline" })
	kuiOutlineChangeHandler() {}

	@attributeChangeHandler
	@applyStyle({
		element: "button",
		className: "disabled",
		attributeName: "disabled",
	})
	kuiDisabledChangeHandler() {}

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

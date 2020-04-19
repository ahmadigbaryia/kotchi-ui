import { Types, typeValidator } from "../../validators";
import {
	useShadowDom,
	booleanSetter,
	booleanGetter,
} from "../../utils/customElementUtils";
import templateGenerator from "./template";

import {
	kuiCustomElement,
	kuiEventEmetter,
	attribute,
	attributeChangeHandler,
	attributeValidator,
	applyStyle,
} from "../../decorators";

const tagName = "kui-section";

const Style = {
	Default: `${tagName}-default`,
	Primary: `${tagName}-primary`,
	Secondary: `${tagName}-secondary`,
	Information: `${tagName}-info`,
	Dangerous: `${tagName}-dangerous`,
	Warning: `${tagName}-warning`,
	Success: `${tagName}-success`,
};

const Events = {
	ExpandChanged: `${tagName}:expand-changed`,
};

const CollapseBy = {
	ByHeader: `${tagName}-collapse-by-header`,
	ByIcon: `${tagName}-collapse-by-icon`,
};

/**
 * Section element
 */
@kuiEventEmetter
@kuiCustomElement({ tagName })
class KUISection extends HTMLElement {
	@attributeValidator([typeValidator(Types.String)])
	@attribute
	kuiHeaderTitle;

	@attributeValidator([typeValidator(Types.String)])
	@attribute
	kuiHeaderIcon;

	@attributeValidator([typeValidator(Style)])
	@attribute
	kuiStyle = Style.Default;

	@attributeValidator([typeValidator(CollapseBy)])
	@attribute
	kuiCollapseBy;

	@attributeValidator([typeValidator(Types.Boolean)])
	@attribute({ setter: booleanSetter, getter: booleanGetter })
	kuiAllowFullScreen = false;

	@attributeValidator([typeValidator(Types.Boolean)])
	@attribute({ setter: booleanSetter, getter: booleanGetter })
	kuiClosable = false;

	constructor() {
		super();
		const { template, selectors } = templateGenerator.call(this, tagName);
		useShadowDom({ host: this, template });
		this.elements = {
			section: this.shadowRoot.querySelector(selectors.section),
			header: this.shadowRoot.querySelector(selectors.header),
			headerIcon: this.shadowRoot.querySelector(selectors.headerIcon),
			headerTitle: this.shadowRoot.querySelector(selectors.headerTitle),
			actionsContainer: this.shadowRoot.querySelector(
				selectors.actionsContainer
			),
			collapseAction: this.shadowRoot.querySelector(
				selectors.collapseAction
			),
			fullScreenAction: this.shadowRoot.querySelector(
				selectors.fullScreenAction
			),
			closeAction: this.shadowRoot.querySelector(selectors.closeAction),
			contents: this.shadowRoot.querySelector(selectors.contents),
		};
	}

	connectedCallback() {
		this.elements.header.addEventListener(
			"click",
			this.headerClickHandler.bind(this)
		);
		this.elements.collapseAction.addEventListener(
			"click",
			this.expandClickHandler.bind(this)
		);
		this.elements.fullScreenAction.addEventListener(
			"click",
			this.fullScreenClickHandler.bind(this)
		);
		this.elements.closeAction.addEventListener(
			"click",
			this.closeClickHandler.bind(this)
		);
	}

	@attributeChangeHandler
	kuiHeaderTitleChangeHandler({ newValue }) {
		this.elements.headerTitle.innerText = newValue;
	}

	@attributeChangeHandler
	kuiHeaderIconChangeHandler({ newValue }) {
		this.elements.headerIcon.kuiIcon = newValue;
	}

	@attributeChangeHandler
	@applyStyle("section")
	kuiStyleChangeHandler() {}

	@attributeChangeHandler
	kuiCollapseByChangeHandler({ newValue }) {
		if (newValue === CollapseBy.ByHeader) {
			this.elements.collapseAction.classList.remove("visible");
		} else {
			this.elements.collapseAction.classList.add("visible");
		}
	}

	@attributeChangeHandler
	@applyStyle({ element: "fullScreenAction", className: "visible" })
	kuiAllowFullScreenChangeHandler() {}

	@attributeChangeHandler
	@applyStyle({ element: "closeAction", className: "visible" })
	kuiClosableChangeHandler() {}

	closeClickHandler() {
		if (this.kuiClosable) {
			//Delete the panel from the DOM after releasing all resources
			logger.info("Closing the section");
		}
	}

	headerClickHandler() {
		if (this.kuiCollapseBy === CollapseBy.ByHeader) {
			this.changeCollapsingState();
		}
	}

	expandClickHandler() {
		if (this.kuiCollapseBy === CollapseBy.ByIcon) {
			this.changeCollapsingState();
		}
	}

	changeCollapsingState() {
		const expanded =
			this.elements.section.className.indexOf("kui-collapsed") === -1;
		this.elements.section.classList.toggle("kui-collapsed");
		this.trigger(Events.ExpandChanged, expanded);
	}

	collapse() {
		this.elements.section.classList.add("kui-collapsed");
		this.trigger(Events.ExpandChanged, false);
	}

	expand() {
		this.elements.section.classList.remove("kui-collapsed");
		this.trigger(Events.ExpandChanged, true);
	}

	fullScreenClickHandler() {
		if (this.kuiAllowFullScreen) {
			logger.info("Going fullscreen");
		}
	}

	getTagName() {
		return tagName;
	}

	static get Style() {
		return Style;
	}

	static get CollapseBy() {
		return CollapseBy;
	}

	static get Events() {
		return Events;
	}
}

export { KUISection as default, Events };

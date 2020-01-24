import keys from "lodash/keys";

import BaseElement from "../../baseElement";
import attributesConfig from "./config";
import templateConfig from "./template";
import { defineCustomElement } from "../../utils/wcUtils.js";

export const Animate = {
	Spin: "fa-spin",
	Pulse: "fa-pulse",
};
export const Flip = {
	FlipVer: "fa-flip-vertical",
	FlipHor: "fa-flip-horizontal",
	FlipBoth: "fa-flip-both"
};
export const PullDirection = {
	Left: "fa-pull-left",
	Right: "fa-pull-right",
};
export const Rotate = {
	Rotate90: "fa-rotate-90",
	Rotate180: "fa-rotate-180",
	Rotate270: "fa-rotate-270"
};
export const Size = {
	Normal: "",
	XSmall: "fa-xs",
	Small: "fa-sm",
	Large: "fa-lg",
	X2: "fa-2x",
	X3: "fa-3x",
	X4: "fa-4x",
	X5: "fa-5x",
	X6: "fa-6x",
	X7: "fa-7x",
	X8: "fa-8x",
	X9: "fa-9x",
	X10: "fa-10x"
};
export const tagName = "kui-icon";
export const FixedWidth = "fa-fw";
export const Bordered = "fa-border";
export const faVersion = "5.11.2";

/**
 * Icon element
 */
class KUIIcon extends BaseElement {
	constructor() {
		super({ templateConfig, attributesConfig });
		this.elements = {
			icon: this.shadowRoot.querySelector(templateConfig.selectors.icon)
		};
	}
	addScreenReaderSupport({ label }) {
		let screenReaderSpan = this.shadowRoot.querySelector("span#sr-only");
		if (screenReaderSpan == null) {
			screenReaderSpan = document.createElement("span");
			screenReaderSpan.className = "sr-only";
			this.shadowRoot.appendChild(screenReaderSpan);
		}
		screenReaderSpan.innerText = label;
	}
	connectedCallback() {
		const styleId = "font-awesome-ff";
		if (!document.head.querySelector(`style[id="${styleId}"]`)) {
			const fontAwesomeCDN =
				`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${faVersion}/webfonts`;
			const fontFaceCss = document.createTextNode(`
			@font-face {
				font-family: "Font Awesome 5 Free";
				font-style: normal;
				font-weight: 900;
				font-display: auto;
				src: url("${fontAwesomeCDN}/fa-solid-900.eot");
				src: url("${fontAwesomeCDN}/fa-solid-900.eot?#iefix") format("embedded-opentype"),
					url("${fontAwesomeCDN}/fa-solid-900.woff2") format("woff2"),
					url("${fontAwesomeCDN}/fa-solid-900.woff") format("woff"),
					url("${fontAwesomeCDN}/fa-solid-900.ttf") format("truetype"),
					url("${fontAwesomeCDN}/fa-solid-900.svg#fontawesome") format("svg");
			}
			@font-face {
				font-family: "Font Awesome 5 Brands";
				font-style: normal;
				font-weight: 900;
				font-display: auto;
				src: url("${fontAwesomeCDN}/fa-brands-400.eot");
				src: url("${fontAwesomeCDN}/fa-brands-400.eot?#iefix") format("embedded-opentype"),
					url("${fontAwesomeCDN}/fa-brands-400.woff2") format("woff2"),
					url("${fontAwesomeCDN}/fa-brands-400.woff") format("woff"),
					url("${fontAwesomeCDN}/fa-brands-400.ttf") format("truetype"),
					url("${fontAwesomeCDN}/fa-brands-400.svg#fontawesome") format("svg");
			}
		`);
			const faStyleElement = document.createElement("style");
			faStyleElement.setAttribute("type", "text/css");
			faStyleElement.setAttribute("id", styleId);
			faStyleElement.appendChild(fontFaceCss);
			document.head.appendChild(faStyleElement);
		}
	}

	static get observedAttributes() {
		return keys(attributesConfig);
	}
	static get PullDirection() {
		return PullDirection;
	}
	static get Rotate() {
		return Rotate;
	}
	static get Flip() {
		return Flip;
	}
	static get Animate() {
		return Animate;
	}
	static get Size() {
		return Size;
	}
	static get FixedWidth() {
		return FixedWidth;
	}
	static get Bordered() {
		return Bordered;
	}
}
defineCustomElement({
	componentClass: KUIIcon,
	tagName,
	attributesConfig
});

export default KUIIcon;

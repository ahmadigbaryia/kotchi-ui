import keys from "lodash/keys";

import BaseElement from "../../baseElement";
import { defineCustomElement } from "../../utils/wcUtils.js";
import { attributesConfig, tagName, faVersion } from "./config";
import templateConfig from "./template";

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
	static get observedAttributes() {
		return keys(attributesConfig);
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
}
defineCustomElement({
	componentClass: KUIIcon,
	tagName,
	attributesConfig
});

export default KUIIcon;
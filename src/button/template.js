import style from "./styles.css";
import { tagName } from "./config";
const template = document.createElement("template");

template.innerHTML = `
	<style>
		${style}
	</style>
	<button class="uik-button">
		<slot></slot>
	</button>
`;
window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		button: "button.uik-button"
	}
};

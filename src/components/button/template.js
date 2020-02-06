import style from "./styles.scss";
import { tagName } from "./kui-button";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		${style}
	</style>
	<button class="kui-button">
		<slot></slot>
	</button>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		button: "button.kui-button"
	}
};

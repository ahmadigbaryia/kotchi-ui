import style from "./style.scss";
import { tagName } from "./";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		${style}
	</style>
	<div class="kui-accordion">
	<slot></slot>
	</div>
`;

//This is for cross-browser compatibility 
window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		accordion: "div.kui-accordion",
		sectionsContainer: "slot"
	}
};

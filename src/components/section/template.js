import style from "./style.scss";
import { tagName } from "./";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		${style}
	</style>
	<div class="kui-section">
		<div class="kui-section__title-container">
			<kui-icon id="section-icon"></kui-icon>
			<h1 id="section-title" class="kui-section__title"></h1>
			<kui-icon id="section-expander-icon"></kui-icon>
		</div>
		<div class="kui-section__body">
			<slot></slot>
		</div>
	</div>
`;

//This is for cross-browser compatibility 
window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		section: "div.kui-section",
		sectionIcon: "#section-icon",
		sectionTitle: "#section-title",
		sectionExpanderIcon: "#section-expander-icon",
		sectionBody: "div.kui-section__body",
		sectionTitleContainer: "div.kui-section__title-container",
	}
};

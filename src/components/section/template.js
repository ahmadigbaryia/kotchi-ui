import style from "./style.scss";
import { tagName } from "./";

const template = document.createElement("template");
template.innerHTML = `
	<style>
		${style}
	</style>
	<div class="kui-section">
		<div class="section-title-container">
			<button aria-expanded="true" class="section-title">
				<kui-icon id="section-icon"></kui-icon>
				<span></span>
			</button>
			<div class="section-actions-container">
				<slot name="section-actions"></slot>
			</div>
		</div>
		<div class="section-body-container">
			<slot></slot>
		</div>
	</div>
`;

const collapseActionIconTemplate = document.createElement("template");
collapseActionIconTemplate.innerHTML = "<kui-icon id=\"section-collapse-icon\" kui-icon=\"fas fa-angle-up\"></kui-icon>";

//This is for cross-browser compatibility
window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		section: "div.kui-section",
		sectionIcon: "#section-icon",
		sectionTitle: "button.section-title>span",
		sectionBody: "div.section-body-container",
		sectionTitleContainer: "div.section-title-container",
		sectionActions: "slot[name=\"section-actions\"]",
		sectionActionsContainer: "div.section-actions-container",
		collapseSectionIcon: "#section-collapse-icon"
		
	},
	collapseActionIconTemplate
};

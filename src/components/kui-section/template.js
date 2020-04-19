import style from "./style.scss";

export default function templateGenerator(tagName) {
	const template = document.createElement("template");
	template.innerHTML = `
        <style>
            ${style}
        </style>
        <div class="kui-section">
            <div class="kui-section__header">
                <div class="kui-section__header-title-and-icon-container">
                    <kui-icon class="kui-section__header-icon"></kui-icon>
                    <h1 class="kui-section__header-title"></h1>
                </div>
                <div class="kui-section__header-actions">
                    <a id="collapseAction" class="kui-section__header-action">
                        <kui-icon kui-icon="fa fa-chevron-up"></kui-icon>
                    </a>
                    <a id="fullScreenAction" class="kui-section__header-action">
                        <kui-icon kui-icon="fa fa-expand"></kui-icon>
                    </a>
                    <a id="closeAction" class="kui-section__header-action">
                        <kui-icon kui-icon="fa fa-times"></kui-icon>
                    </a>
                </div>
            </div>
            <slot class="kui-section__contents"></slot>
        </div>
    `;

	window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

	return {
		template,
		selectors: {
			section: "div.kui-section",
			header: "div.kui-section__header",
			headerIcon: "div.kui-section__header-icon",
			headerTitle: "h1.kui-section__header-title",
			headerActions: "div.kui-section__header-actions",
			collapseAction: "a#collapseAction",
			fullScreenAction: "a#fullScreenAction",
			closeAction: "a#closeAction",
			contents: "slot.kui-section__contents",
		},
	};
}

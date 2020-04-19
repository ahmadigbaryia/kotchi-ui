import style from "./style.scss";

export default function templateGenerator() {
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
            ${style}
        </style>
        <div class="kui-accordion">
            <slot></slot>
        </div>
    `;

    window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);
    
    return {
        template,
        selectors: {
            accordion: "div.kui-accordion",
            contentsContainer: "div.kui-accordion > slot"
        }
    }
};

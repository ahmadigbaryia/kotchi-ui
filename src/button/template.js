import style from "./styles.css";
const template = document.createElement("template");

template.innerHTML = `
	<style>
		${style}
	</style>
	<button class="uik-button"><span class="icon"></span><slot></slot></button>
`;

export default {
	template,
	selectors: {
		button: "button.uik-button",
		icon: "span.icon",
	},
};

import style from "./styles.css";
const template = document.createElement("template");

template.innerHTML = `
	<style>
		${style}
	</style>
	<button class="uik-button">
		<slot></slot>
	</button>
`;

export default {
	template,
	selectors: {
		button: "button.uik-button"
	},
};

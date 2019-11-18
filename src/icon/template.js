import style from "./faStyle.css";
import { tagName } from "./config";

const template = document.createElement("template");
template.innerHTML = `
  <style>${style}</style>
  <i class="fas"></i>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

export default {
	template,
	selectors: {
		icon: "i"
	}
};

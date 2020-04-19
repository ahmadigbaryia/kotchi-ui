import KUIButton from "../components/kui-button";
import KUIIcon from "../components/kui-icon";

const template = document.createElement("template");
template.innerHTML = `
	<h1>Page_1_1</h1>
	<p>
		this is a kui-button that says Hello 
	</p>
	<div>
		<kui-button id="page_1_1_button" kui-style="${KUIButton.Style.Primary}">Say Hello</kui-button>
		<kui-icon kui-icon="far fa-handshake" kui-size="${KUIIcon.Size.X4}"></kui-icon>
		<kui-icon kui-icon="far fa-thumbs-up" kui-size="${KUIIcon.Size.X2}"></kui-icon>
	</div>
`;
export default function buildP1(container) {
	container.appendChild(template.content.cloneNode(true));
	const kuiButton = document.getElementById("page_1_1_button");
	kuiButton.addClickHandler(() => {
		window.alert("Hello");
	});
}

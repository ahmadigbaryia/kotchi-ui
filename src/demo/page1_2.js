import KUIButton from "../components/kui-button";
import "../components/kui-accordion";
import KUISection from "../components/kui-section";

const template = document.createElement("template");
template.innerHTML = `
	<h1>Page_1_2</h1>
	<p>
		this is a kui-button that says Greetings
	</p>
	<div>
		<kui-button id="page_1_2_button" kui-style="${KUIButton.Style.Information}">Say Greetings</kui-button>
		<kui-accordion kui-auto-collapse>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByIcon}" kui-header-title="Section 1">
				<p>Section 1 contents</p>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByIcon}" kui-header-title="Section 2">
				<p>Section 2 contents</p>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByIcon}" kui-header-title="Section 3">
				<p>Section 3 contents</p>
			</kui-section>
		</kui-accordion>
	</div>
`;
export default function buildP2(container) {
	container.appendChild(template.content.cloneNode(true));
	const kuiButton = document.getElementById("page_1_2_button");
	kuiButton.addClickHandler(() => {
		window.alert("Greetings");
	});
}

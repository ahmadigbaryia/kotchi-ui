import "../components/kui-accordion";
import KUISection from "../components/kui-section";

const template = document.createElement("template");
template.innerHTML = `
    <h1>Accordion Demo</h1>
	<p>
		Auto collapse accordion
	</p>
	<div>
		<kui-accordion kui-auto-collapse kui-expanded-child-index="1">
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 1">
				<div>Section 1 contents</div>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 2">
				<div>Section 2 contents</div>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 3">
				<div>Section 3 contents</div>
			</kui-section>
		</kui-accordion>
	</div>
	<p>
		Accordion no auto collapsing
	</p>
	<div>
		<kui-accordion>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 1">
				<div>Section 1 contents</div>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 2">
				<div>Section 2 contents</div>
			</kui-section>
			<kui-section kui-collapse-by="${KUISection.CollapseBy.ByHeader}" kui-header-title="Section 3">
				<div>Section 3 contents</div>
			</kui-section>
		</kui-accordion>
	</div>
`;
export default function build(container) {
	container.appendChild(template.content.cloneNode(true));
}

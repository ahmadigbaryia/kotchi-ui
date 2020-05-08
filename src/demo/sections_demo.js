import KUISection from "../components/kui-section";

const template = document.createElement("template");
template.innerHTML = `
	<h1>Section Demo</h1>
	<p>
		this is a kui-section
	</p>
	<div>
        <kui-section kui-style="${KUISection.Style.Success}" 
                     kui-collapse-by="${KUISection.CollapseBy.ByIcon}" 
                     kui-header-title="Section 1">
            <p>Section 1 contents</p>
        </kui-section>
        <kui-section kui-style="${KUISection.Style.Primary}" 
                     kui-collapse-by="${KUISection.CollapseBy.ByHeader}" 
                     kui-header-title="Section 2"
                     kui-header-icon="fab fa-apple">
            <p>Section 2 contents</p>
        </kui-section>
        <kui-section kui-style="${KUISection.Style.Information}" 
                     kui-collapse-by="${KUISection.CollapseBy.ByHeader}" 
                     kui-header-title="Section 3"
                     kui-header-icon="fab fa-apple"
                     kui-allow-full-screen
                     kui-closable>
			<p>Section 3 contents</p>
			<div slot="footer">Footer</div>
        </kui-section>
	</div>
`;
export function build(container) {
	container.appendChild(template.content.cloneNode(true));
}

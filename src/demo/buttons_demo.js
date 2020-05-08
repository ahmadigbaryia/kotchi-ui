import KUIButton from "../components/kui-button";

const template = document.createElement("template");
template.innerHTML = `
    <h1>Buttons Demo</h1>
    <h3>KUIButton.Style</h3>
	<div>
		<kui-button id="button-style-1" kui-style="${KUIButton.Style.Primary}">Primary</kui-button>
		<kui-button id="button-style-2" kui-style="${KUIButton.Style.Secondary}">Secondary</kui-button>
		<kui-button id="button-style-3" kui-style="${KUIButton.Style.Information}">Information</kui-button>
		<kui-button id="button-style-4" kui-style="${KUIButton.Style.Warning}">Warning</kui-button>
		<kui-button id="button-style-5" kui-style="${KUIButton.Style.Danger}">Danger</kui-button>
		<kui-button id="button-style-6" kui-style="${KUIButton.Style.Success}">Sunccess</kui-button>
		<kui-button id="button-style-7" kui-style="${KUIButton.Style.Link}">Link</kui-button>
    </div>
    <h3>KUIButton.Size</h3>
    <div>
        <h5>Small buttons</h5>
		<kui-button id="button-size-1" kui-size="${KUIButton.Size.Small}" kui-style="${KUIButton.Style.Primary}">Primary</kui-button>
		<kui-button id="button-size-2" kui-size="${KUIButton.Size.Small}" kui-style="${KUIButton.Style.Secondary}">Secondary</kui-button>
        <kui-button id="button-size-3" kui-size="${KUIButton.Size.Small}" kui-style="${KUIButton.Style.Information}">Information</kui-button>
        <h5>Large buttons</h5>
		<kui-button id="button-size-4" kui-size="${KUIButton.Size.Large}" kui-style="${KUIButton.Style.Warning}">Warning</kui-button>
		<kui-button id="button-size-5" kui-size="${KUIButton.Size.Large}" kui-style="${KUIButton.Style.Danger}">Danger</kui-button>
        <kui-button id="button-size-6" kui-size="${KUIButton.Size.Large}" kui-style="${KUIButton.Style.Success}">Sunccess</kui-button>
        <h5>Block buttons</h5>
		<kui-button id="button-size-7" kui-size="${KUIButton.Size.Block}" kui-style="${KUIButton.Style.Primary}">Primary block 1</kui-button>
		<kui-button id="button-size-8" kui-size="${KUIButton.Size.Block}" kui-style="${KUIButton.Style.Primary}">Primary block 2</kui-button>
		<kui-button id="button-size-9" kui-size="${KUIButton.Size.Block}" kui-style="${KUIButton.Style.Primary}">Primary block 3</kui-button>
    </div>
    <h3>Outline buttons</h3>
	<div>
		<kui-button id="button-outline-1" kui-outline kui-style="${KUIButton.Style.Primary}">Primary</kui-button>
		<kui-button id="button-outline-2" kui-outline kui-style="${KUIButton.Style.Secondary}">Secondary</kui-button>
		<kui-button id="button-outline-3" kui-outline kui-style="${KUIButton.Style.Information}">Information</kui-button>
		<kui-button id="button-outline-4" kui-outline kui-style="${KUIButton.Style.Warning}">Warning</kui-button>
		<kui-button id="button-outline-5" kui-outline kui-style="${KUIButton.Style.Danger}">Danger</kui-button>
		<kui-button id="button-outline-6" kui-outline kui-style="${KUIButton.Style.Success}">Sunccess</kui-button>
    </div>
    <h3>Disabled buttons</h3>
	<div>
		<kui-button id="button-outline-1" kui-disabled kui-style="${KUIButton.Style.Primary}">Primary</kui-button>
		<kui-button id="button-outline-2" kui-disabled kui-style="${KUIButton.Style.Secondary}">Secondary</kui-button>
		<kui-button id="button-outline-3" kui-disabled kui-style="${KUIButton.Style.Information}">Information</kui-button>
		<kui-button id="button-outline-4" kui-outline kui-disabled kui-style="${KUIButton.Style.Warning}">Warning</kui-button>
		<kui-button id="button-outline-5" kui-outline kui-disabled kui-style="${KUIButton.Style.Danger}">Danger</kui-button>
		<kui-button id="button-outline-6" kui-outline kui-disabled kui-style="${KUIButton.Style.Success}">Sunccess</kui-button>
    </div>
    
`;
export default function buildP1(container) {
	container.appendChild(template.content.cloneNode(true));
	document
		.querySelectorAll("kui-button")
		.forEach((button) =>
			button.addClickHandler(() =>
				console.log(`Button ${button.innerHTML} was clicked`)
			)
		);
}

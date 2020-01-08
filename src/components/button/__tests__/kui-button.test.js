import { Window } from "happy-dom";
import KUIButton from "../kui-button";

test("Render <kui-button> element and test the basics", () => {
	const window = new Window();
	const document = window.document;
	document.body.innerHTML = `<kui-button id="my-kui-button" kui-style="${KUIButton.Style.Primary}">My Button</kui-button>`;
	const kuiButton = document.querySelector("#my-kui-button");
	expect(kuiButton).not.toBeNull();
	expect(kuiButton.elements).not.toBeNull();
	expect(kuiButton.elements.button).not.toBeNull();
	expect(kuiButton.kuiStyle).toBe(KUIButton.Style.Primary);
});

import { Window } from "happy-dom";
import KUIcon from "../kui-icon";

const window = new Window();
const document = window.document;
let kuiIcon;

beforeEach(() => {
	document.body.innerHTML ="<kui-icon id=\"my-kui-icon\"></kui-icon>";
	kuiIcon = document.querySelector("#my-kui-icon");
});
describe("Make sure component is created", () => {
	test("’Make sure <kui-icon> is defined as a custom element with shadowRoot", () => {
		expect(kuiIcon).not.toBeNull();
		expect(kuiIcon.shadowRoot).not.toBeNull();
	});
	test("’Make sure <kui-icon> has the elements as an attribute with the button on it", () => {
		expect(kuiIcon.elements).not.toBeNull();
		expect(kuiIcon.elements.icon).not.toBeNull();
	});
	test("Make sure component attributes are also reflected on object properties", () => {
		expect("kuiLabel" in kuiIcon).toBe(true);
		expect("kuiIcon" in kuiIcon).toBe(true);
		expect("kuiSize" in kuiIcon).toBe(true);
		expect("kuiFixedWidth" in kuiIcon).toBe(true);
		expect("kuiListIcon" in kuiIcon).toBe(true);
		expect("kuiBordered" in kuiIcon).toBe(true);
		expect("kuiPulled" in kuiIcon).toBe(true);
		expect("kuiAnimated" in kuiIcon).toBe(true);
		expect("kuiRotate" in kuiIcon).toBe(true);
		expect("kuiFlip" in kuiIcon).toBe(true);
	});
});
describe("Testing <kui-icon> attributes", () => {

});
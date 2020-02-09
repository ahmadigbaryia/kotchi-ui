import { Window } from "happy-dom";
import "../";

const window = new Window();
const document = window.document;
let kuiSection;

beforeEach(() => {
	document.body.innerHTML ="<kui-section id=\"my-kui-section\">My Component</kui-section>";
	kuiSection = document.querySelector("#my-kui-section");
});
describe("Make sure component is created", () => {
	test("Make sure <kui-section> is defined as a custom element with shadowRoot", () => {
		expect(kuiSection).not.toBeNull();
		expect(kuiSection.shadowRoot).not.toBeNull();
	});
	test("Make sure <kui-section> has the elements as an attribute with the button on it", () => {
		expect(kuiSection.elements).not.toBeNull();
		//check the elements properties existance here
	});
	test("Make sure component attributes are also reflected on object properties", () => {
		expect("kuiTitle" in kuiSection).toBe(true);
		expect("kuiIcon" in kuiSection).toBe(true);
	});
});
describe("Testing <kui-section> attributes", () => {
	describe.each([
		["kui-title", "kuiTitle", ""],
		["kui-icon", "kuiIcon", ""],
	])("Testing %s attribute", (attributeName, propertyName, otherValue)=>{
		test(`Updating ${propertyName} property updates the attribute with the same value`, () => {
			kuiSection[propertyName] = otherValue;
			expect(kuiSection.getAttribute(attributeName)).toBe(otherValue);
		});
		test(`Updating ${attributeName} attribute updates the property with the same value`, () => {
			kuiSection.setAttribute(attributeName, otherValue);
			expect(kuiSection[propertyName]).toBe(otherValue);
		});
	});
//Test invalid values by ensuring that the change handler is never called
//	describe.each([
//		["ATTRIBUTE_NAME", "PROPERTY_NAME", "INVALID_VALUE"],
//	])("Testing invalid value handeling for %s", (attributeName, propertyName, invalidValue) => {
//		test(`Tesing invalid value for ${attributeName} attribute`, () => {
//			const spy = jest.spyOn(kuiSection.attributesConfig[attributeName], "attributeChangedHandler");
//			kuiSection.setAttribute(attributeName, invalidValue);
//			expect(spy).not.toHaveBeenCalled();
//			spy.mockRestore();
//		});
//		test(`Tesing invalid value for ${propertyName} property`, () => {
//			const spy = jest.spyOn(kuiSection.attributesConfig[attributeName], "attributeChangedHandler");
//			kuiSection[propertyName] = invalidValue;
//			expect(spy).not.toHaveBeenCalled();
//			spy.mockRestore();
//		});
//	});
});

// Test the public API
describe("Test public API", () => {
	describe("Make sure the methods are defined on the instance", () => {
	});
	// Test each and every public API method by ensuring it works as expected
});

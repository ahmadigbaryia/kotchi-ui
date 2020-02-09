import { Window } from "happy-dom";
import "../";

const window = new Window();
const document = window.document;
let kuiAccordion;

beforeEach(() => {
	document.body.innerHTML ="<kui-accordion id=\"my-kui-accordion\">My Component</kui-accordion>";
	kuiAccordion = document.querySelector("#my-kui-accordion");
});
describe("Make sure component is created", () => {
	test("Make sure <kui-accordion> is defined as a custom element with shadowRoot", () => {
		expect(kuiAccordion).not.toBeNull();
		expect(kuiAccordion.shadowRoot).not.toBeNull();
	});
	test("Make sure <kui-accordion> has the elements as an attribute with the button on it", () => {
		expect(kuiAccordion.elements).not.toBeNull();
		//check the elements properties existance here
	});
	test("Make sure component attributes are also reflected on object properties", () => {
		expect("kuiToggle" in kuiAccordion).toBe(true);
		expect("kuiCollapseIcon" in kuiAccordion).toBe(true);
		expect("kuiExpandIcon" in kuiAccordion).toBe(true);
	});
});
describe("Testing <kui-accordion> attributes", () => {
	describe.each([
		["kui-collapse-icon", "kuiCollapseIcon", ""],
		["kui-expand-icon", "kuiExpandIcon", ""],
	])("Testing %s attribute", (attributeName, propertyName, otherValue)=>{
		test(`Updating ${propertyName} property updates the attribute with the same value`, () => {
			kuiAccordion[propertyName] = otherValue;
			expect(kuiAccordion.getAttribute(attributeName)).toBe(otherValue);
		});
		test(`Updating ${attributeName} attribute updates the property with the same value`, () => {
			kuiAccordion.setAttribute(attributeName, otherValue);
			expect(kuiAccordion[propertyName]).toBe(otherValue);
		});
	});
	//Boolean attributes
	describe.each([
		["kui-toggle", "kuiToggle", true], 
		["kui-toggle", "kuiToggle", false],
	])("Testing %s attribute", (attributeName, propertyName, value) => {
		test(`Set ${propertyName} property to ${value} -> ${value ? "adds" : "removes"} '${attributeName}' attribute to the <kui-accordion> element`, () => {
			kuiAccordion[propertyName] = value;
			expect(kuiAccordion.hasAttribute(attributeName)).toBe(value);
		});
		test(`Set ${attributeName} attribute to ${value} -> ${value ? "adds" : "removes"} '${attributeName}' attribute from the <kui-accordion> element`, () => {
			kuiAccordion.setAttribute(attributeName, `${value}`);
			expect(kuiAccordion.hasAttribute(attributeName)).toBe(value);
		});
	});
//Test invalid values by ensuring that the change handler is never called
//	describe.each([
//		["ATTRIBUTE_NAME", "PROPERTY_NAME", "INVALID_VALUE"],
//	])("Testing invalid value handeling for %s", (attributeName, propertyName, invalidValue) => {
//		test(`Tesing invalid value for ${attributeName} attribute`, () => {
//			const spy = jest.spyOn(kuiAccordion.attributesConfig[attributeName], "attributeChangedHandler");
//			kuiAccordion.setAttribute(attributeName, invalidValue);
//			expect(spy).not.toHaveBeenCalled();
//			spy.mockRestore();
//		});
//		test(`Tesing invalid value for ${propertyName} property`, () => {
//			const spy = jest.spyOn(kuiAccordion.attributesConfig[attributeName], "attributeChangedHandler");
//			kuiAccordion[propertyName] = invalidValue;
//			expect(spy).not.toHaveBeenCalled();
//			spy.mockRestore();
//		});
//	});
});

// Test the public API
describe("Test public API", () => {
	describe("Make sure the methods are defined on the instance", () => {
		test("make sure setSectionExpandedHandler function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.setSectionExpandedHandler).toBe("function");
		});
		test("make sure getExpandedSections function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.getExpandedSections).toBe("function");
		});
		test("make sure collapseAllSections function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.collapseAllSections).toBe("function");
		});
		test("make sure expandAllSections function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.expandAllSections).toBe("function");
		});
		test("make sure expandSection function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.expandSection).toBe("function");
		});
		test("make sure collapseSection function is actually defined on the class instance", () => {
			expect(typeof kuiAccordion.collapseSection).toBe("function");
		});
	});
	// Test each and every public API method by ensuring it works as expected
});

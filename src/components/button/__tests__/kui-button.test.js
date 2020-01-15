import { Window } from "happy-dom";
import KUIButton from "../kui-button";

const window = new Window();
const document = window.document;
let kuiButton;

beforeEach(() => {
	document.body.innerHTML ="<kui-button id=\"my-kui-button\">My Button</kui-button>";
	kuiButton = document.querySelector("#my-kui-button");
});

describe("Make sure component is created", () => {
	test("’Make sure <kui-button> is defined as a custom element with shadowRoot", () => {
		expect(kuiButton).not.toBeNull();
		expect(kuiButton.shadowRoot).not.toBeNull();
	});

	test("’Make sure <kui-button> has the elements as an attribute with the button on it", () => {
		expect(kuiButton.elements).not.toBeNull();
		expect(kuiButton.elements.button).not.toBeNull();
	});
});

describe("Make sure component has all the attributes configured", () => {
	test("Make sure the kui-style attribute has the default value set", () => {
		expect(kuiButton.kuiStyle).toBe(KUIButton.Style.Default);
		expect(
			kuiButton.elements.button.classList.contains(
				KUIButton.Style.Default
			)
		).toBe(true);
	});

	test("Updating kuiStyle property updates the attribute and is reflected in the style", () => {
		kuiButton.kuiStyle = KUIButton.Style.Primary;
		expect(
			kuiButton.elements.button.classList.contains(
				KUIButton.Style.Primary
			)
		).toBe(true);
		expect(kuiButton.getAttribute("kui-style")).toBe(
			KUIButton.Style.Primary
		);
	});
});

// test(`Set ${propertyName} property to true -> adds 'disabled' attribute to the inner <button> element`, () => {
// 	kuiButton[propertyName] = true;
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBe("");
// });
// test(`Set ${attributeName} attribute to true -> adds 'disabled' attribute to the inner <button> element`, () => {
// 	kuiButton.setAttribute(attributeName, "");
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBe("");
// });
// test("Set kuiDisabled property to false -> adds 'disabled' attribute to the inner <button> element", () => {
// 	kuiButton[propertyName] = false;
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBeNull();
// });
// test("Set ${attributeName} attribute to false -> adds 'disabled' attribute to the inner <button> element", () => {
// 	kuiButton.setAttribute(attributeName, "false");
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBeNull();
// });
// test("Set kuiDisabled property to wrong value -> keeps the previous state of 'kui-disabled' attribute on the inner <button> element", () => {
// 	kuiButton[propertyName] = true;
// 	kuiButton[propertyName] = "Wrong value";
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBe("");
// 	kuiButton[propertyName] = false;
// 	kuiButton[propertyName] = "Wrong value";
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBeNull();
// });
// test("Set ${attributeName} attribute to wrong value -> keeps the previous state of 'kui-disabled' attribute on the inner <button> element", () => {
// 	kuiButton.setAttribute(attributeName, "");
// 	kuiButton.setAttribute(attributeName, "wrong value");
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBe("");
// 	kuiButton.setAttribute(attributeName, "false");
// 	kuiButton.setAttribute(attributeName, "wrong value");
// 	expect(kuiButton.elements.button.getAttribute("disabled")).toBeNull();
// });

describe.each([
	["kui-outline", "kuiOutline", "outline"], 
	["kui-disabled", "kuiDisabled", "disabled"]
])("Testing <kui-button> boolean attribute %s", (attributeName, propertyName, className) => {
	describe("Giving the attribute/property value of true", () => {
		test(`Set ${propertyName} property to true -> adds '${attributeName}' attribute to the <kui-button> element`, () => {
			kuiButton[propertyName] = true;
			expect(kuiButton.hasAttribute(attributeName)).toBe(true);
		});
		test(`Set ${propertyName} property to true -> adds className '${className}' to inner <button> element`, () => {
			kuiButton[propertyName] = true;
			expect(kuiButton.elements.button.classList.contains(className)).toBe(true);
		});
		test(`Set ${attributeName} attribute to true -> adds className '${className}' to the inner <button> element`, () => {
			kuiButton.setAttribute(attributeName, "");
			expect(kuiButton.elements.button.classList.contains(className)).toBe(true);
		});
	});
	describe("Giving the attribute/property value of false", () => {
		test(`Set ${propertyName} property to false -> removes '${attributeName}' attribute from the <kui-button> element`, () => {
			kuiButton[propertyName] = false;
			expect(kuiButton.hasAttribute(attributeName)).toBe(false);
		});
		test(`Set ${propertyName} property to false -> removes className '${className}' from inner <button> element`, () => {
			kuiButton[propertyName] = false;
			expect(kuiButton.elements.button.classList.contains(className)).toBe(false);
		});
		test(`Set ${attributeName} attribute to false -> removes '${attributeName}' attribute from the <kui-button> element`, () => {
			kuiButton.setAttribute(attributeName, "false");
			expect(kuiButton.hasAttribute(attributeName)).toBe(false);
		});
		test(`Set ${attributeName} attribute to false -> removes className '${className}' from the inner <button> element`, () => {
			kuiButton.setAttribute(attributeName, "false");
			expect(kuiButton.elements.button.classList.contains(className)).toBe(false);
		});
	});
	describe("Giving the attribute/property an invalid value", () => {
		test(`Set ${propertyName} property to wrong value -> keeps the previous state of '${attributeName}' attribute on the <kui-button> element`, () => {
			kuiButton[propertyName] = true;
			kuiButton[propertyName] = "Wrong value";
			expect(kuiButton.hasAttribute(attributeName)).toBe(true);
			kuiButton[propertyName] = false;
			kuiButton[propertyName] = "Wrong value";
			expect(kuiButton.hasAttribute(attributeName)).toBe(false);
		});
		test(`Set ${attributeName} attribute to wrong value -> keeps the previous state of '${attributeName}' attribute on the <kui-button> element`, () => {
			kuiButton.setAttribute(attributeName, "");
			kuiButton.setAttribute(attributeName, "wrong value");
			expect(kuiButton.hasAttribute(attributeName)).toBe(true);
			kuiButton.setAttribute(attributeName, "false");
			kuiButton.setAttribute(attributeName, "wrong value");
			expect(kuiButton.hasAttribute(attributeName)).toBe(false);
		});
		test(`Set ${attributeName} attribute to wrong value -> keeps the previous state of classNames of the inner <button> element`, () => {
			kuiButton.setAttribute(attributeName, "");
			kuiButton.setAttribute(attributeName, "wrong value");
			expect(kuiButton.elements.button.classList.contains(className)).toBe(true);
			kuiButton.setAttribute(attributeName, "false");
			kuiButton.setAttribute(attributeName, "wrong value");
			expect(kuiButton.elements.button.classList.contains(className)).toBe(false);
		});
	});
});

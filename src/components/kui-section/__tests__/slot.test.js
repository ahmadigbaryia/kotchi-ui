import { Window } from "happy-dom";

const window = new Window();
const document = window.document;

window.customElements.define(
	"kui-test",
	class A extends HTMLElement {
		constructor() {
			super();
			const div = document.createElement("div");
			div.innerHTML = `
			<div class="container">
				<h1>Hello</h1>
				<slot></slot>
			</div>
		`;
			this.attachShadow({ mode: "open" });
			this.shadowRoot.appendChild(div);
		}
	}
);

test("’Make sure slot is defined in a custom element with shadowRoot", () => {
	document.body.innerHTML = "<kui-test id='my-kui-test'></kui-test>";
	const el = document.querySelector("#my-kui-test");
	expect(el).not.toBeNull();
	expect(el.shadowRoot).not.toBeNull();
	console.info(el.shadowRoot.innerHTML);
	expect(el.shadowRoot.querySelector(".container")).not.toBeNull();
	expect(el.shadowRoot.querySelector(".container h1")).not.toBeNull();
	expect(el.shadowRoot.querySelector(".container > slot")).not.toBeNull();
});


export function buildShadowRoot(template, host) {
	host.attachShadow({ mode: "open" });
	host.shadowRoot.appendChild(template.content.cloneNode(true));
}

export function buildShadowRoot(template, host) {
	host.attachShadow({ mode: "open" });
	host.shadowRoot.appendChild(template.content.cloneNode(true));
}

export function isTrue(str) {
	return !!str && str.toLowerCase() === "true";
}

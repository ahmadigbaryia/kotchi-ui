export default function kuiCollapsable(ComponentClass) {
	const kuiCollapsableMixin = {
		collapse() {
			this.classList.toggle("kui-collapse");
		},
		expand() {
			this.classList.toggle("kui-collapse");
		},
		isExpanded() {
			return this.className.indexOf("kui-collapse") === -1;
		},
	};
	Object.assign(ComponentClass.prototype, kuiCollapsableMixin);
}

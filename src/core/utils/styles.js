export function updateElementCssClass({
	oldValue,
	newValue,
	element,
	defaultValue,
}) {
	const { classList } = element;
	if (newValue) {
		if (oldValue) {
			classList.remove.apply(classList, oldValue.split(" "));
		}
		classList.add.apply(classList, newValue.split(" "));
	} else if (oldValue) {
		classList.remove.apply(classList, oldValue.split(" "));
		if (defaultValue)
			classList.add.apply(classList, defaultValue.split(" "));
	}
}

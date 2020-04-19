import {
	getAttributeDefault,
	validateAttributeValue,
} from "../../utils/customElementData";

export default function attributeChangeHandler(target, name, descriptor) {
	let originalMethod = descriptor.value;
	descriptor.value = function ({ attribute, oldValue, newValue }) {
		const tagName = target.getTagName();
		if (validateAttributeValue({ tagName, attribute, value: newValue })) {
			const defaultValue = getAttributeDefault({ tagName, attribute });
			originalMethod.call(this, {
				attribute,
				oldValue,
				newValue,
				defaultValue,
			});
		} else {
			logger.info("Rolling back to previous value");
			if (oldValue === null) this.removeAttribute(attribute);
			else this.setAttribute(attribute, oldValue);
		}
	};
	return descriptor;
}

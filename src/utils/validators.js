import _isString from "lodash/isString";

/**
 * Check if the value is a string representation of the Boolean.TRUE
 * @param {String} str the value to test
 */
export function isTrue(str) {
	return !!str && _isString(str) && str.toLowerCase() === "true";
}

/**
 * Returns a function that given a value, it will return if it's found in the map or not (=== check)
 * @param {Object} map The map containing the values
 */
export function isValueOf(map) {
	return function(value) {
		return (
			Object.entries(map).filter(pair => pair[1] === value).length === 1
		);
	};
}
/** 
 * Initialy we use the lodash library for validations and utility functions, but if there is something
 * specific we add it here 
*/
import _isString from "lodash/isString";

/**
 * Check if the value is a string representation of the Boolean.TRUE
 * @param {Any} str the value to test
 */
export function isTrue(str) {
	return str === true || (!!str && _isString(str) && str.toLowerCase() === "true");
}
/**
 * Check if the value is a string representation of the Boolean.FALSE
 * @param {Any} str the value to test
 */
export function isFalse(str) {
	return str === false || (!!str && _isString(str) && str.toLowerCase() === "false");
}
/**
 * Check if the value is represents a boolean value of an attribute empty string, true/false
 * @param {Any} str the value to test
 */
export function isBooleanAttribute(str) {
	return str === "" || isTrue(str) || isFalse(str);
}
/**
 * Returns a function that given a value, it will return if it's found in the map or not (=== check)
 * @param {Object} map The map containing the values
 */
export function isValueOf(map) {
	return function isValueOfMap(value) {
		return (
			Object.entries(map).filter(pair => pair[1] === value).length === 1
		);
	};
}

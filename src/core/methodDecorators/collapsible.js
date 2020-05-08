/**
 *
 * @param {*} element to be collapsed/expanded
 * @param {*} source the element that caused the event (for accessibility reasons)
 * @param {*} collapse should collapse or expand
 */
export function collapsible({ element, source, collapse = true }) {
	return function (target, name, descriptor) {
		// do the expand/collapse on the element
		// first do the CSS transition setting the max-height, then use more efficient way using translate3d and keyframes
	};
}

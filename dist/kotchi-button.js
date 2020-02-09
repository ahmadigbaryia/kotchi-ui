(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KUIbutton"] = factory();
	else
		root["kotchiUI"] = root["kotchiUI"] || {}, root["kotchiUI"]["KUIbutton"] = factory();
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["button"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/styles.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/styles.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":host {\n  --default-text-color: var(--kui-default-text-color, #525a62);\n  --default-text-color-hover: var(--kui-default-text-color-hover, #525a62);\n  --default-text-color-disabled: var(--kui-default-text-color-disabled, #525a62);\n  --default-text-color-active: var(--kui-default-text-color-active, #525a62);\n  --default-bg-color: var(--kui-default-bg-color, #f6f6f6);\n  --default-bg-color-hover: var(--kui-default-bg-color-hover, #e3e3e3);\n  --default-bg-color-disabled: var(--kui-default-bg-color-disabled, #f6f6f6);\n  --default-bg-color-active: var(--kui-default-bg-color-active, #dddcdc);\n  --default-border-color: var(--kui-default-border-color, #f6f6f6);\n  --default-border-color-hover: var(--kui-default-border-color-hover, #dddcdc);\n  --default-border-color-disabled: var(--kui-default-border-color-disabled, #f6f6f6);\n  --default-border-color-active: var(--kui-default-border-color-active, #d6d6d6);\n  --default-box-shadow: var(--kui-default-box-shadow, 0 0 0 0 rgba(221, 223, 224, 0.5));\n  --default-box-shadow-active: var(--kui-default-box-shadow-active, 0 0 0 0 rgba(221, 223, 224, 0.5));\n  --primary-text-color: var(--kui-primary-text-color, #ffffff);\n  --primary-text-color-hover: var(--kui-primary-text-color-hover, #ffffff);\n  --primary-text-color-disabled: var(--kui-primary-text-color-disabled, #ffffff);\n  --primary-text-color-active: var(--kui-primary-text-color-active, #ffffff);\n  --primary-bg-color: var(--kui-primary-bg-color, #2196f3);\n  --primary-bg-color-hover: var(--kui-primary-bg-color-hover, #0c83e2);\n  --primary-bg-color-disabled: var(--kui-primary-bg-color-disabled, #2196f3);\n  --primary-bg-color-active: var(--kui-primary-bg-color-active, #0c7cd5);\n  --primary-border-color: var(--kui-primary-border-color, #2196f3);\n  --primary-border-color-hover: var(--kui-primary-border-color-hover, #0c7cd5);\n  --primary-border-color-disabled: var(--kui-primary-border-color-disabled, #2196f3);\n  --primary-border-color-active: var(--kui-primary-border-color-active, #0b75c9);\n  --primary-box-shadow: var(--kui-primary-box-shadow, 0 0 0 0 rgba(66, 166, 245, 0.5));\n  --primary-box-shadow-active: var(--kui-primary-box-shadow-active, 0 0 0 0 rgba(66, 166, 245, 0.5));\n  --secondary-text-color: var(--kui-secondary-text-color, #ffffff);\n  --secondary-text-color-hover: var(--kui-secondary-text-color-hover, #ffffff);\n  --secondary-text-color-disabled: var(--kui-secondary-text-color-disabled, #ffffff);\n  --secondary-text-color-active: var(--kui-secondary-text-color-active, #ffffff);\n  --secondary-bg-color: var(--kui-secondary-bg-color, #868e96);\n  --secondary-bg-color-hover: var(--kui-secondary-bg-color-hover, #727b84);\n  --secondary-bg-color-disabled: var(--kui-secondary-bg-color-disabled, #868e96);\n  --secondary-bg-color-active: var(--kui-secondary-bg-color-active, #6c757d);\n  --secondary-border-color: var(--kui-secondary-border-color, #868e96);\n  --secondary-border-color-hover: var(--kui-secondary-border-color-hover, #6c757d);\n  --secondary-border-color-disabled: var(--kui-secondary-border-color-disabled, #868e96);\n  --secondary-border-color-active: var(--kui-secondary-border-color-active, #666e76);\n  --secondary-box-shadow: var(--kui-secondary-box-shadow, 0 0 0 0 rgba(152, 159, 166, 0.5));\n  --secondary-box-shadow-active: var(--kui-secondary-box-shadow-active, rgba(152, 159, 166, 0.5));\n  --info-text-color: var(--kui-info-text-color, #ffffff);\n  --info-text-color-hover: var(--kui-info-text-color-hover, #ffffff);\n  --info-text-color-disabled: var(--kui-info-text-color-disabled, #ffffff);\n  --info-text-color-active: var(--kui-info-text-color-active, #ffffff);\n  --info-bg-color: var(--kui-info-bg-color, #03a9f4);\n  --info-bg-color-hover: var(--kui-info-bg-color-hover, #038fce);\n  --info-bg-color-disabled: var(--kui-info-bg-color-disabled, #03a9f4);\n  --info-bg-color-active: var(--kui-info-bg-color-active, #0286c2);\n  --info-border-color: var(--kui-info-border-color, #03a9f4);\n  --info-border-color-hover: var(--kui-info-border-color-hover, #0286c2);\n  --info-border-color-disabled: var(--kui-info-border-color-disabled, #03a9f4);\n  --info-border-color-active: var(--kui-info-border-color-active, #027db5);\n  --info-box-shadow: var(--kui-info-box-shadow, 0 0 0 0 rgba(41, 182, 246, 0.5));\n  --info-box-shadow-active: var(--kui-info-box-shadow-active, 0 0 0 0 rgba(41, 182, 246, 0.5));\n  --dangerous-text-color: var(--kui-dangerous-text-color, #ffffff);\n  --dangerous-text-color-hover: var(--kui-dangerous-text-color-hover, #ffffff);\n  --dangerous-text-color-disabled: var(--kui-dangerous-text-color-disabled, #ffffff);\n  --dangerous-text-color-active: var(--kui-dangerous-text-color-active, #ffffff);\n  --dangerous-bg-color: var(--kui-dangerous-bg-color, #ff6b68);\n  --dangerous-bg-color-hover: var(--kui-dangerous-bg-color-hover, #ff4642);\n  --dangerous-bg-color-disabled: var(--kui-dangerous-bg-color-disabled, #ff6b68);\n  --dangerous-bg-color-active: var(--kui-dangerous-bg-color-active, #ff3935);\n  --dangerous-border-color: var(--kui-dangerous-border-color, #ff6b68);\n  --dangerous-border-color-hover: var(--kui-dangerous-border-color, #ff3935);\n  --dangerous-border-color-disabled: var(--kui-dangerous-border-color, #ff6b68);\n  --dangerous-border-color-active: var(--kui-dangerous-border-color, #ff2d28);\n  --dangerous-box-shadow: var(--kui-dangerous-box-shadow, 0 0 0 0 rgba(255, 129, 127, 0.5));\n  --dangerous-box-shadow-active: var(--kui-dangerous-box-shadow-active, 0 0 0 0 rgba(255, 129, 127, 0.5));\n  --warning-text-color: var(--kui-warning-text-color, #ffffff);\n  --warning-text-color-hover: var(--kui-warning-text-color-hover, #ffffff);\n  --warning-text-color-disabled: var(--kui-warning-text-color-disabled, #ffffff);\n  --warning-text-color-active: var(--kui-warning-text-color-active, #ffffff);\n  --warning-bg-color: var(--kui-warning-bg-color, #ffc721);\n  --warning-bg-color-hover: var(--kui-warning-bg-color-hover, #fabb00);\n  --warning-bg-color-disabled: var(--kui-warning-bg-color-disabled, #ffc721);\n  --warning-bg-color-active: var(--kui-warning-bg-color-active, #edb100);\n  --warning-border-color: var(--kui-warning-border-color, #ffc721);\n  --warning-border-color-hover: var(--kui-warning-border-color-hover, #edb100);\n  --warning-border-color-disabled: var(--kui-warning-border-color-disabled, #ffc721);\n  --warning-border-color-active: var(--kui-warning-border-color-active, #e0a800);\n  --warning-box-shadow: var(--kui-warning-box-shadow, 0 0 0 0 rgba(255, 207, 66, 0.5));\n  --warning-box-shadow-active: var(--kui-warning-box-shadow-active, 0 0 0 0 rgba(255, 207, 66, 0.5));\n  --success-text-color: var(--kui-success-text-color, #ffffff);\n  --success-text-color-hover: var(--kui-success-text-color, #ffffff);\n  --success-text-color-disabled: var(--kui-success-text-color, #ffffff);\n  --success-text-color-active: var(--kui-success-text-color, #ffffff);\n  --success-bg-color: var(--kui-success-bg-color, #32c787);\n  --success-bg-color-hover: var(--kui-success-bg-color-hover, #2aa872);\n  --success-bg-color-disabled: var(--kui-success-bg-color-disabled, #32c787);\n  --success-bg-color-active: var(--kui-success-bg-color-active, #289e6b);\n  --success-border-color: var(--kui-success-border-color, #32c787);\n  --success-border-color-hover: var(--kui-success-border-color, #289e6b);\n  --success-border-color-disabled: var(--kui-success-border-color, #32c787);\n  --success-border-color-active: var(--kui-success-border-color, #259464);\n  --success-box-shadow: var(--kui-success-box-shadow, 0 0 0 0 rgba(81, 207, 153, 0.5));\n  --success-box-shadow-active: var(--kui-success-box-shadow-active, 0 0 0 0 rgba(81, 207, 153, 0.5));\n  --link-text-color: var(--kui-link-text-color, #2196f3);\n  --link-text-color-hover: var(--kui-link-text-color, #0a6ebd);\n  --link-text-color-disabled: var(--kui-link-text-color, #868e96);\n  --link-text-decoration: var(--kui-link-text-decoration, underline);\n}\n\n:host {\n  /* Variables */\n  --line-height: var(--kui-button-line-height, 1.5);\n  --font-family: var(--kui-button-font-family, \"Roboto\" ,\"sans-serif\");\n  --font-weight: var(--kui-button-font-weight, 400);\n  --font-size: var(--kui-button-font-size, 1.25rem);\n  --font-size-small: var(--kui-button-small-font-size, 0.75rem);\n  --font-size-large: var(--kui-button-large-font-size, 1.25rem);\n  --padding-left: var(--kui-button-padding-left, 10px);\n  --padding-right: var(--kui-button-padding-right, 10px);\n  --padding-top: var(--kui-button-padding-top, 5px);\n  --padding-bottom: var(--kui-button-padding-bottom, 5px);\n  --margin-left: var(--kui-button-margin-left, 0px);\n  --margin-right: var(--kui-button-margin-right, 0px);\n  --margin-top: var(--kui-button-margin-top, 0px);\n  --margin-bottom: var(--kui-button-margin-bottom, 0px);\n  --border-size: var(--kui-button-border-width, 2px);\n  --border-style: var(--kui-button-border-style, solid);\n  --border-color: var(--kui-button-border-color, transparent);\n  --border-radius: var(--kui-button-border-radius, 2px);\n}\n\n/* Clear the default button style */\n.kui-button {\n  /* Change the font styles in all browsers */\n  font-family: inherit;\n  line-height: 1.15;\n  /* Remove the margin in Firefox and Safari */\n  margin: 0;\n  /* Show the overflow in IE */\n  overflow: visible;\n  /* Remove the inheritance of text transform in Edge, Firefox, and IE */\n  text-transform: none;\n  /* removes any style keeping only the text*/\n  background: none;\n  border: none;\n}\n\n/* Correct the inability to style clickable types in iOS and Safari */\n.kui-button,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n.kui-button {\n  display: inline-block;\n  color: #747a80;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  line-height: var(--line-height);\n  font-weight: var(--font-weight);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n  padding-top: var(--padding-top);\n  padding-bottom: var(--padding-bottom);\n  padding-left: var(--padding-left);\n  padding-right: var(--padding-right);\n  margin-top: var(--margin-top);\n  margin-bottom: var(--margin-bottom);\n  margin-left: var(--margin-left);\n  margin-right: var(--margin-right);\n  border-width: var(--border-size);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  border-radius: var(--border-radius);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n/* Basic button style */\n.kui-button:hover {\n  text-decoration: none;\n}\n\n.kui-button:focus,\n.kui-button.focus {\n  outline: 0;\n}\n\n.kui-button.disabled,\n.kui-button:disabled {\n  opacity: 0.65;\n}\n\n.kui-button:not(:disabled),\n.kui-button:not(.disabled) {\n  cursor: pointer;\n}\n\n/* Default button style */\n.kui-button-default {\n  color: var(--default-text-color);\n  background-color: var(--default-bg-color);\n  border-color: var(--default-border-color);\n}\n\n.kui-button-default:hover {\n  color: var(--default-text-color-hover);\n  background-color: var(--default-bg-color-hover);\n  border-color: var(--default-border-color-hover);\n}\n\n.kui-button-default:focus,\n.kui-button-default.focus {\n  box-shadow: var(--default-box-shadow);\n}\n\n.kui-button-default.disabled,\n.kui-button-default:disabled {\n  color: var(--default-text-color-disabled);\n  background-color: var(--default-bg-color-disabled);\n  border-color: var(--default-border-color-disabled);\n}\n\n.kui-button-default:not(:disabled):not(.disabled):active,\n.kui-button-default:not(:disabled):not(.disabled).active {\n  color: var(--default-text-color-active);\n  background-color: var(--default-bg-color-active);\n  border-color: var(--default-border-color-active);\n}\n\n.kui-button-default:not(:disabled):not(.disabled):active:focus,\n.kui-button-default:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--default-box-shadow-active);\n}\n\n/* Default outline button style */\n.kui-button-default.outline {\n  color: var(--default-text-color-hover);\n  border-color: var(--default-text-color-hover);\n  background-color: initial;\n}\n\n.kui-button-default.outline:hover {\n  color: var(--default-text-color-hover);\n  background-color: var(--default-bg-color-hover);\n  border-color: var(--default-border-color-hover);\n}\n\n.kui-button-default.outline.disabled,\n.kui-button-default.outline:disabled {\n  color: var(--default-bg-color);\n  border-color: var(--default-border-color-hover);\n  background-color: initial;\n}\n\n/* Primary button style */\n.kui-button-primary {\n  color: var(--primary-text-color);\n  background-color: var(--primary-bg-color);\n  border-color: var(--primary-border-color);\n}\n\n.kui-button-primary:hover {\n  color: var(--primary-text-color-hover);\n  background-color: var(--primary-bg-color-hover);\n  border-color: var(--primary-border-color-hover);\n}\n\n.kui-button-primary:focus,\n.kui-button-primary.focus {\n  box-shadow: var(--primary-box-shadow);\n}\n\n.kui-button-primary.disabled,\n.kui-button-primary:disabled {\n  color: var(--primary-text-color-disabled);\n  background-color: var(--primary-bg-color-disabled);\n  border-color: var(--primary-border-color-disabled);\n}\n\n.kui-button-primary:not(:disabled):not(.disabled):active,\n.kui-button-primary:not(:disabled):not(.disabled).active {\n  color: var(--primary-text-color-active);\n  background-color: var(--primary-bg-color-active);\n  border-color: var(--primary-border-color-active);\n}\n\n.kui-button-primary:not(:disabled):not(.disabled):active:focus,\n.kui-button-primary:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--primary-box-shadow-active);\n}\n\n/* Primary outline button style */\n.kui-button-primary.outline {\n  color: var(--primary-border-color);\n  background-color: initial;\n}\n\n.kui-button-primary.outline:hover {\n  color: var(--primary-text-color-hover);\n  background-color: var(--primary-bg-color-hover);\n}\n\n.kui-button-primary.outline.disabled,\n.kui-button-primary.outline:disabled {\n  color: var(--primary-border-color);\n  background-color: initial;\n}\n\n/* Secondary button style */\n.kui-button-secondary {\n  color: var(--secondary-text-color);\n  background-color: var(--secondary-bg-color);\n  border-color: var(--secondary-border-color);\n}\n\n.kui-button-secondary:hover {\n  color: var(--secondary-text-color-hover);\n  background-color: var(--secondary-bg-color-hover);\n  border-color: var(--secondary-border-color-hover);\n}\n\n.kui-button-secondary:focus,\n.kui-button-secondary.focus {\n  box-shadow: var(--secondary-box-shadow);\n}\n\n.kui-button-secondary.disabled,\n.kui-button-secondary:disabled {\n  color: var(--secondary-text-color-disabled);\n  background-color: var(--secondary-bg-color-disabled);\n  border-color: var(--secondary-border-color-disabled);\n}\n\n.kui-button-secondary:not(:disabled):not(.disabled):active,\n.kui-button-secondary:not(:disabled):not(.disabled).active {\n  color: var(--secondary-text-color-active);\n  background-color: var(--secondary-bg-color-active);\n  border-color: var(--secondary-border-color-active);\n}\n\n.kui-button-secondary:not(:disabled):not(.disabled):active:focus,\n.kui-button-secondary:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--secondary-box-shadow-active);\n}\n\n/* Secondary outline button style */\n.kui-button-secondary.outline {\n  color: var(--secondary-border-color);\n  background-color: initial;\n}\n\n.kui-button-secondary.outline:hover {\n  color: var(--secondary-text-color-hover);\n  background-color: var(--secondary-bg-color-hover);\n}\n\n.kui-button-secondary.outline.disabled,\n.kui-button-secondary.outline:disabled {\n  color: var(--secondary-border-color);\n  background-color: initial;\n}\n\n/* Information button style */\n.kui-button-info {\n  color: var(--info-text-color);\n  background-color: var(--info-bg-color);\n  border-color: var(--info-border-color);\n}\n\n.kui-button-info:hover {\n  color: var(--info-text-color-hover);\n  background-color: var(--info-bg-color-hover);\n  border-color: var(--info-border-color-hover);\n}\n\n.kui-button-info:focus,\n.kui-button-info.focus {\n  box-shadow: var(--info-box-shadow);\n}\n\n.kui-button-info.disabled,\n.kui-button-info:disabled {\n  color: var(--info-text-color-disabled);\n  background-color: var(--info-bg-color-disabled);\n  border-color: var(--info-border-color-disabled);\n}\n\n.kui-button-info:not(:disabled):not(.disabled):active,\n.kui-button-info:not(:disabled):not(.disabled).active {\n  color: var(--info-text-color-active);\n  background-color: var(--info-bg-color-active);\n  border-color: var(--info-border-color-active);\n}\n\n.kui-button-info:not(:disabled):not(.disabled):active:focus,\n.kui-button-info:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--info-box-shadow-active);\n}\n\n/* Information outline button style */\n.kui-button-info.outline {\n  color: var(--info-border-color);\n  background-color: initial;\n}\n\n.kui-button-info.outline:hover {\n  color: var(--info-text-color-hover);\n  background-color: var(--info-bg-color-hover);\n}\n\n.kui-button-info.outline.disabled,\n.kui-button-info.outline:disabled {\n  color: var(--info-border-color);\n  background-color: initial;\n}\n\n/* Dangerous button style */\n.kui-button-dangerous {\n  color: var(--dangerous-text-color);\n  background-color: var(--dangerous-bg-color);\n  border-color: var(--dangerous-border-color);\n}\n\n.kui-button-dangerous:hover {\n  color: var(--dangerous-text-color-hover);\n  background-color: var(--dangerous-bg-color-hover);\n  border-color: var(--dangerous-border-color-hover);\n}\n\n.kui-button-dangerous:focus,\n.kui-button-dangerous.focus {\n  box-shadow: var(--dangerous-box-shadow);\n}\n\n.kui-button-dangerous.disabled,\n.kui-button-dangerous:disabled {\n  color: var(--dangerous-text-color-disabled);\n  background-color: var(--dangerous-bg-color-disabled);\n  border-color: var(--dangerous-border-color-disabled);\n}\n\n.kui-button-dangerous:not(:disabled):not(.disabled):active,\n.kui-button-dangerous:not(:disabled):not(.disabled).active {\n  color: var(--dangerous-text-color-active);\n  background-color: var(--dangerous-bg-color-active);\n  border-color: var(--dangerous-border-color-active);\n}\n\n.kui-button-dangerous:not(:disabled):not(.disabled):active:focus,\n.kui-button-dangerous:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--dangerous-box-shadow-active);\n}\n\n/* Dangerous outline button style */\n.kui-button-dangerous.outline {\n  color: var(--dangerous-border-color);\n  background-color: initial;\n}\n\n.kui-button-dangerous.outline:hover {\n  color: var(--dangerous-text-color-hover);\n  background-color: var(--dangerous-bg-color-hover);\n}\n\n.kui-button-dangerous.outline.disabled,\n.kui-button-dangerous.outline:disabled {\n  color: var(--dangerous-border-color);\n  background-color: initial;\n}\n\n/* Warning button style */\n.kui-button-warning {\n  color: var(--warning-text-color);\n  background-color: var(--warning-bg-color);\n  border-color: var(--warning-border-color);\n}\n\n.kui-button-warning:hover {\n  color: var(--warning-text-color-hover);\n  background-color: var(--warning-bg-color-hover);\n  border-color: var(--warning-border-color-hover);\n}\n\n.kui-button-warning:focus,\n.kui-button-warning.focus {\n  box-shadow: var(--warning-box-shadow);\n}\n\n.kui-button-warning.disabled,\n.kui-button-warning:disabled {\n  color: var(--warning-text-color-disabled);\n  background-color: var(--warning-bg-color-disabled);\n  border-color: var(--warning-border-color-disabled);\n}\n\n.kui-button-warning:not(:disabled):not(.disabled):active,\n.kui-button-warning:not(:disabled):not(.disabled).active {\n  color: var(--warning-text-color-active);\n  background-color: var(--warning-bg-color-active);\n  border-color: var(--warning-border-color-active);\n}\n\n.kui-button-warning:not(:disabled):not(.disabled):active:focus,\n.kui-button-warning:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--warning-box-shadow-active);\n}\n\n/* Warning outline button style */\n.kui-button-warning.outline {\n  color: var(--warning-border-color);\n  background-color: initial;\n}\n\n.kui-button-warning.outline:hover {\n  color: var(--warning-text-color-hover);\n  background-color: var(--warning-bg-color-hover);\n}\n\n.kui-button-warning.outline.disabled,\n.kui-button-warning.outline:disabled {\n  color: var(--warning-border-color);\n  background-color: initial;\n}\n\n/* Success button style */\n.kui-button-success {\n  color: var(--success-text-color);\n  background-color: var(--success-bg-color);\n  border-color: var(--success-border-color);\n}\n\n.kui-button-success:hover {\n  color: var(--success-text-color-hover);\n  background-color: var(--success-bg-color-hover);\n  border-color: var(--success-border-color-hover);\n}\n\n.kui-button-success:focus,\n.kui-button-success.focus {\n  box-shadow: var(--success-box-shadow);\n}\n\n.kui-button-success.disabled,\n.kui-button-success:disabled {\n  color: var(--success-text-color-disabled);\n  background-color: var(--success-bg-color-disabled);\n  border-color: var(--success-border-color-disabled);\n}\n\n.kui-button-success:not(:disabled):not(.disabled):active,\n.kui-button-success:not(:disabled):not(.disabled).active {\n  color: var(--success-text-color-active);\n  background-color: var(--success-bg-color-active);\n  border-color: var(--success-border-color-active);\n}\n\n.kui-button-success:not(:disabled):not(.disabled):active:focus,\n.kui-button-success:not(:disabled):not(.disabled).active:focus {\n  box-shadow: var(--success-box-shadow-active);\n}\n\n/* Success outline button style */\n.kui-button-success.outline {\n  color: var(--success-border-color);\n  background-color: initial;\n}\n\n.kui-button-success.outline:hover {\n  color: var(--success-text-color-hover);\n  background-color: var(--success-bg-color-hover);\n}\n\n.kui-button-success.outline.disabled,\n.kui-button-success.outline:disabled {\n  color: var(--success-border-color);\n  background-color: initial;\n}\n\n/* Link button style */\n.kui-button-link {\n  font-weight: 400;\n  color: var(--link-text-color);\n  text-decoration: var(--link-text-decoration);\n}\n\n.kui-button-link:hover {\n  color: var(--link-text-color-hover);\n  text-decoration: var(--link-text-decoration);\n}\n\n.kui-button-link:focus,\n.kui-button-link.focus {\n  text-decoration: var(--link-text-decoration);\n  box-shadow: none;\n}\n\n.kui-button-link:disabled,\n.kui-button-link.disabled {\n  color: var(--link-text-color-disabled);\n  pointer-events: none;\n}\n\n/* Small button style */\n.kui-button-small {\n  font-size: var(--font-size-small);\n}\n\n/* Large button style */\n.kui-button-large {\n  font-size: var(--font-size-large);\n}\n\n/* Block button style */\n.kui-button-block {\n  display: block;\n  width: 100%;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isNull.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/isNull.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/base/baseElement.js":
/*!*********************************!*\
  !*** ./src/base/baseElement.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/wcUtils */ "./src/utils/wcUtils.js");
/* harmony import */ var Utils_ElementHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/ElementHelper */ "./src/utils/ElementHelper.js");



class BaseElement extends HTMLElement {
	constructor({ templateConfig, attributesConfig, useShadow = true }) {
		super();
		this.templateConfig = templateConfig;
		this.attributesConfig = attributesConfig;
		const { template } = this.templateConfig;
		if (useShadow) {
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__["buildShadowRoot"])(template, this);
		} else {
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__["buildComponentContents"])(template, this);
		}
	}

	attributeChangedCallback(attribute, oldValue, newValue) {
		const { tagName, attributesConfig } = this;
		const attributeChangedHandler =
			attributesConfig[attribute] &&
			attributesConfig[attribute].attributeChangedHandler;
		if (attributeChangedHandler) {
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__["changeHandlerWrapper"])({
				attributesConfig,
				attribute,
				tagName,
				oldValue,
				newValue,
				attributeChangedHandler,
				component: this
			});
		}
	}

	connectedCallback({ element, allowedChildren = [], allowedParents = [] }) {
		if (allowedChildren.length > 0) {
			const children = Utils_ElementHelper__WEBPACK_IMPORTED_MODULE_1__["containerHelper"].validateChildren({
				element,
				allowedChildren,
				tagName: this.tagName
			});
			Utils_ElementHelper__WEBPACK_IMPORTED_MODULE_1__["containerHelper"].registerChildren({
				children,
				callback: this.childrenDefinedCallback.bind(this)
			});
		}
		if (allowedParents.length > 0) {
			Utils_ElementHelper__WEBPACK_IMPORTED_MODULE_1__["containedHelper"].validateParent({
				element,
				allowedParents,
				tagName: this.tagName
			});
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (BaseElement);


/***/ }),

/***/ "./src/components/button/config.js":
/*!*****************************************!*\
  !*** ./src/components/button/config.js ***!
  \*****************************************/
/*! exports provided: default, Style, Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attributesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Utils_wcUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/wcUtils */ "./src/utils/wcUtils.js");
/* harmony import */ var Utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils/validators */ "./src/utils/validators.js");





const Style = {
	Default: "kui-button-default",
	Primary: "kui-button-primary",
	Secondary: "kui-button-secondary",
	Information: "kui-button-info",
	Dangerous: "kui-button-dangerous",
	Warning: "kui-button-warning",
	Success: "kui-button-success",
	Link: "kui-button-link"
};

const Size = {
	Normal: "",
	Small: "kui-button-small",
	Large: "kui-button-large",
	Block: "kui-button-block"
};

const attributesConfig = {
	"kui-text": {
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			button.innerText = newValue || "";
		},
		validators: [lodash_isString__WEBPACK_IMPORTED_MODULE_0___default.a]
	},
	"kui-style": {
		defaultValue: Style.Default,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-style"].default;
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_1__["applyClassName"])({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [lodash_isString__WEBPACK_IMPORTED_MODULE_0___default.a, Object(Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isValueOf"])(Style)]
	},
	"kui-size": {
		defaultValue: Size.Normal,
		attributeChangedHandler: function({ oldValue, newValue, component }) {
			const { button } = component.elements;
			const defaultValue = attributesConfig["kui-size"].default;
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_1__["applyClassName"])({ oldValue, newValue, element: button, defaultValue });
		},
		validators: [lodash_isString__WEBPACK_IMPORTED_MODULE_0___default.a, Object(Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isValueOf"])(Size)]
	},
	"kui-outline": {
		defaultValue: false,
		setter: Utils_wcUtils__WEBPACK_IMPORTED_MODULE_1__["booleanSetter"],
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (Object(Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isTrue"])(newValue) || newValue === "") {
				button.classList.add("outline");
			} else {
				button.classList.remove("outline");
			}
		},
		validators: [Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isBooleanAttribute"]]
	},
	"kui-disabled": {
		defaultValue: false,
		setter: Utils_wcUtils__WEBPACK_IMPORTED_MODULE_1__["booleanSetter"],
		attributeChangedHandler: function({ newValue, component }) {
			const { button } = component.elements;
			if (Object(Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isTrue"])(newValue) || newValue === "") {
				button.classList.add("disabled");
				button.setAttribute("disabled", "");
			} else {
				button.classList.remove("disabled");
				button.removeAttribute("disabled");
			}
		},
		validators: [Utils_validators__WEBPACK_IMPORTED_MODULE_2__["isBooleanAttribute"]]
	}
};



/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default, tagName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kui-button */ "./src/components/button/kui-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _kui_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return _kui_button__WEBPACK_IMPORTED_MODULE_0__["tagName"]; });


_kui_button__WEBPACK_IMPORTED_MODULE_0__["default"].defineCustomElement();


/***/ }),

/***/ "./src/components/button/kui-button.js":
/*!*********************************************!*\
  !*** ./src/components/button/kui-button.js ***!
  \*********************************************/
/*! exports provided: default, tagName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KUIButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return tagName; });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Base_baseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Base/baseElement */ "./src/base/baseElement.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/components/button/config.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template */ "./src/components/button/template.js");
/* harmony import */ var Utils_wcUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utils/wcUtils */ "./src/utils/wcUtils.js");








const tagName = "kui-button";
/**
 * Button element
 */
class KUIButton extends Base_baseElement__WEBPACK_IMPORTED_MODULE_2__["default"] {
	constructor() {
		super({ templateConfig: _template__WEBPACK_IMPORTED_MODULE_4__["default"], attributesConfig: _config__WEBPACK_IMPORTED_MODULE_3__["default"] });
		this.elements = {
			button: this.shadowRoot.querySelector(
				_template__WEBPACK_IMPORTED_MODULE_4__["default"].selectors.button
			)
		};
	}
	static get observedAttributes() {
		return lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_3__["default"]);
	}
	static get Style() {
		return _config__WEBPACK_IMPORTED_MODULE_3__["Style"];
	}
	static get Size() {
		return _config__WEBPACK_IMPORTED_MODULE_3__["Size"];
	}
	static defineCustomElement() {
		if(!KUIButton.defined){
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_5__["defineCustomElement"])({
				componentClass: KUIButton,
				tagName,
				attributesConfig: _config__WEBPACK_IMPORTED_MODULE_3__["default"]
			});
			KUIButton.defined = true;
		}
	}
	addClickHandler(handler) {
		if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(handler)) {
			this.elements.button.addEventListener("click", handler);
		}
	}
	removeClickHandler(handler) {
		if (handler) {
			this.elements.button.removeEventListener("click", handler);
		}
	}
}


/***/ }),

/***/ "./src/components/button/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/button/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/button/styles.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/button/template.js":
/*!*******************************************!*\
  !*** ./src/components/button/template.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/components/button/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kui-button */ "./src/components/button/kui-button.js");



const template = document.createElement("template");
template.innerHTML = `
	<style>
		${_styles_scss__WEBPACK_IMPORTED_MODULE_0___default.a}
	</style>
	<button class="kui-button">
		<slot></slot>
	</button>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, _kui_button__WEBPACK_IMPORTED_MODULE_1__["tagName"]);

/* harmony default export */ __webpack_exports__["default"] = ({
	template,
	selectors: {
		button: "button.kui-button"
	}
});


/***/ }),

/***/ "./src/utils/ElementHelper.js":
/*!************************************!*\
  !*** ./src/utils/ElementHelper.js ***!
  \************************************/
/*! exports provided: containerHelper, containedHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerHelper", function() { return containerHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containedHelper", function() { return containedHelper; });
/**
 * Validates if the container element contains only allowed children elements
 *
 * @returns a list of the found allowed elements tag names
 */
function validateChildren({ element, allowedChildren, tagName }) {
	const childrenTypes = [];
	if (element.hasChildNodes()) {
		let children = element.childNodes;
		for (let i = 0; i < children.length; i++) {
			let childTagName = children[i].tagName.toLowerCase();
			if (allowedChildren.indexOf(childTagName) === -1) {
				const acs = allowedChildren.join(", ");
				throw new Error(
					`${tagName} element accepts only [${acs}] elements as children, but it has ${childTagName}`
				);
			} else if (childrenTypes.indexOf(childTagName) === -1) {
				childrenTypes.push(childTagName);
			}
		}
	}
	return childrenTypes;
}

/**
 * Validates if the contained element is a child of only allowed parent elements
 *
 */
function validateParent({ element, allowedParents, tagName }) {
	if (element.hasChildNodes()) {
		let parentNode = element.parentNode;
		const aps = allowedParents.join(", ");
		if (parentNode) {
			const parentTagName = parentNode.tagName.toLowerCase();
			if (allowedParents.indexOf(parentTagName) === -1) {
				throw new Error(`${tagName} must be a child of ${aps}`);
			}
		} else {
			throw new Error(`${tagName} must be a child of ${aps}`);
		}
	}
}

const containerHelper = {
	validateChildren
};
const containedHelper = {
	validateParent
};


/***/ }),

/***/ "./src/utils/validators.js":
/*!*********************************!*\
  !*** ./src/utils/validators.js ***!
  \*********************************/
/*! exports provided: isTrue, isFalse, isBooleanAttribute, isValueOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTrue", function() { return isTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalse", function() { return isFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBooleanAttribute", function() { return isBooleanAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueOf", function() { return isValueOf; });
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Initialy we use the lodash library for validations and utility functions, but if there is something
 * specific we add it here
 */


/**
 * Check if the value is a string representation of the Boolean.TRUE
 * @param {Any} str the value to test
 */
function isTrue(str) {
	return (
		str === true ||
		(!!str && lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(str) && str.toLowerCase() === "true")
	);
}
/**
 * Check if the value is a string representation of the Boolean.FALSE
 * @param {Any} str the value to test
 */
function isFalse(str) {
	return (
		str === false ||
		(!!str && lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(str) && str.toLowerCase() === "false")
	);
}
/**
 * Check if the value is represents a boolean value of an attribute empty string, true/false
 * @param {Any} str the value to test
 */
function isBooleanAttribute(str) {
	return str === "" || isTrue(str) || isFalse(str);
}
/**
 * Returns a function that given a value, it will return if it's found in the map or not (=== check)
 * @param {Object} map The map containing the values
 */
function isValueOf(map) {
	return function isValueOfMap(value) {
		return (
			Object.entries(map).filter(pair => pair[1] === value).length === 1
		);
	};
}

/***/ }),

/***/ "./src/utils/wcUtils.js":
/*!******************************!*\
  !*** ./src/utils/wcUtils.js ***!
  \******************************/
/*! exports provided: booleanSetter, buildShadowRoot, buildComponentContents, changeHandlerWrapper, defineCustomElement, applyClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "booleanSetter", function() { return booleanSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildShadowRoot", function() { return buildShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildComponentContents", function() { return buildComponentContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeHandlerWrapper", function() { return changeHandlerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElement", function() { return defineCustomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyClassName", function() { return applyClassName; });
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isNull */ "./node_modules/lodash/isNull.js");
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./src/utils/validators.js");






/**
 * Executes an array of validators one after the other till one fails or all succeed
 */
function applyValidators({
	attribute,
	tagName,
	validators = [],
	value,
	isRequired = false
}) {
	if (validators.length > 0) {
		if (value === null && isRequired) {
			console.log(`${tagName}.${attribute} is required`);
			return false;
		}
		for (let i = 0; i < validators.length; i++) {
			if (value && lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(validators[i]) && !validators[i](value)) {
				console.log(`${tagName}.${attribute}:\nvalue:'${value}' failed ${validators[i].name} validation`);
				return false;
			}
		}
	}
	return true;
}

/**
 * Executes an array of transformers one after the other manipulating the given value, and return the final transformed value
 */
function applyTransformers({ transformers = [], value }) {
	let tv = value;
	if (transformers.length > 0) {
		for (let i = 0; i < transformers.length; i++) {
			if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(transformers[i])) {
				tv = transformers[i](tv);
			}
		}
	}
	return tv;
}

function beforeChangeValue({ attributesConfig, attribute, tagName, value }) {
	const attributeConfig = attributesConfig[attribute];
	const { validators, transformers, isRequired } = attributeConfig;
	if (!applyValidators({ attribute, tagName, validators, value, isRequired }))
		return { isValid: false };
	const transformedValue = applyTransformers({ transformers, value });
	return { transformedValue, isValid: true };
}

function defaultSetter({ component, attributesConfig, attribute, value }) {
	const { tagName } = component;
	const { validators, isRequired } = attributesConfig[attribute];
	const valid = applyValidators({ attribute, tagName, validators, value, isRequired });
	if (valid) {
		component.setAttribute(attribute, value);
	}
}

function defaultGetter({ component, attribute, defaultValue }) {
	if(component.getAttribute(attribute) === null && 
		!(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(defaultValue) || lodash_isNull__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue))) {
		component.setAttribute(attribute, defaultValue);
	}
	return component.getAttribute(attribute);	
}

function booleanSetter({ component, attribute, value }) {
	Object(_validators__WEBPACK_IMPORTED_MODULE_4__["isTrue"])(value) ? component.setAttribute(attribute, "") : component.removeAttribute(attribute);
}

function buildShadowRoot(template, host) {
	window.ShadyCSS && window.ShadyCSS.styleElement(host);
	host.attachShadow({ mode: "open" });
	host.shadowRoot.appendChild(template.content.cloneNode(true));
}

function buildComponentContents(template, host) {
	window.ShadyCSS && window.ShadyCSS.styleElement(host);
	host.innerHTML = "";
	host.appendChild(template.content.cloneNode(true));
}

/**
 * wraps a change handler with the following procedure,
 * first validate the change then apply transformations on the attribute and finaly apply the user's change handler
 */
function changeHandlerWrapper({
	attributesConfig,
	attribute,
	tagName,
	oldValue,
	newValue,
	attributeChangedHandler,
	component
}) {
	const { transformedValue, isValid } = beforeChangeValue({
		attributesConfig,
		attribute,
		tagName,
		value: newValue
	});
	if (isValid) {
		attributeChangedHandler({
			attribute,
			oldValue,
			newValue: transformedValue,
			component
		});
		if(Object(_validators__WEBPACK_IMPORTED_MODULE_4__["isFalse"])(transformedValue)) {
			component.removeAttribute(attribute);		
		}
	} else if(!oldValue && oldValue !== "") {
		// The attribute is a boolean one and the old value was falsy
		component.removeAttribute(attribute);
	} else {
		// Set back the old value back
		component.setAttribute(attribute, oldValue);
	}
}

/**
 * Defines a custom element while exposing public API for all the attributes
 */
function defineCustomElement({
	componentClass,
	attributesConfig,
	tagName
}) {
	//Define a public API for the attributes to be used as properties as well
	componentClass.observedAttributes.forEach(function(attribute) {
		Object.defineProperty(
			componentClass.prototype,
			lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(attribute),
			{
				enumerable: true,
				set: function(value) {
					const attributeConfig = attributesConfig[attribute];
					if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(attributeConfig.setter)) {
						attributeConfig.setter.call(this, {
							component: this,
							attributesConfig,
							attribute,
							value
						});
					} else if (
						attributeConfig.setter === true ||
						lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(attributeConfig.setter)
					) {
						defaultSetter.call(this, {
							component: this,
							attributesConfig,
							attribute,
							value
						});
					}
				},
				get: function() {
					const attributeConfig = attributesConfig[attribute];
					if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(attributeConfig.getter)) {
						return attributeConfig.getter.call(this, {
							component: this,
							attributesConfig,
							attribute
						});
					} else if (
						attributeConfig.getter === true ||
						lodash_isUndefined__WEBPACK_IMPORTED_MODULE_2___default()(attributeConfig.getter)
					) {
						return defaultGetter.call(this, {
							component: this,
							attribute,
							defaultValue: attributesConfig[attribute].defaultValue
						});
					}
					return attributesConfig[attribute].defaultValue;
				}
			}
		);
	});
	window.customElements.define(tagName, componentClass);
}

function applyClassName({
	oldValue,
	newValue,
	element,
	defaultValue = ""
}) {
	const { classList } = element;
	if (newValue) {
		if (oldValue) {
			classList.remove.apply(classList, oldValue.split(" "));
		}
		classList.add.apply(classList, newValue.split(" "));
	} else if (oldValue) {
		classList.remove.apply(classList, oldValue.split(" "));
		classList.add.apply(classList, defaultValue.split(" "));
	}
}


/***/ })

},[["./src/components/button/index.js","runtime~button"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc2NpaVdvcmRzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RTbGljZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDYXNlRmlyc3QuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ29tcG91bmRlci5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlV29yZC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FtZWxDYXNlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYnVyci5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc051bGwuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1VuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3VwcGVyRmlyc3QuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vc3JjL2Jhc2UvYmFzZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2t1aS1idXR0b24uanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL3N0eWxlcy5zY3NzP2VlMjQiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL3RlbXBsYXRlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy91dGlscy9FbGVtZW50SGVscGVyLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy91dGlscy92YWxpZGF0b3JzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy91dGlscy93Y1V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsQ0FBQztBQUNELE87Ozs7Ozs7OztBQ1ZBLDJCQUEyQixtQkFBTyxDQUFDLDJHQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLGlFQUFpRSw2RUFBNkUsbUZBQW1GLCtFQUErRSw2REFBNkQseUVBQXlFLCtFQUErRSwyRUFBMkUscUVBQXFFLGlGQUFpRix1RkFBdUYsbUZBQW1GLDBGQUEwRix3R0FBd0csaUVBQWlFLDZFQUE2RSxtRkFBbUYsK0VBQStFLDZEQUE2RCx5RUFBeUUsK0VBQStFLDJFQUEyRSxxRUFBcUUsaUZBQWlGLHVGQUF1RixtRkFBbUYseUZBQXlGLHVHQUF1RyxxRUFBcUUsaUZBQWlGLHVGQUF1RixtRkFBbUYsaUVBQWlFLDZFQUE2RSxtRkFBbUYsK0VBQStFLHlFQUF5RSxxRkFBcUYsMkZBQTJGLHVGQUF1Riw4RkFBOEYsb0dBQW9HLDJEQUEyRCx1RUFBdUUsNkVBQTZFLHlFQUF5RSx1REFBdUQsbUVBQW1FLHlFQUF5RSxxRUFBcUUsK0RBQStELDJFQUEyRSxpRkFBaUYsNkVBQTZFLG1GQUFtRixpR0FBaUcscUVBQXFFLGlGQUFpRix1RkFBdUYsbUZBQW1GLGlFQUFpRSw2RUFBNkUsbUZBQW1GLCtFQUErRSx5RUFBeUUsK0VBQStFLGtGQUFrRixnRkFBZ0YsOEZBQThGLDRHQUE0RyxpRUFBaUUsNkVBQTZFLG1GQUFtRiwrRUFBK0UsNkRBQTZELHlFQUF5RSwrRUFBK0UsMkVBQTJFLHFFQUFxRSxpRkFBaUYsdUZBQXVGLG1GQUFtRix5RkFBeUYsdUdBQXVHLGlFQUFpRSx1RUFBdUUsMEVBQTBFLHdFQUF3RSw2REFBNkQseUVBQXlFLCtFQUErRSwyRUFBMkUscUVBQXFFLDJFQUEyRSw4RUFBOEUsNEVBQTRFLHlGQUF5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O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxRQUFRLFlBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJrb3RjaGktYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiS1VJYnV0dG9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtvdGNoaVVJXCJdID0gcm9vdFtcImtvdGNoaVVJXCJdIHx8IHt9LCByb290W1wia290Y2hpVUlcIl1bXCJLVUlidXR0b25cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3IsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3ItaG92ZXIsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3ItZGlzYWJsZWQsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGVmYXVsdC10ZXh0LWNvbG9yLWFjdGl2ZSwgIzUyNWE2Mik7XFxuICAtLWRlZmF1bHQtYmctY29sb3I6IHZhcigtLWt1aS1kZWZhdWx0LWJnLWNvbG9yLCAjZjZmNmY2KTtcXG4gIC0tZGVmYXVsdC1iZy1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLWRlZmF1bHQtYmctY29sb3ItaG92ZXIsICNlM2UzZTMpO1xcbiAgLS1kZWZhdWx0LWJnLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGVmYXVsdC1iZy1jb2xvci1kaXNhYmxlZCwgI2Y2ZjZmNik7XFxuICAtLWRlZmF1bHQtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGVmYXVsdC1iZy1jb2xvci1hY3RpdmUsICNkZGRjZGMpO1xcbiAgLS1kZWZhdWx0LWJvcmRlci1jb2xvcjogdmFyKC0ta3VpLWRlZmF1bHQtYm9yZGVyLWNvbG9yLCAjZjZmNmY2KTtcXG4gIC0tZGVmYXVsdC1ib3JkZXItY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kZWZhdWx0LWJvcmRlci1jb2xvci1ob3ZlciwgI2RkZGNkYyk7XFxuICAtLWRlZmF1bHQtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGVmYXVsdC1ib3JkZXItY29sb3ItZGlzYWJsZWQsICNmNmY2ZjYpO1xcbiAgLS1kZWZhdWx0LWJvcmRlci1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1kZWZhdWx0LWJvcmRlci1jb2xvci1hY3RpdmUsICNkNmQ2ZDYpO1xcbiAgLS1kZWZhdWx0LWJveC1zaGFkb3c6IHZhcigtLWt1aS1kZWZhdWx0LWJveC1zaGFkb3csIDAgMCAwIDAgcmdiYSgyMjEsIDIyMywgMjI0LCAwLjUpKTtcXG4gIC0tZGVmYXVsdC1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLWRlZmF1bHQtYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSgyMjEsIDIyMywgMjI0LCAwLjUpKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLWhvdmVyLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLWRpc2FibGVkLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yOiB2YXIoLS1rdWktcHJpbWFyeS1iZy1jb2xvciwgIzIxOTZmMyk7XFxuICAtLXByaW1hcnktYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1wcmltYXJ5LWJnLWNvbG9yLWhvdmVyLCAjMGM4M2UyKTtcXG4gIC0tcHJpbWFyeS1iZy1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXByaW1hcnktYmctY29sb3ItZGlzYWJsZWQsICMyMTk2ZjMpO1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktYmctY29sb3ItYWN0aXZlLCAjMGM3Y2Q1KTtcXG4gIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1wcmltYXJ5LWJvcmRlci1jb2xvciwgIzIxOTZmMyk7XFxuICAtLXByaW1hcnktYm9yZGVyLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktcHJpbWFyeS1ib3JkZXItY29sb3ItaG92ZXIsICMwYzdjZDUpO1xcbiAgLS1wcmltYXJ5LWJvcmRlci1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXByaW1hcnktYm9yZGVyLWNvbG9yLWRpc2FibGVkLCAjMjE5NmYzKTtcXG4gIC0tcHJpbWFyeS1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktcHJpbWFyeS1ib3JkZXItY29sb3ItYWN0aXZlLCAjMGI3NWM5KTtcXG4gIC0tcHJpbWFyeS1ib3gtc2hhZG93OiB2YXIoLS1rdWktcHJpbWFyeS1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoNjYsIDE2NiwgMjQ1LCAwLjUpKTtcXG4gIC0tcHJpbWFyeS1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSg2NiwgMTY2LCAyNDUsIDAuNSkpO1xcbiAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0ta3VpLXNlY29uZGFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zZWNvbmRhcnktdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc2Vjb25kYXJ5LXRleHQtY29sb3ItZGlzYWJsZWQsICNmZmZmZmYpO1xcbiAgLS1zZWNvbmRhcnktdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1zZWNvbmRhcnktdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3I6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3IsICM4NjhlOTYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3ItaG92ZXIsICM3MjdiODQpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3ItZGlzYWJsZWQsICM4NjhlOTYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJnLWNvbG9yLWFjdGl2ZSwgIzZjNzU3ZCk7XFxuICAtLXNlY29uZGFyeS1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yLCAjODY4ZTk2KTtcXG4gIC0tc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3JkZXItY29sb3ItaG92ZXIsICM2Yzc1N2QpO1xcbiAgLS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1kaXNhYmxlZCwgIzg2OGU5Nik7XFxuICAtLXNlY29uZGFyeS1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1hY3RpdmUsICM2NjZlNzYpO1xcbiAgLS1zZWNvbmRhcnktYm94LXNoYWRvdzogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoMTUyLCAxNTksIDE2NiwgMC41KSk7XFxuICAtLXNlY29uZGFyeS1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3gtc2hhZG93LWFjdGl2ZSwgcmdiYSgxNTIsIDE1OSwgMTY2LCAwLjUpKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLWhvdmVyLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLWRpc2FibGVkLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1pbmZvLWJnLWNvbG9yOiB2YXIoLS1rdWktaW5mby1iZy1jb2xvciwgIzAzYTlmNCk7XFxuICAtLWluZm8tYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1pbmZvLWJnLWNvbG9yLWhvdmVyLCAjMDM4ZmNlKTtcXG4gIC0taW5mby1iZy1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLWluZm8tYmctY29sb3ItZGlzYWJsZWQsICMwM2E5ZjQpO1xcbiAgLS1pbmZvLWJnLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tYmctY29sb3ItYWN0aXZlLCAjMDI4NmMyKTtcXG4gIC0taW5mby1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1pbmZvLWJvcmRlci1jb2xvciwgIzAzYTlmNCk7XFxuICAtLWluZm8tYm9yZGVyLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktaW5mby1ib3JkZXItY29sb3ItaG92ZXIsICMwMjg2YzIpO1xcbiAgLS1pbmZvLWJvcmRlci1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLWluZm8tYm9yZGVyLWNvbG9yLWRpc2FibGVkLCAjMDNhOWY0KTtcXG4gIC0taW5mby1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktaW5mby1ib3JkZXItY29sb3ItYWN0aXZlLCAjMDI3ZGI1KTtcXG4gIC0taW5mby1ib3gtc2hhZG93OiB2YXIoLS1rdWktaW5mby1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoNDEsIDE4MiwgMjQ2LCAwLjUpKTtcXG4gIC0taW5mby1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSg0MSwgMTgyLCAyNDYsIDAuNSkpO1xcbiAgLS1kYW5nZXJvdXMtdGV4dC1jb2xvcjogdmFyKC0ta3VpLWRhbmdlcm91cy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tZGFuZ2Vyb3VzLXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kYW5nZXJvdXMtdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLWRhbmdlcm91cy10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLXRleHQtY29sb3ItZGlzYWJsZWQsICNmZmZmZmYpO1xcbiAgLS1kYW5nZXJvdXMtdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1kYW5nZXJvdXMtdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3I6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3IsICNmZjZiNjgpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3ItaG92ZXIsICNmZjQ2NDIpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3ItZGlzYWJsZWQsICNmZjZiNjgpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJnLWNvbG9yLWFjdGl2ZSwgI2ZmMzkzNSk7XFxuICAtLWRhbmdlcm91cy1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1kYW5nZXJvdXMtYm9yZGVyLWNvbG9yLCAjZmY2YjY4KTtcXG4gIC0tZGFuZ2Vyb3VzLWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLWRhbmdlcm91cy1ib3JkZXItY29sb3IsICNmZjM5MzUpO1xcbiAgLS1kYW5nZXJvdXMtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJvcmRlci1jb2xvciwgI2ZmNmI2OCk7XFxuICAtLWRhbmdlcm91cy1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJvcmRlci1jb2xvciwgI2ZmMmQyOCk7XFxuICAtLWRhbmdlcm91cy1ib3gtc2hhZG93OiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJveC1zaGFkb3csIDAgMCAwIDAgcmdiYSgyNTUsIDEyOSwgMTI3LCAwLjUpKTtcXG4gIC0tZGFuZ2Vyb3VzLWJveC1zaGFkb3ctYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoMjU1LCAxMjksIDEyNywgMC41KSk7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvciwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvci1kaXNhYmxlZCwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLXRleHQtY29sb3ItYWN0aXZlLCAjZmZmZmZmKTtcXG4gIC0td2FybmluZy1iZy1jb2xvcjogdmFyKC0ta3VpLXdhcm5pbmctYmctY29sb3IsICNmZmM3MjEpO1xcbiAgLS13YXJuaW5nLWJnLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktd2FybmluZy1iZy1jb2xvci1ob3ZlciwgI2ZhYmIwMCk7XFxuICAtLXdhcm5pbmctYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS13YXJuaW5nLWJnLWNvbG9yLWRpc2FibGVkLCAjZmZjNzIxKTtcXG4gIC0td2FybmluZy1iZy1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLWJnLWNvbG9yLWFjdGl2ZSwgI2VkYjEwMCk7XFxuICAtLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1rdWktd2FybmluZy1ib3JkZXItY29sb3IsICNmZmM3MjEpO1xcbiAgLS13YXJuaW5nLWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXdhcm5pbmctYm9yZGVyLWNvbG9yLWhvdmVyLCAjZWRiMTAwKTtcXG4gIC0td2FybmluZy1ib3JkZXItY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS13YXJuaW5nLWJvcmRlci1jb2xvci1kaXNhYmxlZCwgI2ZmYzcyMSk7XFxuICAtLXdhcm5pbmctYm9yZGVyLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXdhcm5pbmctYm9yZGVyLWNvbG9yLWFjdGl2ZSwgI2UwYTgwMCk7XFxuICAtLXdhcm5pbmctYm94LXNoYWRvdzogdmFyKC0ta3VpLXdhcm5pbmctYm94LXNoYWRvdywgMCAwIDAgMCByZ2JhKDI1NSwgMjA3LCA2NiwgMC41KSk7XFxuICAtLXdhcm5pbmctYm94LXNoYWRvdy1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoMjU1LCAyMDcsIDY2LCAwLjUpKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXN1Y2Nlc3MtdGV4dC1jb2xvciwgI2ZmZmZmZik7XFxuICAtLXN1Y2Nlc3MtYmctY29sb3I6IHZhcigtLWt1aS1zdWNjZXNzLWJnLWNvbG9yLCAjMzJjNzg3KTtcXG4gIC0tc3VjY2Vzcy1iZy1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXN1Y2Nlc3MtYmctY29sb3ItaG92ZXIsICMyYWE4NzIpO1xcbiAgLS1zdWNjZXNzLWJnLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy1iZy1jb2xvci1kaXNhYmxlZCwgIzMyYzc4Nyk7XFxuICAtLXN1Y2Nlc3MtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc3VjY2Vzcy1iZy1jb2xvci1hY3RpdmUsICMyODllNmIpO1xcbiAgLS1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0ta3VpLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLCAjMzJjNzg3KTtcXG4gIC0tc3VjY2Vzcy1ib3JkZXItY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zdWNjZXNzLWJvcmRlci1jb2xvciwgIzI4OWU2Yik7XFxuICAtLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy1ib3JkZXItY29sb3IsICMzMmM3ODcpO1xcbiAgLS1zdWNjZXNzLWJvcmRlci1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1zdWNjZXNzLWJvcmRlci1jb2xvciwgIzI1OTQ2NCk7XFxuICAtLXN1Y2Nlc3MtYm94LXNoYWRvdzogdmFyKC0ta3VpLXN1Y2Nlc3MtYm94LXNoYWRvdywgMCAwIDAgMCByZ2JhKDgxLCAyMDcsIDE1MywgMC41KSk7XFxuICAtLXN1Y2Nlc3MtYm94LXNoYWRvdy1hY3RpdmU6IHZhcigtLWt1aS1zdWNjZXNzLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoODEsIDIwNywgMTUzLCAwLjUpKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjMjE5NmYzKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjMGE2ZWJkKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjODY4ZTk2KTtcXG4gIC0tbGluay10ZXh0LWRlY29yYXRpb246IHZhcigtLWt1aS1saW5rLXRleHQtZGVjb3JhdGlvbiwgdW5kZXJsaW5lKTtcXG59XFxuXFxuOmhvc3Qge1xcbiAgLyogVmFyaWFibGVzICovXFxuICAtLWxpbmUtaGVpZ2h0OiB2YXIoLS1rdWktYnV0dG9uLWxpbmUtaGVpZ2h0LCAxLjUpO1xcbiAgLS1mb250LWZhbWlseTogdmFyKC0ta3VpLWJ1dHRvbi1mb250LWZhbWlseSwgXFxcIlJvYm90b1xcXCIgLFxcXCJzYW5zLXNlcmlmXFxcIik7XFxuICAtLWZvbnQtd2VpZ2h0OiB2YXIoLS1rdWktYnV0dG9uLWZvbnQtd2VpZ2h0LCA0MDApO1xcbiAgLS1mb250LXNpemU6IHZhcigtLWt1aS1idXR0b24tZm9udC1zaXplLCAxLjI1cmVtKTtcXG4gIC0tZm9udC1zaXplLXNtYWxsOiB2YXIoLS1rdWktYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSwgMC43NXJlbSk7XFxuICAtLWZvbnQtc2l6ZS1sYXJnZTogdmFyKC0ta3VpLWJ1dHRvbi1sYXJnZS1mb250LXNpemUsIDEuMjVyZW0pO1xcbiAgLS1wYWRkaW5nLWxlZnQ6IHZhcigtLWt1aS1idXR0b24tcGFkZGluZy1sZWZ0LCAxMHB4KTtcXG4gIC0tcGFkZGluZy1yaWdodDogdmFyKC0ta3VpLWJ1dHRvbi1wYWRkaW5nLXJpZ2h0LCAxMHB4KTtcXG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWt1aS1idXR0b24tcGFkZGluZy10b3AsIDVweCk7XFxuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1rdWktYnV0dG9uLXBhZGRpbmctYm90dG9tLCA1cHgpO1xcbiAgLS1tYXJnaW4tbGVmdDogdmFyKC0ta3VpLWJ1dHRvbi1tYXJnaW4tbGVmdCwgMHB4KTtcXG4gIC0tbWFyZ2luLXJpZ2h0OiB2YXIoLS1rdWktYnV0dG9uLW1hcmdpbi1yaWdodCwgMHB4KTtcXG4gIC0tbWFyZ2luLXRvcDogdmFyKC0ta3VpLWJ1dHRvbi1tYXJnaW4tdG9wLCAwcHgpO1xcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1rdWktYnV0dG9uLW1hcmdpbi1ib3R0b20sIDBweCk7XFxuICAtLWJvcmRlci1zaXplOiB2YXIoLS1rdWktYnV0dG9uLWJvcmRlci13aWR0aCwgMnB4KTtcXG4gIC0tYm9yZGVyLXN0eWxlOiB2YXIoLS1rdWktYnV0dG9uLWJvcmRlci1zdHlsZSwgc29saWQpO1xcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1idXR0b24tYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XFxuICAtLWJvcmRlci1yYWRpdXM6IHZhcigtLWt1aS1idXR0b24tYm9yZGVyLXJhZGl1cywgMnB4KTtcXG59XFxuXFxuLyogQ2xlYXIgdGhlIGRlZmF1bHQgYnV0dG9uIHN0eWxlICovXFxuLmt1aS1idXR0b24ge1xcbiAgLyogQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIFNob3cgdGhlIG92ZXJmbG93IGluIElFICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIC8qIHJlbW92ZXMgYW55IHN0eWxlIGtlZXBpbmcgb25seSB0aGUgdGV4dCovXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4vKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpICovXFxuLmt1aS1idXR0b24sXFxuW3R5cGU9YnV0dG9uXSxcXG5bdHlwZT1yZXNldF0sXFxuW3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLmt1aS1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICM3NDdhODA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0KTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmctdG9wKTtcXG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLWJvdHRvbSk7XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmctbGVmdCk7XFxuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLXJpZ2h0KTtcXG4gIG1hcmdpbi10b3A6IHZhcigtLW1hcmdpbi10b3ApO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSk7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tcmlnaHQpO1xcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1ib3JkZXItc2l6ZSk7XFxuICBib3JkZXItc3R5bGU6IHZhcigtLWJvcmRlci1zdHlsZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi8qIEJhc2ljIGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmt1aS1idXR0b246Zm9jdXMsXFxuLmt1aS1idXR0b24uZm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLmt1aS1idXR0b24uZGlzYWJsZWQsXFxuLmt1aS1idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuLmt1aS1idXR0b246bm90KDpkaXNhYmxlZCksXFxuLmt1aS1idXR0b246bm90KC5kaXNhYmxlZCkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBEZWZhdWx0IGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uLWRlZmF1bHQge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kZWZhdWx0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3ItaG92ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVmYXVsdC1iZy1jb2xvci1ob3Zlcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRlZmF1bHQtYm9yZGVyLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmt1aS1idXR0b24tZGVmYXVsdDpmb2N1cyxcXG4ua3VpLWJ1dHRvbi1kZWZhdWx0LmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRlZmF1bHQtYm94LXNoYWRvdyk7XFxufVxcblxcbi5rdWktYnV0dG9uLWRlZmF1bHQuZGlzYWJsZWQsXFxuLmt1aS1idXR0b24tZGVmYXVsdDpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tZGVmYXVsdC10ZXh0LWNvbG9yLWRpc2FibGVkKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3ItZGlzYWJsZWQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJvcmRlci1jb2xvci1kaXNhYmxlZCk7XFxufVxcblxcbi5rdWktYnV0dG9uLWRlZmF1bHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxcbi5rdWktYnV0dG9uLWRlZmF1bHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LXRleHQtY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZmF1bHQtYmctY29sb3ItYWN0aXZlKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1ib3JkZXItY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuLmt1aS1idXR0b24tZGVmYXVsdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXFxuLmt1aS1idXR0b24tZGVmYXVsdDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1ib3gtc2hhZG93LWFjdGl2ZSk7XFxufVxcblxcbi8qIERlZmF1bHQgb3V0bGluZSBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1kZWZhdWx0Lm91dGxpbmUge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvci1ob3Zlcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kZWZhdWx0Lm91dGxpbmU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRlZmF1bHQtdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yLWhvdmVyKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1ib3JkZXItY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kZWZhdWx0Lm91dGxpbmUuZGlzYWJsZWQsXFxuLmt1aS1idXR0b24tZGVmYXVsdC5vdXRsaW5lOmRpc2FibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWJnLWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGVmYXVsdC1ib3JkZXItY29sb3ItaG92ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLyogUHJpbWFyeSBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1wcmltYXJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmt1aS1idXR0b24tcHJpbWFyeTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLWhvdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3ItaG92ZXIpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLXByaW1hcnk6Zm9jdXMsXFxuLmt1aS1idXR0b24tcHJpbWFyeS5mb2N1cyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1wcmltYXJ5LWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1wcmltYXJ5LmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXByaW1hcnk6ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvci1kaXNhYmxlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWRpc2FibGVkKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3ItZGlzYWJsZWQpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcXG4ua3VpLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi5rdWktYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxcbi5rdWktYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXByaW1hcnktYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBQcmltYXJ5IG91dGxpbmUgYnV0dG9uIHN0eWxlICovXFxuLmt1aS1idXR0b24tcHJpbWFyeS5vdXRsaW5lIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1wcmltYXJ5Lm91dGxpbmU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmt1aS1idXR0b24tcHJpbWFyeS5vdXRsaW5lLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXByaW1hcnkub3V0bGluZTpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLyogU2Vjb25kYXJ5IGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uLXNlY29uZGFyeSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5rdWktYnV0dG9uLXNlY29uZGFyeTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3ItaG92ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yLWhvdmVyKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLXNlY29uZGFyeTpmb2N1cyxcXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnkuZm9jdXMge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2Vjb25kYXJ5LWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnkuZGlzYWJsZWQsXFxuLmt1aS1idXR0b24tc2Vjb25kYXJ5OmRpc2FibGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvci1kaXNhYmxlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3ItZGlzYWJsZWQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yLWRpc2FibGVkKTtcXG59XFxuXFxuLmt1aS1idXR0b24tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvci1hY3RpdmUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1ib3JkZXItY29sb3ItYWN0aXZlKTtcXG59XFxuXFxuLmt1aS1idXR0b24tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNlY29uZGFyeS1ib3gtc2hhZG93LWFjdGl2ZSk7XFxufVxcblxcbi8qIFNlY29uZGFyeSBvdXRsaW5lIGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uLXNlY29uZGFyeS5vdXRsaW5lIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi5rdWktYnV0dG9uLXNlY29uZGFyeS5vdXRsaW5lOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmctY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnkub3V0bGluZS5kaXNhYmxlZCxcXG4ua3VpLWJ1dHRvbi1zZWNvbmRhcnkub3V0bGluZTpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4vKiBJbmZvcm1hdGlvbiBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1pbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS1pbmZvLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mby1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWluZm8tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmt1aS1idXR0b24taW5mbzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0taW5mby10ZXh0LWNvbG9yLWhvdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tYmctY29sb3ItaG92ZXIpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmZvLWJvcmRlci1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLWluZm86Zm9jdXMsXFxuLmt1aS1idXR0b24taW5mby5mb2N1cyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1pbmZvLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1pbmZvLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLWluZm86ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWluZm8tdGV4dC1jb2xvci1kaXNhYmxlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLWJnLWNvbG9yLWRpc2FibGVkKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW5mby1ib3JkZXItY29sb3ItZGlzYWJsZWQpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcXG4ua3VpLWJ1dHRvbi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0taW5mby10ZXh0LWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWluZm8tYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi5rdWktYnV0dG9uLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxcbi5rdWktYnV0dG9uLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWluZm8tYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBJbmZvcm1hdGlvbiBvdXRsaW5lIGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uLWluZm8ub3V0bGluZSB7XFxuICBjb2xvcjogdmFyKC0taW5mby1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmt1aS1idXR0b24taW5mby5vdXRsaW5lOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1pbmZvLXRleHQtY29sb3ItaG92ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mby1iZy1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLWluZm8ub3V0bGluZS5kaXNhYmxlZCxcXG4ua3VpLWJ1dHRvbi1pbmZvLm91dGxpbmU6ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWluZm8tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxufVxcblxcbi8qIERhbmdlcm91cyBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1kYW5nZXJvdXMge1xcbiAgY29sb3I6IHZhcigtLWRhbmdlcm91cy10ZXh0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcm91cy1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlcm91cy1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kYW5nZXJvdXM6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWRhbmdlcm91cy10ZXh0LWNvbG9yLWhvdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcm91cy1iZy1jb2xvci1ob3Zlcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlcm91cy1ib3JkZXItY29sb3ItaG92ZXIpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kYW5nZXJvdXM6Zm9jdXMsXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzLmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWRhbmdlcm91cy1ib3gtc2hhZG93KTtcXG59XFxuXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLWRhbmdlcm91czpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLXRleHQtY29sb3ItZGlzYWJsZWQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLWJnLWNvbG9yLWRpc2FibGVkKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLWJvcmRlci1jb2xvci1kaXNhYmxlZCk7XFxufVxcblxcbi5rdWktYnV0dG9uLWRhbmdlcm91czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLXRleHQtY29sb3ItYWN0aXZlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcm91cy1iZy1jb2xvci1hY3RpdmUpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXJvdXMtYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi5rdWktYnV0dG9uLWRhbmdlcm91czpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1kYW5nZXJvdXMtYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBEYW5nZXJvdXMgb3V0bGluZSBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1kYW5nZXJvdXMub3V0bGluZSB7XFxuICBjb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1kYW5nZXJvdXMub3V0bGluZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLXRleHQtY29sb3ItaG92ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2Vyb3VzLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzLm91dGxpbmUuZGlzYWJsZWQsXFxuLmt1aS1idXR0b24tZGFuZ2Vyb3VzLm91dGxpbmU6ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWRhbmdlcm91cy1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLyogV2FybmluZyBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi13YXJuaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXdhcm5pbmctYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmt1aS1idXR0b24td2FybmluZzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0td2FybmluZy10ZXh0LWNvbG9yLWhvdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctYmctY29sb3ItaG92ZXIpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS13YXJuaW5nLWJvcmRlci1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLXdhcm5pbmc6Zm9jdXMsXFxuLmt1aS1idXR0b24td2FybmluZy5mb2N1cyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS13YXJuaW5nLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi13YXJuaW5nLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXdhcm5pbmc6ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLXdhcm5pbmctdGV4dC1jb2xvci1kaXNhYmxlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWJnLWNvbG9yLWRpc2FibGVkKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0td2FybmluZy1ib3JkZXItY29sb3ItZGlzYWJsZWQpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcXG4ua3VpLWJ1dHRvbi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0td2FybmluZy10ZXh0LWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXdhcm5pbmctYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi5rdWktYnV0dG9uLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxcbi5rdWktYnV0dG9uLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXdhcm5pbmctYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBXYXJuaW5nIG91dGxpbmUgYnV0dG9uIHN0eWxlICovXFxuLmt1aS1idXR0b24td2FybmluZy5vdXRsaW5lIHtcXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi13YXJuaW5nLm91dGxpbmU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXdhcm5pbmctdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmt1aS1idXR0b24td2FybmluZy5vdXRsaW5lLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXdhcm5pbmcub3V0bGluZTpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0td2FybmluZy1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLyogU3VjY2VzcyBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1zdWNjZXNzIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWNjZXNzLXRleHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcy1iZy1jb2xvcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmt1aS1idXR0b24tc3VjY2Vzczpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWhvdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MtYmctY29sb3ItaG92ZXIpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJvcmRlci1jb2xvci1ob3Zlcik7XFxufVxcblxcbi5rdWktYnV0dG9uLXN1Y2Nlc3M6Zm9jdXMsXFxuLmt1aS1idXR0b24tc3VjY2Vzcy5mb2N1cyB7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zdWNjZXNzLWJveC1zaGFkb3cpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1zdWNjZXNzLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXN1Y2Nlc3M6ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtdGV4dC1jb2xvci1kaXNhYmxlZCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJnLWNvbG9yLWRpc2FibGVkKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1ib3JkZXItY29sb3ItZGlzYWJsZWQpO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcXG4ua3VpLWJ1dHRvbi1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWFjdGl2ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJnLWNvbG9yLWFjdGl2ZSk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLWFjdGl2ZSk7XFxufVxcblxcbi5rdWktYnV0dG9uLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxcbi5rdWktYnV0dG9uLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXN1Y2Nlc3MtYm94LXNoYWRvdy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBTdWNjZXNzIG91dGxpbmUgYnV0dG9uIHN0eWxlICovXFxuLmt1aS1idXR0b24tc3VjY2Vzcy5vdXRsaW5lIHtcXG4gIGNvbG9yOiB2YXIoLS1zdWNjZXNzLWJvcmRlci1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1zdWNjZXNzLm91dGxpbmU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtdGV4dC1jb2xvci1ob3Zlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWJnLWNvbG9yLWhvdmVyKTtcXG59XFxuXFxuLmt1aS1idXR0b24tc3VjY2Vzcy5vdXRsaW5lLmRpc2FibGVkLFxcbi5rdWktYnV0dG9uLXN1Y2Nlc3Mub3V0bGluZTpkaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1ib3JkZXItY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLyogTGluayBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1saW5rIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogdmFyKC0tbGluay10ZXh0LWNvbG9yKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdmFyKC0tbGluay10ZXh0LWRlY29yYXRpb24pO1xcbn1cXG5cXG4ua3VpLWJ1dHRvbi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rLXRleHQtY29sb3ItaG92ZXIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB2YXIoLS1saW5rLXRleHQtZGVjb3JhdGlvbik7XFxufVxcblxcbi5rdWktYnV0dG9uLWxpbms6Zm9jdXMsXFxuLmt1aS1idXR0b24tbGluay5mb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLWxpbmstdGV4dC1kZWNvcmF0aW9uKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rdWktYnV0dG9uLWxpbms6ZGlzYWJsZWQsXFxuLmt1aS1idXR0b24tbGluay5kaXNhYmxlZCB7XFxuICBjb2xvcjogdmFyKC0tbGluay10ZXh0LWNvbG9yLWRpc2FibGVkKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBTbWFsbCBidXR0b24gc3R5bGUgKi9cXG4ua3VpLWJ1dHRvbi1zbWFsbCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XFxufVxcblxcbi8qIExhcmdlIGJ1dHRvbiBzdHlsZSAqL1xcbi5rdWktYnV0dG9uLWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG59XFxuXFxuLyogQmxvY2sgYnV0dG9uIHN0eWxlICovXFxuLmt1aS1idXR0b24tYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eU9mO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcblxuLyoqXG4gKiBDYXN0cyBgYXJyYXlgIHRvIGEgc2xpY2UgaWYgaXQncyBuZWVkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBzbGljZS5cbiAqL1xuZnVuY3Rpb24gY2FzdFNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kO1xuICByZXR1cm4gKCFzdGFydCAmJiBlbmQgPj0gbGVuZ3RoKSA/IGFycmF5IDogYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0U2xpY2U7XG4iLCJ2YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmxvd2VyRmlyc3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYFN0cmluZ2AgY2FzZSBtZXRob2QgdG8gdXNlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FzZUZpcnN0KG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICB2YXIgc3RyU3ltYm9scyA9IGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FzZUZpcnN0O1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCJ2YXIgYmFzZVByb3BlcnR5T2YgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlPZicpO1xuXG4vKiogVXNlZCB0byBtYXAgTGF0aW4gVW5pY29kZSBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuICovXG52YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjYyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJyxcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cbiAgJ1xcdTAxMDAnOiAnQScsICAnXFx1MDEwMic6ICdBJywgJ1xcdTAxMDQnOiAnQScsXG4gICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxuICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXG4gICdcXHUwMTA3JzogJ2MnLCAgJ1xcdTAxMDknOiAnYycsICdcXHUwMTBiJzogJ2MnLCAnXFx1MDEwZCc6ICdjJyxcbiAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxuICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxuICAnXFx1MDExMyc6ICdlJywgICdcXHUwMTE1JzogJ2UnLCAnXFx1MDExNyc6ICdlJywgJ1xcdTAxMTknOiAnZScsICdcXHUwMTFiJzogJ2UnLFxuICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXG4gICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcbiAgJ1xcdTAxMjQnOiAnSCcsICAnXFx1MDEyNic6ICdIJywgJ1xcdTAxMjUnOiAnaCcsICdcXHUwMTI3JzogJ2gnLFxuICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxuICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxuICAnXFx1MDEzNCc6ICdKJywgICdcXHUwMTM1JzogJ2onLFxuICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcbiAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcbiAgJ1xcdTAxM2EnOiAnbCcsICAnXFx1MDEzYyc6ICdsJywgJ1xcdTAxM2UnOiAnbCcsICdcXHUwMTQwJzogJ2wnLCAnXFx1MDE0Mic6ICdsJyxcbiAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxuICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXG4gICdcXHUwMTRjJzogJ08nLCAgJ1xcdTAxNGUnOiAnTycsICdcXHUwMTUwJzogJ08nLFxuICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcbiAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXG4gICdcXHUwMTU1JzogJ3InLCAgJ1xcdTAxNTcnOiAncicsICdcXHUwMTU5JzogJ3InLFxuICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXG4gICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcbiAgJ1xcdTAxNjInOiAnVCcsICAnXFx1MDE2NCc6ICdUJywgJ1xcdTAxNjYnOiAnVCcsXG4gICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxuICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcbiAgJ1xcdTAxNjknOiAndScsICAnXFx1MDE2Yic6ICd1JywgJ1xcdTAxNmQnOiAndScsICdcXHUwMTZmJzogJ3UnLCAnXFx1MDE3MSc6ICd1JywgJ1xcdTAxNzMnOiAndScsXG4gICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXG4gICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxuICAnXFx1MDE3OSc6ICdaJywgICdcXHUwMTdiJzogJ1onLCAnXFx1MDE3ZCc6ICdaJyxcbiAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXG4gICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxuICAnXFx1MDE1Mic6ICdPZScsICdcXHUwMTUzJzogJ29lJyxcbiAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3MnXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVidXJyYCB0byBjb252ZXJ0IExhdGluLTEgU3VwcGxlbWVudCBhbmQgTGF0aW4gRXh0ZW5kZWQtQVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV0dGVyIFRoZSBtYXRjaGVkIGxldHRlciB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBsZXR0ZXIuXG4gKi9cbnZhciBkZWJ1cnJMZXR0ZXIgPSBiYXNlUHJvcGVydHlPZihkZWJ1cnJlZExldHRlcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVyckxldHRlcjtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgYXNjaWlUb0FycmF5ID0gcmVxdWlyZSgnLi9fYXNjaWlUb0FycmF5JyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlVG9BcnJheSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVUb0FycmF5Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvQXJyYXk7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG4iLCJ2YXIgY2FwaXRhbGl6ZSA9IHJlcXVpcmUoJy4vY2FwaXRhbGl6ZScpLFxuICAgIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gW2NhbWVsIGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhbWVsQ2FzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhbWVsIGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYW1lbENhc2UoJ0ZvbyBCYXInKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqL1xudmFyIGNhbWVsQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gY2FwaXRhbGl6ZSh3b3JkKSA6IHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuIiwidmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UgYW5kIHRoZSByZW1haW5pbmdcbiAqIHRvIGxvd2VyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdGUkVEJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHVwcGVyRmlyc3QodG9TdHJpbmcoc3RyaW5nKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXBpdGFsaXplO1xuIiwidmFyIGRlYnVyckxldHRlciA9IHJlcXVpcmUoJy4vX2RlYnVyckxldHRlcicpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBMYXRpbiBVbmljb2RlIGxldHRlcnMgKGV4Y2x1ZGluZyBtYXRoZW1hdGljYWwgb3BlcmF0b3JzKS4gKi9cbnZhciByZUxhdGluID0gL1tcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx4ZmZcXHUwMTAwLVxcdTAxN2ZdL2c7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKSBhbmRcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrc19mb3JfU3ltYm9scykuXG4gKi9cbnZhciByZUNvbWJvTWFyayA9IFJlZ0V4cChyc0NvbWJvLCAnZycpO1xuXG4vKipcbiAqIERlYnVycnMgYHN0cmluZ2AgYnkgY29udmVydGluZ1xuICogW0xhdGluLTEgU3VwcGxlbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW4tMV9TdXBwbGVtZW50XyhVbmljb2RlX2Jsb2NrKSNDaGFyYWN0ZXJfdGFibGUpXG4gKiBhbmQgW0xhdGluIEV4dGVuZGVkLUFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX0V4dGVuZGVkLUEpXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMgYW5kIHJlbW92aW5nXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWJ1cnIoJ2TDqWrDoCB2dScpO1xuICogLy8gPT4gJ2RlamEgdnUnXG4gKi9cbmZ1bmN0aW9uIGRlYnVycihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmcucmVwbGFjZShyZUxhdGluLCBkZWJ1cnJMZXR0ZXIpLnJlcGxhY2UocmVDb21ib01hcmssICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnI7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYG51bGxgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdWxsKG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdWxsKHZvaWQgMCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVsbDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgY3JlYXRlQ2FzZUZpcnN0ID0gcmVxdWlyZSgnLi9fY3JlYXRlQ2FzZUZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICpcbiAqIF8udXBwZXJGaXJzdCgnRlJFRCcpO1xuICogLy8gPT4gJ0ZSRUQnXG4gKi9cbnZhciB1cHBlckZpcnN0ID0gY3JlYXRlQ2FzZUZpcnN0KCd0b1VwcGVyQ2FzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwcGVyRmlyc3Q7XG4iLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHtcclxuXHRidWlsZFNoYWRvd1Jvb3QsXHJcblx0YnVpbGRDb21wb25lbnRDb250ZW50cyxcclxuXHRjaGFuZ2VIYW5kbGVyV3JhcHBlclxyXG59IGZyb20gXCJVdGlscy93Y1V0aWxzXCI7XHJcbmltcG9ydCB7IGNvbnRhaW5lckhlbHBlciwgY29udGFpbmVkSGVscGVyIH0gZnJvbSBcIlV0aWxzL0VsZW1lbnRIZWxwZXJcIjtcclxuXHJcbmNsYXNzIEJhc2VFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGVDb25maWcsIGF0dHJpYnV0ZXNDb25maWcsIHVzZVNoYWRvdyA9IHRydWUgfSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZztcclxuXHRcdHRoaXMuYXR0cmlidXRlc0NvbmZpZyA9IGF0dHJpYnV0ZXNDb25maWc7XHJcblx0XHRjb25zdCB7IHRlbXBsYXRlIH0gPSB0aGlzLnRlbXBsYXRlQ29uZmlnO1xyXG5cdFx0aWYgKHVzZVNoYWRvdykge1xyXG5cdFx0XHRidWlsZFNoYWRvd1Jvb3QodGVtcGxhdGUsIHRoaXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YnVpbGRDb21wb25lbnRDb250ZW50cyh0ZW1wbGF0ZSwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuXHRcdGNvbnN0IHsgdGFnTmFtZSwgYXR0cmlidXRlc0NvbmZpZyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyID1cclxuXHRcdFx0YXR0cmlidXRlc0NvbmZpZ1thdHRyaWJ1dGVdICYmXHJcblx0XHRcdGF0dHJpYnV0ZXNDb25maWdbYXR0cmlidXRlXS5hdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcjtcclxuXHRcdGlmIChhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcikge1xyXG5cdFx0XHRjaGFuZ2VIYW5kbGVyV3JhcHBlcih7XHJcblx0XHRcdFx0YXR0cmlidXRlc0NvbmZpZyxcclxuXHRcdFx0XHRhdHRyaWJ1dGUsXHJcblx0XHRcdFx0dGFnTmFtZSxcclxuXHRcdFx0XHRvbGRWYWx1ZSxcclxuXHRcdFx0XHRuZXdWYWx1ZSxcclxuXHRcdFx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcixcclxuXHRcdFx0XHRjb21wb25lbnQ6IHRoaXNcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25uZWN0ZWRDYWxsYmFjayh7IGVsZW1lbnQsIGFsbG93ZWRDaGlsZHJlbiA9IFtdLCBhbGxvd2VkUGFyZW50cyA9IFtdIH0pIHtcclxuXHRcdGlmIChhbGxvd2VkQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lckhlbHBlci52YWxpZGF0ZUNoaWxkcmVuKHtcclxuXHRcdFx0XHRlbGVtZW50LFxyXG5cdFx0XHRcdGFsbG93ZWRDaGlsZHJlbixcclxuXHRcdFx0XHR0YWdOYW1lOiB0aGlzLnRhZ05hbWVcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNvbnRhaW5lckhlbHBlci5yZWdpc3RlckNoaWxkcmVuKHtcclxuXHRcdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0XHRjYWxsYmFjazogdGhpcy5jaGlsZHJlbkRlZmluZWRDYWxsYmFjay5iaW5kKHRoaXMpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGFsbG93ZWRQYXJlbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Y29udGFpbmVkSGVscGVyLnZhbGlkYXRlUGFyZW50KHtcclxuXHRcdFx0XHRlbGVtZW50LFxyXG5cdFx0XHRcdGFsbG93ZWRQYXJlbnRzLFxyXG5cdFx0XHRcdHRhZ05hbWU6IHRoaXMudGFnTmFtZVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VFbGVtZW50O1xyXG4iLCJpbXBvcnQgaXNTdHJpbmcgZnJvbSBcImxvZGFzaC9pc1N0cmluZ1wiO1xyXG5cclxuaW1wb3J0IHsgYXBwbHlDbGFzc05hbWUsIGJvb2xlYW5TZXR0ZXIgfSBmcm9tIFwiVXRpbHMvd2NVdGlsc1wiO1xyXG5pbXBvcnQgeyBpc1RydWUsIGlzVmFsdWVPZiwgaXNCb29sZWFuQXR0cmlidXRlIH0gZnJvbSBcIlV0aWxzL3ZhbGlkYXRvcnNcIjtcclxuXHJcbmNvbnN0IFN0eWxlID0ge1xyXG5cdERlZmF1bHQ6IFwia3VpLWJ1dHRvbi1kZWZhdWx0XCIsXHJcblx0UHJpbWFyeTogXCJrdWktYnV0dG9uLXByaW1hcnlcIixcclxuXHRTZWNvbmRhcnk6IFwia3VpLWJ1dHRvbi1zZWNvbmRhcnlcIixcclxuXHRJbmZvcm1hdGlvbjogXCJrdWktYnV0dG9uLWluZm9cIixcclxuXHREYW5nZXJvdXM6IFwia3VpLWJ1dHRvbi1kYW5nZXJvdXNcIixcclxuXHRXYXJuaW5nOiBcImt1aS1idXR0b24td2FybmluZ1wiLFxyXG5cdFN1Y2Nlc3M6IFwia3VpLWJ1dHRvbi1zdWNjZXNzXCIsXHJcblx0TGluazogXCJrdWktYnV0dG9uLWxpbmtcIlxyXG59O1xyXG5cclxuY29uc3QgU2l6ZSA9IHtcclxuXHROb3JtYWw6IFwiXCIsXHJcblx0U21hbGw6IFwia3VpLWJ1dHRvbi1zbWFsbFwiLFxyXG5cdExhcmdlOiBcImt1aS1idXR0b24tbGFyZ2VcIixcclxuXHRCbG9jazogXCJrdWktYnV0dG9uLWJsb2NrXCJcclxufTtcclxuXHJcbmNvbnN0IGF0dHJpYnV0ZXNDb25maWcgPSB7XHJcblx0XCJrdWktdGV4dFwiOiB7XHJcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcjogZnVuY3Rpb24oeyBuZXdWYWx1ZSwgY29tcG9uZW50IH0pIHtcclxuXHRcdFx0Y29uc3QgeyBidXR0b24gfSA9IGNvbXBvbmVudC5lbGVtZW50cztcclxuXHRcdFx0YnV0dG9uLmlubmVyVGV4dCA9IG5ld1ZhbHVlIHx8IFwiXCI7XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdG9yczogW2lzU3RyaW5nXVxyXG5cdH0sXHJcblx0XCJrdWktc3R5bGVcIjoge1xyXG5cdFx0ZGVmYXVsdFZhbHVlOiBTdHlsZS5EZWZhdWx0LFxyXG5cdFx0YXR0cmlidXRlQ2hhbmdlZEhhbmRsZXI6IGZ1bmN0aW9uKHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBjb21wb25lbnQgfSkge1xyXG5cdFx0XHRjb25zdCB7IGJ1dHRvbiB9ID0gY29tcG9uZW50LmVsZW1lbnRzO1xyXG5cdFx0XHRjb25zdCBkZWZhdWx0VmFsdWUgPSBhdHRyaWJ1dGVzQ29uZmlnW1wia3VpLXN0eWxlXCJdLmRlZmF1bHQ7XHJcblx0XHRcdGFwcGx5Q2xhc3NOYW1lKHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBlbGVtZW50OiBidXR0b24sIGRlZmF1bHRWYWx1ZSB9KTtcclxuXHRcdH0sXHJcblx0XHR2YWxpZGF0b3JzOiBbaXNTdHJpbmcsIGlzVmFsdWVPZihTdHlsZSldXHJcblx0fSxcclxuXHRcImt1aS1zaXplXCI6IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogU2l6ZS5Ob3JtYWwsXHJcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcjogZnVuY3Rpb24oeyBvbGRWYWx1ZSwgbmV3VmFsdWUsIGNvbXBvbmVudCB9KSB7XHJcblx0XHRcdGNvbnN0IHsgYnV0dG9uIH0gPSBjb21wb25lbnQuZWxlbWVudHM7XHJcblx0XHRcdGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGF0dHJpYnV0ZXNDb25maWdbXCJrdWktc2l6ZVwiXS5kZWZhdWx0O1xyXG5cdFx0XHRhcHBseUNsYXNzTmFtZSh7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgZWxlbWVudDogYnV0dG9uLCBkZWZhdWx0VmFsdWUgfSk7XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdG9yczogW2lzU3RyaW5nLCBpc1ZhbHVlT2YoU2l6ZSldXHJcblx0fSxcclxuXHRcImt1aS1vdXRsaW5lXCI6IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcblx0XHRzZXR0ZXI6IGJvb2xlYW5TZXR0ZXIsXHJcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcjogZnVuY3Rpb24oeyBuZXdWYWx1ZSwgY29tcG9uZW50IH0pIHtcclxuXHRcdFx0Y29uc3QgeyBidXR0b24gfSA9IGNvbXBvbmVudC5lbGVtZW50cztcclxuXHRcdFx0aWYgKGlzVHJ1ZShuZXdWYWx1ZSkgfHwgbmV3VmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcIm91dGxpbmVcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRsaW5lXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRhdG9yczogW2lzQm9vbGVhbkF0dHJpYnV0ZV1cclxuXHR9LFxyXG5cdFwia3VpLWRpc2FibGVkXCI6IHtcclxuXHRcdGRlZmF1bHRWYWx1ZTogZmFsc2UsXHJcblx0XHRzZXR0ZXI6IGJvb2xlYW5TZXR0ZXIsXHJcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcjogZnVuY3Rpb24oeyBuZXdWYWx1ZSwgY29tcG9uZW50IH0pIHtcclxuXHRcdFx0Y29uc3QgeyBidXR0b24gfSA9IGNvbXBvbmVudC5lbGVtZW50cztcclxuXHRcdFx0aWYgKGlzVHJ1ZShuZXdWYWx1ZSkgfHwgbmV3VmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG5cdFx0XHRcdGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG5cdFx0XHRcdGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHZhbGlkYXRvcnM6IFtpc0Jvb2xlYW5BdHRyaWJ1dGVdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHthdHRyaWJ1dGVzQ29uZmlnIGFzIGRlZmF1bHQsIFN0eWxlLCBTaXplfTsiLCJpbXBvcnQgS1VJQnV0dG9uLCB7IHRhZ05hbWUgfSBmcm9tIFwiLi9rdWktYnV0dG9uXCI7XHJcbktVSUJ1dHRvbi5kZWZpbmVDdXN0b21FbGVtZW50KCk7XHJcbmV4cG9ydCB7IEtVSUJ1dHRvbiBhcyBkZWZhdWx0LCB0YWdOYW1lIH07IiwiaW1wb3J0IGtleXMgZnJvbSBcImxvZGFzaC9rZXlzXCI7XHJcbmltcG9ydCBfaXNGdW5jdGlvbiBmcm9tIFwibG9kYXNoL2lzRnVuY3Rpb25cIjtcclxuXHJcbmltcG9ydCBCYXNlRWxlbWVudCBmcm9tIFwiQmFzZS9iYXNlRWxlbWVudFwiO1xyXG5pbXBvcnQgYXR0cmlidXRlc0NvbmZpZywgeyBTaXplLCBTdHlsZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgdGVtcGxhdGVDb25maWcgZnJvbSBcIi4vdGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCB9IGZyb20gXCJVdGlscy93Y1V0aWxzXCI7XHJcblxyXG5jb25zdCB0YWdOYW1lID0gXCJrdWktYnV0dG9uXCI7XHJcbi8qKlxyXG4gKiBCdXR0b24gZWxlbWVudFxyXG4gKi9cclxuY2xhc3MgS1VJQnV0dG9uIGV4dGVuZHMgQmFzZUVsZW1lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoeyB0ZW1wbGF0ZUNvbmZpZywgYXR0cmlidXRlc0NvbmZpZyB9KTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSB7XHJcblx0XHRcdGJ1dHRvbjogdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0dGVtcGxhdGVDb25maWcuc2VsZWN0b3JzLmJ1dHRvblxyXG5cdFx0XHQpXHJcblx0XHR9O1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuXHRcdHJldHVybiBrZXlzKGF0dHJpYnV0ZXNDb25maWcpO1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IFN0eWxlKCkge1xyXG5cdFx0cmV0dXJuIFN0eWxlO1xyXG5cdH1cclxuXHRzdGF0aWMgZ2V0IFNpemUoKSB7XHJcblx0XHRyZXR1cm4gU2l6ZTtcclxuXHR9XHJcblx0c3RhdGljIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XHJcblx0XHRpZighS1VJQnV0dG9uLmRlZmluZWQpe1xyXG5cdFx0XHRkZWZpbmVDdXN0b21FbGVtZW50KHtcclxuXHRcdFx0XHRjb21wb25lbnRDbGFzczogS1VJQnV0dG9uLFxyXG5cdFx0XHRcdHRhZ05hbWUsXHJcblx0XHRcdFx0YXR0cmlidXRlc0NvbmZpZ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0S1VJQnV0dG9uLmRlZmluZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRhZGRDbGlja0hhbmRsZXIoaGFuZGxlcikge1xyXG5cdFx0aWYgKF9pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmVtb3ZlQ2xpY2tIYW5kbGVyKGhhbmRsZXIpIHtcclxuXHRcdGlmIChoYW5kbGVyKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHMuYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVyKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZXhwb3J0IHsgS1VJQnV0dG9uIGFzIGRlZmF1bHQsIHRhZ05hbWUgfTsiLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIHN0eWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgLy8gUmV0dXJuIGFuIGV4aXN0aW5nIHN0cmluZ1xuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcztcbn0gZWxzZSB7XG4gIC8vIENhbGwgdGhlIGN1c3RvbSB0b1N0cmluZyBtZXRob2QgZnJvbSBjc3MtbG9hZGVyIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlcy50b1N0cmluZygpO1xufSIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xyXG5pbXBvcnQgeyB0YWdOYW1lIH0gZnJvbSBcIi4va3VpLWJ1dHRvblwiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuXHQ8c3R5bGU+XHJcblx0XHQke3N0eWxlfVxyXG5cdDwvc3R5bGU+XHJcblx0PGJ1dHRvbiBjbGFzcz1cImt1aS1idXR0b25cIj5cclxuXHRcdDxzbG90Pjwvc2xvdD5cclxuXHQ8L2J1dHRvbj5cclxuYDtcclxuXHJcbndpbmRvdy5TaGFkeUNTUyAmJiB3aW5kb3cuU2hhZHlDU1MucHJlcGFyZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdOYW1lKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0ZW1wbGF0ZSxcclxuXHRzZWxlY3RvcnM6IHtcclxuXHRcdGJ1dHRvbjogXCJidXR0b24ua3VpLWJ1dHRvblwiXHJcblx0fVxyXG59O1xyXG4iLCIvKipcclxuICogVmFsaWRhdGVzIGlmIHRoZSBjb250YWluZXIgZWxlbWVudCBjb250YWlucyBvbmx5IGFsbG93ZWQgY2hpbGRyZW4gZWxlbWVudHNcclxuICpcclxuICogQHJldHVybnMgYSBsaXN0IG9mIHRoZSBmb3VuZCBhbGxvd2VkIGVsZW1lbnRzIHRhZyBuYW1lc1xyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZHJlbih7IGVsZW1lbnQsIGFsbG93ZWRDaGlsZHJlbiwgdGFnTmFtZSB9KSB7XHJcblx0Y29uc3QgY2hpbGRyZW5UeXBlcyA9IFtdO1xyXG5cdGlmIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0bGV0IGNoaWxkcmVuID0gZWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgY2hpbGRUYWdOYW1lID0gY2hpbGRyZW5baV0udGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAoYWxsb3dlZENoaWxkcmVuLmluZGV4T2YoY2hpbGRUYWdOYW1lKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRjb25zdCBhY3MgPSBhbGxvd2VkQ2hpbGRyZW4uam9pbihcIiwgXCIpO1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRcdGAke3RhZ05hbWV9IGVsZW1lbnQgYWNjZXB0cyBvbmx5IFske2Fjc31dIGVsZW1lbnRzIGFzIGNoaWxkcmVuLCBidXQgaXQgaGFzICR7Y2hpbGRUYWdOYW1lfWBcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNoaWxkcmVuVHlwZXMuaW5kZXhPZihjaGlsZFRhZ05hbWUpID09PSAtMSkge1xyXG5cdFx0XHRcdGNoaWxkcmVuVHlwZXMucHVzaChjaGlsZFRhZ05hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBjaGlsZHJlblR5cGVzO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGlmIHRoZSBjb250YWluZWQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIG9ubHkgYWxsb3dlZCBwYXJlbnQgZWxlbWVudHNcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUGFyZW50KHsgZWxlbWVudCwgYWxsb3dlZFBhcmVudHMsIHRhZ05hbWUgfSkge1xyXG5cdGlmIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0bGV0IHBhcmVudE5vZGUgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcblx0XHRjb25zdCBhcHMgPSBhbGxvd2VkUGFyZW50cy5qb2luKFwiLCBcIik7XHJcblx0XHRpZiAocGFyZW50Tm9kZSkge1xyXG5cdFx0XHRjb25zdCBwYXJlbnRUYWdOYW1lID0gcGFyZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdGlmIChhbGxvd2VkUGFyZW50cy5pbmRleE9mKHBhcmVudFRhZ05hbWUpID09PSAtMSkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgJHt0YWdOYW1lfSBtdXN0IGJlIGEgY2hpbGQgb2YgJHthcHN9YCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgJHt0YWdOYW1lfSBtdXN0IGJlIGEgY2hpbGQgb2YgJHthcHN9YCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVySGVscGVyID0ge1xyXG5cdHZhbGlkYXRlQ2hpbGRyZW5cclxufTtcclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lZEhlbHBlciA9IHtcclxuXHR2YWxpZGF0ZVBhcmVudFxyXG59O1xyXG4iLCIvKipcclxuICogSW5pdGlhbHkgd2UgdXNlIHRoZSBsb2Rhc2ggbGlicmFyeSBmb3IgdmFsaWRhdGlvbnMgYW5kIHV0aWxpdHkgZnVuY3Rpb25zLCBidXQgaWYgdGhlcmUgaXMgc29tZXRoaW5nXHJcbiAqIHNwZWNpZmljIHdlIGFkZCBpdCBoZXJlXHJcbiAqL1xyXG5pbXBvcnQgX2lzU3RyaW5nIGZyb20gXCJsb2Rhc2gvaXNTdHJpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEJvb2xlYW4uVFJVRVxyXG4gKiBAcGFyYW0ge0FueX0gc3RyIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNUcnVlKHN0cikge1xyXG5cdHJldHVybiAoXHJcblx0XHRzdHIgPT09IHRydWUgfHxcclxuXHRcdCghIXN0ciAmJiBfaXNTdHJpbmcoc3RyKSAmJiBzdHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCIpXHJcblx0KTtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBCb29sZWFuLkZBTFNFXHJcbiAqIEBwYXJhbSB7QW55fSBzdHIgdGhlIHZhbHVlIHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZhbHNlKHN0cikge1xyXG5cdHJldHVybiAoXHJcblx0XHRzdHIgPT09IGZhbHNlIHx8XHJcblx0XHQoISFzdHIgJiYgX2lzU3RyaW5nKHN0cikgJiYgc3RyLnRvTG93ZXJDYXNlKCkgPT09IFwiZmFsc2VcIilcclxuXHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgcmVwcmVzZW50cyBhIGJvb2xlYW4gdmFsdWUgb2YgYW4gYXR0cmlidXRlIGVtcHR5IHN0cmluZywgdHJ1ZS9mYWxzZVxyXG4gKiBAcGFyYW0ge0FueX0gc3RyIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuQXR0cmlidXRlKHN0cikge1xyXG5cdHJldHVybiBzdHIgPT09IFwiXCIgfHwgaXNUcnVlKHN0cikgfHwgaXNGYWxzZShzdHIpO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiBhIHZhbHVlLCBpdCB3aWxsIHJldHVybiBpZiBpdCdzIGZvdW5kIGluIHRoZSBtYXAgb3Igbm90ICg9PT0gY2hlY2spXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCBjb250YWluaW5nIHRoZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlT2YobWFwKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIGlzVmFsdWVPZk1hcCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0T2JqZWN0LmVudHJpZXMobWFwKS5maWx0ZXIocGFpciA9PiBwYWlyWzFdID09PSB2YWx1ZSkubGVuZ3RoID09PSAxXHJcblx0XHQpO1xyXG5cdH07XHJcbn0iLCJpbXBvcnQgX3RvQ2FtZWxDYXNlIGZyb20gXCJsb2Rhc2gvY2FtZWxDYXNlXCI7XHJcbmltcG9ydCBfaXNGdW5jdGlvbiBmcm9tIFwibG9kYXNoL2lzRnVuY3Rpb25cIjtcclxuaW1wb3J0IF9pc1VuZGVmaW5lZCBmcm9tIFwibG9kYXNoL2lzVW5kZWZpbmVkXCI7XHJcbmltcG9ydCBfaXNOdWxsIGZyb20gXCJsb2Rhc2gvaXNOdWxsXCI7XHJcbmltcG9ydCB7IGlzVHJ1ZSwgaXNGYWxzZSB9IGZyb20gXCIuL3ZhbGlkYXRvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhbiBhcnJheSBvZiB2YWxpZGF0b3JzIG9uZSBhZnRlciB0aGUgb3RoZXIgdGlsbCBvbmUgZmFpbHMgb3IgYWxsIHN1Y2NlZWRcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5VmFsaWRhdG9ycyh7XHJcblx0YXR0cmlidXRlLFxyXG5cdHRhZ05hbWUsXHJcblx0dmFsaWRhdG9ycyA9IFtdLFxyXG5cdHZhbHVlLFxyXG5cdGlzUmVxdWlyZWQgPSBmYWxzZVxyXG59KSB7XHJcblx0aWYgKHZhbGlkYXRvcnMubGVuZ3RoID4gMCkge1xyXG5cdFx0aWYgKHZhbHVlID09PSBudWxsICYmIGlzUmVxdWlyZWQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coYCR7dGFnTmFtZX0uJHthdHRyaWJ1dGV9IGlzIHJlcXVpcmVkYCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdG9ycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAodmFsdWUgJiYgX2lzRnVuY3Rpb24odmFsaWRhdG9yc1tpXSkgJiYgIXZhbGlkYXRvcnNbaV0odmFsdWUpKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYCR7dGFnTmFtZX0uJHthdHRyaWJ1dGV9OlxcbnZhbHVlOicke3ZhbHVlfScgZmFpbGVkICR7dmFsaWRhdG9yc1tpXS5uYW1lfSB2YWxpZGF0aW9uYCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYW4gYXJyYXkgb2YgdHJhbnNmb3JtZXJzIG9uZSBhZnRlciB0aGUgb3RoZXIgbWFuaXB1bGF0aW5nIHRoZSBnaXZlbiB2YWx1ZSwgYW5kIHJldHVybiB0aGUgZmluYWwgdHJhbnNmb3JtZWQgdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGFwcGx5VHJhbnNmb3JtZXJzKHsgdHJhbnNmb3JtZXJzID0gW10sIHZhbHVlIH0pIHtcclxuXHRsZXQgdHYgPSB2YWx1ZTtcclxuXHRpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCA+IDApIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdHJhbnNmb3JtZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChfaXNGdW5jdGlvbih0cmFuc2Zvcm1lcnNbaV0pKSB7XHJcblx0XHRcdFx0dHYgPSB0cmFuc2Zvcm1lcnNbaV0odHYpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0djtcclxufVxyXG5cclxuZnVuY3Rpb24gYmVmb3JlQ2hhbmdlVmFsdWUoeyBhdHRyaWJ1dGVzQ29uZmlnLCBhdHRyaWJ1dGUsIHRhZ05hbWUsIHZhbHVlIH0pIHtcclxuXHRjb25zdCBhdHRyaWJ1dGVDb25maWcgPSBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV07XHJcblx0Y29uc3QgeyB2YWxpZGF0b3JzLCB0cmFuc2Zvcm1lcnMsIGlzUmVxdWlyZWQgfSA9IGF0dHJpYnV0ZUNvbmZpZztcclxuXHRpZiAoIWFwcGx5VmFsaWRhdG9ycyh7IGF0dHJpYnV0ZSwgdGFnTmFtZSwgdmFsaWRhdG9ycywgdmFsdWUsIGlzUmVxdWlyZWQgfSkpXHJcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSB9O1xyXG5cdGNvbnN0IHRyYW5zZm9ybWVkVmFsdWUgPSBhcHBseVRyYW5zZm9ybWVycyh7IHRyYW5zZm9ybWVycywgdmFsdWUgfSk7XHJcblx0cmV0dXJuIHsgdHJhbnNmb3JtZWRWYWx1ZSwgaXNWYWxpZDogdHJ1ZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWZhdWx0U2V0dGVyKHsgY29tcG9uZW50LCBhdHRyaWJ1dGVzQ29uZmlnLCBhdHRyaWJ1dGUsIHZhbHVlIH0pIHtcclxuXHRjb25zdCB7IHRhZ05hbWUgfSA9IGNvbXBvbmVudDtcclxuXHRjb25zdCB7IHZhbGlkYXRvcnMsIGlzUmVxdWlyZWQgfSA9IGF0dHJpYnV0ZXNDb25maWdbYXR0cmlidXRlXTtcclxuXHRjb25zdCB2YWxpZCA9IGFwcGx5VmFsaWRhdG9ycyh7IGF0dHJpYnV0ZSwgdGFnTmFtZSwgdmFsaWRhdG9ycywgdmFsdWUsIGlzUmVxdWlyZWQgfSk7XHJcblx0aWYgKHZhbGlkKSB7XHJcblx0XHRjb21wb25lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdEdldHRlcih7IGNvbXBvbmVudCwgYXR0cmlidXRlLCBkZWZhdWx0VmFsdWUgfSkge1xyXG5cdGlmKGNvbXBvbmVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSA9PT0gbnVsbCAmJiBcclxuXHRcdCEoX2lzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSkgfHwgX2lzTnVsbChkZWZhdWx0VmFsdWUpKSkge1xyXG5cdFx0Y29tcG9uZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGRlZmF1bHRWYWx1ZSk7XHJcblx0fVxyXG5cdHJldHVybiBjb21wb25lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvb2xlYW5TZXR0ZXIoeyBjb21wb25lbnQsIGF0dHJpYnV0ZSwgdmFsdWUgfSkge1xyXG5cdGlzVHJ1ZSh2YWx1ZSkgPyBjb21wb25lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgXCJcIikgOiBjb21wb25lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNoYWRvd1Jvb3QodGVtcGxhdGUsIGhvc3QpIHtcclxuXHR3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudChob3N0KTtcclxuXHRob3N0LmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG5cdGhvc3Quc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvbXBvbmVudENvbnRlbnRzKHRlbXBsYXRlLCBob3N0KSB7XHJcblx0d2luZG93LlNoYWR5Q1NTICYmIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQoaG9zdCk7XHJcblx0aG9zdC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdGhvc3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG59XHJcblxyXG4vKipcclxuICogd3JhcHMgYSBjaGFuZ2UgaGFuZGxlciB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvY2VkdXJlLFxyXG4gKiBmaXJzdCB2YWxpZGF0ZSB0aGUgY2hhbmdlIHRoZW4gYXBwbHkgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBhdHRyaWJ1dGUgYW5kIGZpbmFseSBhcHBseSB0aGUgdXNlcidzIGNoYW5nZSBoYW5kbGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlSGFuZGxlcldyYXBwZXIoe1xyXG5cdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0YXR0cmlidXRlLFxyXG5cdHRhZ05hbWUsXHJcblx0b2xkVmFsdWUsXHJcblx0bmV3VmFsdWUsXHJcblx0YXR0cmlidXRlQ2hhbmdlZEhhbmRsZXIsXHJcblx0Y29tcG9uZW50XHJcbn0pIHtcclxuXHRjb25zdCB7IHRyYW5zZm9ybWVkVmFsdWUsIGlzVmFsaWQgfSA9IGJlZm9yZUNoYW5nZVZhbHVlKHtcclxuXHRcdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0XHRhdHRyaWJ1dGUsXHJcblx0XHR0YWdOYW1lLFxyXG5cdFx0dmFsdWU6IG5ld1ZhbHVlXHJcblx0fSk7XHJcblx0aWYgKGlzVmFsaWQpIHtcclxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyKHtcclxuXHRcdFx0YXR0cmlidXRlLFxyXG5cdFx0XHRvbGRWYWx1ZSxcclxuXHRcdFx0bmV3VmFsdWU6IHRyYW5zZm9ybWVkVmFsdWUsXHJcblx0XHRcdGNvbXBvbmVudFxyXG5cdFx0fSk7XHJcblx0XHRpZihpc0ZhbHNlKHRyYW5zZm9ybWVkVmFsdWUpKSB7XHJcblx0XHRcdGNvbXBvbmVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcdFx0XHJcblx0XHR9XHJcblx0fSBlbHNlIGlmKCFvbGRWYWx1ZSAmJiBvbGRWYWx1ZSAhPT0gXCJcIikge1xyXG5cdFx0Ly8gVGhlIGF0dHJpYnV0ZSBpcyBhIGJvb2xlYW4gb25lIGFuZCB0aGUgb2xkIHZhbHVlIHdhcyBmYWxzeVxyXG5cdFx0Y29tcG9uZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvLyBTZXQgYmFjayB0aGUgb2xkIHZhbHVlIGJhY2tcclxuXHRcdGNvbXBvbmVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBvbGRWYWx1ZSk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIGN1c3RvbSBlbGVtZW50IHdoaWxlIGV4cG9zaW5nIHB1YmxpYyBBUEkgZm9yIGFsbCB0aGUgYXR0cmlidXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQoe1xyXG5cdGNvbXBvbmVudENsYXNzLFxyXG5cdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0dGFnTmFtZVxyXG59KSB7XHJcblx0Ly9EZWZpbmUgYSBwdWJsaWMgQVBJIGZvciB0aGUgYXR0cmlidXRlcyB0byBiZSB1c2VkIGFzIHByb3BlcnRpZXMgYXMgd2VsbFxyXG5cdGNvbXBvbmVudENsYXNzLm9ic2VydmVkQXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGF0dHJpYnV0ZSkge1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG5cdFx0XHRjb21wb25lbnRDbGFzcy5wcm90b3R5cGUsXHJcblx0XHRcdF90b0NhbWVsQ2FzZShhdHRyaWJ1dGUpLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGVDb25maWcgPSBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV07XHJcblx0XHRcdFx0XHRpZiAoX2lzRnVuY3Rpb24oYXR0cmlidXRlQ29uZmlnLnNldHRlcikpIHtcclxuXHRcdFx0XHRcdFx0YXR0cmlidXRlQ29uZmlnLnNldHRlci5jYWxsKHRoaXMsIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ6IHRoaXMsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlc0NvbmZpZyxcclxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVDb25maWcuc2V0dGVyID09PSB0cnVlIHx8XHJcblx0XHRcdFx0XHRcdF9pc1VuZGVmaW5lZChhdHRyaWJ1dGVDb25maWcuc2V0dGVyKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdGRlZmF1bHRTZXR0ZXIuY2FsbCh0aGlzLCB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50OiB0aGlzLFxyXG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGF0dHJpYnV0ZUNvbmZpZyA9IGF0dHJpYnV0ZXNDb25maWdbYXR0cmlidXRlXTtcclxuXHRcdFx0XHRcdGlmIChfaXNGdW5jdGlvbihhdHRyaWJ1dGVDb25maWcuZ2V0dGVyKSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gYXR0cmlidXRlQ29uZmlnLmdldHRlci5jYWxsKHRoaXMsIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ6IHRoaXMsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlc0NvbmZpZyxcclxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVDb25maWcuZ2V0dGVyID09PSB0cnVlIHx8XHJcblx0XHRcdFx0XHRcdF9pc1VuZGVmaW5lZChhdHRyaWJ1dGVDb25maWcuZ2V0dGVyKVxyXG5cdFx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkZWZhdWx0R2V0dGVyLmNhbGwodGhpcywge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudDogdGhpcyxcclxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGUsXHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlOiBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV0uZGVmYXVsdFZhbHVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZXNDb25maWdbYXR0cmlidXRlXS5kZWZhdWx0VmFsdWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH0pO1xyXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgY29tcG9uZW50Q2xhc3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDbGFzc05hbWUoe1xyXG5cdG9sZFZhbHVlLFxyXG5cdG5ld1ZhbHVlLFxyXG5cdGVsZW1lbnQsXHJcblx0ZGVmYXVsdFZhbHVlID0gXCJcIlxyXG59KSB7XHJcblx0Y29uc3QgeyBjbGFzc0xpc3QgfSA9IGVsZW1lbnQ7XHJcblx0aWYgKG5ld1ZhbHVlKSB7XHJcblx0XHRpZiAob2xkVmFsdWUpIHtcclxuXHRcdFx0Y2xhc3NMaXN0LnJlbW92ZS5hcHBseShjbGFzc0xpc3QsIG9sZFZhbHVlLnNwbGl0KFwiIFwiKSk7XHJcblx0XHR9XHJcblx0XHRjbGFzc0xpc3QuYWRkLmFwcGx5KGNsYXNzTGlzdCwgbmV3VmFsdWUuc3BsaXQoXCIgXCIpKTtcclxuXHR9IGVsc2UgaWYgKG9sZFZhbHVlKSB7XHJcblx0XHRjbGFzc0xpc3QucmVtb3ZlLmFwcGx5KGNsYXNzTGlzdCwgb2xkVmFsdWUuc3BsaXQoXCIgXCIpKTtcclxuXHRcdGNsYXNzTGlzdC5hZGQuYXBwbHkoY2xhc3NMaXN0LCBkZWZhdWx0VmFsdWUuc3BsaXQoXCIgXCIpKTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
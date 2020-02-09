(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["KUIaccordion"] = factory();
	else
		root["kotchiUI"] = root["kotchiUI"] || {}, root["kotchiUI"]["KUIaccordion"] = factory();
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accordion"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/accordion/style.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/accordion/style.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":host {\n  --default-text-color: var(--kui-default-text-color, #525a62);\n  --default-text-color-hover: var(--kui-default-text-color-hover, #525a62);\n  --default-text-color-disabled: var(--kui-default-text-color-disabled, #525a62);\n  --default-text-color-active: var(--kui-default-text-color-active, #525a62);\n  --default-bg-color: var(--kui-default-bg-color, #f6f6f6);\n  --default-bg-color-hover: var(--kui-default-bg-color-hover, #e3e3e3);\n  --default-bg-color-disabled: var(--kui-default-bg-color-disabled, #f6f6f6);\n  --default-bg-color-active: var(--kui-default-bg-color-active, #dddcdc);\n  --default-border-color: var(--kui-default-border-color, #f6f6f6);\n  --default-border-color-hover: var(--kui-default-border-color-hover, #dddcdc);\n  --default-border-color-disabled: var(--kui-default-border-color-disabled, #f6f6f6);\n  --default-border-color-active: var(--kui-default-border-color-active, #d6d6d6);\n  --default-box-shadow: var(--kui-default-box-shadow, 0 0 0 0 rgba(221, 223, 224, 0.5));\n  --default-box-shadow-active: var(--kui-default-box-shadow-active, 0 0 0 0 rgba(221, 223, 224, 0.5));\n  --primary-text-color: var(--kui-primary-text-color, #ffffff);\n  --primary-text-color-hover: var(--kui-primary-text-color-hover, #ffffff);\n  --primary-text-color-disabled: var(--kui-primary-text-color-disabled, #ffffff);\n  --primary-text-color-active: var(--kui-primary-text-color-active, #ffffff);\n  --primary-bg-color: var(--kui-primary-bg-color, #2196f3);\n  --primary-bg-color-hover: var(--kui-primary-bg-color-hover, #0c83e2);\n  --primary-bg-color-disabled: var(--kui-primary-bg-color-disabled, #2196f3);\n  --primary-bg-color-active: var(--kui-primary-bg-color-active, #0c7cd5);\n  --primary-border-color: var(--kui-primary-border-color, #2196f3);\n  --primary-border-color-hover: var(--kui-primary-border-color-hover, #0c7cd5);\n  --primary-border-color-disabled: var(--kui-primary-border-color-disabled, #2196f3);\n  --primary-border-color-active: var(--kui-primary-border-color-active, #0b75c9);\n  --primary-box-shadow: var(--kui-primary-box-shadow, 0 0 0 0 rgba(66, 166, 245, 0.5));\n  --primary-box-shadow-active: var(--kui-primary-box-shadow-active, 0 0 0 0 rgba(66, 166, 245, 0.5));\n  --secondary-text-color: var(--kui-secondary-text-color, #ffffff);\n  --secondary-text-color-hover: var(--kui-secondary-text-color-hover, #ffffff);\n  --secondary-text-color-disabled: var(--kui-secondary-text-color-disabled, #ffffff);\n  --secondary-text-color-active: var(--kui-secondary-text-color-active, #ffffff);\n  --secondary-bg-color: var(--kui-secondary-bg-color, #868e96);\n  --secondary-bg-color-hover: var(--kui-secondary-bg-color-hover, #727b84);\n  --secondary-bg-color-disabled: var(--kui-secondary-bg-color-disabled, #868e96);\n  --secondary-bg-color-active: var(--kui-secondary-bg-color-active, #6c757d);\n  --secondary-border-color: var(--kui-secondary-border-color, #868e96);\n  --secondary-border-color-hover: var(--kui-secondary-border-color-hover, #6c757d);\n  --secondary-border-color-disabled: var(--kui-secondary-border-color-disabled, #868e96);\n  --secondary-border-color-active: var(--kui-secondary-border-color-active, #666e76);\n  --secondary-box-shadow: var(--kui-secondary-box-shadow, 0 0 0 0 rgba(152, 159, 166, 0.5));\n  --secondary-box-shadow-active: var(--kui-secondary-box-shadow-active, rgba(152, 159, 166, 0.5));\n  --info-text-color: var(--kui-info-text-color, #ffffff);\n  --info-text-color-hover: var(--kui-info-text-color-hover, #ffffff);\n  --info-text-color-disabled: var(--kui-info-text-color-disabled, #ffffff);\n  --info-text-color-active: var(--kui-info-text-color-active, #ffffff);\n  --info-bg-color: var(--kui-info-bg-color, #03a9f4);\n  --info-bg-color-hover: var(--kui-info-bg-color-hover, #038fce);\n  --info-bg-color-disabled: var(--kui-info-bg-color-disabled, #03a9f4);\n  --info-bg-color-active: var(--kui-info-bg-color-active, #0286c2);\n  --info-border-color: var(--kui-info-border-color, #03a9f4);\n  --info-border-color-hover: var(--kui-info-border-color-hover, #0286c2);\n  --info-border-color-disabled: var(--kui-info-border-color-disabled, #03a9f4);\n  --info-border-color-active: var(--kui-info-border-color-active, #027db5);\n  --info-box-shadow: var(--kui-info-box-shadow, 0 0 0 0 rgba(41, 182, 246, 0.5));\n  --info-box-shadow-active: var(--kui-info-box-shadow-active, 0 0 0 0 rgba(41, 182, 246, 0.5));\n  --dangerous-text-color: var(--kui-dangerous-text-color, #ffffff);\n  --dangerous-text-color-hover: var(--kui-dangerous-text-color-hover, #ffffff);\n  --dangerous-text-color-disabled: var(--kui-dangerous-text-color-disabled, #ffffff);\n  --dangerous-text-color-active: var(--kui-dangerous-text-color-active, #ffffff);\n  --dangerous-bg-color: var(--kui-dangerous-bg-color, #ff6b68);\n  --dangerous-bg-color-hover: var(--kui-dangerous-bg-color-hover, #ff4642);\n  --dangerous-bg-color-disabled: var(--kui-dangerous-bg-color-disabled, #ff6b68);\n  --dangerous-bg-color-active: var(--kui-dangerous-bg-color-active, #ff3935);\n  --dangerous-border-color: var(--kui-dangerous-border-color, #ff6b68);\n  --dangerous-border-color-hover: var(--kui-dangerous-border-color, #ff3935);\n  --dangerous-border-color-disabled: var(--kui-dangerous-border-color, #ff6b68);\n  --dangerous-border-color-active: var(--kui-dangerous-border-color, #ff2d28);\n  --dangerous-box-shadow: var(--kui-dangerous-box-shadow, 0 0 0 0 rgba(255, 129, 127, 0.5));\n  --dangerous-box-shadow-active: var(--kui-dangerous-box-shadow-active, 0 0 0 0 rgba(255, 129, 127, 0.5));\n  --warning-text-color: var(--kui-warning-text-color, #ffffff);\n  --warning-text-color-hover: var(--kui-warning-text-color-hover, #ffffff);\n  --warning-text-color-disabled: var(--kui-warning-text-color-disabled, #ffffff);\n  --warning-text-color-active: var(--kui-warning-text-color-active, #ffffff);\n  --warning-bg-color: var(--kui-warning-bg-color, #ffc721);\n  --warning-bg-color-hover: var(--kui-warning-bg-color-hover, #fabb00);\n  --warning-bg-color-disabled: var(--kui-warning-bg-color-disabled, #ffc721);\n  --warning-bg-color-active: var(--kui-warning-bg-color-active, #edb100);\n  --warning-border-color: var(--kui-warning-border-color, #ffc721);\n  --warning-border-color-hover: var(--kui-warning-border-color-hover, #edb100);\n  --warning-border-color-disabled: var(--kui-warning-border-color-disabled, #ffc721);\n  --warning-border-color-active: var(--kui-warning-border-color-active, #e0a800);\n  --warning-box-shadow: var(--kui-warning-box-shadow, 0 0 0 0 rgba(255, 207, 66, 0.5));\n  --warning-box-shadow-active: var(--kui-warning-box-shadow-active, 0 0 0 0 rgba(255, 207, 66, 0.5));\n  --success-text-color: var(--kui-success-text-color, #ffffff);\n  --success-text-color-hover: var(--kui-success-text-color, #ffffff);\n  --success-text-color-disabled: var(--kui-success-text-color, #ffffff);\n  --success-text-color-active: var(--kui-success-text-color, #ffffff);\n  --success-bg-color: var(--kui-success-bg-color, #32c787);\n  --success-bg-color-hover: var(--kui-success-bg-color-hover, #2aa872);\n  --success-bg-color-disabled: var(--kui-success-bg-color-disabled, #32c787);\n  --success-bg-color-active: var(--kui-success-bg-color-active, #289e6b);\n  --success-border-color: var(--kui-success-border-color, #32c787);\n  --success-border-color-hover: var(--kui-success-border-color, #289e6b);\n  --success-border-color-disabled: var(--kui-success-border-color, #32c787);\n  --success-border-color-active: var(--kui-success-border-color, #259464);\n  --success-box-shadow: var(--kui-success-box-shadow, 0 0 0 0 rgba(81, 207, 153, 0.5));\n  --success-box-shadow-active: var(--kui-success-box-shadow-active, 0 0 0 0 rgba(81, 207, 153, 0.5));\n  --link-text-color: var(--kui-link-text-color, #2196f3);\n  --link-text-color-hover: var(--kui-link-text-color, #0a6ebd);\n  --link-text-color-disabled: var(--kui-link-text-color, #868e96);\n  --link-text-decoration: var(--kui-link-text-decoration, underline);\n}\n\n/* Add your styles here for kui-accordion, use CSS variable as much as possible */\n:host {\n  /* Add your variables here, don't forget to give the ability for users to override them */\n}", ""]);


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

/***/ "./src/components/accordion/config.js":
/*!********************************************!*\
  !*** ./src/components/accordion/config.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attributesConfig; });
/* harmony import */ var Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/wcUtils */ "./src/utils/wcUtils.js");
/* harmony import */ var Utils_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/validators */ "./src/utils/validators.js");
//Here you can add and export any enums you find useful for this component



const attributesConfig = {
//	"ATTRIBUTE_NAME": {
//		defaultValue: "",
//      setter: function to be called when elm.setAttribute is called,
//      getter: function to be called when elm.getAttribute or elm.ATTRIBUTE_NAME is called,
//		attributeChangedHandler: function({ oldValue, newValue, component }) {
//          // When ever the attribute changes this method get called
//		},
//		validators: [] // a list of validators to be called before handeling the change
//	},
	"kui-toggle": {
		defaultValue: false,
		setter: Utils_wcUtils__WEBPACK_IMPORTED_MODULE_0__["booleanSetter"],
		validators: [Utils_validators__WEBPACK_IMPORTED_MODULE_1__["isBooleanAttribute"]],
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"kui-collapse-icon": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
	"kui-expand-icon": {
		attributeChangedHandler: function({ oldValue, newValue, component }) {}
	},
};



/***/ }),

/***/ "./src/components/accordion/index.js":
/*!*******************************************!*\
  !*** ./src/components/accordion/index.js ***!
  \*******************************************/
/*! exports provided: default, tagName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kui_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kui-accordion */ "./src/components/accordion/kui-accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _kui_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return _kui_accordion__WEBPACK_IMPORTED_MODULE_0__["tagName"]; });


_kui_accordion__WEBPACK_IMPORTED_MODULE_0__["default"].defineCustomElement();


/***/ }),

/***/ "./src/components/accordion/kui-accordion.js":
/*!***************************************************!*\
  !*** ./src/components/accordion/kui-accordion.js ***!
  \***************************************************/
/*! exports provided: default, tagName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KUIAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagName", function() { return tagName; });
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/keys */ "./node_modules/lodash/keys.js");
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Base_baseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Base/baseElement */ "./src/base/baseElement.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/components/accordion/config.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./src/components/accordion/template.js");
/* harmony import */ var Utils_wcUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils/wcUtils */ "./src/utils/wcUtils.js");







const tagName = "kui-accordion";
const allowedChildren = ["kui-section"];

/**
 * Accordion element
 */
class KUIAccordion extends Base_baseElement__WEBPACK_IMPORTED_MODULE_1__["default"] {
	constructor() {
		super({ templateConfig: _template__WEBPACK_IMPORTED_MODULE_3__["default"], attributesConfig: _config__WEBPACK_IMPORTED_MODULE_2__["default"] });
		this.elements = {
			accordion: this.shadowRoot.querySelector(
				_template__WEBPACK_IMPORTED_MODULE_3__["default"].selectors.accordion
			)
		};
	}
	connectedCallback() {
		super.connectedCallback({
			element: this.elements.accordion,
			allowedChildren
		});
	}

	childrenDefinedCallback() {
		//Go over the sections and register them
	}

	static get observedAttributes() {
		return lodash_keys__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["default"]);
	}

	static defineCustomElement() {
		if (!KUIAccordion.defined) {
			Object(Utils_wcUtils__WEBPACK_IMPORTED_MODULE_4__["defineCustomElement"])({
				componentClass: KUIAccordion,
				tagName,
				attributesConfig: _config__WEBPACK_IMPORTED_MODULE_2__["default"]
			});
			KUIAccordion.defined = true;
		}
	}
	setSectionExpandedHandler(handler) {
		// auto-generated method
	}
	getAllSections() {
		// auto-generated method
	}
	getExpandedSections() {
		// auto-generated method
	}
	collapseAllSections() {
		// auto-generated method
	}
	expandAllSections() {
		// auto-generated method
	}
	expandSection(sectionId) {
		// auto-generated method
	}
	collapseSection(sectionId) {
		// auto-generated method
	}
}



/***/ }),

/***/ "./src/components/accordion/style.scss":
/*!*********************************************!*\
  !*** ./src/components/accordion/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/accordion/style.scss");

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ }),

/***/ "./src/components/accordion/template.js":
/*!**********************************************!*\
  !*** ./src/components/accordion/template.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/accordion/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/components/accordion/index.js");



const template = document.createElement("template");
template.innerHTML = `
	<style>
		${_style_scss__WEBPACK_IMPORTED_MODULE_0___default.a}
	</style>
	<div class="kui-accordion"></div>
`;

//This is for cross-browser compatibility 
window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, ___WEBPACK_IMPORTED_MODULE_1__["tagName"]);

/* harmony default export */ __webpack_exports__["default"] = ({
	template,
	selectors: {
		accordion: "div.kui-accordion"
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

},[["./src/components/accordion/index.js","runtime~accordion"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zdHlsZS5zY3NzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpV29yZHMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlPZi5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFNsaWNlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNhc2VGaXJzdC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDb21wb3VuZGVyLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlYnVyckxldHRlci5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jYW1lbENhc2UuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTnVsbC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVW5kZWZpbmVkLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdXBwZXJGaXJzdC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3dvcmRzLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8va290Y2hpVUkuS1VJW25hbWVdLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvYmFzZS9iYXNlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vY29uZmlnLmpzIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24va3VpLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc3R5bGUuc2Nzcz80OWZjIiwid2VicGFjazovL2tvdGNoaVVJLktVSVtuYW1lXS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvdXRpbHMvRWxlbWVudEhlbHBlci5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvdXRpbHMvdmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9rb3RjaGlVSS5LVUlbbmFtZV0vLi9zcmMvdXRpbHMvd2NVdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQSwyQkFBMkIsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsVUFBVSxpRUFBaUUsNkVBQTZFLG1GQUFtRiwrRUFBK0UsNkRBQTZELHlFQUF5RSwrRUFBK0UsMkVBQTJFLHFFQUFxRSxpRkFBaUYsdUZBQXVGLG1GQUFtRiwwRkFBMEYsd0dBQXdHLGlFQUFpRSw2RUFBNkUsbUZBQW1GLCtFQUErRSw2REFBNkQseUVBQXlFLCtFQUErRSwyRUFBMkUscUVBQXFFLGlGQUFpRix1RkFBdUYsbUZBQW1GLHlGQUF5Rix1R0FBdUcscUVBQXFFLGlGQUFpRix1RkFBdUYsbUZBQW1GLGlFQUFpRSw2RUFBNkUsbUZBQW1GLCtFQUErRSx5RUFBeUUscUZBQXFGLDJGQUEyRix1RkFBdUYsOEZBQThGLG9HQUFvRywyREFBMkQsdUVBQXVFLDZFQUE2RSx5RUFBeUUsdURBQXVELG1FQUFtRSx5RUFBeUUscUVBQXFFLCtEQUErRCwyRUFBMkUsaUZBQWlGLDZFQUE2RSxtRkFBbUYsaUdBQWlHLHFFQUFxRSxpRkFBaUYsdUZBQXVGLG1GQUFtRixpRUFBaUUsNkVBQTZFLG1GQUFtRiwrRUFBK0UseUVBQXlFLCtFQUErRSxrRkFBa0YsZ0ZBQWdGLDhGQUE4Riw0R0FBNEcsaUVBQWlFLDZFQUE2RSxtRkFBbUYsK0VBQStFLDZEQUE2RCx5RUFBeUUsK0VBQStFLDJFQUEyRSxxRUFBcUUsaUZBQWlGLHVGQUF1RixtRkFBbUYseUZBQXlGLHVHQUF1RyxpRUFBaUUsdUVBQXVFLDBFQUEwRSx3RUFBd0UsNkRBQTZELHlFQUF5RSwrRUFBK0UsMkVBQTJFLHFFQUFxRSwyRUFBMkUs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IHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiS1VJYWNjb3JkaW9uXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtvdGNoaVVJXCJdID0gcm9vdFtcImtvdGNoaVVJXCJdIHx8IHt9LCByb290W1wia290Y2hpVUlcIl1bXCJLVUlhY2NvcmRpb25cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOmhvc3Qge1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3I6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3IsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3ItaG92ZXIsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1kZWZhdWx0LXRleHQtY29sb3ItZGlzYWJsZWQsICM1MjVhNjIpO1xcbiAgLS1kZWZhdWx0LXRleHQtY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGVmYXVsdC10ZXh0LWNvbG9yLWFjdGl2ZSwgIzUyNWE2Mik7XFxuICAtLWRlZmF1bHQtYmctY29sb3I6IHZhcigtLWt1aS1kZWZhdWx0LWJnLWNvbG9yLCAjZjZmNmY2KTtcXG4gIC0tZGVmYXVsdC1iZy1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLWRlZmF1bHQtYmctY29sb3ItaG92ZXIsICNlM2UzZTMpO1xcbiAgLS1kZWZhdWx0LWJnLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGVmYXVsdC1iZy1jb2xvci1kaXNhYmxlZCwgI2Y2ZjZmNik7XFxuICAtLWRlZmF1bHQtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGVmYXVsdC1iZy1jb2xvci1hY3RpdmUsICNkZGRjZGMpO1xcbiAgLS1kZWZhdWx0LWJvcmRlci1jb2xvcjogdmFyKC0ta3VpLWRlZmF1bHQtYm9yZGVyLWNvbG9yLCAjZjZmNmY2KTtcXG4gIC0tZGVmYXVsdC1ib3JkZXItY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kZWZhdWx0LWJvcmRlci1jb2xvci1ob3ZlciwgI2RkZGNkYyk7XFxuICAtLWRlZmF1bHQtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGVmYXVsdC1ib3JkZXItY29sb3ItZGlzYWJsZWQsICNmNmY2ZjYpO1xcbiAgLS1kZWZhdWx0LWJvcmRlci1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1kZWZhdWx0LWJvcmRlci1jb2xvci1hY3RpdmUsICNkNmQ2ZDYpO1xcbiAgLS1kZWZhdWx0LWJveC1zaGFkb3c6IHZhcigtLWt1aS1kZWZhdWx0LWJveC1zaGFkb3csIDAgMCAwIDAgcmdiYSgyMjEsIDIyMywgMjI0LCAwLjUpKTtcXG4gIC0tZGVmYXVsdC1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLWRlZmF1bHQtYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSgyMjEsIDIyMywgMjI0LCAwLjUpKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLWhvdmVyLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktcHJpbWFyeS10ZXh0LWNvbG9yLWRpc2FibGVkLCAjZmZmZmZmKTtcXG4gIC0tcHJpbWFyeS10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yOiB2YXIoLS1rdWktcHJpbWFyeS1iZy1jb2xvciwgIzIxOTZmMyk7XFxuICAtLXByaW1hcnktYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1wcmltYXJ5LWJnLWNvbG9yLWhvdmVyLCAjMGM4M2UyKTtcXG4gIC0tcHJpbWFyeS1iZy1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXByaW1hcnktYmctY29sb3ItZGlzYWJsZWQsICMyMTk2ZjMpO1xcbiAgLS1wcmltYXJ5LWJnLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktYmctY29sb3ItYWN0aXZlLCAjMGM3Y2Q1KTtcXG4gIC0tcHJpbWFyeS1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1wcmltYXJ5LWJvcmRlci1jb2xvciwgIzIxOTZmMyk7XFxuICAtLXByaW1hcnktYm9yZGVyLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktcHJpbWFyeS1ib3JkZXItY29sb3ItaG92ZXIsICMwYzdjZDUpO1xcbiAgLS1wcmltYXJ5LWJvcmRlci1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXByaW1hcnktYm9yZGVyLWNvbG9yLWRpc2FibGVkLCAjMjE5NmYzKTtcXG4gIC0tcHJpbWFyeS1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktcHJpbWFyeS1ib3JkZXItY29sb3ItYWN0aXZlLCAjMGI3NWM5KTtcXG4gIC0tcHJpbWFyeS1ib3gtc2hhZG93OiB2YXIoLS1rdWktcHJpbWFyeS1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoNjYsIDE2NiwgMjQ1LCAwLjUpKTtcXG4gIC0tcHJpbWFyeS1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLXByaW1hcnktYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSg2NiwgMTY2LCAyNDUsIDAuNSkpO1xcbiAgLS1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0ta3VpLXNlY29uZGFyeS10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zZWNvbmRhcnktdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLXNlY29uZGFyeS10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc2Vjb25kYXJ5LXRleHQtY29sb3ItZGlzYWJsZWQsICNmZmZmZmYpO1xcbiAgLS1zZWNvbmRhcnktdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1zZWNvbmRhcnktdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3I6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3IsICM4NjhlOTYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3ItaG92ZXIsICM3MjdiODQpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1zZWNvbmRhcnktYmctY29sb3ItZGlzYWJsZWQsICM4NjhlOTYpO1xcbiAgLS1zZWNvbmRhcnktYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJnLWNvbG9yLWFjdGl2ZSwgIzZjNzU3ZCk7XFxuICAtLXNlY29uZGFyeS1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yLCAjODY4ZTk2KTtcXG4gIC0tc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3JkZXItY29sb3ItaG92ZXIsICM2Yzc1N2QpO1xcbiAgLS1zZWNvbmRhcnktYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1kaXNhYmxlZCwgIzg2OGU5Nik7XFxuICAtLXNlY29uZGFyeS1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc2Vjb25kYXJ5LWJvcmRlci1jb2xvci1hY3RpdmUsICM2NjZlNzYpO1xcbiAgLS1zZWNvbmRhcnktYm94LXNoYWRvdzogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoMTUyLCAxNTksIDE2NiwgMC41KSk7XFxuICAtLXNlY29uZGFyeS1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLXNlY29uZGFyeS1ib3gtc2hhZG93LWFjdGl2ZSwgcmdiYSgxNTIsIDE1OSwgMTY2LCAwLjUpKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLWhvdmVyLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktaW5mby10ZXh0LWNvbG9yLWRpc2FibGVkLCAjZmZmZmZmKTtcXG4gIC0taW5mby10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1pbmZvLWJnLWNvbG9yOiB2YXIoLS1rdWktaW5mby1iZy1jb2xvciwgIzAzYTlmNCk7XFxuICAtLWluZm8tYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1pbmZvLWJnLWNvbG9yLWhvdmVyLCAjMDM4ZmNlKTtcXG4gIC0taW5mby1iZy1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLWluZm8tYmctY29sb3ItZGlzYWJsZWQsICMwM2E5ZjQpO1xcbiAgLS1pbmZvLWJnLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tYmctY29sb3ItYWN0aXZlLCAjMDI4NmMyKTtcXG4gIC0taW5mby1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1pbmZvLWJvcmRlci1jb2xvciwgIzAzYTlmNCk7XFxuICAtLWluZm8tYm9yZGVyLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktaW5mby1ib3JkZXItY29sb3ItaG92ZXIsICMwMjg2YzIpO1xcbiAgLS1pbmZvLWJvcmRlci1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLWluZm8tYm9yZGVyLWNvbG9yLWRpc2FibGVkLCAjMDNhOWY0KTtcXG4gIC0taW5mby1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktaW5mby1ib3JkZXItY29sb3ItYWN0aXZlLCAjMDI3ZGI1KTtcXG4gIC0taW5mby1ib3gtc2hhZG93OiB2YXIoLS1rdWktaW5mby1ib3gtc2hhZG93LCAwIDAgMCAwIHJnYmEoNDEsIDE4MiwgMjQ2LCAwLjUpKTtcXG4gIC0taW5mby1ib3gtc2hhZG93LWFjdGl2ZTogdmFyKC0ta3VpLWluZm8tYm94LXNoYWRvdy1hY3RpdmUsIDAgMCAwIDAgcmdiYSg0MSwgMTgyLCAyNDYsIDAuNSkpO1xcbiAgLS1kYW5nZXJvdXMtdGV4dC1jb2xvcjogdmFyKC0ta3VpLWRhbmdlcm91cy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tZGFuZ2Vyb3VzLXRleHQtY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kYW5nZXJvdXMtdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLWRhbmdlcm91cy10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLXRleHQtY29sb3ItZGlzYWJsZWQsICNmZmZmZmYpO1xcbiAgLS1kYW5nZXJvdXMtdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1kYW5nZXJvdXMtdGV4dC1jb2xvci1hY3RpdmUsICNmZmZmZmYpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3I6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3IsICNmZjZiNjgpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItaG92ZXI6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3ItaG92ZXIsICNmZjQ2NDIpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS1kYW5nZXJvdXMtYmctY29sb3ItZGlzYWJsZWQsICNmZjZiNjgpO1xcbiAgLS1kYW5nZXJvdXMtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJnLWNvbG9yLWFjdGl2ZSwgI2ZmMzkzNSk7XFxuICAtLWRhbmdlcm91cy1ib3JkZXItY29sb3I6IHZhcigtLWt1aS1kYW5nZXJvdXMtYm9yZGVyLWNvbG9yLCAjZmY2YjY4KTtcXG4gIC0tZGFuZ2Vyb3VzLWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLWRhbmdlcm91cy1ib3JkZXItY29sb3IsICNmZjM5MzUpO1xcbiAgLS1kYW5nZXJvdXMtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJvcmRlci1jb2xvciwgI2ZmNmI2OCk7XFxuICAtLWRhbmdlcm91cy1ib3JkZXItY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJvcmRlci1jb2xvciwgI2ZmMmQyOCk7XFxuICAtLWRhbmdlcm91cy1ib3gtc2hhZG93OiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJveC1zaGFkb3csIDAgMCAwIDAgcmdiYSgyNTUsIDEyOSwgMTI3LCAwLjUpKTtcXG4gIC0tZGFuZ2Vyb3VzLWJveC1zaGFkb3ctYWN0aXZlOiB2YXIoLS1rdWktZGFuZ2Vyb3VzLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoMjU1LCAxMjksIDEyNywgMC41KSk7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvcjogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvciwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvci1ob3ZlciwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1kaXNhYmxlZDogdmFyKC0ta3VpLXdhcm5pbmctdGV4dC1jb2xvci1kaXNhYmxlZCwgI2ZmZmZmZik7XFxuICAtLXdhcm5pbmctdGV4dC1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLXRleHQtY29sb3ItYWN0aXZlLCAjZmZmZmZmKTtcXG4gIC0td2FybmluZy1iZy1jb2xvcjogdmFyKC0ta3VpLXdhcm5pbmctYmctY29sb3IsICNmZmM3MjEpO1xcbiAgLS13YXJuaW5nLWJnLWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktd2FybmluZy1iZy1jb2xvci1ob3ZlciwgI2ZhYmIwMCk7XFxuICAtLXdhcm5pbmctYmctY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS13YXJuaW5nLWJnLWNvbG9yLWRpc2FibGVkLCAjZmZjNzIxKTtcXG4gIC0td2FybmluZy1iZy1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLWJnLWNvbG9yLWFjdGl2ZSwgI2VkYjEwMCk7XFxuICAtLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB2YXIoLS1rdWktd2FybmluZy1ib3JkZXItY29sb3IsICNmZmM3MjEpO1xcbiAgLS13YXJuaW5nLWJvcmRlci1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXdhcm5pbmctYm9yZGVyLWNvbG9yLWhvdmVyLCAjZWRiMTAwKTtcXG4gIC0td2FybmluZy1ib3JkZXItY29sb3ItZGlzYWJsZWQ6IHZhcigtLWt1aS13YXJuaW5nLWJvcmRlci1jb2xvci1kaXNhYmxlZCwgI2ZmYzcyMSk7XFxuICAtLXdhcm5pbmctYm9yZGVyLWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXdhcm5pbmctYm9yZGVyLWNvbG9yLWFjdGl2ZSwgI2UwYTgwMCk7XFxuICAtLXdhcm5pbmctYm94LXNoYWRvdzogdmFyKC0ta3VpLXdhcm5pbmctYm94LXNoYWRvdywgMCAwIDAgMCByZ2JhKDI1NSwgMjA3LCA2NiwgMC41KSk7XFxuICAtLXdhcm5pbmctYm94LXNoYWRvdy1hY3RpdmU6IHZhcigtLWt1aS13YXJuaW5nLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoMjU1LCAyMDcsIDY2LCAwLjUpKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcXG4gIC0tc3VjY2Vzcy10ZXh0LWNvbG9yLWFjdGl2ZTogdmFyKC0ta3VpLXN1Y2Nlc3MtdGV4dC1jb2xvciwgI2ZmZmZmZik7XFxuICAtLXN1Y2Nlc3MtYmctY29sb3I6IHZhcigtLWt1aS1zdWNjZXNzLWJnLWNvbG9yLCAjMzJjNzg3KTtcXG4gIC0tc3VjY2Vzcy1iZy1jb2xvci1ob3ZlcjogdmFyKC0ta3VpLXN1Y2Nlc3MtYmctY29sb3ItaG92ZXIsICMyYWE4NzIpO1xcbiAgLS1zdWNjZXNzLWJnLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy1iZy1jb2xvci1kaXNhYmxlZCwgIzMyYzc4Nyk7XFxuICAtLXN1Y2Nlc3MtYmctY29sb3ItYWN0aXZlOiB2YXIoLS1rdWktc3VjY2Vzcy1iZy1jb2xvci1hY3RpdmUsICMyODllNmIpO1xcbiAgLS1zdWNjZXNzLWJvcmRlci1jb2xvcjogdmFyKC0ta3VpLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLCAjMzJjNzg3KTtcXG4gIC0tc3VjY2Vzcy1ib3JkZXItY29sb3ItaG92ZXI6IHZhcigtLWt1aS1zdWNjZXNzLWJvcmRlci1jb2xvciwgIzI4OWU2Yik7XFxuICAtLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktc3VjY2Vzcy1ib3JkZXItY29sb3IsICMzMmM3ODcpO1xcbiAgLS1zdWNjZXNzLWJvcmRlci1jb2xvci1hY3RpdmU6IHZhcigtLWt1aS1zdWNjZXNzLWJvcmRlci1jb2xvciwgIzI1OTQ2NCk7XFxuICAtLXN1Y2Nlc3MtYm94LXNoYWRvdzogdmFyKC0ta3VpLXN1Y2Nlc3MtYm94LXNoYWRvdywgMCAwIDAgMCByZ2JhKDgxLCAyMDcsIDE1MywgMC41KSk7XFxuICAtLXN1Y2Nlc3MtYm94LXNoYWRvdy1hY3RpdmU6IHZhcigtLWt1aS1zdWNjZXNzLWJveC1zaGFkb3ctYWN0aXZlLCAwIDAgMCAwIHJnYmEoODEsIDIwNywgMTUzLCAwLjUpKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjMjE5NmYzKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yLWhvdmVyOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjMGE2ZWJkKTtcXG4gIC0tbGluay10ZXh0LWNvbG9yLWRpc2FibGVkOiB2YXIoLS1rdWktbGluay10ZXh0LWNvbG9yLCAjODY4ZTk2KTtcXG4gIC0tbGluay10ZXh0LWRlY29yYXRpb246IHZhcigtLWt1aS1saW5rLXRleHQtZGVjb3JhdGlvbiwgdW5kZXJsaW5lKTtcXG59XFxuXFxuLyogQWRkIHlvdXIgc3R5bGVzIGhlcmUgZm9yIGt1aS1hY2NvcmRpb24sIHVzZSBDU1MgdmFyaWFibGUgYXMgbXVjaCBhcyBwb3NzaWJsZSAqL1xcbjpob3N0IHtcXG4gIC8qIEFkZCB5b3VyIHZhcmlhYmxlcyBoZXJlLCBkb24ndCBmb3JnZXQgdG8gZ2l2ZSB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlbSAqL1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlUb0FycmF5O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlXb3JkcztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5T2Y7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiIsInZhciBjYXN0U2xpY2UgPSByZXF1aXJlKCcuL19jYXN0U2xpY2UnKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8ubG93ZXJGaXJzdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBgU3RyaW5nYCBjYXNlIG1ldGhvZCB0byB1c2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXNlRmlyc3QobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgIHZhciBzdHJTeW1ib2xzID0gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgICA/IHN0cmluZ1RvQXJyYXkoc3RyaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgY2hyID0gc3RyU3ltYm9sc1xuICAgICAgPyBzdHJTeW1ib2xzWzBdXG4gICAgICA6IHN0cmluZy5jaGFyQXQoMCk7XG5cbiAgICB2YXIgdHJhaWxpbmcgPSBzdHJTeW1ib2xzXG4gICAgICA/IGNhc3RTbGljZShzdHJTeW1ib2xzLCAxKS5qb2luKCcnKVxuICAgICAgOiBzdHJpbmcuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gY2hyW21ldGhvZE5hbWVdKCkgKyB0cmFpbGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDYXNlRmlyc3Q7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGRlYnVyciA9IHJlcXVpcmUoJy4vZGVidXJyJyksXG4gICAgd29yZHMgPSByZXF1aXJlKCcuL3dvcmRzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIjtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29tcG91bmRlcjtcbiIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZTtcbiIsIi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGVXb3JkO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciBhc2NpaVRvQXJyYXkgPSByZXF1aXJlKCcuL19hc2NpaVRvQXJyYXknKSxcbiAgICBoYXNVbmljb2RlID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZScpLFxuICAgIHVuaWNvZGVUb0FycmF5ID0gcmVxdWlyZSgnLi9fdW5pY29kZVRvQXJyYXknKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVRvQXJyYXkoc3RyaW5nKVxuICAgIDogYXNjaWlUb0FycmF5KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzRGluZ2JhdFJhbmdlID0gJ1xcXFx1MjcwMC1cXFxcdTI3YmYnLFxuICAgIHJzTG93ZXJSYW5nZSA9ICdhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmYnLFxuICAgIHJzTWF0aE9wUmFuZ2UgPSAnXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmNycsXG4gICAgcnNOb25DaGFyUmFuZ2UgPSAnXFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmJyxcbiAgICByc1B1bmN0dWF0aW9uUmFuZ2UgPSAnXFxcXHUyMDAwLVxcXFx1MjA2ZicsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNQdW5jdHVhdGlvblJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNNaXNjTG93ZXIgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNNaXNjVXBwZXIgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRDb250ckxvd2VyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRDb250clVwcGVyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc09yZExvd2VyID0gJ1xcXFxkKig/OjFzdHwybmR8M3JkfCg/IVsxMjNdKVxcXFxkdGgpKD89XFxcXGJ8W0EtWl9dKScsXG4gICAgcnNPcmRVcHBlciA9ICdcXFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXFxcZFRIKSg/PVxcXFxifFthLXpfXSknLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc0Vtb2ppID0gJyg/OicgKyBbcnNEaW5nYmF0LCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc1NlcTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggY29tcGxleCBvciBjb21wb3VuZCB3b3Jkcy4gKi9cbnZhciByZVVuaWNvZGVXb3JkID0gUmVnRXhwKFtcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNNaXNjVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyICsgcnNNaXNjTG93ZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyICsgJz8nICsgcnNNaXNjTG93ZXIgKyAnKycgKyByc09wdENvbnRyTG93ZXIsXG4gIHJzVXBwZXIgKyAnKycgKyByc09wdENvbnRyVXBwZXIsXG4gIHJzT3JkVXBwZXIsXG4gIHJzT3JkTG93ZXIsXG4gIHJzRGlnaXRzLFxuICByc0Vtb2ppXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqXG4gKiBTcGxpdHMgYSBVbmljb2RlIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVXb3JkcztcbiIsInZhciBjYXBpdGFsaXplID0gcmVxdWlyZSgnLi9jYXBpdGFsaXplJyksXG4gICAgY3JlYXRlQ29tcG91bmRlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNvbXBvdW5kZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBbY2FtZWwgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2FtZWxDYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FtZWwgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnLS1mb28tYmFyLS0nKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJ19fRk9PX0JBUl9fJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICovXG52YXIgY2FtZWxDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyBjYXBpdGFsaXplKHdvcmQpIDogd29yZCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbENhc2U7XG4iLCJ2YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdXBwZXJGaXJzdCA9IHJlcXVpcmUoJy4vdXBwZXJGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZSBhbmQgdGhlIHJlbWFpbmluZ1xuICogdG8gbG93ZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gdXBwZXJGaXJzdCh0b1N0cmluZyhzdHJpbmcpLnRvTG93ZXJDYXNlKCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcGl0YWxpemU7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgbnVsbGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bGwobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bGwodm9pZCAwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdWxsO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYHVuZGVmaW5lZGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1VuZGVmaW5lZCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNVbmRlZmluZWQobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1VuZGVmaW5lZDtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBhc2NpaVdvcmRzID0gcmVxdWlyZSgnLi9fYXNjaWlXb3JkcycpLFxuICAgIGhhc1VuaWNvZGVXb3JkID0gcmVxdWlyZSgnLi9faGFzVW5pY29kZVdvcmQnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1bmljb2RlV29yZHMgPSByZXF1aXJlKCcuL191bmljb2RlV29yZHMnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQge1xyXG5cdGJ1aWxkU2hhZG93Um9vdCxcclxuXHRidWlsZENvbXBvbmVudENvbnRlbnRzLFxyXG5cdGNoYW5nZUhhbmRsZXJXcmFwcGVyXHJcbn0gZnJvbSBcIlV0aWxzL3djVXRpbHNcIjtcclxuaW1wb3J0IHsgY29udGFpbmVySGVscGVyLCBjb250YWluZWRIZWxwZXIgfSBmcm9tIFwiVXRpbHMvRWxlbWVudEhlbHBlclwiO1xyXG5cclxuY2xhc3MgQmFzZUVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZUNvbmZpZywgYXR0cmlidXRlc0NvbmZpZywgdXNlU2hhZG93ID0gdHJ1ZSB9KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnO1xyXG5cdFx0dGhpcy5hdHRyaWJ1dGVzQ29uZmlnID0gYXR0cmlidXRlc0NvbmZpZztcclxuXHRcdGNvbnN0IHsgdGVtcGxhdGUgfSA9IHRoaXMudGVtcGxhdGVDb25maWc7XHJcblx0XHRpZiAodXNlU2hhZG93KSB7XHJcblx0XHRcdGJ1aWxkU2hhZG93Um9vdCh0ZW1wbGF0ZSwgdGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRidWlsZENvbXBvbmVudENvbnRlbnRzKHRlbXBsYXRlLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG5cdFx0Y29uc3QgeyB0YWdOYW1lLCBhdHRyaWJ1dGVzQ29uZmlnIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgYXR0cmlidXRlQ2hhbmdlZEhhbmRsZXIgPVxyXG5cdFx0XHRhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV0gJiZcclxuXHRcdFx0YXR0cmlidXRlc0NvbmZpZ1thdHRyaWJ1dGVdLmF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyO1xyXG5cdFx0aWYgKGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyKSB7XHJcblx0XHRcdGNoYW5nZUhhbmRsZXJXcmFwcGVyKHtcclxuXHRcdFx0XHRhdHRyaWJ1dGVzQ29uZmlnLFxyXG5cdFx0XHRcdGF0dHJpYnV0ZSxcclxuXHRcdFx0XHR0YWdOYW1lLFxyXG5cdFx0XHRcdG9sZFZhbHVlLFxyXG5cdFx0XHRcdG5ld1ZhbHVlLFxyXG5cdFx0XHRcdGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogdGhpc1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKHsgZWxlbWVudCwgYWxsb3dlZENoaWxkcmVuID0gW10sIGFsbG93ZWRQYXJlbnRzID0gW10gfSkge1xyXG5cdFx0aWYgKGFsbG93ZWRDaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVySGVscGVyLnZhbGlkYXRlQ2hpbGRyZW4oe1xyXG5cdFx0XHRcdGVsZW1lbnQsXHJcblx0XHRcdFx0YWxsb3dlZENoaWxkcmVuLFxyXG5cdFx0XHRcdHRhZ05hbWU6IHRoaXMudGFnTmFtZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29udGFpbmVySGVscGVyLnJlZ2lzdGVyQ2hpbGRyZW4oe1xyXG5cdFx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiB0aGlzLmNoaWxkcmVuRGVmaW5lZENhbGxiYWNrLmJpbmQodGhpcylcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoYWxsb3dlZFBhcmVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjb250YWluZWRIZWxwZXIudmFsaWRhdGVQYXJlbnQoe1xyXG5cdFx0XHRcdGVsZW1lbnQsXHJcblx0XHRcdFx0YWxsb3dlZFBhcmVudHMsXHJcblx0XHRcdFx0dGFnTmFtZTogdGhpcy50YWdOYW1lXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUVsZW1lbnQ7XHJcbiIsIi8vSGVyZSB5b3UgY2FuIGFkZCBhbmQgZXhwb3J0IGFueSBlbnVtcyB5b3UgZmluZCB1c2VmdWwgZm9yIHRoaXMgY29tcG9uZW50XHJcbmltcG9ydCB7IGJvb2xlYW5TZXR0ZXIgfSBmcm9tIFwiVXRpbHMvd2NVdGlsc1wiO1xyXG5pbXBvcnQgeyBpc0Jvb2xlYW5BdHRyaWJ1dGUgfSBmcm9tIFwiVXRpbHMvdmFsaWRhdG9yc1wiO1xyXG5cclxuY29uc3QgYXR0cmlidXRlc0NvbmZpZyA9IHtcclxuLy9cdFwiQVRUUklCVVRFX05BTUVcIjoge1xyXG4vL1x0XHRkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbi8vICAgICAgc2V0dGVyOiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBlbG0uc2V0QXR0cmlidXRlIGlzIGNhbGxlZCxcclxuLy8gICAgICBnZXR0ZXI6IGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGVsbS5nZXRBdHRyaWJ1dGUgb3IgZWxtLkFUVFJJQlVURV9OQU1FIGlzIGNhbGxlZCxcclxuLy9cdFx0YXR0cmlidXRlQ2hhbmdlZEhhbmRsZXI6IGZ1bmN0aW9uKHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBjb21wb25lbnQgfSkge1xyXG4vLyAgICAgICAgICAvLyBXaGVuIGV2ZXIgdGhlIGF0dHJpYnV0ZSBjaGFuZ2VzIHRoaXMgbWV0aG9kIGdldCBjYWxsZWRcclxuLy9cdFx0fSxcclxuLy9cdFx0dmFsaWRhdG9yczogW10gLy8gYSBsaXN0IG9mIHZhbGlkYXRvcnMgdG8gYmUgY2FsbGVkIGJlZm9yZSBoYW5kZWxpbmcgdGhlIGNoYW5nZVxyXG4vL1x0fSxcclxuXHRcImt1aS10b2dnbGVcIjoge1xyXG5cdFx0ZGVmYXVsdFZhbHVlOiBmYWxzZSxcclxuXHRcdHNldHRlcjogYm9vbGVhblNldHRlcixcclxuXHRcdHZhbGlkYXRvcnM6IFtpc0Jvb2xlYW5BdHRyaWJ1dGVdLFxyXG5cdFx0YXR0cmlidXRlQ2hhbmdlZEhhbmRsZXI6IGZ1bmN0aW9uKHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBjb21wb25lbnQgfSkge31cclxuXHR9LFxyXG5cdFwia3VpLWNvbGxhcHNlLWljb25cIjoge1xyXG5cdFx0YXR0cmlidXRlQ2hhbmdlZEhhbmRsZXI6IGZ1bmN0aW9uKHsgb2xkVmFsdWUsIG5ld1ZhbHVlLCBjb21wb25lbnQgfSkge31cclxuXHR9LFxyXG5cdFwia3VpLWV4cGFuZC1pY29uXCI6IHtcclxuXHRcdGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyOiBmdW5jdGlvbih7IG9sZFZhbHVlLCBuZXdWYWx1ZSwgY29tcG9uZW50IH0pIHt9XHJcblx0fSxcclxufTtcclxuXHJcbmV4cG9ydCB7YXR0cmlidXRlc0NvbmZpZyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgS1VJQWNjb3JkaW9uLCB7IHRhZ05hbWUgfSBmcm9tIFwiLi9rdWktYWNjb3JkaW9uXCI7XHJcbktVSUFjY29yZGlvbi5kZWZpbmVDdXN0b21FbGVtZW50KCk7XHJcbmV4cG9ydCB7IEtVSUFjY29yZGlvbiBhcyBkZWZhdWx0LCB0YWdOYW1lIH07IiwiaW1wb3J0IGtleXMgZnJvbSBcImxvZGFzaC9rZXlzXCI7XHJcblxyXG5pbXBvcnQgQmFzZUVsZW1lbnQgZnJvbSBcIkJhc2UvYmFzZUVsZW1lbnRcIjtcclxuaW1wb3J0IGF0dHJpYnV0ZXNDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB0ZW1wbGF0ZUNvbmZpZyBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDdXN0b21FbGVtZW50IH0gZnJvbSBcIlV0aWxzL3djVXRpbHNcIjtcclxuXHJcbmNvbnN0IHRhZ05hbWUgPSBcImt1aS1hY2NvcmRpb25cIjtcclxuY29uc3QgYWxsb3dlZENoaWxkcmVuID0gW1wia3VpLXNlY3Rpb25cIl07XHJcblxyXG4vKipcclxuICogQWNjb3JkaW9uIGVsZW1lbnRcclxuICovXHJcbmNsYXNzIEtVSUFjY29yZGlvbiBleHRlbmRzIEJhc2VFbGVtZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKHsgdGVtcGxhdGVDb25maWcsIGF0dHJpYnV0ZXNDb25maWcgfSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0ge1xyXG5cdFx0XHRhY2NvcmRpb246IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdHRlbXBsYXRlQ29uZmlnLnNlbGVjdG9ycy5hY2NvcmRpb25cclxuXHRcdFx0KVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRzdXBlci5jb25uZWN0ZWRDYWxsYmFjayh7XHJcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMuYWNjb3JkaW9uLFxyXG5cdFx0XHRhbGxvd2VkQ2hpbGRyZW5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hpbGRyZW5EZWZpbmVkQ2FsbGJhY2soKSB7XHJcblx0XHQvL0dvIG92ZXIgdGhlIHNlY3Rpb25zIGFuZCByZWdpc3RlciB0aGVtXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuXHRcdHJldHVybiBrZXlzKGF0dHJpYnV0ZXNDb25maWcpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRlZmluZUN1c3RvbUVsZW1lbnQoKSB7XHJcblx0XHRpZiAoIUtVSUFjY29yZGlvbi5kZWZpbmVkKSB7XHJcblx0XHRcdGRlZmluZUN1c3RvbUVsZW1lbnQoe1xyXG5cdFx0XHRcdGNvbXBvbmVudENsYXNzOiBLVUlBY2NvcmRpb24sXHJcblx0XHRcdFx0dGFnTmFtZSxcclxuXHRcdFx0XHRhdHRyaWJ1dGVzQ29uZmlnXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRLVUlBY2NvcmRpb24uZGVmaW5lZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHNldFNlY3Rpb25FeHBhbmRlZEhhbmRsZXIoaGFuZGxlcikge1xyXG5cdFx0Ly8gYXV0by1nZW5lcmF0ZWQgbWV0aG9kXHJcblx0fVxyXG5cdGdldEFsbFNlY3Rpb25zKCkge1xyXG5cdFx0Ly8gYXV0by1nZW5lcmF0ZWQgbWV0aG9kXHJcblx0fVxyXG5cdGdldEV4cGFuZGVkU2VjdGlvbnMoKSB7XHJcblx0XHQvLyBhdXRvLWdlbmVyYXRlZCBtZXRob2RcclxuXHR9XHJcblx0Y29sbGFwc2VBbGxTZWN0aW9ucygpIHtcclxuXHRcdC8vIGF1dG8tZ2VuZXJhdGVkIG1ldGhvZFxyXG5cdH1cclxuXHRleHBhbmRBbGxTZWN0aW9ucygpIHtcclxuXHRcdC8vIGF1dG8tZ2VuZXJhdGVkIG1ldGhvZFxyXG5cdH1cclxuXHRleHBhbmRTZWN0aW9uKHNlY3Rpb25JZCkge1xyXG5cdFx0Ly8gYXV0by1nZW5lcmF0ZWQgbWV0aG9kXHJcblx0fVxyXG5cdGNvbGxhcHNlU2VjdGlvbihzZWN0aW9uSWQpIHtcclxuXHRcdC8vIGF1dG8tZ2VuZXJhdGVkIG1ldGhvZFxyXG5cdH1cclxufVxyXG5leHBvcnQgeyBLVUlBY2NvcmRpb24gYXMgZGVmYXVsdCwgdGFnTmFtZSB9O1xyXG4iLCIvLyBjc3MtdG8tc3RyaW5nLWxvYWRlcjogdHJhbnNmb3JtcyBzdHlsZXMgZnJvbSBjc3MtbG9hZGVyIHRvIGEgc3RyaW5nIG91dHB1dFxuXG4vLyBHZXQgdGhlIHN0eWxlc1xudmFyIHN0eWxlcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbmlmICh0eXBlb2Ygc3R5bGVzID09PSAnc3RyaW5nJykge1xuICAvLyBSZXR1cm4gYW4gZXhpc3Rpbmcgc3RyaW5nXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xufSBlbHNlIHtcbiAgLy8gQ2FsbCB0aGUgY3VzdG9tIHRvU3RyaW5nIG1ldGhvZCBmcm9tIGNzcy1sb2FkZXIgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gc3R5bGVzLnRvU3RyaW5nKCk7XG59IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdGFnTmFtZSB9IGZyb20gXCIuL1wiO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuXHQ8c3R5bGU+XHJcblx0XHQke3N0eWxlfVxyXG5cdDwvc3R5bGU+XHJcblx0PGRpdiBjbGFzcz1cImt1aS1hY2NvcmRpb25cIj48L2Rpdj5cclxuYDtcclxuXHJcbi8vVGhpcyBpcyBmb3IgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5IFxyXG53aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGFnTmFtZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dGVtcGxhdGUsXHJcblx0c2VsZWN0b3JzOiB7XHJcblx0XHRhY2NvcmRpb246IFwiZGl2Lmt1aS1hY2NvcmRpb25cIlxyXG5cdH1cclxufTtcclxuIiwiLyoqXHJcbiAqIFZhbGlkYXRlcyBpZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgY29udGFpbnMgb25seSBhbGxvd2VkIGNoaWxkcmVuIGVsZW1lbnRzXHJcbiAqXHJcbiAqIEByZXR1cm5zIGEgbGlzdCBvZiB0aGUgZm91bmQgYWxsb3dlZCBlbGVtZW50cyB0YWcgbmFtZXNcclxuICovXHJcbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRyZW4oeyBlbGVtZW50LCBhbGxvd2VkQ2hpbGRyZW4sIHRhZ05hbWUgfSkge1xyXG5cdGNvbnN0IGNoaWxkcmVuVHlwZXMgPSBbXTtcclxuXHRpZiAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdGxldCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGNoaWxkVGFnTmFtZSA9IGNoaWxkcmVuW2ldLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKGFsbG93ZWRDaGlsZHJlbi5pbmRleE9mKGNoaWxkVGFnTmFtZSkgPT09IC0xKSB7XHJcblx0XHRcdFx0Y29uc3QgYWNzID0gYWxsb3dlZENoaWxkcmVuLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0XHRgJHt0YWdOYW1lfSBlbGVtZW50IGFjY2VwdHMgb25seSBbJHthY3N9XSBlbGVtZW50cyBhcyBjaGlsZHJlbiwgYnV0IGl0IGhhcyAke2NoaWxkVGFnTmFtZX1gXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIGlmIChjaGlsZHJlblR5cGVzLmluZGV4T2YoY2hpbGRUYWdOYW1lKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRjaGlsZHJlblR5cGVzLnB1c2goY2hpbGRUYWdOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gY2hpbGRyZW5UeXBlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbGlkYXRlcyBpZiB0aGUgY29udGFpbmVkIGVsZW1lbnQgaXMgYSBjaGlsZCBvZiBvbmx5IGFsbG93ZWQgcGFyZW50IGVsZW1lbnRzXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZVBhcmVudCh7IGVsZW1lbnQsIGFsbG93ZWRQYXJlbnRzLCB0YWdOYW1lIH0pIHtcclxuXHRpZiAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuXHRcdGxldCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG5cdFx0Y29uc3QgYXBzID0gYWxsb3dlZFBhcmVudHMuam9pbihcIiwgXCIpO1xyXG5cdFx0aWYgKHBhcmVudE5vZGUpIHtcclxuXHRcdFx0Y29uc3QgcGFyZW50VGFnTmFtZSA9IHBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAoYWxsb3dlZFBhcmVudHMuaW5kZXhPZihwYXJlbnRUYWdOYW1lKSA9PT0gLTEpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7dGFnTmFtZX0gbXVzdCBiZSBhIGNoaWxkIG9mICR7YXBzfWApO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYCR7dGFnTmFtZX0gbXVzdCBiZSBhIGNoaWxkIG9mICR7YXBzfWApO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckhlbHBlciA9IHtcclxuXHR2YWxpZGF0ZUNoaWxkcmVuXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250YWluZWRIZWxwZXIgPSB7XHJcblx0dmFsaWRhdGVQYXJlbnRcclxufTtcclxuIiwiLyoqXHJcbiAqIEluaXRpYWx5IHdlIHVzZSB0aGUgbG9kYXNoIGxpYnJhcnkgZm9yIHZhbGlkYXRpb25zIGFuZCB1dGlsaXR5IGZ1bmN0aW9ucywgYnV0IGlmIHRoZXJlIGlzIHNvbWV0aGluZ1xyXG4gKiBzcGVjaWZpYyB3ZSBhZGQgaXQgaGVyZVxyXG4gKi9cclxuaW1wb3J0IF9pc1N0cmluZyBmcm9tIFwibG9kYXNoL2lzU3RyaW5nXCI7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBCb29sZWFuLlRSVUVcclxuICogQHBhcmFtIHtBbnl9IHN0ciB0aGUgdmFsdWUgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJ1ZShzdHIpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0c3RyID09PSB0cnVlIHx8XHJcblx0XHQoISFzdHIgJiYgX2lzU3RyaW5nKHN0cikgJiYgc3RyLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiKVxyXG5cdCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB2YWx1ZSBpcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgQm9vbGVhbi5GQUxTRVxyXG4gKiBAcGFyYW0ge0FueX0gc3RyIHRoZSB2YWx1ZSB0byB0ZXN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNGYWxzZShzdHIpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0c3RyID09PSBmYWxzZSB8fFxyXG5cdFx0KCEhc3RyICYmIF9pc1N0cmluZyhzdHIpICYmIHN0ci50b0xvd2VyQ2FzZSgpID09PSBcImZhbHNlXCIpXHJcblx0KTtcclxufVxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhlIHZhbHVlIGlzIHJlcHJlc2VudHMgYSBib29sZWFuIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBlbXB0eSBzdHJpbmcsIHRydWUvZmFsc2VcclxuICogQHBhcmFtIHtBbnl9IHN0ciB0aGUgdmFsdWUgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbkF0dHJpYnV0ZShzdHIpIHtcclxuXHRyZXR1cm4gc3RyID09PSBcIlwiIHx8IGlzVHJ1ZShzdHIpIHx8IGlzRmFsc2Uoc3RyKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gYSB2YWx1ZSwgaXQgd2lsbCByZXR1cm4gaWYgaXQncyBmb3VuZCBpbiB0aGUgbWFwIG9yIG5vdCAoPT09IGNoZWNrKVxyXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgY29udGFpbmluZyB0aGUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZU9mKG1hcCkge1xyXG5cdHJldHVybiBmdW5jdGlvbiBpc1ZhbHVlT2ZNYXAodmFsdWUpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdE9iamVjdC5lbnRyaWVzKG1hcCkuZmlsdGVyKHBhaXIgPT4gcGFpclsxXSA9PT0gdmFsdWUpLmxlbmd0aCA9PT0gMVxyXG5cdFx0KTtcclxuXHR9O1xyXG59IiwiaW1wb3J0IF90b0NhbWVsQ2FzZSBmcm9tIFwibG9kYXNoL2NhbWVsQ2FzZVwiO1xyXG5pbXBvcnQgX2lzRnVuY3Rpb24gZnJvbSBcImxvZGFzaC9pc0Z1bmN0aW9uXCI7XHJcbmltcG9ydCBfaXNVbmRlZmluZWQgZnJvbSBcImxvZGFzaC9pc1VuZGVmaW5lZFwiO1xyXG5pbXBvcnQgX2lzTnVsbCBmcm9tIFwibG9kYXNoL2lzTnVsbFwiO1xyXG5pbXBvcnQgeyBpc1RydWUsIGlzRmFsc2UgfSBmcm9tIFwiLi92YWxpZGF0b3JzXCI7XHJcblxyXG4vKipcclxuICogRXhlY3V0ZXMgYW4gYXJyYXkgb2YgdmFsaWRhdG9ycyBvbmUgYWZ0ZXIgdGhlIG90aGVyIHRpbGwgb25lIGZhaWxzIG9yIGFsbCBzdWNjZWVkXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseVZhbGlkYXRvcnMoe1xyXG5cdGF0dHJpYnV0ZSxcclxuXHR0YWdOYW1lLFxyXG5cdHZhbGlkYXRvcnMgPSBbXSxcclxuXHR2YWx1ZSxcclxuXHRpc1JlcXVpcmVkID0gZmFsc2VcclxufSkge1xyXG5cdGlmICh2YWxpZGF0b3JzLmxlbmd0aCA+IDApIHtcclxuXHRcdGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBpc1JlcXVpcmVkKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGAke3RhZ05hbWV9LiR7YXR0cmlidXRlfSBpcyByZXF1aXJlZGApO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkYXRvcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHZhbHVlICYmIF9pc0Z1bmN0aW9uKHZhbGlkYXRvcnNbaV0pICYmICF2YWxpZGF0b3JzW2ldKHZhbHVlKSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGAke3RhZ05hbWV9LiR7YXR0cmlidXRlfTpcXG52YWx1ZTonJHt2YWx1ZX0nIGZhaWxlZCAke3ZhbGlkYXRvcnNbaV0ubmFtZX0gdmFsaWRhdGlvbmApO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4ZWN1dGVzIGFuIGFycmF5IG9mIHRyYW5zZm9ybWVycyBvbmUgYWZ0ZXIgdGhlIG90aGVyIG1hbmlwdWxhdGluZyB0aGUgZ2l2ZW4gdmFsdWUsIGFuZCByZXR1cm4gdGhlIGZpbmFsIHRyYW5zZm9ybWVkIHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseVRyYW5zZm9ybWVycyh7IHRyYW5zZm9ybWVycyA9IFtdLCB2YWx1ZSB9KSB7XHJcblx0bGV0IHR2ID0gdmFsdWU7XHJcblx0aWYgKHRyYW5zZm9ybWVycy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRyYW5zZm9ybWVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoX2lzRnVuY3Rpb24odHJhbnNmb3JtZXJzW2ldKSkge1xyXG5cdFx0XHRcdHR2ID0gdHJhbnNmb3JtZXJzW2ldKHR2KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gdHY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZUNoYW5nZVZhbHVlKHsgYXR0cmlidXRlc0NvbmZpZywgYXR0cmlidXRlLCB0YWdOYW1lLCB2YWx1ZSB9KSB7XHJcblx0Y29uc3QgYXR0cmlidXRlQ29uZmlnID0gYXR0cmlidXRlc0NvbmZpZ1thdHRyaWJ1dGVdO1xyXG5cdGNvbnN0IHsgdmFsaWRhdG9ycywgdHJhbnNmb3JtZXJzLCBpc1JlcXVpcmVkIH0gPSBhdHRyaWJ1dGVDb25maWc7XHJcblx0aWYgKCFhcHBseVZhbGlkYXRvcnMoeyBhdHRyaWJ1dGUsIHRhZ05hbWUsIHZhbGlkYXRvcnMsIHZhbHVlLCBpc1JlcXVpcmVkIH0pKVxyXG5cdFx0cmV0dXJuIHsgaXNWYWxpZDogZmFsc2UgfTtcclxuXHRjb25zdCB0cmFuc2Zvcm1lZFZhbHVlID0gYXBwbHlUcmFuc2Zvcm1lcnMoeyB0cmFuc2Zvcm1lcnMsIHZhbHVlIH0pO1xyXG5cdHJldHVybiB7IHRyYW5zZm9ybWVkVmFsdWUsIGlzVmFsaWQ6IHRydWUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVmYXVsdFNldHRlcih7IGNvbXBvbmVudCwgYXR0cmlidXRlc0NvbmZpZywgYXR0cmlidXRlLCB2YWx1ZSB9KSB7XHJcblx0Y29uc3QgeyB0YWdOYW1lIH0gPSBjb21wb25lbnQ7XHJcblx0Y29uc3QgeyB2YWxpZGF0b3JzLCBpc1JlcXVpcmVkIH0gPSBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV07XHJcblx0Y29uc3QgdmFsaWQgPSBhcHBseVZhbGlkYXRvcnMoeyBhdHRyaWJ1dGUsIHRhZ05hbWUsIHZhbGlkYXRvcnMsIHZhbHVlLCBpc1JlcXVpcmVkIH0pO1xyXG5cdGlmICh2YWxpZCkge1xyXG5cdFx0Y29tcG9uZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRHZXR0ZXIoeyBjb21wb25lbnQsIGF0dHJpYnV0ZSwgZGVmYXVsdFZhbHVlIH0pIHtcclxuXHRpZihjb21wb25lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgPT09IG51bGwgJiYgXHJcblx0XHQhKF9pc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpIHx8IF9pc051bGwoZGVmYXVsdFZhbHVlKSkpIHtcclxuXHRcdGNvbXBvbmVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBkZWZhdWx0VmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gY29tcG9uZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1x0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuU2V0dGVyKHsgY29tcG9uZW50LCBhdHRyaWJ1dGUsIHZhbHVlIH0pIHtcclxuXHRpc1RydWUodmFsdWUpID8gY29tcG9uZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIFwiXCIpIDogY29tcG9uZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTaGFkb3dSb290KHRlbXBsYXRlLCBob3N0KSB7XHJcblx0d2luZG93LlNoYWR5Q1NTICYmIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQoaG9zdCk7XHJcblx0aG9zdC5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuXHRob3N0LnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDb21wb25lbnRDb250ZW50cyh0ZW1wbGF0ZSwgaG9zdCkge1xyXG5cdHdpbmRvdy5TaGFkeUNTUyAmJiB3aW5kb3cuU2hhZHlDU1Muc3R5bGVFbGVtZW50KGhvc3QpO1xyXG5cdGhvc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRob3N0LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHdyYXBzIGEgY2hhbmdlIGhhbmRsZXIgd2l0aCB0aGUgZm9sbG93aW5nIHByb2NlZHVyZSxcclxuICogZmlyc3QgdmFsaWRhdGUgdGhlIGNoYW5nZSB0aGVuIGFwcGx5IHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgYXR0cmlidXRlIGFuZCBmaW5hbHkgYXBwbHkgdGhlIHVzZXIncyBjaGFuZ2UgaGFuZGxlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUhhbmRsZXJXcmFwcGVyKHtcclxuXHRhdHRyaWJ1dGVzQ29uZmlnLFxyXG5cdGF0dHJpYnV0ZSxcclxuXHR0YWdOYW1lLFxyXG5cdG9sZFZhbHVlLFxyXG5cdG5ld1ZhbHVlLFxyXG5cdGF0dHJpYnV0ZUNoYW5nZWRIYW5kbGVyLFxyXG5cdGNvbXBvbmVudFxyXG59KSB7XHJcblx0Y29uc3QgeyB0cmFuc2Zvcm1lZFZhbHVlLCBpc1ZhbGlkIH0gPSBiZWZvcmVDaGFuZ2VWYWx1ZSh7XHJcblx0XHRhdHRyaWJ1dGVzQ29uZmlnLFxyXG5cdFx0YXR0cmlidXRlLFxyXG5cdFx0dGFnTmFtZSxcclxuXHRcdHZhbHVlOiBuZXdWYWx1ZVxyXG5cdH0pO1xyXG5cdGlmIChpc1ZhbGlkKSB7XHJcblx0XHRhdHRyaWJ1dGVDaGFuZ2VkSGFuZGxlcih7XHJcblx0XHRcdGF0dHJpYnV0ZSxcclxuXHRcdFx0b2xkVmFsdWUsXHJcblx0XHRcdG5ld1ZhbHVlOiB0cmFuc2Zvcm1lZFZhbHVlLFxyXG5cdFx0XHRjb21wb25lbnRcclxuXHRcdH0pO1xyXG5cdFx0aWYoaXNGYWxzZSh0cmFuc2Zvcm1lZFZhbHVlKSkge1xyXG5cdFx0XHRjb21wb25lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XHRcdFxyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZighb2xkVmFsdWUgJiYgb2xkVmFsdWUgIT09IFwiXCIpIHtcclxuXHRcdC8vIFRoZSBhdHRyaWJ1dGUgaXMgYSBib29sZWFuIG9uZSBhbmQgdGhlIG9sZCB2YWx1ZSB3YXMgZmFsc3lcclxuXHRcdGNvbXBvbmVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gU2V0IGJhY2sgdGhlIG9sZCB2YWx1ZSBiYWNrXHJcblx0XHRjb21wb25lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgb2xkVmFsdWUpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgYSBjdXN0b20gZWxlbWVudCB3aGlsZSBleHBvc2luZyBwdWJsaWMgQVBJIGZvciBhbGwgdGhlIGF0dHJpYnV0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50KHtcclxuXHRjb21wb25lbnRDbGFzcyxcclxuXHRhdHRyaWJ1dGVzQ29uZmlnLFxyXG5cdHRhZ05hbWVcclxufSkge1xyXG5cdC8vRGVmaW5lIGEgcHVibGljIEFQSSBmb3IgdGhlIGF0dHJpYnV0ZXMgdG8gYmUgdXNlZCBhcyBwcm9wZXJ0aWVzIGFzIHdlbGxcclxuXHRjb21wb25lbnRDbGFzcy5vYnNlcnZlZEF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbihhdHRyaWJ1dGUpIHtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcclxuXHRcdFx0Y29tcG9uZW50Q2xhc3MucHJvdG90eXBlLFxyXG5cdFx0XHRfdG9DYW1lbENhc2UoYXR0cmlidXRlKSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgYXR0cmlidXRlQ29uZmlnID0gYXR0cmlidXRlc0NvbmZpZ1thdHRyaWJ1dGVdO1xyXG5cdFx0XHRcdFx0aWYgKF9pc0Z1bmN0aW9uKGF0dHJpYnV0ZUNvbmZpZy5zZXR0ZXIpKSB7XHJcblx0XHRcdFx0XHRcdGF0dHJpYnV0ZUNvbmZpZy5zZXR0ZXIuY2FsbCh0aGlzLCB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50OiB0aGlzLFxyXG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0YXR0cmlidXRlQ29uZmlnLnNldHRlciA9PT0gdHJ1ZSB8fFxyXG5cdFx0XHRcdFx0XHRfaXNVbmRlZmluZWQoYXR0cmlidXRlQ29uZmlnLnNldHRlcilcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0U2V0dGVyLmNhbGwodGhpcywge1xyXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudDogdGhpcyxcclxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzQ29uZmlnLFxyXG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZSxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zdCBhdHRyaWJ1dGVDb25maWcgPSBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV07XHJcblx0XHRcdFx0XHRpZiAoX2lzRnVuY3Rpb24oYXR0cmlidXRlQ29uZmlnLmdldHRlcikpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGF0dHJpYnV0ZUNvbmZpZy5nZXR0ZXIuY2FsbCh0aGlzLCB7XHJcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50OiB0aGlzLFxyXG5cdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNDb25maWcsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcclxuXHRcdFx0XHRcdFx0YXR0cmlidXRlQ29uZmlnLmdldHRlciA9PT0gdHJ1ZSB8fFxyXG5cdFx0XHRcdFx0XHRfaXNVbmRlZmluZWQoYXR0cmlidXRlQ29uZmlnLmdldHRlcilcclxuXHRcdFx0XHRcdCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdEdldHRlci5jYWxsKHRoaXMsIHtcclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ6IHRoaXMsXHJcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlLFxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZTogYXR0cmlidXRlc0NvbmZpZ1thdHRyaWJ1dGVdLmRlZmF1bHRWYWx1ZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBhdHRyaWJ1dGVzQ29uZmlnW2F0dHJpYnV0ZV0uZGVmYXVsdFZhbHVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9KTtcclxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIGNvbXBvbmVudENsYXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2xhc3NOYW1lKHtcclxuXHRvbGRWYWx1ZSxcclxuXHRuZXdWYWx1ZSxcclxuXHRlbGVtZW50LFxyXG5cdGRlZmF1bHRWYWx1ZSA9IFwiXCJcclxufSkge1xyXG5cdGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBlbGVtZW50O1xyXG5cdGlmIChuZXdWYWx1ZSkge1xyXG5cdFx0aWYgKG9sZFZhbHVlKSB7XHJcblx0XHRcdGNsYXNzTGlzdC5yZW1vdmUuYXBwbHkoY2xhc3NMaXN0LCBvbGRWYWx1ZS5zcGxpdChcIiBcIikpO1xyXG5cdFx0fVxyXG5cdFx0Y2xhc3NMaXN0LmFkZC5hcHBseShjbGFzc0xpc3QsIG5ld1ZhbHVlLnNwbGl0KFwiIFwiKSk7XHJcblx0fSBlbHNlIGlmIChvbGRWYWx1ZSkge1xyXG5cdFx0Y2xhc3NMaXN0LnJlbW92ZS5hcHBseShjbGFzc0xpc3QsIG9sZFZhbHVlLnNwbGl0KFwiIFwiKSk7XHJcblx0XHRjbGFzc0xpc3QuYWRkLmFwcGx5KGNsYXNzTGlzdCwgZGVmYXVsdFZhbHVlLnNwbGl0KFwiIFwiKSk7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
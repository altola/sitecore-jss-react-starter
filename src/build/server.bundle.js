(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(122)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(128);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(32);
var isBuffer = __webpack_require__(98);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sitecore_jss_1 = __webpack_require__(33);
exports.convertPropDataToLayoutServiceFormat = sitecore_jss_1.convertPropDataToLayoutServiceFormat;
exports.convertRouteToLayoutServiceFormat = sitecore_jss_1.convertRouteToLayoutServiceFormat;
exports.dataApi = sitecore_jss_1.dataApi;
exports.mediaApi = sitecore_jss_1.mediaApi;
exports.isExperienceEditorActive = sitecore_jss_1.isExperienceEditorActive;
exports.resetExperienceEditorChromes = sitecore_jss_1.resetExperienceEditorChromes;
exports.getChildPlaceholder = sitecore_jss_1.getChildPlaceholder;
exports.getFieldValue = sitecore_jss_1.getFieldValue;
var Placeholder_1 = __webpack_require__(61);
exports.Placeholder = Placeholder_1.Placeholder;
var Image_1 = __webpack_require__(57);
exports.Image = Image_1.Image;
var RichText_1 = __webpack_require__(56);
exports.RichText = RichText_1.RichText;
var Text_1 = __webpack_require__(55);
exports.Text = Text_1.Text;
var Date_1 = __webpack_require__(54);
exports.DateField = Date_1.DateField;
var Link_1 = __webpack_require__(53);
exports.Link = Link_1.Link;
var File_1 = __webpack_require__(52);
exports.File = File_1.File;
var SitecoreContext_1 = __webpack_require__(10);
exports.SitecoreContext = SitecoreContext_1.SitecoreContext;
exports.SitecoreContextFactory = SitecoreContext_1.SitecoreContextFactory;
var withSitecoreContext_1 = __webpack_require__(51);
exports.withSitecoreContext = withSitecoreContext_1.withSitecoreContext;
var withExperienceEditorChromes_1 = __webpack_require__(50);
exports.withExperienceEditorChromes = withExperienceEditorChromes_1.withExperienceEditorChromes;
var withPlaceholder_1 = __webpack_require__(49);
exports.withPlaceholder = withPlaceholder_1.withPlaceholder;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(120)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/node_modules/warning/warning.js
var warning_warning = __webpack_require__(4);
var warning_warning_default = /*#__PURE__*/__webpack_require__.n(warning_warning);

// EXTERNAL MODULE: ./node_modules/invariant/invariant.js
var invariant = __webpack_require__(3);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};
// CONCATENATED MODULE: ./node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ./node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning_warning_default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning_warning_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ./node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ./node_modules/history/es/createBrowserHistory.js
var createBrowserHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createBrowserHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_default()(canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    warning_warning_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning_warning_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning_warning_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createHashHistory.js
var createHashHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var createHashHistory_HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_default()(canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning_warning_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    warning_warning_default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning_warning_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning_warning_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createMemoryHistory.js
var createMemoryHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createMemoryHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory_extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ./node_modules/history/es/index.js









// CONCATENATED MODULE: ./node_modules/react-router/es/Router.js
var Router_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router_Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: Router_extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant_default()(children == null || react_default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react_default.a.Children.only(children) : null;
  };

  return Router;
}(react_default.a.Component);

Router_Router.propTypes = {
  history: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
};
Router_Router.contextTypes = {
  router: prop_types_default.a.object
};
Router_Router.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Router = (Router_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Router.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Router = (es_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js
function BrowserRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BrowserRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BrowserRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter_BrowserRouter = function (_React$Component) {
  BrowserRouter_inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    BrowserRouter_classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = BrowserRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createBrowserHistory(_this.props), _temp), BrowserRouter_possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react_default.a.Component);

BrowserRouter_BrowserRouter.propTypes = {
  basename: prop_types_default.a.string,
  forceRefresh: prop_types_default.a.bool,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_BrowserRouter = (BrowserRouter_BrowserRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/HashRouter.js
function HashRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HashRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function HashRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter_HashRouter = function (_React$Component) {
  HashRouter_inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    HashRouter_classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = HashRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createHashHistory(_this.props), _temp), HashRouter_possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react_default.a.Component);

HashRouter_HashRouter.propTypes = {
  basename: prop_types_default.a.string,
  getUserConfirmation: prop_types_default.a.func,
  hashType: prop_types_default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types_default.a.node
};


/* harmony default export */ var es_HashRouter = (HashRouter_HashRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Link.js
var Link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Link_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link_Link = function (_React$Component) {
  Link_inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    Link_classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Link_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), Link_possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant_default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant_default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? LocationUtils_createLocation(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return react_default.a.createElement("a", Link_extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(react_default.a.Component);

Link_Link.propTypes = {
  onClick: prop_types_default.a.func,
  target: prop_types_default.a.string,
  replace: prop_types_default.a.bool,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func])
};
Link_Link.defaultProps = {
  replace: false
};
Link_Link.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired,
      createHref: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Link = (Link_Link);
// CONCATENATED MODULE: ./node_modules/react-router/es/MemoryRouter.js
function MemoryRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MemoryRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MemoryRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter_MemoryRouter = function (_React$Component) {
  MemoryRouter_inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    MemoryRouter_classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = MemoryRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createMemoryHistory(_this.props), _temp), MemoryRouter_possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return react_default.a.createElement(es_Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react_default.a.Component);

MemoryRouter_MemoryRouter.propTypes = {
  initialEntries: prop_types_default.a.array,
  initialIndex: prop_types_default.a.number,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_MemoryRouter = (MemoryRouter_MemoryRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/MemoryRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_MemoryRouter = (es_MemoryRouter);
// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(8);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/react-router/es/matchPath.js


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var matchPath_compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp_default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = matchPath_compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ var es_matchPath = (matchPath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Route.js
var Route_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Route_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Route_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Route_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Route_isEmptyChildren = function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route_Route = function (_React$Component) {
  Route_inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    Route_classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Route_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), Route_possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: Route_extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant_default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return es_matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning_default()(!(this.props.component && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning_default()(!(this.props.render && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? react_default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !Route_isEmptyChildren(children)) return react_default.a.Children.only(children);

    return null;
  };

  return Route;
}(react_default.a.Component);

Route_Route.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  path: prop_types_default.a.string,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  sensitive: prop_types_default.a.bool,
  component: prop_types_default.a.func,
  render: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  location: prop_types_default.a.object
};
Route_Route.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.object.isRequired,
    route: prop_types_default.a.object.isRequired,
    staticContext: prop_types_default.a.object
  })
};
Route_Route.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Route = (Route_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Route.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Route = (es_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/NavLink.js
var NavLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var NavLink_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function NavLink_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink_NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = NavLink_objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : NavLink_typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return react_default.a.createElement(react_router_dom_es_Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react_default.a.createElement(es_Link, NavLink_extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? NavLink_extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink_NavLink.propTypes = {
  to: es_Link.propTypes.to,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  location: prop_types_default.a.object,
  activeClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  activeStyle: prop_types_default.a.object,
  style: prop_types_default.a.object,
  isActive: prop_types_default.a.func,
  "aria-current": prop_types_default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink_NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ var es_NavLink = (NavLink_NavLink);
// CONCATENATED MODULE: ./node_modules/react-router/es/Prompt.js
function Prompt_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Prompt_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Prompt_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt_Prompt = function (_React$Component) {
  Prompt_inherits(Prompt, _React$Component);

  function Prompt() {
    Prompt_classCallCheck(this, Prompt);

    return Prompt_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react_default.a.Component);

Prompt_Prompt.propTypes = {
  when: prop_types_default.a.bool,
  message: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]).isRequired
};
Prompt_Prompt.defaultProps = {
  when: true
};
Prompt_Prompt.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      block: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Prompt = (Prompt_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Prompt.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Prompt = (es_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router/es/generatePath.js


var generatePath_patternCache = {};
var generatePath_cacheLimit = 10000;
var generatePath_cacheCount = 0;

var generatePath_compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = generatePath_patternCache[cacheKey] || (generatePath_patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp_default.a.compile(pattern);

  if (generatePath_cacheCount < generatePath_cacheLimit) {
    cache[pattern] = compiledGenerator;
    generatePath_cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = generatePath_compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ var es_generatePath = (generatePath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Redirect.js
var Redirect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Redirect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Redirect_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Redirect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect_Redirect = function (_React$Component) {
  Redirect_inherits(Redirect, _React$Component);

  function Redirect() {
    Redirect_classCallCheck(this, Redirect);

    return Redirect_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = LocationUtils_createLocation(prevProps.to);
    var nextTo = LocationUtils_createLocation(this.props.to);

    if (LocationUtils_locationsAreEqual(prevTo, nextTo)) {
      warning_default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return es_generatePath(to, computedMatch.params);
      } else {
        return Redirect_extends({}, to, {
          pathname: es_generatePath(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react_default.a.Component);

Redirect_Redirect.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  push: prop_types_default.a.bool,
  from: prop_types_default.a.string,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired
};
Redirect_Redirect.defaultProps = {
  push: false
};
Redirect_Redirect.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types_default.a.object
  }).isRequired
};


/* harmony default export */ var es_Redirect = (Redirect_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Redirect.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Redirect = (es_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router/es/StaticRouter.js
var StaticRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function StaticRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StaticRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function StaticRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StaticRouter_addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return StaticRouter_extends({}, location, {
    pathname: StaticRouter_addLeadingSlash(basename) + location.pathname
  });
};

var StaticRouter_stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = StaticRouter_addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return StaticRouter_extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var StaticRouter_createURL = function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
};

var StaticRouter_staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter_StaticRouter = function (_React$Component) {
  StaticRouter_inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    StaticRouter_classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = StaticRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return StaticRouter_addLeadingSlash(_this.props.basename + StaticRouter_createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), StaticRouter_possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = StaticRouter_objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: StaticRouter_stripBasename(basename, LocationUtils_createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: StaticRouter_staticHandler("go"),
      goBack: StaticRouter_staticHandler("goBack"),
      goForward: StaticRouter_staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react_default.a.createElement(es_Router, StaticRouter_extends({}, props, { history: history }));
  };

  return StaticRouter;
}(react_default.a.Component);

StaticRouter_StaticRouter.propTypes = {
  basename: prop_types_default.a.string,
  context: prop_types_default.a.object.isRequired,
  location: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object])
};
StaticRouter_StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter_StaticRouter.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_StaticRouter = (StaticRouter_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/StaticRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_StaticRouter = (es_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router/es/Switch.js
function Switch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Switch_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Switch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch_Switch = function (_React$Component) {
  Switch_inherits(Switch, _React$Component);

  function Switch() {
    Switch_classCallCheck(this, Switch);

    return Switch_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react_default.a.Children.forEach(children, function (element) {
      if (match == null && react_default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = es_matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? react_default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react_default.a.Component);

Switch_Switch.contextTypes = {
  router: prop_types_default.a.shape({
    route: prop_types_default.a.object.isRequired
  }).isRequired
};
Switch_Switch.propTypes = {
  children: prop_types_default.a.node,
  location: prop_types_default.a.object
};


/* harmony default export */ var es_Switch = (Switch_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Switch.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Switch = (es_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/generatePath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_generatePath = (es_generatePath);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/matchPath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_matchPath = (es_matchPath);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(7);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/es/withRouter.js
var withRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function withRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter_withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = withRouter_objectWithoutProperties(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(es_Route, {
      children: function children(routeComponentProps) {
        return react_default.a.createElement(Component, withRouter_extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: prop_types_default.a.func
  };

  return hoist_non_react_statics_cjs_default()(C, Component);
};

/* harmony default export */ var es_withRouter = (withRouter_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/withRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_withRouter = (es_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return es_BrowserRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return es_HashRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Link", function() { return es_Link; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom_es_MemoryRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "NavLink", function() { return es_NavLink; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom_es_Prompt; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom_es_Redirect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom_es_Route; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom_es_Router; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom_es_StaticRouter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom_es_Switch; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom_es_generatePath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom_es_matchPath; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom_es_withRouter; });





























/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
var SitecoreContextFactory = /** @class */ (function () {
    function SitecoreContextFactory() {
        this.subscribers = [];
        this.context = {
            pageEditing: false,
        };
    }
    SitecoreContextFactory.prototype.getSitecoreContext = function () {
        return this.context;
    };
    SitecoreContextFactory.prototype.subscribeToContext = function (func) {
        this.subscribers.push(func);
    };
    SitecoreContextFactory.prototype.unsubscribeFromContext = function (func) {
        var index = this.subscribers.indexOf(func);
        if (index >= 0) {
            this.subscribers.splice(index, 1);
        }
    };
    SitecoreContextFactory.prototype.setSitecoreContext = function (value) {
        this.context = value;
        this.subscribers.forEach(function (func) { return func(value); });
    };
    return SitecoreContextFactory;
}());
exports.SitecoreContextFactory = SitecoreContextFactory;
exports.SitecoreContextReactContext = react_1.default.createContext({});
exports.ComponentFactoryReactContext = react_1.default.createContext({});
var SitecoreContext = /** @class */ (function (_super) {
    __extends(SitecoreContext, _super);
    function SitecoreContext(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.componentFactory = props.componentFactory;
        if (props.contextFactory) {
            _this.contextFactory = props.contextFactory;
        }
        else {
            _this.contextFactory = new SitecoreContextFactory();
        }
        // we force the children of the context to re-render when the context is updated
        // even if the local props are unchanged; we assume the contents depend on the Sitecore context
        _this.contextFactory.subscribeToContext(function () { return _this.forceUpdate(); });
        return _this;
    }
    SitecoreContext.prototype.render = function () {
        return react_1.default.createElement(exports.ComponentFactoryReactContext.Provider, { value: this.componentFactory },
            react_1.default.createElement(exports.SitecoreContextReactContext.Provider, { value: this.contextFactory }, this.props.children));
    };
    SitecoreContext.propTypes = {
        children: prop_types_1.default.any.isRequired,
        componentFactory: prop_types_1.default.func,
        contextFactory: prop_types_1.default.object,
    };
    SitecoreContext.displayName = 'SitecoreContext';
    return SitecoreContext;
}(react_1.default.Component));
exports.SitecoreContext = SitecoreContext;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(30);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var normalizeHeaderName = __webpack_require__(96);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(95);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(90);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.js to modify the generation of this file.
exports.default = {
  "sitecoreApiKey": "{0CC34818-7B11-4519-9125-3597BDA3A00E}",
  "sitecoreApiHost": "http://symdev",
  "jssAppName": "sym",
  "defaultLanguage": "en"
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(119);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(116);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(113);

var _HelmetConstants = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (false) {}

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(7);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/shallowEqual.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */

/* eslint-disable no-self-compare */

var shallowEqual_hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }
  // Step 6.a: NaN == NaN
  return x !== x && y !== y;
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!shallowEqual_hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/context.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultOptions = {
  wait: false,
  withRef: false,
  bindI18n: 'languageChanged loaded',
  bindStore: 'added removed',
  translateFuncName: 't',
  nsMode: 'default',
  usePureComponent: false,
  omitBoundRerender: true
};

var context_i18n = void 0;

function setDefaults(options) {
  defaultOptions = _extends({}, defaultOptions, options);
}

function getDefaults() {
  return defaultOptions;
}

function setI18n(instance) {
  context_i18n = instance;
}

function getI18n() {
  return context_i18n;
}

var reactI18nextModule = {
  type: '3rdParty',

  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/I18n.js
var I18n_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var removedIsInitialSSR = false;

var I18n_I18n = function (_Component) {
  _inherits(I18n, _Component);

  function I18n(props, context) {
    _classCallCheck(this, I18n);

    var _this = _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props, context));

    _this.i18n = props.i18n || context.i18n || getI18n();
    _this.namespaces = props.ns || _this.i18n.options && _this.i18n.options.defaultNS;
    if (typeof _this.namespaces === 'string') _this.namespaces = [_this.namespaces];

    var i18nOptions = _this.i18n && _this.i18n.options && _this.i18n.options.react || {};
    _this.options = I18n_extends({}, getDefaults(), i18nOptions, props);

    // nextjs SSR: getting data from next.js or other ssr stack
    if (props.initialI18nStore) {
      _this.i18n.services.resourceStore.data = props.initialI18nStore;
      _this.options.wait = false; // we got all passed down already
    }
    if (props.initialLanguage) {
      _this.i18n.changeLanguage(props.initialLanguage);
    }

    // provider SSR: data was set in provider and ssr flag was set
    if (_this.i18n.options && _this.i18n.options.isInitialSSR) {
      _this.options.wait = false;
    }

    var language = _this.i18n.languages && _this.i18n.languages[0];
    var ready = !!language && _this.namespaces.every(function (ns) {
      return _this.i18n.hasResourceBundle(language, ns);
    });

    _this.state = {
      i18nLoadedAt: null,
      ready: ready
    };

    _this.t = _this.getI18nTranslate();

    _this.onI18nChanged = _this.onI18nChanged.bind(_this);
    _this.getI18nTranslate = _this.getI18nTranslate.bind(_this);
    return _this;
  }

  _createClass(I18n, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        t: this.t,
        i18n: this.i18n
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var bind = function bind() {
        if (_this2.options.bindI18n && _this2.i18n) _this2.i18n.on(_this2.options.bindI18n, _this2.onI18nChanged);
        if (_this2.options.bindStore && _this2.i18n.store) _this2.i18n.store.on(_this2.options.bindStore, _this2.onI18nChanged);
      };

      this.mounted = true;
      this.i18n.loadNamespaces(this.namespaces, function () {
        var ready = function ready() {
          if (_this2.mounted && !_this2.state.ready) _this2.setState({ ready: true });
          if (_this2.options.wait && _this2.mounted) bind();
        };

        if (_this2.i18n.isInitialized) {
          ready();
        } else {
          var initialized = function initialized() {
            // due to emitter removing issue in i18next we need to delay remove
            setTimeout(function () {
              _this2.i18n.off('initialized', initialized);
            }, 1000);
            ready();
          };

          _this2.i18n.on('initialized', initialized);
        }
      });

      if (!this.options.wait) bind();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      this.mounted = false;
      if (this.onI18nChanged) {
        if (this.options.bindI18n) {
          var p = this.options.bindI18n.split(' ');
          p.forEach(function (f) {
            return _this3.i18n.off(f, _this3.onI18nChanged);
          });
        }
        if (this.options.bindStore) {
          var _p = this.options.bindStore.split(' ');
          _p.forEach(function (f) {
            return _this3.i18n.store && _this3.i18n.store.off(f, _this3.onI18nChanged);
          });
        }
      }
    }
  }, {
    key: 'onI18nChanged',
    value: function onI18nChanged() {
      if (!this.mounted) return;
      if (!this.state.ready && this.options.omitBoundRerender) return;

      this.t = this.getI18nTranslate();
      this.setState({ i18nLoadedAt: new Date() }); // rerender
    }
  }, {
    key: 'getI18nTranslate',
    value: function getI18nTranslate() {
      return this.i18n.getFixedT(null, this.options.nsMode === 'fallback' ? this.namespaces : this.namespaces[0]);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var children = this.props.children;
      var ready = this.state.ready;


      if (!ready && this.options.wait) return null;

      // remove ssr flag set by provider - first render was done from now on wait if set to wait
      if (this.i18n.options && this.i18n.options.isInitialSSR && !removedIsInitialSSR) {
        removedIsInitialSSR = true;
        setTimeout(function () {
          delete _this4.i18n.options.isInitialSSR;
        }, 100);
      }

      return children(this.t, {
        i18n: this.i18n,
        t: this.t,
        ready: ready
      });
    }
  }]);

  return I18n;
}(react["Component"]);

/* harmony default export */ var es_I18n = (I18n_I18n);


I18n_I18n.contextTypes = {
  i18n: prop_types_default.a.object
};

I18n_I18n.childContextTypes = {
  t: prop_types_default.a.func.isRequired,
  i18n: prop_types_default.a.object
};
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/translate.js
var translate_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var translate_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function translate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function translate_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function translate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

function translate(namespaceArg) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  return function Wrapper(WrappedComponent) {
    var Translate = function (_Component) {
      translate_inherits(Translate, _Component);

      function Translate(props, context) {
        translate_classCallCheck(this, Translate);

        var _this = translate_possibleConstructorReturn(this, (Translate.__proto__ || Object.getPrototypeOf(Translate)).call(this, props, context));

        _this.i18n = props.i18n || options.i18n || context.i18n || getI18n();
        _this.namespaces = typeof namespaceArg === 'function' ? namespaceArg(props) : namespaceArg || context.defaultNS || _this.i18n.options && _this.i18n.options.defaultNS;
        if (typeof _this.namespaces === 'string') _this.namespaces = [_this.namespaces];

        var i18nOptions = _this.i18n && _this.i18n.options && _this.i18n.options.react || {};
        _this.options = translate_extends({}, getDefaults(), i18nOptions, options);

        _this.getWrappedInstance = _this.getWrappedInstance.bind(_this);
        return _this;
      }

      translate_createClass(Translate, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
          if (!this.options.usePureComponent) {
            return true;
          }

          return !shallowEqual(this.props, nextProps);
        }
      }, {
        key: 'getWrappedInstance',
        value: function getWrappedInstance() {
          if (!this.options.withRef) {
            // eslint-disable-next-line no-console
            console.error('To access the wrapped instance, you need to specify ' + '{ withRef: true } as the second argument of the translate() call.');
          }

          /* eslint react/no-string-refs: 1 */
          return this.wrappedInstance;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var extraProps = {};

          if (this.options.withRef) {
            extraProps.ref = function (c) {
              _this2.wrappedInstance = c;
            };
          }

          return react_default.a.createElement(es_I18n, translate_extends({ ns: this.namespaces }, this.options, this.props, { i18n: this.i18n }), function (t, _ref) {
            var ready = _ref.ready,
                context = _objectWithoutProperties(_ref, ['ready']);

            return react_default.a.createElement(WrappedComponent, translate_extends({
              tReady: ready
            }, _this2.props, extraProps, context));
          });
        }
      }]);

      return Translate;
    }(react["Component"]);

    Translate.WrappedComponent = WrappedComponent;

    Translate.contextTypes = {
      i18n: prop_types_default.a.object,
      defaultNS: prop_types_default.a.string
    };

    Translate.displayName = 'Translate(' + getDisplayName(WrappedComponent) + ')';

    Translate.namespaces = namespaceArg;

    return hoist_non_react_statics_cjs_default()(Translate, WrappedComponent);
  };
}

translate.setDefaults = setDefaults;

translate.setI18n = setI18n;
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/Interpolate.js
var Interpolate_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Interpolate_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function Interpolate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Interpolate_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Interpolate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Interpolate_Interpolate = function (_Component) {
  Interpolate_inherits(Interpolate, _Component);

  function Interpolate(props, context) {
    Interpolate_classCallCheck(this, Interpolate);

    var _this = Interpolate_possibleConstructorReturn(this, (Interpolate.__proto__ || Object.getPrototypeOf(Interpolate)).call(this, props, context));

    _this.i18n = props.i18n || context.i18n;
    _this.t = props.t || context.t;
    return _this;
  }

  Interpolate_createClass(Interpolate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var parent = this.props.parent || 'span';
      var REGEXP = this.props.regexp || this.i18n.services.interpolator.regexp;
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      // Set to true if you want to use raw HTML in translation values
      // See https://github.com/i18next/react-i18next/issues/189

      var useDangerouslySetInnerHTML = this.props.useDangerouslySetInnerHTML || false;
      var dangerouslySetInnerHTMLPartElement = this.props.dangerouslySetInnerHTMLPartElement || 'span';

      var tOpts = Interpolate_extends({}, this.props.options, { interpolation: { prefix: '#$?', suffix: '?$#' } });
      var format = this.t(this.props.i18nKey, tOpts);

      if (!format || typeof format !== 'string') return react_default.a.createElement('noscript', null);

      var children = [];

      var handleFormat = function handleFormat(key, props) {
        if (key.indexOf(_this2.i18n.options.interpolation.formatSeparator) < 0) {
          if (props[key] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + key + ' for interpolating ' + format);
          return props[key];
        }

        var p = key.split(_this2.i18n.options.interpolation.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this2.i18n.options.interpolation.formatSeparator).trim();

        if (props[k] === undefined) _this2.i18n.services.logger.warn('interpolator: missed to pass in variable ' + k + ' for interpolating ' + format);
        return _this2.i18n.options.interpolation.format(props[k], f, _this2.i18n.language);
      };

      format.split(REGEXP).reduce(function (memo, match, index) {
        var child = void 0;

        if (index % 2 === 0) {
          if (match.length === 0) return memo;
          if (useDangerouslySetInnerHTML) {
            child = react_default.a.createElement(dangerouslySetInnerHTMLPartElement, { dangerouslySetInnerHTML: { __html: match } });
          } else {
            child = match;
          }
        } else {
          child = handleFormat(match, _this2.props);
        }

        memo.push(child);
        return memo;
      }, children);

      var additionalProps = {};
      if (this.i18n.options.react && this.i18n.options.react.exposeNamespace) {
        var ns = typeof this.t.ns === 'string' ? this.t.ns : this.t.ns[0];
        if (this.props.i18nKey && this.i18n.options.nsSeparator && this.props.i18nKey.indexOf(this.i18n.options.nsSeparator) > -1) {
          var parts = this.props.i18nKey.split(this.i18n.options.nsSeparator);
          ns = parts[0];
        }
        if (this.t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
      }

      if (className) additionalProps.className = className;
      if (style) additionalProps.style = style;

      return react_default.a.createElement.apply(this, [parent, additionalProps].concat(children));
    }
  }]);

  return Interpolate;
}(react["Component"]);

Interpolate_Interpolate.propTypes = {
  className: prop_types_default.a.string
};

Interpolate_Interpolate.defaultProps = {
  className: ''
};

Interpolate_Interpolate.contextTypes = {
  i18n: prop_types_default.a.object.isRequired,
  t: prop_types_default.a.func.isRequired
};

/* harmony default export */ var es_Interpolate = (Interpolate_Interpolate);
// EXTERNAL MODULE: ./node_modules/html-parse-stringify2/index.js
var html_parse_stringify2 = __webpack_require__(40);
var html_parse_stringify2_default = /*#__PURE__*/__webpack_require__.n(html_parse_stringify2);

// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/Trans.js
var Trans_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var Trans_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Trans_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Trans_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Trans_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Trans_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Trans_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  return node && node.children ? node.children : node.props && node.props.children;
}

function nodesToString(mem, children, index) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];

  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = '' + i;

    if (typeof child === 'string') {
      mem = '' + mem + child;
    } else if (hasChildren(child)) {
      mem = mem + '<' + elementKey + '>' + nodesToString('', getChildren(child), i + 1) + '</' + elementKey + '>';
    } else if (react_default.a.isValidElement(child)) {
      mem = mem + '<' + elementKey + '></' + elementKey + '>';
    } else if ((typeof child === 'undefined' ? 'undefined' : Trans_typeof(child)) === 'object') {
      var clone = Trans_extends({}, child);
      var format = clone.format;
      delete clone.format;

      var keys = Object.keys(clone);
      if (format && keys.length === 1) {
        mem = mem + '<' + elementKey + '>{{' + keys[0] + ', ' + format + '}}</' + elementKey + '>';
      } else if (keys.length === 1) {
        mem = mem + '<' + elementKey + '>{{' + keys[0] + '}}</' + elementKey + '>';
      } else if (console && console.warn) {
        // not a valid interpolation object (can only contain one value plus format)
        console.warn('react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.', child);
      }
    } else if (console && console.warn) {
      console.warn('react-i18next: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.', child);
    }
  });

  return mem;
}

function renderNodes(children, targetString, i18n) {
  if (targetString === "") return [];
  if (!children) return [targetString];

  // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes
  var ast = html_parse_stringify2_default.a.parse('<0>' + targetString + '</0>');

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];

    return astNodes.reduce(function (mem, node, i) {
      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};
        var isElement = react_default.a.isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var inner = mapAST(getChildren(child), node.children);
          if (child.dummy) child.children = inner; // needed on preact!
          mem.push(react_default.a.cloneElement(child, Trans_extends({}, child.props, { key: i }), inner));
        } else if ((typeof child === 'undefined' ? 'undefined' : Trans_typeof(child)) === 'object' && !isElement) {
          var content = node.children[0] ? node.children[0].content : null;
          if (content) {
            var interpolated = i18n.services.interpolator.interpolate(node.children[0].content, child, i18n.language);
            mem.push(interpolated);
          }
        } else {
          mem.push(child);
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }
      return mem;
    }, []);
  }

  // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result
  var result = mapAST([{ dummy: true, children: children }], ast);
  return getChildren(result[0]);
}

var Trans_Trans = function (_React$Component) {
  Trans_inherits(Trans, _React$Component);

  function Trans() {
    Trans_classCallCheck(this, Trans);

    return Trans_possibleConstructorReturn(this, (Trans.__proto__ || Object.getPrototypeOf(Trans)).apply(this, arguments));
  }

  Trans_createClass(Trans, [{
    key: 'render',
    value: function render() {
      var contextAndProps = Trans_extends({ i18n: this.context.i18n, t: this.context.t }, this.props);

      var children = contextAndProps.children,
          count = contextAndProps.count,
          parent = contextAndProps.parent,
          i18nKey = contextAndProps.i18nKey,
          tOptions = contextAndProps.tOptions,
          values = contextAndProps.values,
          defaults = contextAndProps.defaults,
          components = contextAndProps.components,
          namespace = contextAndProps.ns,
          i18n = contextAndProps.i18n,
          tFromContextAndProps = contextAndProps.t,
          additionalProps = Trans_objectWithoutProperties(contextAndProps, ['children', 'count', 'parent', 'i18nKey', 'tOptions', 'values', 'defaults', 'components', 'ns', 'i18n', 't']);

      var t = tFromContextAndProps || i18n.t.bind(i18n);

      var reactI18nextOptions = i18n.options && i18n.options.react || {};
      var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;

      var defaultValue = defaults || nodesToString('', children, 0);
      var hashTransKey = reactI18nextOptions.hashTransKey;
      var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
      var interpolationOverride = values ? {} : { interpolation: { prefix: '#$?', suffix: '?$#' } };
      var translation = key ? t(key, Trans_extends({}, tOptions, values, interpolationOverride, { defaultValue: defaultValue, count: count, ns: namespace })) : defaultValue;

      if (reactI18nextOptions.exposeNamespace) {
        var ns = typeof t.ns === 'string' ? t.ns : t.ns[0];
        if (i18nKey && i18n.options && i18n.options.nsSeparator && i18nKey.indexOf(i18n.options.nsSeparator) > -1) {
          var parts = i18nKey.split(i18n.options.nsSeparator);
          ns = parts[0];
        }
        if (t.ns) additionalProps['data-i18next-options'] = JSON.stringify({ ns: ns });
      }

      if (!useAsParent) return renderNodes(components || children, translation, i18n);

      return react_default.a.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n));
    }
  }]);

  return Trans;
}(react_default.a.Component);

/* harmony default export */ var es_Trans = (Trans_Trans);


Trans_Trans.propTypes = {
  count: prop_types_default.a.number,
  parent: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  i18nKey: prop_types_default.a.string,
  i18n: prop_types_default.a.object,
  t: prop_types_default.a.func
};

// Trans.defaultProps = {
//   parent: 'div'
// };

Trans_Trans.contextTypes = {
  i18n: prop_types_default.a.object,
  t: prop_types_default.a.func
};
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/I18nextProvider.js
var I18nextProvider_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function I18nextProvider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function I18nextProvider_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function I18nextProvider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var I18nextProvider_I18nextProvider = function (_Component) {
  I18nextProvider_inherits(I18nextProvider, _Component);

  function I18nextProvider(props, context) {
    I18nextProvider_classCallCheck(this, I18nextProvider);

    var _this = I18nextProvider_possibleConstructorReturn(this, (I18nextProvider.__proto__ || Object.getPrototypeOf(I18nextProvider)).call(this, props, context));

    _this.i18n = props.i18n;
    _this.defaultNS = props.defaultNS;
    if (props.initialI18nStore) {
      _this.i18n.services.resourceStore.data = props.initialI18nStore;
      _this.i18n.options.isInitialSSR = true; // if set will be deleted on first render in translate hoc
    }
    if (props.initialLanguage) {
      _this.i18n.changeLanguage(props.initialLanguage);
    }
    return _this;
  }

  I18nextProvider_createClass(I18nextProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        i18n: this.i18n,
        defaultNS: this.defaultNS
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.i18n !== nextProps.i18n) {
        throw new Error('[react-i18next][I18nextProvider]does not support changing the i18n object.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return react["Children"].only(children);
    }
  }]);

  return I18nextProvider;
}(react["Component"]);

I18nextProvider_I18nextProvider.propTypes = {
  i18n: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.element.isRequired,
  defaultNS: prop_types_default.a.string
};

I18nextProvider_I18nextProvider.childContextTypes = {
  i18n: prop_types_default.a.object.isRequired,
  defaultNS: prop_types_default.a.string
};

I18nextProvider_I18nextProvider.defaultProps = {
  defaultNS: undefined
};

/* harmony default export */ var es_I18nextProvider = (I18nextProvider_I18nextProvider);
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/loadNamespaces.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var loadNamespaces_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var objectEntries = Object.entries || function (obj) {
  var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
  while (i--) {
    resArray[i] = [ownProps[i], obj[ownProps[i]]];
  }return resArray;
};

// Borrowed from https://github.com/Rezonans/redux-async-connect/blob/master/modules/ReduxAsyncConnect.js#L16
function eachComponents(components, iterator) {
  for (var i = 0, l = components.length; i < l; i++) {
    // eslint-disable-line id-length
    if (loadNamespaces_typeof(components[i]) === 'object') {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = objectEntries(components[i])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          iterator(value, i, key);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      iterator(components[i], i);
    }
  }
}

function filterAndFlattenComponents(components) {
  var flattened = [];
  eachComponents(components, function (Component) {
    if (Component && Component.namespaces) {

      Component.namespaces.forEach(function (namespace) {
        if (flattened.indexOf(namespace) === -1) {
          flattened.push(namespace);
        }
      });
    }
  });
  return flattened;
}

function loadNamespaces(_ref) {
  var components = _ref.components,
      i18n = _ref.i18n;

  var allNamespaces = filterAndFlattenComponents(components);

  return new Promise(function (resolve) {
    i18n.loadNamespaces(allNamespaces, resolve);
  });
}
// CONCATENATED MODULE: ./node_modules/react-i18next/dist/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "I18n", function() { return es_I18n; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Interpolate", function() { return es_Interpolate; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Trans", function() { return es_Trans; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "I18nextProvider", function() { return es_I18nextProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "loadNamespaces", function() { return loadNamespaces; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "reactI18nextModule", function() { return reactI18nextModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "setDefaults", function() { return setDefaults; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getDefaults", function() { return getDefaults; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "setI18n", function() { return setI18n; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getI18n", function() { return getI18n; });








/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/i18next/dist/es/logger.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var consoleLogger = {
  type: 'logger',

  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  Logger.prototype.init = function init(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  };

  Logger.prototype.setDebug = function setDebug(bool) {
    this.debug = bool;
  };

  Logger.prototype.log = function log() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.forward(args, 'log', '', true);
  };

  Logger.prototype.warn = function warn() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.forward(args, 'warn', '', true);
  };

  Logger.prototype.error = function error() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.forward(args, 'error', '');
  };

  Logger.prototype.deprecate = function deprecate() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
  };

  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (typeof args[0] === 'string') args[0] = '' + prefix + this.prefix + ' ' + args[0];
    return this.logger[lvl](args);
  };

  Logger.prototype.create = function create(moduleName) {
    return new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));
  };

  return Logger;
}();

/* harmony default export */ var logger = (new Logger());
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/EventEmitter.js
function EventEmitter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    EventEmitter_classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  EventEmitter.prototype.on = function on(events, listener) {
    var _this = this;

    events.split(' ').forEach(function (event) {
      _this.observers[event] = _this.observers[event] || [];
      _this.observers[event].push(listener);
    });
    return this;
  };

  EventEmitter.prototype.off = function off(event, listener) {
    var _this2 = this;

    if (!this.observers[event]) {
      return;
    }

    this.observers[event].forEach(function () {
      if (!listener) {
        delete _this2.observers[event];
      } else {
        var index = _this2.observers[event].indexOf(listener);
        if (index > -1) {
          _this2.observers[event].splice(index, 1);
        }
      }
    });
  };

  EventEmitter.prototype.emit = function emit(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (this.observers[event]) {
      var cloned = [].concat(this.observers[event]);
      cloned.forEach(function (observer) {
        observer.apply(undefined, args);
      });
    }

    if (this.observers['*']) {
      var _cloned = [].concat(this.observers['*']);
      _cloned.forEach(function (observer) {
        observer.apply(observer, [event].concat(args));
      });
    }
  };

  return EventEmitter;
}();

/* harmony default export */ var es_EventEmitter = (EventEmitter);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/utils.js
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */
  return '' + object;
}

function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};

    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}

function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}

function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}

function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/* eslint-disable */
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
/* eslint-enable */

function utils_escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/ResourceStore.js
var ResourceStore_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function ResourceStore_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }




var ResourceStore_ResourceStore = function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };

    ResourceStore_classCallCheck(this, ResourceStore);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.data = data || {};
    _this.options = options;
    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }
    return _this;
  }

  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  };

  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
    var index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  };

  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

    var path = [lng, ns];
    if (key && typeof key !== 'string') path = path.concat(key);
    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    }

    return getPath(this.data, path);
  };

  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { silent: false };

    var keySeparator = this.options.keySeparator;
    if (keySeparator === undefined) keySeparator = '.';

    var path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    setPath(this.data, path, value);

    if (!options.silent) this.emit('added', lng, ns, key, value);
  };

  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { silent: false };

    /* eslint no-restricted-syntax: 0 */
    for (var m in resources) {
      if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
    }
    if (!options.silent) this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : { silent: false };

    var path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    var pack = getPath(this.data, path) || {};

    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = ResourceStore_extends({}, pack, resources);
    }

    setPath(this.data, path, pack);

    if (!options.silent) this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);

    this.emit('removed', lng, ns);
  };

  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  };

  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;

    // COMPATIBILITY: remove extend in v2.1.0
    if (this.options.compatibilityAPI === 'v1') return ResourceStore_extends({}, this.getResource(lng, ns));

    return this.getResource(lng, ns);
  };

  ResourceStore.prototype.getDataByLanguage = function getDataByLanguage(lng) {
    return this.data[lng];
  };

  ResourceStore.prototype.toJSON = function toJSON() {
    return this.data;
  };

  return ResourceStore;
}(es_EventEmitter);

/* harmony default export */ var es_ResourceStore = (ResourceStore_ResourceStore);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/postProcessor.js
/* harmony default export */ var postProcessor = ({

  processors: {},

  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });

    return value;
  }
});
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/Translator.js
var Translator_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Translator_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function Translator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Translator_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Translator_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : Translator_defaults(subClass, superClass); }






var Translator_Translator = function (_EventEmitter) {
  Translator_inherits(Translator, _EventEmitter);

  function Translator(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Translator_classCallCheck(this, Translator);

    var _this = Translator_possibleConstructorReturn(this, _EventEmitter.call(this));

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat'], services, _this);

    _this.options = options;
    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = logger.create('translator');
    return _this;
  }

  Translator.prototype.changeLanguage = function changeLanguage(lng) {
    if (lng) this.language = lng;
  };

  Translator.prototype.exists = function exists(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { interpolation: {} };

    var resolved = this.resolve(key, options);
    return resolved && resolved.res !== undefined;
  };

  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
    if (nsSeparator === undefined) nsSeparator = ':';

    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

    var namespaces = options.ns || this.options.defaultNS;
    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
      var parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === 'string') namespaces = [namespaces];

    return {
      key: key,
      namespaces: namespaces
    };
  };

  Translator.prototype.translate = function translate(keys, options) {
    var _this2 = this;

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object' && this.options.overloadTranslationOptionHandler) {
      /* eslint prefer-rest-params: 0 */
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (!options) options = {};

    // non valid keys handling
    if (keys === undefined || keys === null || keys === '') return '';
    if (typeof keys === 'number') keys = String(keys);
    if (typeof keys === 'string') keys = [keys];

    // separators
    var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

    // get namespace(s)

    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
        key = _extractFromKey.key,
        namespaces = _extractFromKey.namespaces;

    var namespace = namespaces[namespaces.length - 1];

    // return key on CIMode
    var lng = options.lng || this.language;
    var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
        return namespace + nsSeparator + key;
      }

      return key;
    }

    // resolve from store
    var resolved = this.resolve(keys, options);
    var res = resolved && resolved.res;
    var resUsedKey = resolved && resolved.usedKey || key;

    var resType = Object.prototype.toString.apply(res);
    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

    // object
    var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';
    if (res && handleAsObject && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
      if (!options.returnObjects && !this.options.returnObjects) {
        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
      }

      // if we got a separator we loop over children - else we just return object as is
      // as having it set to false means no hierarchy so no lookup for nested values
      if (keySeparator) {
        var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

        /* eslint no-restricted-syntax: 0 */
        for (var m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            var deepKey = '' + resUsedKey + keySeparator + m;
            copy[m] = this.translate(deepKey, Translator_extends({}, options, { joinArrays: false, ns: namespaces }));
            if (copy[m] === deepKey) copy[m] = res[m]; // if nothing found use orginal value as fallback
          }
        }
        res = copy;
      }
    } else if (joinArrays && resType === '[object Array]') {
      // array special treatment
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options);
    } else {
      // string, empty or null
      var usedDefault = false;
      var usedKey = false;

      // fallback value
      if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
        usedDefault = true;
        res = options.defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }

      // save missing
      var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);

        var lngs = [];
        var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
          for (var i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === 'all') {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }

        var send = function send(l, k) {
          if (_this2.options.missingKeyHandler) {
            _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
          } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
            _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
          }
          _this2.emit('missingKey', l, namespace, k, res);
        };

        if (this.options.saveMissing) {
          var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach(function (l) {
              var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

              plurals.forEach(function (p) {
                return send([l], p);
              });
            });
          } else {
            send(lngs, key);
          }
        }
      }

      // extend
      res = this.extendTranslation(res, keys, options, resolved);

      // append namespace if still key
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

      // parseMissingKeyHandler
      if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
    }

    // return
    return res;
  };

  Translator.prototype.extendTranslation = function extendTranslation(res, key, options, resolved) {
    var _this3 = this;

    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, { resolved: resolved });
    } else if (!options.skipInterpolation) {
      // i18next.parsing
      if (options.interpolation) this.interpolator.init(Translator_extends({}, options, { interpolation: Translator_extends({}, this.options.interpolation, options.interpolation) }));

      // interpolate
      var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = Translator_extends({}, this.options.interpolation.defaultVariables, data);
      res = this.interpolator.interpolate(res, data, options.lng || this.language);

      // nesting
      if (options.nest !== false) res = this.interpolator.nest(res, function () {
        return _this3.translate.apply(_this3, arguments);
      }, options);

      if (options.interpolation) this.interpolator.reset();
    }

    // post process
    var postProcess = options.postProcess || this.options.postProcess;
    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

    if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, options, this);
    }

    return res;
  };

  Translator.prototype.resolve = function resolve(keys) {
    var _this4 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var found = void 0;
    var usedKey = void 0;
    var usedLng = void 0;
    var usedNS = void 0;

    if (typeof keys === 'string') keys = [keys];

    // forEach possible key
    keys.forEach(function (k) {
      if (_this4.isValidLookup(found)) return;
      var extracted = _this4.extractFromKey(k, options);
      var key = extracted.key;
      usedKey = key;
      var namespaces = extracted.namespaces;
      if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);

      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

      var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language);

      namespaces.forEach(function (ns) {
        if (_this4.isValidLookup(found)) return;
        usedNS = ns;

        codes.forEach(function (code) {
          if (_this4.isValidLookup(found)) return;
          usedLng = code;

          var finalKey = key;
          var finalKeys = [finalKey];

          if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
            _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            var pluralSuffix = void 0;
            if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);

            // fallback for plural if context not found
            if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

            // get key for context if needed
            if (needsContextHandling) finalKeys.push(finalKey += '' + _this4.options.contextSeparator + options.context);

            // get key for plural if needed
            if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
          }

          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
          var possibleKey = void 0;
          /* eslint no-cond-assign: 0 */
          while (possibleKey = finalKeys.pop()) {
            if (!_this4.isValidLookup(found)) {
              found = _this4.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });

    return { res: found, usedKey: usedKey, usedLng: usedLng, usedNS: usedNS };
  };

  Translator.prototype.isValidLookup = function isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  };

  Translator.prototype.getResource = function getResource(code, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return this.resourceStore.getResource(code, ns, key, options);
  };

  return Translator;
}(es_EventEmitter);

/* harmony default export */ var es_Translator = (Translator_Translator);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/LanguageUtils.js
function LanguageUtils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtils_LanguageUtil = function () {
  function LanguageUtil(options) {
    LanguageUtils_classCallCheck(this, LanguageUtil);

    this.options = options;

    this.whitelist = this.options.whitelist || false;
    this.logger = logger.create('languageUtils');
  }

  LanguageUtil.prototype.getScriptPartFromCode = function getScriptPartFromCode(code) {
    if (!code || code.indexOf('-') < 0) return null;

    var p = code.split('-');
    if (p.length === 2) return null;
    p.pop();
    return this.formatLanguageCode(p.join('-'));
  };

  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    if (!code || code.indexOf('-') < 0) return code;

    var p = code.split('-');
    return this.formatLanguageCode(p[0]);
  };

  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      var p = code.split('-');

      if (this.options.lowerCaseLng) {
        p = p.map(function (part) {
          return part.toLowerCase();
        });
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();

        // if lenght 2 guess it's a country
        if (p[1].length === 2) p[1] = p[1].toUpperCase();
        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
      }

      return p.join('-');
    }

    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  };

  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
  };

  LanguageUtil.prototype.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;

    if (!code) return fallbacks.default || [];

    // asume we have an object defining fallbacks
    var found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks.default;

    return found || [];
  };

  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
    var _this = this;

    var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);

    var codes = [];
    var addCode = function addCode(c) {
      if (!c) return;
      if (_this.isWhitelisted(c)) {
        codes.push(c);
      } else {
        _this.logger.warn('rejecting non-whitelisted language code: ' + c);
      }
    };

    if (typeof code === 'string' && code.indexOf('-') > -1) {
      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }

    fallbackCodes.forEach(function (fc) {
      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
    });

    return codes;
  };

  return LanguageUtil;
}();

/* harmony default export */ var LanguageUtils = (LanguageUtils_LanguageUtil);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/PluralResolver.js
function PluralResolver_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* eslint-disable */
var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver_PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    PluralResolver_classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;

    this.logger = logger.create('pluralResolver');

    this.rules = createRules();
  }

  PluralResolver.prototype.addRule = function addRule(lng, obj) {
    this.rules[lng] = obj;
  };

  PluralResolver.prototype.getRule = function getRule(code) {
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  };

  PluralResolver.prototype.needsPlural = function needsPlural(code) {
    var rule = this.getRule(code);

    return rule && rule.numbers.length > 1;
  };

  PluralResolver.prototype.getPluralFormsOfKey = function getPluralFormsOfKey(code, key) {
    var _this = this;

    var ret = [];

    var rule = this.getRule(code);

    if (!rule) return ret;

    rule.numbers.forEach(function (n) {
      var suffix = _this.getSuffix(code, n);
      ret.push('' + key + suffix);
    });

    return ret;
  };

  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
    var _this2 = this;

    var rule = this.getRule(code);

    if (rule) {
      // if (rule.numbers.length === 1) return ''; // only singular

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      // special treatment for lngs only having singular and plural
      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      // COMPATIBILITY JSON
      // v1
      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return '_plural_' + suffix.toString();
        return returnSuffix();
      } else if ( /* v2 */this.options.compatibilityJSON === 'v2' && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      } else if ( /* v3 - gettext index */this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }
      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }

    this.logger.warn('no plural rule found for: ' + code);
    return '';
  };

  return PluralResolver;
}();

/* harmony default export */ var es_PluralResolver = (PluralResolver_PluralResolver);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/Interpolator.js
var Interpolator_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Interpolator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Interpolator_Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Interpolator_classCallCheck(this, Interpolator);

    this.logger = logger.create('interpolator');

    this.init(options, true);
  }

  /* eslint no-param-reassign: 0 */


  Interpolator.prototype.init = function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reset = arguments[1];

    if (reset) {
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };
    }
    if (!options.interpolation) options.interpolation = { escapeValue: true };

    var iOpts = options.interpolation;

    this.escape = iOpts.escape !== undefined ? iOpts.escape : utils_escape;
    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
    this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;

    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';

    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';

    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');

    this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;

    // the regexp
    this.resetRegExp();
  };

  Interpolator.prototype.reset = function reset() {
    if (this.options) this.init(this.options);
  };

  Interpolator.prototype.resetRegExp = function resetRegExp() {
    // the regexp
    var regexpStr = this.prefix + '(.+?)' + this.suffix;
    this.regexp = new RegExp(regexpStr, 'g');

    var regexpUnescapeStr = '' + this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
  };

  Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
    var _this = this;

    var match = void 0;
    var value = void 0;
    var replaces = void 0;

    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }

    var handleFormat = function handleFormat(key) {
      if (key.indexOf(_this.formatSeparator) < 0) return getPath(data, key);

      var p = key.split(_this.formatSeparator);
      var k = p.shift().trim();
      var f = p.join(_this.formatSeparator).trim();

      return _this.format(getPath(data, k), f, lng);
    };

    this.resetRegExp();

    replaces = 0;
    // unescape if has unescapePrefix/Suffix
    /* eslint no-cond-assign: 0 */
    while (match = this.regexpUnescape.exec(str)) {
      value = handleFormat(match[1].trim());
      str = str.replace(match[0], value);
      this.regexpUnescape.lastIndex = 0;
      replaces++;
      if (replaces >= this.maxReplaces) {
        break;
      }
    }

    replaces = 0;
    // regular escape on demand
    while (match = this.regexp.exec(str)) {
      value = handleFormat(match[1].trim());
      if (value === undefined) {
        if (typeof this.options.missingInterpolationHandler === 'function') {
          var temp = this.options.missingInterpolationHandler(str, match);
          value = typeof temp === 'string' ? temp : '';
        } else {
          this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
          value = '';
        }
      } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
        value = makeString(value);
      }
      value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
      replaces++;
      if (replaces >= this.maxReplaces) {
        break;
      }
    }
    return str;
  };

  Interpolator.prototype.nest = function nest(str, fc) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var match = void 0;
    var value = void 0;

    var clonedOptions = Interpolator_extends({}, options);
    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
    function handleHasOptions(key, inheritedOptions) {
      if (key.indexOf(',') < 0) return key;

      var p = key.split(',');
      key = p.shift();
      var optionsString = p.join(',');
      optionsString = this.interpolate(optionsString, clonedOptions);
      optionsString = optionsString.replace(/'/g, '"');

      try {
        clonedOptions = JSON.parse(optionsString);

        if (inheritedOptions) clonedOptions = Interpolator_extends({}, inheritedOptions, clonedOptions);
      } catch (e) {
        this.logger.error('failed parsing options string in nesting for key ' + key, e);
      }

      return key;
    }

    // regular escape on demand
    while (match = this.nestingRegexp.exec(str)) {
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);

      // is only the nesting key (key1 = '$(key2)') return the value without stringify
      if (value && match[0] === str && typeof value !== 'string') return value;

      // no string to include or empty
      if (typeof value !== 'string') value = makeString(value);
      if (!value) {
        this.logger.warn('missed to resolve ' + match[1] + ' for nesting ' + str);
        value = '';
      }
      // Nested keys should not be escaped by default #854
      // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  };

  return Interpolator;
}();

/* harmony default export */ var es_Interpolator = (Interpolator_Interpolator);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/BackendConnector.js
var BackendConnector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function BackendConnector_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function BackendConnector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BackendConnector_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BackendConnector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : BackendConnector_defaults(subClass, superClass); }





function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var BackendConnector_Connector = function (_EventEmitter) {
  BackendConnector_inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    BackendConnector_classCallCheck(this, Connector);

    var _this = BackendConnector_possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.backend = backend;
    _this.store = store;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = logger.create('backendConnector');

    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }
    return _this;
  }

  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
    var _this2 = this;

    // find what needs to be loaded
    var toLoad = [];
    var pending = [];
    var toLoadLanguages = [];
    var toLoadNamespaces = [];

    languages.forEach(function (lng) {
      var hasAllNamespaces = true;

      namespaces.forEach(function (ns) {
        var name = lng + '|' + ns;

        if (_this2.store.hasResourceBundle(lng, ns)) {
          _this2.state[name] = 2; // loaded
        } else if (_this2.state[name] < 0) {
          // nothing to do for err
        } else if (_this2.state[name] === 1) {
          if (pending.indexOf(name) < 0) pending.push(name);
        } else {
          _this2.state[name] = 1; // pending

          hasAllNamespaces = false;

          if (pending.indexOf(name) < 0) pending.push(name);
          if (toLoad.indexOf(name) < 0) toLoad.push(name);
          if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
        }
      });

      if (!hasAllNamespaces) toLoadLanguages.push(lng);
    });

    if (toLoad.length || pending.length) {
      this.queue.push({
        pending: pending,
        loaded: {},
        errors: [],
        callback: callback
      });
    }

    return {
      toLoad: toLoad,
      pending: pending,
      toLoadLanguages: toLoadLanguages,
      toLoadNamespaces: toLoadNamespaces
    };
  };

  Connector.prototype.loaded = function loaded(name, err, data) {
    var _name$split = name.split('|'),
        _name$split2 = _slicedToArray(_name$split, 2),
        lng = _name$split2[0],
        ns = _name$split2[1];

    if (err) this.emit('failedLoading', lng, ns, err);

    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }

    // set loaded
    this.state[name] = err ? -1 : 2;

    // consolidated loading done in this run - only emit once for a loaded namespace
    var loaded = {};

    // callback if ready
    this.queue.forEach(function (q) {
      pushPath(q.loaded, [lng], ns);
      remove(q.pending, name);

      if (err) q.errors.push(err);

      if (q.pending.length === 0 && !q.done) {
        // only do once per loaded -> this.emit('loaded', q.loaded);
        Object.keys(q.loaded).forEach(function (l) {
          if (!loaded[l]) loaded[l] = [];
          if (q.loaded[l].length) {
            q.loaded[l].forEach(function (ns) {
              if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
            });
          }
        });

        /* eslint no-param-reassign: 0 */
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });

    // emit consolidated loaded event
    this.emit('loaded', loaded);

    // remove done load requests
    this.queue = this.queue.filter(function (q) {
      return !q.done;
    });
  };

  Connector.prototype.read = function read(lng, ns, fcName) {
    var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var _this3 = this;

    var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
    var callback = arguments[5];

    if (!lng.length) return callback(null, {}); // noting to load

    return this.backend[fcName](lng, ns, function (err, data) {
      if (err && data /* = retryFlag */ && tried < 5) {
        setTimeout(function () {
          _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    });
  };

  /* eslint consistent-return: 0 */


  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this4 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }

    if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    var toLoad = this.queueLoad(languages, namespaces, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
      return null; // pendings will trigger callback
    }

    toLoad.toLoad.forEach(function (name) {
      _this4.loadOne(name);
    });
  };

  Connector.prototype.reload = function reload(languages, namespaces) {
    var _this5 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
    }

    if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === 'string') namespaces = [namespaces];

    languages.forEach(function (l) {
      namespaces.forEach(function (n) {
        _this5.loadOne(l + '|' + n, 're');
      });
    });
  };

  Connector.prototype.loadOne = function loadOne(name) {
    var _this6 = this;

    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var _name$split3 = name.split('|'),
        _name$split4 = _slicedToArray(_name$split3, 2),
        lng = _name$split4[0],
        ns = _name$split4[1];

    this.read(lng, ns, 'read', null, null, function (err, data) {
      if (err) _this6.logger.warn(prefix + 'loading namespace ' + ns + ' for language ' + lng + ' failed', err);
      if (!err && data) _this6.logger.log(prefix + 'loaded namespace ' + ns + ' for language ' + lng, data);

      _this6.loaded(name, err, data);
    });
  };

  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    if (this.backend && this.backend.create) {
      this.backend.create(languages, namespace, key, fallbackValue, null /* unused callback */, BackendConnector_extends({}, options, { isUpdate: isUpdate }));
    }

    // write to store to avoid resending
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  };

  return Connector;
}(es_EventEmitter);

/* harmony default export */ var BackendConnector = (BackendConnector_Connector);
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/defaults.js

function get() {
  return {
    debug: false,
    initImmediate: true,

    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false, // string or array of namespaces

    whitelist: false, // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all', // | currentOnly | languageOnly
    preload: false, // array with preload languages

    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',

    saveMissing: false, // enable to send missing values
    updateMissing: false, // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback', // 'current' || 'all'
    saveMissingPlurals: true, // will save all forms not only singular key
    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false, // function(str, match)

    postProcess: false, // string or array of postProcessor names
    returnNull: true, // allows null value as valid translation
    returnEmptyString: true, // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false, // or string to join array
    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (args[1]) ret.defaultValue = args[1];
      if (args[2]) ret.tDescription = args[2];
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',

      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop
    }
  };
}

/* eslint no-param-reassign: 0 */
function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  // extend whitelist with cimode
  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/i18next.js
var i18next_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var i18next_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function i18next_defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function i18next_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function i18next_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function i18next_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : i18next_defaults(subClass, superClass); }












function noop() {}

var i18next_I18n = function (_EventEmitter) {
  i18next_inherits(I18n, _EventEmitter);

  function I18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    i18next_classCallCheck(this, I18n);

    var _this = i18next_possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = logger;
    _this.modules = { external: [] };

    if (callback && !_this.isInitialized && !options.isClone) {
      var _ret;

      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) return _ret = _this.init(options, callback), i18next_possibleConstructorReturn(_this, _ret);
      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }
    return _this;
  }

  I18n.prototype.init = function init() {
    var _this2 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    this.options = i18next_extends({}, get(), this.options, transformOptions(options));

    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;

    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === 'function') return new ClassOrObject();
      return ClassOrObject;
    }

    // init services
    if (!this.options.isClone) {
      if (this.modules.logger) {
        logger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        logger.init(null, this.options);
      }

      var lu = new LanguageUtils(this.options);
      this.store = new es_ResourceStore(this.options.resources, this.options);

      var s = this.services;
      s.logger = logger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new es_PluralResolver(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix });
      s.interpolator = new es_Interpolator(this.options);

      s.backendConnector = new BackendConnector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.backendConnector.on('*', function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        s.languageDetector.init(s, this.options.detection, this.options);
      }

      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }

      this.translator = new es_Translator(this.services, this.options);
      // pipe events from translator
      this.translator.on('*', function (event) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      this.modules.external.forEach(function (m) {
        if (m.init) m.init(_this2);
      });
    }

    // append api
    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
    storeApi.forEach(function (fcName) {
      _this2[fcName] = function () {
        var _store;

        return (_store = _this2.store)[fcName].apply(_store, arguments);
      };
    });

    var load = function load() {
      _this2.changeLanguage(_this2.options.lng, function (err, t) {
        _this2.isInitialized = true;
        _this2.logger.log('initialized', _this2.options);
        _this2.emit('initialized', _this2.options);

        callback(err, t);
      });
    };

    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }

    return this;
  };

  /* eslint consistent-return: 0 */


  I18n.prototype.loadResources = function loadResources() {
    var _this3 = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

    if (!this.options.resources) {
      if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

      var toLoad = [];

      var append = function append(lng) {
        if (!lng) return;
        var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };

      if (!this.language) {
        // at least load fallbacks in this case
        var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach(function (l) {
          return append(l);
        });
      } else {
        append(this.language);
      }

      if (this.options.preload) {
        this.options.preload.forEach(function (l) {
          return append(l);
        });
      }

      this.services.backendConnector.load(toLoad, this.options.ns, callback);
    } else {
      callback(null);
    }
  };

  I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    this.services.backendConnector.reload(lngs, ns);
  };

  I18n.prototype.use = function use(module) {
    if (module.type === 'backend') {
      this.modules.backend = module;
    }

    if (module.type === 'logger' || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }

    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }

    if (module.type === 'i18nFormat') {
      this.modules.i18nFormat = module;
    }

    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }

    if (module.type === '3rdParty') {
      this.modules.external.push(module);
    }

    return this;
  };

  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
    var _this4 = this;

    var done = function done(err, l) {
      _this4.translator.changeLanguage(l);

      if (l) {
        _this4.emit('languageChanged', l);
        _this4.logger.log('languageChanged', l);
      }

      if (callback) callback(err, function () {
        return _this4.t.apply(_this4, arguments);
      });
    };

    var setLng = function setLng(l) {
      if (l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        if (!_this4.translator.language) _this4.translator.changeLanguage(l);

        if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
      }

      _this4.loadResources(function (err) {
        done(err, l);
      });
    };

    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      this.services.languageDetector.detect(setLng);
    } else {
      setLng(lng);
    }
  };

  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
    var _this5 = this;

    var fixedT = function fixedT(key, opts) {
      for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        rest[_key3 - 2] = arguments[_key3];
      }

      var options = i18next_extends({}, opts);
      if ((typeof opts === 'undefined' ? 'undefined' : i18next_typeof(opts)) !== 'object') {
        options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      }

      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      return _this5.t(key, options);
    };
    if (typeof lng === 'string') {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    return fixedT;
  };

  I18n.prototype.t = function t() {
    var _translator;

    return this.translator && (_translator = this.translator).translate.apply(_translator, arguments);
  };

  I18n.prototype.exists = function exists() {
    var _translator2;

    return this.translator && (_translator2 = this.translator).exists.apply(_translator2, arguments);
  };

  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  };

  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
    var _this6 = this;

    if (!this.options.ns) return callback && callback();
    if (typeof ns === 'string') ns = [ns];

    ns.forEach(function (n) {
      if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
    });

    this.loadResources(callback);
  };

  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
    if (typeof lngs === 'string') lngs = [lngs];
    var preloaded = this.options.preload || [];

    var newLngs = lngs.filter(function (lng) {
      return preloaded.indexOf(lng) < 0;
    });
    // Exit early if all given languages are already preloaded
    if (!newLngs.length) return callback();

    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(callback);
  };

  I18n.prototype.dir = function dir(lng) {
    if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
    if (!lng) return 'rtl';

    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

    return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
  };

  /* eslint class-methods-use-this: 0 */


  I18n.prototype.createInstance = function createInstance() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    return new I18n(options, callback);
  };

  I18n.prototype.cloneInstance = function cloneInstance() {
    var _this7 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

    var mergedOptions = i18next_extends({}, this.options, options, { isClone: true });
    var clone = new I18n(mergedOptions);
    var membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(function (m) {
      clone[m] = _this7[m];
    });
    clone.translator = new es_Translator(clone.services, clone.options);
    clone.translator.on('*', function (event) {
      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      clone.emit.apply(clone, [event].concat(args));
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = clone.options; // sync options

    return clone;
  };

  return I18n;
}(es_EventEmitter);

/* harmony default export */ var i18next = (new i18next_I18n());
// CONCATENATED MODULE: ./node_modules/i18next/dist/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return changeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneInstance", function() { return es_cloneInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFixedT", function() { return getFixedT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return es_init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguages", function() { return loadLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadNamespaces", function() { return loadNamespaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResources", function() { return loadResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultNamespace", function() { return setDefaultNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "use", function() { return es_use; });


/* harmony default export */ var es = __webpack_exports__["default"] = (i18next);

var changeLanguage = i18next.changeLanguage.bind(i18next);
var es_cloneInstance = i18next.cloneInstance.bind(i18next);
var createInstance = i18next.createInstance.bind(i18next);
var dir = i18next.dir.bind(i18next);
var exists = i18next.exists.bind(i18next);
var getFixedT = i18next.getFixedT.bind(i18next);
var es_init = i18next.init.bind(i18next);
var loadLanguages = i18next.loadLanguages.bind(i18next);
var loadNamespaces = i18next.loadNamespaces.bind(i18next);
var loadResources = i18next.loadResources.bind(i18next);
var off = i18next.off.bind(i18next);
var on = i18next.on.bind(i18next);
var setDefaultNamespace = i18next.setDefaultNamespace.bind(i18next);
var t = i18next.t.bind(i18next);
var es_use = i18next.use.bind(i18next);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.setServerSideRenderingState = setServerSideRenderingState;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _i18next = __webpack_require__(17);

var _i18next2 = _interopRequireDefault(_i18next);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _sitecoreJssReact = __webpack_require__(6);

var _SitecoreContextFactory = __webpack_require__(19);

var _SitecoreContextFactory2 = _interopRequireDefault(_SitecoreContextFactory);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _Layout = __webpack_require__(46);

var _Layout2 = _interopRequireDefault(_Layout);

var _NotFound = __webpack_require__(42);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dynamic route handler for Sitecore items.
// Because JSS app routes are defined in Sitecore, traditional static React routing isn't enough -
// we need to be able to load dynamic route data from Sitecore after the client side route changes.
// So react-router delegates all route rendering to this handler, which attempts to get the right
// route data from Sitecore - and if none exists, renders the not found component.

var ssrInitialState = null;

var RouteHandler = function (_React$Component) {
  _inherits(RouteHandler, _React$Component);

  function RouteHandler(props) {
    _classCallCheck(this, RouteHandler);

    var _this = _possibleConstructorReturn(this, (RouteHandler.__proto__ || Object.getPrototypeOf(RouteHandler)).call(this, props));

    _this.state = {
      notFound: true,
      routeData: ssrInitialState, // null when client-side rendering
      defaultLanguage: _config2.default.defaultLanguage
    };

    if (ssrInitialState && ssrInitialState.sitecore && ssrInitialState.sitecore.route) {
      // set the initial sitecore context data if we got SSR initial state
      _SitecoreContextFactory2.default.setSitecoreContext(Object.assign({
        route: ssrInitialState.sitecore.route,
        itemId: ssrInitialState.sitecore.route.itemId
      }, ssrInitialState.sitecore.context));
    }

    // route data from react-router - if route was resolved, it's not a 404
    if (props.route !== null) {
      _this.state.notFound = false;
    }

    // if we have an initial SSR state, and that state doesn't have a valid route data,
    // then this is a 404 route.
    if (ssrInitialState && (!ssrInitialState.sitecore || !ssrInitialState.sitecore.route)) {
      _this.state.notFound = true;
    }

    // if we have an SSR state, and that state has language data, set the current language
    // (this makes the language of content follow the Sitecore context language cookie)
    // note that a route-based language (i.e. /de-DE) will override this default; this is for home.
    if (ssrInitialState && ssrInitialState.context && ssrInitialState.context.language) {
      _this.state.defaultLanguage = ssrInitialState.context.language;
    }

    // once we initialize the route handler, we've "used up" the SSR data,
    // if it existed, so we want to clear it now that it's in react state.
    // future route changes that might destroy/remount this component should ignore any SSR data.
    // EXCEPTION: Unless we are still SSR-ing. Because SSR can re-render the component twice
    // We test for SSR by checking for Node-specific process.env variable.
    if (typeof window !== 'undefined') {
      ssrInitialState = null;
    }

    _this.componentIsMounted = false;
    _this.languageIsChanging = false;

    // tell i18next to sync its current language with the route language
    _this.updateLanguage();
    return _this;
  }

  _createClass(RouteHandler, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // if no existing routeData is present (from SSR), get Layout Service fetching the route data
      if (!this.state.routeData) {
        this.updateRouteData();
      }

      this.componentIsMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.componentIsMounted = false;
    }

    /**
     * Loads route data from Sitecore Layout Service into state.routeData
     */

  }, {
    key: 'updateRouteData',
    value: function updateRouteData() {
      var _this2 = this;

      var sitecoreRoutePath = this.props.route.match.params.sitecoreRoute || '/';
      if (!sitecoreRoutePath.startsWith('/')) {
        sitecoreRoutePath = '/' + sitecoreRoutePath;
      }

      var language = this.props.route.match.params.lang || this.state.defaultLanguage;

      // get the route data for the new route
      getRouteData(sitecoreRoutePath, language).then(function (routeData) {
        if (routeData !== null) {
          // set the sitecore context data and push the new route
          _SitecoreContextFactory2.default.setSitecoreContext(Object.assign({
            route: routeData.sitecore.route,
            itemId: routeData.sitecore.route.itemId
          }, routeData.sitecore.context));
          _this2.setState({ routeData: routeData, notFound: false });
        } else {
          _this2.setState({ notFound: true });
        }
      });
    }

    /**
     * Updates the current app language to match the route data.
     */

  }, {
    key: 'updateLanguage',
    value: function updateLanguage() {
      var _this3 = this;

      var newLanguage = this.props.route.match.params.lang || this.state.defaultLanguage;

      if (_i18next2.default.language !== newLanguage) {
        this.languageIsChanging = true;

        _i18next2.default.changeLanguage(newLanguage, function () {
          _this3.languageIsChanging = false;

          // if the component is not mounted, we don't care
          // (next time it mounts, it will render with the right language context)
          if (_this3.componentIsMounted) {
            // after we change the i18n language, we need to force-update React,
            // since otherwise React won't know that the dictionary has changed
            // because it is stored in i18next state not React state
            _this3.forceUpdate();
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps) {
      var existingRoute = previousProps.route.match.url;
      var newRoute = this.props.route.match.url;

      // don't change state (refetch route data) if the route has not changed
      if (existingRoute === newRoute) {
        return;
      }

      // if in experience editor - force reload instead of route data update
      // avoids confusing Sitecore's editing JS
      if ((0, _sitecoreJssReact.isExperienceEditorActive)()) {
        window.location.assign(newRoute);
        return;
      }

      this.updateLanguage();
      this.updateRouteData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          notFound = _state.notFound,
          routeData = _state.routeData;

      // no route data for the current route in Sitecore - show not found component.
      // Note: this is client-side only 404 handling. Server-side 404 handling is the responsibility
      // of the server being used (i.e. node-express-ssr and Sitecore intergrated rendering know how to send 404 status codes).

      if (notFound) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactHelmet2.default,
            null,
            _react2.default.createElement(
              'title',
              null,
              _i18next2.default.t('Page not found')
            )
          ),
          _react2.default.createElement(_NotFound2.default, null)
        );
      }

      // Don't render anything if the route data or dictionary data is not fully loaded yet.
      // This is a good place for a "Loading" component, if one is needed.
      if (!routeData || this.languageIsChanging) {
        return null;
      }

      // Render the app's root structural layout
      return _react2.default.createElement(_Layout2.default, { route: routeData.sitecore.route });
    }
  }]);

  return RouteHandler;
}(_react2.default.Component);

/**
 * Sets the initial state provided by server-side rendering.
 * Setting this state will bypass initial route data fetch calls.
 * @param {object} ssrState
 */


exports.default = RouteHandler;
function setServerSideRenderingState(ssrState) {
  ssrInitialState = ssrState;
}

/**
 * Gets route data from Sitecore. This data is used to construct the component layout for a JSS route.
 * @param {string} route Route path to get data for (e.g. /about)
 * @param {string} language Language to get route data in (content language, e.g. 'en')
 * @param {dataApi.LayoutServiceRequestOptions} options Layout service fetch options
 */
function getRouteData(route, language) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var fetchOptions = {
    layoutServiceConfig: { host: _config2.default.sitecoreApiHost },
    querystringParams: { sc_lang: language, sc_apikey: _config2.default.sitecoreApiKey },
    requestConfig: options
  };

  return _sitecoreJssReact.dataApi.fetchRouteData(route, fetchOptions).catch(function (error) {
    console.error('Route data fetch error', error);
    return null;
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sitecoreJssReact = __webpack_require__(6);

/*
  The SitecoreContextFactory stores the current Sitecore context for the app.
  For example, whether the page is currently being edited, or the current language.
  Note that the export makes this essentially a singleton, so we can store state in it.

  The Sitecore context is generally updated on route change (/src/index.js).
  The `withSitecoreContext()` higher order component from `sitecore-jss-react`
  can be used to access the context from within a component.
*/
exports.default = new _sitecoreJssReact.SitecoreContextFactory();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var SitecoreContext_1 = __webpack_require__(10);
function withComponentFactory(Component) {
    return function WithComponentFactory(props) {
        return (react_1.default.createElement(SitecoreContext_1.ComponentFactoryReactContext.Consumer, null, function (context) { return react_1.default.createElement(Component, __assign({}, props, { componentFactory: props.componentFactory || context })); }));
    };
}
exports.withComponentFactory = withComponentFactory;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
var MissingComponent_1 = __webpack_require__(60);
var utils_1 = __webpack_require__(59);
var PlaceholderCommon = /** @class */ (function (_super) {
    __extends(PlaceholderCommon, _super);
    function PlaceholderCommon(props) {
        var _this = _super.call(this, props) || this;
        _this.nodeRefs = [];
        _this.state = {};
        _this.addRef = _this.addRef.bind(_this);
        _this.updateKeyAttributes = _this.updateKeyAttributes.bind(_this);
        _this.createRawElement = _this.createRawElement.bind(_this);
        return _this;
    }
    PlaceholderCommon.getPlaceholderDataFromRenderingData = function (rendering, name) {
        var result;
        if (rendering && rendering.placeholders && Object.keys(rendering.placeholders).length > 0) {
            result = rendering.placeholders[name];
        }
        else {
            result = null;
        }
        if (!result) {
            console.warn("Placeholder '" + name + "' was not found in the current rendering data", JSON.stringify(rendering, null, 2));
            return [];
        }
        return result;
    };
    PlaceholderCommon.prototype.componentDidMount = function () {
        this.updateKeyAttributes();
    };
    PlaceholderCommon.prototype.componentDidUpdate = function () {
        this.updateKeyAttributes();
    };
    PlaceholderCommon.prototype.componentDidCatch = function (error) {
        this.setState({ error: error });
    };
    PlaceholderCommon.prototype.getComponentsForRenderingData = function (placeholderData) {
        var _this = this;
        var _a = this.props, name = _a.name, placeholderFields = _a.fields, placeholderParams = _a.params, missingComponentComponent = _a.missingComponentComponent, placeholderProps = __rest(_a, ["name", "fields", "params", "missingComponentComponent"]);
        return placeholderData.map(function (rendering, index) {
            var key = rendering.uid ? rendering.uid : "component-" + index;
            var commonProps = { key: key };
            // if the element is not a 'component rendering', render it 'raw'
            if (!rendering.componentName && rendering.name) {
                return _this.createRawElement(rendering, commonProps);
            }
            var component = _this.getComponentForRendering(rendering);
            if (!component) {
                console.error("Placeholder " + name + " contains unknown component " + rendering.componentName + ". Ensure that a React component exists for it, and that it is registered in your componentFactory.js.");
                component = missingComponentComponent || MissingComponent_1.MissingComponent;
            }
            var finalProps = __assign({}, commonProps, placeholderProps, ((placeholderFields || rendering.fields) && {
                fields: __assign({}, placeholderFields, rendering.fields),
            }), ((placeholderParams || rendering.params) && {
                params: __assign({}, placeholderParams, rendering.params),
            }), { rendering: rendering });
            return react_1.default.createElement(component, finalProps);
        })
            .filter(function (element) { return element; }); // remove nulls
    };
    PlaceholderCommon.prototype.getComponentForRendering = function (renderingDefinition) {
        var componentFactory = this.props.componentFactory;
        if (!componentFactory) {
            console.warn("No componentFactory was available to service request for component " + renderingDefinition);
            return null;
        }
        return componentFactory(renderingDefinition.componentName);
    };
    PlaceholderCommon.prototype.addRef = function (nodeRef) {
        this.nodeRefs.push(nodeRef);
    };
    PlaceholderCommon.prototype.createRawElement = function (elem, baseProps) {
        if (!elem.name) {
            console.error('"elem.name" is undefined in "createRawElement". Something is likely wrong with your component data. Ensure that your components have a name.');
            return null;
        }
        var attributes = utils_1.convertAttributesToReactProps(elem.attributes);
        var props = __assign({}, baseProps, attributes, { dangerouslySetInnerHTML: { __html: elem.contents } });
        /* Since we can't set the "key" attribute via React, stash it
          * so we can set in the DOM after render.
          */
        if (attributes && attributes.chrometype === 'placeholder') {
            props.phkey = elem.attributes.key; // props that get rendered as dom attribute names need to be lowercase, otherwise React complains.
            props.ref = this.addRef; // only need ref for placeholder containers, trying to add it to other components (e.g. stateless components) may result in a warning.
        }
        return react_1.default.createElement(elem.name, props);
    };
    PlaceholderCommon.prototype.updateKeyAttributes = function () {
        if (!this.nodeRefs) {
            return;
        }
        this.nodeRefs.forEach(function (ref) {
            if (ref && ref.getAttribute) {
                // ref might be a wrapped component, so check for existence of getAttribute method
                var key = ref.getAttribute('phkey');
                if (key) {
                    // need to manually set the 'key' attribute after component mount because
                    // 'key' is a reserved attribute/prop in React. so it will never be rendered
                    // as an html attribute.
                    ref.setAttribute('key', key);
                }
            }
        });
    };
    PlaceholderCommon.propTypes = {
        rendering: prop_types_1.default.object,
        componentFactory: prop_types_1.default.func,
        fields: prop_types_1.default.object,
        params: prop_types_1.default.object,
        missingComponentComponent: prop_types_1.default.object,
        errorComponent: prop_types_1.default.object,
    };
    return PlaceholderCommon;
}(react_1.default.Component));
exports.PlaceholderCommon = PlaceholderCommon;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(86);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(25);
var http = __webpack_require__(28);
var https = __webpack_require__(27);
var assert = __webpack_require__(89);
var Writable = __webpack_require__(35).Writable;
var debug = __webpack_require__(88)("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  var currentRequest = this._currentRequest;
  if (!data) {
    currentRequest.end(null, null, callback);
  }
  else {
    this.write(data, encoding, function () {
      currentRequest.end(null, null, callback);
    });
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataApi = __importStar(__webpack_require__(101));
exports.dataApi = dataApi;
var mediaApi = __importStar(__webpack_require__(70));
exports.mediaApi = mediaApi;
var dynamicPlaceholders_1 = __webpack_require__(65);
exports.getDynamicPlaceholderKey = dynamicPlaceholders_1.getDynamicPlaceholderKey;
var dataConversion_1 = __webpack_require__(64);
exports.convertPropDataToLayoutServiceFormat = dataConversion_1.convertPropDataToLayoutServiceFormat;
exports.convertRouteToLayoutServiceFormat = dataConversion_1.convertRouteToLayoutServiceFormat;
var util_1 = __webpack_require__(63);
exports.isExperienceEditorActive = util_1.isExperienceEditorActive;
exports.isServer = util_1.isServer;
exports.resetExperienceEditorChromes = util_1.resetExperienceEditorChromes;
var layoutDataUtils_1 = __webpack_require__(62);
exports.getFieldValue = layoutDataUtils_1.getFieldValue;
exports.getChildPlaceholder = layoutDataUtils_1.getChildPlaceholder;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(127);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    parse: __webpack_require__(106),
    stringify: __webpack_require__(103)
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,shrink-to-fit=no\"><meta name=\"theme-color\" content=\"#000000\"><link rel=\"shortcut icon\" href=\"/dist/sym/favicon.ico\"><link href=\"/dist/sym/static/css/vendors.ab81d069.chunk.css\" rel=\"stylesheet\"><link href=\"/dist/sym/static/css/main.cb4cc2a9.chunk.css\" rel=\"stylesheet\"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id=\"root\"></div><script>window.__JSS_STATE__=null</script><script type=\"text/javascript\" src=\"/dist/sym/static/js/runtime~main.f79f688e.js\"></script><script type=\"text/javascript\" src=\"/dist/sym/static/js/vendors.6d62f9c9.chunk.js\"></script><script type=\"text/javascript\" src=\"/dist/sym/static/js/main.48543dc7.chunk.js\"></script></body></html>";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Renders a route-not-found message when no route is available from Sitecore
// The JSS equivalent of a 404 Not Found page.

// This is invoked from RouteHandler when Sitecore returns no valid route data.

var NotFound = function NotFound(props) {
  return _react2.default.createElement(
    'h1',
    null,
    'Page not found'
  );
};

exports.default = NotFound;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAALECAYAAAAYQskiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AACAAElEQVR42uz9eZAd6X7ed36z9gUFFPYdCXSj+3T37b59L/dNJMXFI44p8mqksOShKFszCi1khD1SWKKlmbE04ZEsyvIMx5ZE2eOxZIYk2yFKlkmRY0kkJXJIauFyl15un14AZGPfC0DtW84fz/t2ZhUKjVpOVZ7M83wiMqoAFKrynDpvAvnU7/d7wczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMGiep+gR2IktbLwJfAL4DeBU4DkxUfV5mZmZmZmZmZl3gCXAb+Crwy8A/SrP2R1Wf1HbUMsDK0tYbwF8Gvq+uj8HMzMzMzMzMbI/lwP8X+LNp1v5K1SezFbUKf7K0tR/4fwB/GOir+nzMzMzMzMzMzGpoFfhbwJ9Ks/bjqk9mM2oTYGVp6yXgHwMvV30uZmZmZmZmZmYN8D7wfWnWvlT1iTxPLQKsLG1dBH4V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"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:text/css;base64,Lm5hdiB7DQogIGJhY2tncm91bmQtY29sb3I6ICMwMDA7DQp9DQoNCi5uYXYgYSB7DQogIGNvbG9yOiAjZmZmOw0KfQ0KDQphW3RhcmdldD0nX2JsYW5rJ106YWZ0ZXIgew0KICBjb250ZW50OiAnXDFGNUQ3Jw0KfQ0KDQovKg0KICBIaWRlcyBTaXRlY29yZSBFeHBlcmllbmNlIEVkaXRvciBtYXJrdXAsDQogIGlmIHlvdSBydW4gdGhlIGFwcCBpbiBjb25uZWN0ZWQgbW9kZSB3aGlsZSB0aGUgU2l0ZWNvcmUgY29va2llcw0KICBhcmUgc2V0IHRvIGVkaXQgbW9kZS4NCiovDQouc2NDaHJvbWVEYXRhLCAuc2NwbSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfQ=="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _sitecoreJssReact = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _reactI18next = __webpack_require__(16);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

__webpack_require__(45);

__webpack_require__(44);

var _jssLogo = __webpack_require__(43);

var _jssLogo2 = _interopRequireDefault(_jssLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  APP LAYOUT
  This is where the app's HTML structure and root placeholders should be defined.

  All routes share this root layout by default (this could be customized in RouteHandler),
  but components added to inner placeholders are route-specific.
*/

var Navigation = function Navigation(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n;
  return _react2.default.createElement(
    'div',
    { className: 'nav d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom' },
    _react2.default.createElement(
      'h5',
      { className: 'my-0 mr-md-auto font-weight-normal' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/' },
        _react2.default.createElement('img', { src: _jssLogo2.default, height: 50, alt: 'Sitecore' })
      )
    ),
    _react2.default.createElement(
      'nav',
      { className: 'my-2 my-md-0 mr-md-3' },
      _react2.default.createElement(
        'a',
        {
          className: 'p-2',
          href: 'https://jss.sitecore.net',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        t('Documentation')
      )
    )
  );
};

// inject dictionary props (`t`) into navigation so we can translate it
// NOTE: using this is needed instead of using i18next directly to keep
// the component state updated when i18n state (e.g. current language) changes


// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
Navigation = (0, _reactI18next.translate)()(Navigation);

var Layout = function Layout(_ref2) {
  var route = _ref2.route;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement(
        'title',
        null,
        route.fields && route.fields.pageTitle && route.fields.pageTitle.value || 'Page'
      )
    ),
    _react2.default.createElement(Navigation, null),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(_sitecoreJssReact.Placeholder, { name: 'jss-main', rendering: route })
    )
  );
};

exports.default = Layout;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _sitecoreJssReact = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentBlock = function ContentBlock(_ref) {
  var fields = _ref.fields;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_sitecoreJssReact.Text, { tag: "h2", className: "display-4", field: fields.heading }),
    _react2.default.createElement(_sitecoreJssReact.RichText, { className: "contentDescription", field: fields.content })
  );
};

exports.default = ContentBlock;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = componentFactory;

var _ContentBlock = __webpack_require__(47);

var _ContentBlock2 = _interopRequireDefault(_ContentBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = new Map(); /* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/generate-component-factory.js to modify the generation of this file.

components.set('ContentBlock', _ContentBlock2.default);

function componentFactory(componentName) {
  return components.get(componentName);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var PlaceholderCommon_1 = __webpack_require__(21);
var withComponentFactory_1 = __webpack_require__(20);
function withPlaceholder(placeholders, options) {
    return function (WrappedComponent) {
        var WithPlaceholder = /** @class */ (function (_super) {
            __extends(WithPlaceholder, _super);
            function WithPlaceholder(props) {
                return _super.call(this, props) || this;
            }
            WithPlaceholder.prototype.render = function () {
                var _this = this;
                var childProps = __assign({}, this.props);
                delete childProps.componentFactory;
                if (options && options.propsTransformer) {
                    childProps = options.propsTransformer(childProps);
                }
                if (this.state.error) {
                    if (childProps.errorComponent) {
                        return react_1.default.createElement(childProps.errorComponent, { error: this.state.error });
                    }
                    return (react_1.default.createElement("div", { className: "sc-jss-placeholder-error" },
                        "A rendering error occurred: ",
                        this.state.error.message,
                        "."));
                }
                var renderingData = options && options.resolvePlaceholderDataFromProps
                    ? options.resolvePlaceholderDataFromProps(childProps)
                    : childProps.rendering;
                var definitelyArrayPlacholders = !Array.isArray(placeholders)
                    ? [placeholders] : placeholders;
                definitelyArrayPlacholders.forEach(function (placeholder) {
                    var placeholderData;
                    if (placeholder.placeholder && placeholder.prop) {
                        placeholderData = PlaceholderCommon_1.PlaceholderCommon.getPlaceholderDataFromRenderingData(renderingData, placeholder.placeholder);
                        if (placeholderData) {
                            childProps[placeholder.prop] = _this.getComponentsForRenderingData(placeholderData);
                        }
                    }
                    else {
                        placeholderData = PlaceholderCommon_1.PlaceholderCommon.getPlaceholderDataFromRenderingData(renderingData, placeholder);
                        if (placeholderData) {
                            childProps[placeholder] = _this.getComponentsForRenderingData(placeholderData);
                        }
                    }
                });
                return react_1.default.createElement(WrappedComponent, __assign({}, childProps));
            };
            WithPlaceholder.propTypes = PlaceholderCommon_1.PlaceholderCommon.propTypes;
            return WithPlaceholder;
        }(PlaceholderCommon_1.PlaceholderCommon));
        return withComponentFactory_1.withComponentFactory(WithPlaceholder);
    };
}
exports.withPlaceholder = withPlaceholder;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var __1 = __webpack_require__(6);
exports.withExperienceEditorChromes = function (WrappedComponent) {
    var Enhancer = /** @class */ (function (_super) {
        __extends(Enhancer, _super);
        function Enhancer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
            return _this;
        }
        Enhancer.prototype.componentDidUpdate = function () {
            __1.resetExperienceEditorChromes();
        };
        Enhancer.prototype.render = function () {
            return react_1.default.createElement(WrappedComponent, __assign({}, this.props));
        };
        return Enhancer;
    }(react_1.default.Component));
    return Enhancer;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var SitecoreContext_1 = __webpack_require__(10);
function withSitecoreContext(options) {
    return function withSitecoreContextHoc(Component) {
        return function WithSitecoreContext(props) {
            return (react_1.default.createElement(SitecoreContext_1.SitecoreContextReactContext.Consumer, null, function (context) { return react_1.default.createElement(Component, __assign({}, props, { sitecoreContext: context.context, updateSitecoreContext: options && options.updatable && context.setSitecoreContext })); }));
        };
    };
}
exports.withSitecoreContext = withSitecoreContext;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prop_types_1 = __importDefault(__webpack_require__(0));
var react_1 = __importDefault(__webpack_require__(1));
exports.File = function (_a) {
    /*
      File fields cannot be managed via the EE. We never output "editable."
    */
    var field = _a.field, children = _a.children, otherProps = __rest(_a, ["field", "children"]);
    var dynamicField = field;
    if (!field || (!dynamicField.value && !dynamicField.src)) {
        return null;
    }
    // handle link directly on field for forgetful devs
    var file = dynamicField.src ? field : dynamicField.value;
    if (!file) {
        return null;
    }
    var linkText = !children ? file.title || file.displayName : null;
    var anchorAttrs = {
        href: file.src,
    };
    return react_1.default.createElement('a', __assign({}, anchorAttrs, otherProps), linkText, children);
};
exports.File.propTypes = {
    field: prop_types_1.default.oneOfType([
        prop_types_1.default.shape({
            src: prop_types_1.default.string,
        }),
        prop_types_1.default.shape({
            value: prop_types_1.default.object,
        }),
    ]),
};
exports.File.displayName = 'File';


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
exports.Link = function (_a) {
    var field = _a.field, editable = _a.editable, children = _a.children, showLinkTextWithChildrenPresent = _a.showLinkTextWithChildrenPresent, otherProps = __rest(_a, ["field", "editable", "children", "showLinkTextWithChildrenPresent"]);
    var dynamicField = field;
    if (!field || (!dynamicField.editableFirstPart && !dynamicField.value && !dynamicField.href)) {
        return null;
    }
    var resultTags = [];
    // EXPERIENCE EDITOR RENDERING
    if (editable && dynamicField.editableFirstPart) {
        var markup = dynamicField.editableFirstPart + dynamicField.editableLastPart;
        // in an ideal world, we'd pre-render React children here and inject them between editableFirstPart and editableLastPart.
        // However, we cannot combine arbitrary unparsed HTML (innerHTML) based components with actual vDOM components (the children)
        // because the innerHTML is not parsed - it'd make a discontinuous vDOM. So, we'll go for the next best compromise of rendering the link field and children separately
        // as siblings. Should be "good enough" for most cases - and write your own helper if it isn't. Or bring xEditor out of 2006.
        markup = markup + dynamicField.editableLastPart;
        var htmlProps = __assign({ className: 'sc-link-wrapper', dangerouslySetInnerHTML: {
                __html: markup,
            } }, otherProps, { key: 'editable' });
        resultTags.push(react_1.default.createElement("span", __assign({}, htmlProps)));
        // don't render normal link tag when editing, if no children exist
        // this preserves normal-ish behavior if not using a link body (no hacks required)
        if (!children) {
            return resultTags[0];
        }
    }
    // handle link directly on field for forgetful devs
    var link = dynamicField.href ? field : dynamicField.value;
    if (!link) {
        return null;
    }
    var anchorAttrs = {
        href: link.href,
        className: link.class,
        title: link.title,
        target: link.target,
    };
    if (anchorAttrs.target === '_blank' && !anchorAttrs.rel) {
        // information disclosure attack prevention keeps target blank site from getting ref to window.opener
        anchorAttrs.rel = 'noopener noreferrer';
    }
    var linkText = showLinkTextWithChildrenPresent || !children ? link.text : null;
    resultTags.push(react_1.default.createElement('a', __assign({}, anchorAttrs, otherProps, { key: 'link' }), linkText, children));
    return react_1.default.createElement(react_1.default.Fragment, null, resultTags);
};
exports.Link.propTypes = {
    field: prop_types_1.default.oneOfType([
        prop_types_1.default.shape({
            href: prop_types_1.default.string,
        }),
        prop_types_1.default.shape({
            value: prop_types_1.default.object,
            editableFirstPart: prop_types_1.default.string,
            editableLastPart: prop_types_1.default.string,
        }),
    ]),
    editable: prop_types_1.default.bool,
};
exports.Link.defaultProps = {
    editable: true,
};
exports.Link.displayName = 'Link';


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
exports.DateField = function (_a) {
    var field = _a.field, tag = _a.tag, editable = _a.editable, render = _a.render, otherProps = __rest(_a, ["field", "tag", "editable", "render"]);
    if (!field || (!field.editable && !field.value)) {
        return null;
    }
    var children;
    var htmlProps = __assign({}, otherProps);
    if (field.editable && editable) {
        htmlProps.dangerouslySetInnerHTML = {
            __html: field.editable,
        };
    }
    else if (render) {
        children = render(field.value ? new Date(field.value) : null);
    }
    else {
        children = field.value;
    }
    if (tag || (field.editable && editable)) {
        return react_1.default.createElement(tag || 'span', htmlProps, children);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
};
exports.DateField.propTypes = {
    field: prop_types_1.default.shape({
        value: prop_types_1.default.any,
        editable: prop_types_1.default.string,
    }),
    tag: prop_types_1.default.string,
    editable: prop_types_1.default.bool,
    render: prop_types_1.default.func,
};
exports.DateField.defaultProps = {
    editable: true,
};
exports.DateField.displayName = 'Date';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
exports.Text = function (_a) {
    var field = _a.field, tag = _a.tag, editable = _a.editable, encode = _a.encode, otherProps = __rest(_a, ["field", "tag", "editable", "encode"]);
    if (!field || (!field.editable && !field.value)) {
        return null;
    }
    // can't use editable value if we want to output unencoded
    if (!encode) {
        // eslint-disable-next-line no-param-reassign
        editable = false;
    }
    var output = field.editable && editable ? field.editable : field.value;
    var setDangerously = (field.editable && editable) || !encode;
    var children = null;
    var htmlProps = __assign({}, otherProps);
    if (setDangerously) {
        htmlProps.dangerouslySetInnerHTML = {
            __html: output,
        };
    }
    else {
        children = output;
    }
    if (tag || setDangerously) {
        return react_1.default.createElement(tag || 'span', htmlProps, children);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
};
exports.Text.propTypes = {
    field: prop_types_1.default.shape({
        value: prop_types_1.default.any,
        editable: prop_types_1.default.string,
    }),
    tag: prop_types_1.default.string,
    editable: prop_types_1.default.bool,
    encode: prop_types_1.default.bool,
};
exports.Text.defaultProps = {
    editable: true,
    encode: true,
};
exports.Text.displayName = 'Text';


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var prop_types_1 = __importDefault(__webpack_require__(0));
exports.RichText = function (_a) {
    var field = _a.field, tag = _a.tag, editable = _a.editable, otherProps = __rest(_a, ["field", "tag", "editable"]);
    if (!field || (!field.editable && !field.value)) {
        return null;
    }
    var htmlProps = __assign({ dangerouslySetInnerHTML: {
            __html: field.editable && editable ? field.editable : field.value,
        } }, otherProps);
    return react_1.default.createElement(tag || 'div', htmlProps);
};
exports.RichText.propTypes = {
    field: prop_types_1.default.shape({
        value: prop_types_1.default.string,
        editable: prop_types_1.default.string,
    }),
    tag: prop_types_1.default.string,
    editable: prop_types_1.default.bool,
};
exports.RichText.defaultProps = {
    tag: 'div',
    editable: true,
};
exports.RichText.displayName = 'RichText';


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sitecore_jss_1 = __webpack_require__(33);
var prop_types_1 = __importDefault(__webpack_require__(0));
var react_1 = __importDefault(__webpack_require__(1));
var server_1 = __importDefault(__webpack_require__(36));
var getEditableWrapper = function (editableMarkup) {
    var otherProps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherProps[_i - 1] = arguments[_i];
    }
    return (
    // create an inline wrapper and use dangerouslySetInnerHTML.
    // if we try to parse the EE value, the parser will strip invalid or disallowed attributes from html elements - and EE uses several
    react_1.default.createElement("span", __assign({ className: "sc-image-wrapper" }, otherProps, { dangerouslySetInnerHTML: { __html: editableMarkup } })));
};
var getImageAttrs = function (_a, imageParams) {
    var src = _a.src, srcSet = _a.srcSet, otherAttrs = __rest(_a, ["src", "srcSet"]);
    if (!src) {
        return null;
    }
    var newAttrs = __assign({}, otherAttrs);
    delete newAttrs.style;
    // update image URL for jss handler and image rendering params
    var resolvedSrc = sitecore_jss_1.mediaApi.updateImageUrl(src, imageParams);
    if (srcSet) {
        // replace with HTML-formatted srcset, including updated image URLs
        newAttrs.srcSet = sitecore_jss_1.mediaApi.getSrcSet(resolvedSrc, srcSet, imageParams);
    }
    else {
        newAttrs.src = resolvedSrc;
    }
    return newAttrs;
};
exports.Image = function (_a) {
    var media = _a.media, editable = _a.editable, imageParams = _a.imageParams, field = _a.field, otherProps = __rest(_a, ["media", "editable", "imageParams", "field"]);
    // allows the mistake of using 'field' prop instead of 'media' (consistent with other helpers)
    if (field && !media) {
        media = field;
    }
    var dynamicMedia = media;
    if (!media || (!dynamicMedia.editable && !dynamicMedia.value && !dynamicMedia.src)) {
        return null;
    }
    // we likely have an experience editor value, should be a string
    if (editable && dynamicMedia.editable) {
        var foundImg = sitecore_jss_1.mediaApi.findEditorImageTag(dynamicMedia.editable);
        if (!foundImg) {
            return getEditableWrapper(dynamicMedia.editable);
        }
        var imgAttrs = getImageAttrs(__assign({}, foundImg.attrs, otherProps), imageParams);
        if (!imgAttrs) {
            return getEditableWrapper(dynamicMedia.editable);
        }
        var imgHtml = server_1.default.renderToStaticMarkup(react_1.default.createElement("img", __assign({}, imgAttrs)));
        var editableMarkup = dynamicMedia.editable.replace(foundImg.imgTag, imgHtml);
        return getEditableWrapper(editableMarkup);
    }
    // some wise-guy/gal is passing in a 'raw' image object value
    var img = dynamicMedia.src ? media : dynamicMedia.value;
    if (!img) {
        return null;
    }
    var attrs = getImageAttrs(__assign({}, img, otherProps), imageParams);
    if (attrs) {
        return react_1.default.createElement("img", __assign({}, attrs));
    }
    return null; // we can't handle the truth
};
exports.Image.propTypes = {
    media: prop_types_1.default.oneOfType([
        prop_types_1.default.shape({
            src: prop_types_1.default.string,
        }),
        prop_types_1.default.shape({
            value: prop_types_1.default.object,
            editable: prop_types_1.default.string,
        }),
    ]),
    editable: prop_types_1.default.bool,
    imageParams: prop_types_1.default.object,
};
exports.Image.defaultProps = {
    editable: true,
};
exports.Image.displayName = 'Image';


/***/ }),
/* 58 */
/***/ (function(module, exports) {



/*:: type Attr = { [key: string]: string | number } */
/*:: type Opts = { preserveNumbers: ?boolean } */

/*

style-attr
====

Very simple parsing and stringifying of style attributes.

`parse`
----

Convert a style attribute string to an object.

*/

/*:: declare function parse (raw: string, opts: ?Opts): Attr */
function parse(raw, opts) {
  opts = opts || {};

  var preserveNumbers = opts.preserveNumbers;
  var trim = function (s) {
    return s.trim();
  };
  var obj = {};

  getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function (item) {
    // split with `.indexOf` rather than `.split` because the value may also contain colons.
    var pos = item.indexOf(':');
    var key = item.substr(0, pos).trim();
    var val = item.substr(pos + 1).trim();
    if (preserveNumbers && isNumeric(val)) {
      val = Number(val);
    }

    obj[key] = val;
  });

  return obj;
}

/*

`isNumeric`
----

Check if a value is numeric.
Via: https://stackoverflow.com/a/1830844/9324

*/

/*:: declare function isNumeric (n: any): boolean */

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/*

`getKeyValueChunks`
----

Split a string into chunks matching `<key>: <value>`

*/
/*:: declare function getKeyValueChunks (raw: string): Array<string> */
function getKeyValueChunks(raw) {
  var chunks = [];
  var offset = 0;
  var sep = ';';
  var hasUnclosedUrl = /url\([^\)]+$/;
  var chunk = '';
  var nextSplit;
  while (offset < raw.length) {
    nextSplit = raw.indexOf(sep, offset);
    if (nextSplit === -1) {
      nextSplit = raw.length;
    }

    chunk += raw.substring(offset, nextSplit);

    // data URIs can contain semicolons, so make sure we get the whole thing
    if (hasUnclosedUrl.test(chunk)) {
      chunk += ';';
      offset = nextSplit + 1;
      continue;
    }

    chunks.push(chunk);
    chunk = '';
    offset = nextSplit + 1;
  }

  return chunks;
}

/*

`stringify`
----

Convert an object into an attribute string

*/
/*:: declare function stringify (obj: Attr): string */
function stringify(obj) {
  return Object.keys(obj).map(function (key) {
    return key + ':' + obj[key];
  }).join(';');
}

/*

`normalize`
----

Normalize an attribute string (eg. collapse duplicates)

*/
/*:: declare function normalize (str: string, opts: ?Opts): string */
function normalize(str, opts) {
  return stringify(parse(str, opts));
}

module.exports.parse = parse;
module.exports.stringify = stringify;
module.exports.normalize = normalize;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var style_attr_1 = __webpack_require__(58);
// https://stackoverflow.com/a/10426674/9324
exports.convertKebabCasetoCamelCase = function (str) {
    return str.replace(/^.|-./g, function (letter, index) { return (index === 0 ? letter.toLowerCase() : letter.substr(1).toUpperCase()); });
};
/**
 * https://facebook.github.io/react/docs/dom-elements.html
 * We are only concerned with style at the moment, which needs to be converted from string to object to satisfy React.
 * We don't need to convert any other attributes (that we know of), because the placeholder renders them "as-is" by using the special "is" React prop.
 * For whatever reason though, the "style" prop is still validated as needing to be an object when using the "is" prop, which is why we need to convert from string to object.
 */
exports.convertStyleAttribute = function (style) {
    if (style === void 0) { style = ''; }
    // styleParse converts a style attribute string into an object format
    var parsedStyle = style_attr_1.parse(style, { preserveNumbers: true });
    return Object.keys(parsedStyle).reduce(function (initialResult, styleKey) {
        var result = initialResult;
        var convertedKey = exports.convertKebabCasetoCamelCase(styleKey);
        result[convertedKey] = parsedStyle[styleKey];
        return result;
    }, {});
};
exports.convertAttributesToReactProps = function (attributes) {
    if (!attributes) {
        return [];
    }
    return Object.keys(attributes).reduce(function (initialResult, attrName) {
        var result = initialResult;
        switch (attrName) {
            case 'class': {
                result.className = attributes.class;
                break;
            }
            case 'style': {
                result.style = exports.convertStyleAttribute(attributes.style);
                break;
            }
            default: {
                result[attrName] = attributes[attrName];
                break;
            }
        }
        return result;
    }, {});
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prop_types_1 = __importDefault(__webpack_require__(0));
var react_1 = __importDefault(__webpack_require__(1));
exports.MissingComponent = function (props) {
    var componentName = props.rendering && props.rendering.componentName
        ? props.rendering.componentName
        : 'Unnamed Component';
    console.log("Component props for unimplemented '" + componentName + "' component", props);
    return (react_1.default.createElement("div", { style: {
            background: 'darkorange',
            outline: '5px solid orange',
            padding: '10px',
            color: 'white',
            maxWidth: '500px',
        } },
        react_1.default.createElement("h2", null, componentName),
        react_1.default.createElement("p", null, "JSS component is missing React implementation. See the developer console for more information.")));
};
exports.MissingComponent.propTypes = {
    rendering: prop_types_1.default.shape({
        componentName: prop_types_1.default.string,
    }),
};
exports.MissingComponent.displayName = 'MissingComponent';


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(1));
var PlaceholderCommon_1 = __webpack_require__(21);
var withComponentFactory_1 = __webpack_require__(20);
function isRawRendering(rendering) {
    return !rendering.componentName && rendering.name !== undefined;
}
var PlaceholderComponent = /** @class */ (function (_super) {
    __extends(PlaceholderComponent, _super);
    function PlaceholderComponent(props) {
        return _super.call(this, props) || this;
    }
    PlaceholderComponent.prototype.render = function () {
        var _this = this;
        var childProps = __assign({}, this.props);
        delete childProps.componentFactory;
        if (this.state.error) {
            if (childProps.errorComponent) {
                return react_1.default.createElement(childProps.errorComponent, { error: this.state.error });
            }
            return (react_1.default.createElement("div", { className: "sc-jss-placeholder-error" },
                "A rendering error occurred: ",
                this.state.error.message,
                "."));
        }
        var renderingData = childProps.rendering;
        var placeholderData = PlaceholderCommon_1.PlaceholderCommon.getPlaceholderDataFromRenderingData(renderingData, this.props.name);
        var components = this.getComponentsForRenderingData(placeholderData);
        if (this.props.renderEmpty && placeholderData.every(function (rendering) { return isRawRendering(rendering); })) {
            return this.props.renderEmpty(components, placeholderData, childProps);
        }
        else if (this.props.render) {
            return this.props.render(components, placeholderData, childProps);
        }
        else if (this.props.renderEach) {
            return components.map(function (component, index) {
                if (component && component.props && component.props.type === 'text/sitecore') {
                    return component;
                }
                return _this.props.renderEach(component, index);
            });
        }
        else {
            return components;
        }
    };
    PlaceholderComponent.propTypes = PlaceholderCommon_1.PlaceholderCommon.propTypes;
    return PlaceholderComponent;
}(PlaceholderCommon_1.PlaceholderCommon));
exports.Placeholder = withComponentFactory_1.withComponentFactory(PlaceholderComponent);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Safely extracts a field value from a rendering or fields object.
 * Null will be returned if the field is not defined.
 */
function getFieldValue(renderingOrFields, fieldName, defaultValue) {
    if (!renderingOrFields || !fieldName) {
        return defaultValue;
    }
    var fields = renderingOrFields;
    if (fields[fieldName] && typeof fields[fieldName].value !== 'undefined') {
        return fields[fieldName].value;
    }
    var rendering = renderingOrFields;
    if (!rendering.fields ||
        !rendering.fields[fieldName] ||
        typeof rendering.fields[fieldName].value === 'undefined') {
        return defaultValue;
    }
    return rendering.fields[fieldName].value;
}
exports.getFieldValue = getFieldValue;
/**
 * Gets rendering definitions in a given child placeholder under a current rendering.
 */
function getChildPlaceholder(rendering, placeholderName) {
    if (!rendering ||
        !placeholderName ||
        !rendering.placeholders ||
        !rendering.placeholders[placeholderName]) {
        return [];
    }
    return rendering.placeholders[placeholderName];
}
exports.getChildPlaceholder = getChildPlaceholder;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = function (str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.tryParseJson = function (jsonString) {
    try {
        var o = JSON.parse(jsonString);
        // Handle non-exception-throwing cases:
        if (o && typeof o === 'object' && o !== null) {
            return o;
        }
    }
    catch (e) {
        console.error(e);
    }
    return false;
};
exports.isPrimitive = function (arg) {
    var type = typeof arg;
    return arg === null || (type !== 'object' && type !== 'function');
};
exports.getCookieValue = function (cookieName, cookies) {
    var cookieValue = '';
    var beginIndex = 0;
    var endIndex = 0;
    if (cookies.length > 0) {
        beginIndex = cookies.indexOf(cookieName + "=");
        if (beginIndex !== -1) {
            beginIndex += cookieName.length + 1;
            endIndex = cookies.indexOf(';', beginIndex);
            // if it the last cookie
            if (endIndex === -1) {
                endIndex = cookies.length;
            }
            cookieValue = unescape(cookies.substring(beginIndex, endIndex));
        }
    }
    return cookieValue;
};
exports.isServer = function () { return !(typeof window !== 'undefined' && window.document); };
exports.isExperienceEditorActive = function () {
    if (exports.isServer()) {
        return false;
    }
    var sc = window.Sitecore;
    return Boolean(sc && sc.PageModes && sc.PageModes.ChromeManager);
};
exports.resetExperienceEditorChromes = function () {
    if (exports.isExperienceEditorActive()) {
        window.Sitecore.PageModes.ChromeManager.resetChromes();
    }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var isComponentRendering = function (element) { return element.componentName; };
/**
 * Receives dev prop data and creates or assigns "value/editable" values where needed to match signature of LayoutService data.
 */
exports.convertPropDataToLayoutServiceFormat = function (propData) {
    if (!propData) {
        return {};
    }
    return Object.keys(propData).reduce(function (result, propName) {
        var _a, _b;
        var propValue = propData[propName];
        // if no propValue, then bail
        if (!propValue) {
            return __assign({}, result, (_a = {}, _a[propName] = propValue, _a));
        }
        var newResult = __assign({}, result);
        // field value might be an array, in which case we need to iterate the array entries for more prop values
        if (Array.isArray(propValue)) {
            newResult[propName] = propValue.map(function (val) {
                return __assign({}, val, (val.fields && { fields: exports.convertPropDataToLayoutServiceFormat(val.fields) }));
            });
            return newResult;
        }
        // assume propValue _should_ always contain a 'value' key. if it doesn't then bail.
        // or if propValue has an 'editable' key, then assume this prop doesn't need additional processing.
        if (!propValue.value || propValue.editable) {
            return __assign({}, result, (_b = {}, _b[propName] = propValue, _b));
        }
        var propValueType = typeof propValue.value;
        // if propValue is a primitive type, then copy propValue.value to propValue.editable
        if (propValueType === 'string' || propValueType === 'boolean' || propValueType === 'number') {
            newResult[propName] = {
                value: propValue.value,
                editable: propValue.value,
            };
            return newResult;
        }
        // we already check for Array and primitive types above,
        // so we _should_ be able to assume if the type is 'object' that we have an actual {object}
        // this assumes we're working with JSON and not complex objects.
        if (propValueType === 'object') {
            newResult[propName] = {
                value: propValue.value,
                editable: '',
            };
            return newResult;
        }
        // will we ever get here? perhaps if someone tries to use a function or symbol...
        return newResult;
    }, {});
};
/**
 * Receives dev route data and creates or assigns "value/editable" values where needed
 * for all fields and rendering props to match signature of LayoutService data.
 */
exports.convertRouteToLayoutServiceFormat = function (routeData) {
    var fields = exports.convertPropDataToLayoutServiceFormat(routeData.fields);
    var transformPlaceholders = function (placeholders) {
        if (!placeholders) {
            return {};
        }
        return Object.keys(placeholders).reduce(function (result, placeholderName) {
            var placeholder = placeholders[placeholderName];
            var elements = placeholder.map(function (element) {
                if (isComponentRendering(element)) {
                    // https://stackoverflow.com/a/40560953/9324
                    return __assign({}, element, (element.placeholders && {
                        placeholders: transformPlaceholders(element.placeholders),
                    }), (element.params && { params: element.params }), (element.fields && {
                        fields: exports.convertPropDataToLayoutServiceFormat(element.fields),
                    }));
                }
                return element;
            });
            result[placeholderName] = elements;
            return result;
        }, {});
    };
    var transformedPlaceholders = transformPlaceholders(routeData.placeholders);
    return __assign({}, routeData, { fields: fields, placeholders: transformedPlaceholders });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var makePath = function (separator) {
    var parts = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        parts[_i - 1] = arguments[_i];
    }
    var newParts = [];
    parts.forEach(function (part) {
        var splitParts = part ? part.split(separator).filter(function (val) { return val; }) : [];
        if (splitParts.length) {
            newParts = newParts.concat(splitParts);
        }
    });
    var path = newParts.join(separator);
    // preserve the leading separator if it was provided
    if (parts[0] && parts[0].indexOf(separator) === 0) {
        path = "" + separator + path;
    }
    return path;
};
var formatGuid = function (guid) {
    var formattedGuid = guid;
    if (guid.length === 36) {
        // no wrapping braces
        formattedGuid = "{" + guid + "}";
    }
    return formattedGuid.toUpperCase();
};
exports.getDynamicPlaceholderKey = function (parentPlaceholderPath, rendering, placeholderName) {
    if (rendering && rendering.uid) {
        var uid = formatGuid(rendering.uid);
        var index = 0; // this could become dynamic if we wish to support "incrementing" dynamic placeholders as well
        return makePath('/', parentPlaceholderPath, placeholderName + "-" + uid + "-" + index);
    }
    return makePath('/', parentPlaceholderPath, placeholderName);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String} The decoded string.
 * @api private
 */
function decode(input) {
  return decodeURIComponent(input.replace(/\+/g, ' '));
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    if (key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(67)
  , qs = __webpack_require__(66)
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var location = global && global.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} location Location defaults for relative paths.
 * @param {Boolean|Function} parser Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.qs = qs;

module.exports = Url;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
    reHasEscapedHtml = RegExp(reEscapedHtml.source);

/** Used to map HTML entities to characters. */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */
function unescape(string) {
  string = toString(string);
  return (string && reHasEscapedHtml.test(string))
    ? string.replace(reEscapedHtml, unescapeHtmlChar)
    : string;
}

module.exports = unescape;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// what is `import x = require('x');`? great question: https://github.com/Microsoft/TypeScript/issues/5073
var unescape = __webpack_require__(69);
var URL = __webpack_require__(68);
// finds an img tag with HTML attributes
var imgTagRegex = /<img([^>]+)\/>/i;
// finds all the HTML attributes in a string
var htmlAttrsRegex = /([^=\s]+)(="([^"]*)")?/gi;
// finds the Sitecore media URL prefix
var mediaUrlPrefixRegex = /\/([-~]{1})\/media\//i;
/**
 * Makes a request to Sitecore Content Service for the specified item path.
 */
exports.findEditorImageTag = function (editorMarkup) {
    // match the tag
    var tagMatch = editorMarkup.match(imgTagRegex);
    if (!tagMatch || tagMatch.length < 2) {
        return null;
    }
    // find the attrs and turn them into a Map
    var attrs = {};
    var match = htmlAttrsRegex.exec(tagMatch[1]);
    while (match != null) {
        attrs[match[1]] = unescape(match[3]);
        match = htmlAttrsRegex.exec(tagMatch[1]);
    }
    return {
        imgTag: tagMatch[0],
        attrs: attrs,
    };
};
/**
 * Receives a Sitecore media URL and replaces `/~/media` or `/-/media` with `/~/jssmedia` or `/-/jssmedia`, respectively.
 * This replacement allows the JSS media handler to be used for JSS app assets.
 * Also, any provided `params` are used as the querystring parameters for the media URL.
 */
exports.updateImageUrl = function (url, params) {
    // polyfill node `global` in browser to workaround https://github.com/unshiftio/url-parse/issues/150
    if (typeof window !== 'undefined' && !window.global) {
        window.global = {};
    }
    var parsed = URL(url, {}, true);
    parsed.query = params || parsed.query;
    var match = mediaUrlPrefixRegex.exec(parsed.pathname);
    if (match && match.length > 1) {
        // regex will provide us with /-/ or /~/ type
        parsed.set('pathname', parsed.pathname.replace(mediaUrlPrefixRegex, "/" + match[1] + "/jssmedia/"));
    }
    return parsed.toString();
};
/**
 * Receives an array of `srcSet` parameters that are iterated and used as parameters to generate
 * a corresponding set of updated Sitecore media URLs via @see updateImageUrl. The result is a comma-delimited
 * list of media URLs with respective dimension parameters.
 *
 * @example
 * // returns '/ipsum.jpg?h=1000&w=1000 1000w, /ipsum.jpg?mh=250&mw=250 250w'
 * getSrcSet('/ipsum.jpg', [{ h: 1000, w: 1000 }, { mh: 250, mw: 250 } ])
 *
 * More information about `srcSet`: {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img}
 */
exports.getSrcSet = function (url, srcSet, imageParams) {
    return srcSet
        .map(function (params) {
        var newParams = __assign({}, imageParams, params);
        var imageWidth = newParams.w || newParams.mw;
        if (!imageWidth) {
            return null;
        }
        return exports.updateImageUrl(url, newParams) + " " + imageWidth + "w";
    })
        .filter(function (value) { return value; })
        .join(', ');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(22);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var transformData = __webpack_require__(75);
var isCancel = __webpack_require__(23);
var defaults = __webpack_require__(12);
var isAbsoluteURL = __webpack_require__(74);
var combineURLs = __webpack_require__(73);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 78 */
/***/ (function(module) {

module.exports = {"_args":[["axios@0.17.1","C:\\Users\\alex\\source\\repos\\sitecore-jss-react-starter\\src"]],"_from":"axios@0.17.1","_id":"axios@0.17.1","_inBundle":false,"_integrity":"sha1-LY4+XQvb1zJ/kbyBT1xXZg+Bgk0=","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.17.1","name":"axios","escapedName":"axios","rawSpec":"0.17.1","saveSpec":null,"fetchSpec":"0.17.1"},"_requiredBy":["/@sitecore-jss/sitecore-jss"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.17.1.tgz","_spec":"0.17.1","_where":"C:\\Users\\alex\\source\\repos\\sitecore-jss-react-starter\\src","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.2.5","is-buffer":"^1.1.5"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.5.7","coveralls":"^2.11.9","es6-promise":"^4.0.5","grunt":"^1.0.1","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.0.0","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^19.0.0","grunt-karma":"^2.0.0","grunt-ts":"^6.0.0-beta.3","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.0.0","karma-coverage":"^1.0.0","karma-firefox-launcher":"^1.0.0","karma-jasmine":"^1.0.2","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-phantomjs-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.1.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","phantomjs-prebuilt":"^2.1.7","sinon":"^1.17.4","typescript":"^2.0.3","url-search-params":"^0.6.1","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","version":"0.17.1"};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(81);
const hasFlag = __webpack_require__(80);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(84);
var util = __webpack_require__(83);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(24);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(82);
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(24);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(87);
} else {
  module.exports = __webpack_require__(85);
}


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var settle = __webpack_require__(31);
var buildURL = __webpack_require__(29);
var http = __webpack_require__(28);
var https = __webpack_require__(27);
var httpFollow = __webpack_require__(26).http;
var httpsFollow = __webpack_require__(26).https;
var url = __webpack_require__(25);
var zlib = __webpack_require__(79);
var pkg = __webpack_require__(78);
var createError = __webpack_require__(11);
var enhanceError = __webpack_require__(30);

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolve, reject) {
    var data = config.data;
    var headers = config.headers;
    var timer;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = new Buffer(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = new Buffer(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var parsed = url.parse(config.url);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttps = protocol === 'https:';
    var agent = isHttps ? config.httpsAgent : config.httpAgent;

    var options = {
      hostname: parsed.hostname,
      port: parsed.port,
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method,
      headers: headers,
      agent: agent,
      auth: auth
    };

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        proxy = {
          host: parsedProxyUrl.hostname,
          port: parsedProxyUrl.port
        };

        if (parsedProxyUrl.auth) {
          var proxyUrlAuth = parsedProxyUrl.auth.split(':');
          proxy.auth = {
            username: proxyUrlAuth[0],
            password: proxyUrlAuth[1]
          };
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = new Buffer(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttps ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttps ? httpsFollow : httpFollow;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // Response has been received so kill timer that handles request timeout
      clearTimeout(timer);
      timer = null;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString('utf8');
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout && !timer) {
      timer = setTimeout(function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      }, config.timeout);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var settle = __webpack_require__(31);
var buildURL = __webpack_require__(29);
var parseHeaders = __webpack_require__(94);
var isURLSameOrigin = __webpack_require__(93);
var createError = __webpack_require__(11);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(92);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(91);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(12);
var utils = __webpack_require__(5);
var InterceptorManager = __webpack_require__(77);
var dispatchRequest = __webpack_require__(76);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var bind = __webpack_require__(32);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(12);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(22);
axios.CancelToken = __webpack_require__(72);
axios.isCancel = __webpack_require__(23);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(71);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(100));
var ResponseError = /** @class */ (function (_super) {
    __extends(ResponseError, _super);
    function ResponseError(message, response) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ResponseError.prototype);
        _this.response = response;
        return _this;
    }
    return ResponseError;
}(Error));
var checkStatus = function (response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    var error = new ResponseError(response.statusText, response);
    throw error;
};
// note: encodeURIComponent is available via browser (window) or natively in node.js
// if you use another js engine for server-side rendering you may not have native encodeURIComponent
// and would then need to install a package for that functionality
var getQueryString = function (params) {
    return Object.keys(params)
        .map(function (k) { return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]); })
        .join('&');
};
// note: axios needs to use `withCredentials: true` in order for Sitecore cookies to be included in CORS requests
// which is necessary for analytics and such
var fetchData = function (url, params, options) {
    if (params === void 0) { params = {}; }
    if (options === void 0) { options = {}; }
    var fetchOptions = Object.assign({}, options, {
        withCredentials: true,
    });
    var qs = getQueryString(params);
    var fetchUrl = url.indexOf('?') !== -1 ? url + "&" + qs : url + "?" + qs;
    return axios_1.default
        .get(fetchUrl, fetchOptions)
        .then(checkStatus)
        .then(function (response) {
        // axios auto-parses JSON responses, don't need to JSON.parse
        return response.data;
    });
};
var resolveLayoutServiceUrl = function (options, verb) {
    if (options === void 0) { options = {}; }
    var _a = options.host, host = _a === void 0 ? '' : _a, _b = options.configurationName, configurationName = _b === void 0 ? 'jss' : _b, serviceUrl = options.serviceUrl;
    if (serviceUrl) {
        return serviceUrl;
    }
    return host + "/sitecore/api/layout/" + verb + "/" + configurationName;
};
/**
 * Makes a request to Sitecore Layout Service for the specified route item path.
 */
exports.fetchRouteData = function (itemPath, options) {
    if (options === void 0) { options = {}; }
    var querystringParams = options.querystringParams, layoutServiceConfig = options.layoutServiceConfig, requestConfig = options.requestConfig;
    var fetchUrl = resolveLayoutServiceUrl(layoutServiceConfig, 'render');
    return fetchData(fetchUrl, __assign({ item: itemPath }, querystringParams), requestConfig);
};
/**
 * Makes a request to Sitecore Layout Service for the specified placeholder in
 * a specific route item. Allows you to retrieve rendered data for individual placeholders instead of entire routes.
 */
exports.fetchPlaceholderData = function (placeholderName, itemPath, options) {
    if (options === void 0) { options = {}; }
    var querystringParams = options.querystringParams, layoutServiceConfig = options.layoutServiceConfig, requestConfig = options.requestConfig;
    var fetchUrl = resolveLayoutServiceUrl(layoutServiceConfig, 'placeholder');
    return fetchData(fetchUrl, __assign({ placeholderName: placeholderName, item: itemPath }, querystringParams), requestConfig);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routePatterns = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _sitecoreJssReact = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(9);

var _componentFactory = __webpack_require__(48);

var _componentFactory2 = _interopRequireDefault(_componentFactory);

var _SitecoreContextFactory = __webpack_require__(19);

var _SitecoreContextFactory2 = _interopRequireDefault(_SitecoreContextFactory);

var _RouteHandler = __webpack_require__(18);

var _RouteHandler2 = _interopRequireDefault(_RouteHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is the main JSX entry point of the app invoked by the renderer (server or client rendering).
// By default the app's normal rendering is delegated to <RouteHandler> that handles the loading of JSS route data.

// support languages in the URL prefix
// e.g. /da-DK/path, or /en/path, or /path
var routePatterns = exports.routePatterns = ["/:lang([a-z]{2}-[A-Z]{2})/:sitecoreRoute*", "/:lang([a-z]{2})/:sitecoreRoute*", "/:sitecoreRoute*"];

// wrap the app with:
// SitecoreContext: provides component resolution and context services via withSitecoreContext
// Router: provides a basic routing setup that will resolve Sitecore item routes and allow for language URL prefixes.
var AppRoot = function AppRoot(_ref) {
  var path = _ref.path,
      Router = _ref.Router;

  var routeRenderFunction = function routeRenderFunction(props) {
    return _react2.default.createElement(_RouteHandler2.default, { route: props });
  };
  return _react2.default.createElement(
    _sitecoreJssReact.SitecoreContext,
    {
      componentFactory: _componentFactory2.default,
      contextFactory: _SitecoreContextFactory2.default
    },
    _react2.default.createElement(
      Router,
      { location: path, context: {} },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routePatterns.map(function (routePattern) {
          return _react2.default.createElement(_reactRouterDom.Route, {
            key: routePattern,
            path: routePattern,
            render: routeRenderFunction
          });
        })
      )
    )
  );
};

exports.default = AppRoot;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

function attrString(attrs) {
    var buff = [];
    for (var key in attrs) {
        buff.push(key + '="' + attrs[key] + '"');
    }
    if (!buff.length) {
        return '';
    }
    return ' ' + buff.join(' ');
}

function stringify(buff, doc) {
    switch (doc.type) {
    case 'text':
        return buff + doc.content;
    case 'tag':
        buff += '<' + doc.name + (doc.attrs ? attrString(doc.attrs) : '') + (doc.voidElement ? '/>' : '>');
        if (doc.voidElement) {
            return buff;
        }
        return buff + doc.children.reduce(stringify, '') + '</' + doc.name + '>';
    }
}

module.exports = function (doc) {
    return doc.reduce(function (token, rootEl) {
        return token + stringify('', rootEl);
    }, '');
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "keygen": true,
  "link": true,
  "menuitem": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var attrRE = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g;
var voidElements = __webpack_require__(104);

module.exports = function (tag) {
    var i = 0;
    var key;
    var expectingValueAfterEquals = true;
    var res = {
        type: 'tag',
        name: '',
        voidElement: false,
        attrs: {},
        children: []
    };

    tag.replace(attrRE, function (match) {
        if (match === '=') {
            expectingValueAfterEquals = true;
            i++;
            return;
        }

        if (!expectingValueAfterEquals) {
            if (key) {
                res.attrs[key] = key; // boolean attribute
            }
            key=match;
        } else {
            if (i === 0) {
                if (voidElements[match] || tag.charAt(tag.length - 2) === '/') {
                    res.voidElement = true;
                }
                res.name = match;
            } else {
                res.attrs[key] = match.replace(/^['"]|['"]$/g, '');
                key=undefined;
            }
        }
        i++;
        expectingValueAfterEquals = false;
    });

    return res;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint -W030 */
var tagRE = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g;
var parseTag = __webpack_require__(105);
// re-used obj for quick lookups of components
var empty = Object.create ? Object.create(null) : {};
// common logic for pushing a child node onto a list
function pushTextNode(list, html, level, start, ignoreWhitespace) {
    // calculate correct end of the content slice in case there's
    // no tag after the text node.
    var end = html.indexOf('<', start);
    var content = html.slice(start, end === -1 ? undefined : end);
    // if a node is nothing but whitespace, collapse it as the spec states:
    // https://www.w3.org/TR/html4/struct/text.html#h-9.1
    if (/^\s*$/.test(content)) {
        content = ' ';
    }
    // don't add whitespace-only text nodes if they would be trailing text nodes
    // or if they would be leading whitespace-only text nodes:
    //  * end > -1 indicates this is not a trailing text node
    //  * leading node is when level is -1 and list has length 0
    if ((!ignoreWhitespace && end > -1 && level + list.length >= 0) || content !== ' ') {
        list.push({
            type: 'text',
            content: content
        });
    }
}

module.exports = function parse(html, options) {
    options || (options = {});
    options.components || (options.components = empty);
    var result = [];
    var current;
    var level = -1;
    var arr = [];
    var byTag = {};
    var inComponent = false;

    html.replace(tagRE, function (tag, index) {
        if (inComponent) {
            if (tag !== ('</' + current.name + '>')) {
                return;
            } else {
                inComponent = false;
            }
        }

        var isOpen = tag.charAt(1) !== '/';
        var isComment = tag.indexOf('<!--') === 0;
        var start = index + tag.length;
        var nextChar = html.charAt(start);
        var parent;

        if (isOpen && !isComment) {
            level++;

            current = parseTag(tag);
            if (current.type === 'tag' && options.components[current.name]) {
                current.type = 'component';
                inComponent = true;
            }

            if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
                pushTextNode(current.children, html, level, start, options.ignoreWhitespace);
            }

            byTag[current.tagName] = current;

            // if we're at root, push new base node
            if (level === 0) {
                result.push(current);
            }

            parent = arr[level - 1];

            if (parent) {
                parent.children.push(current);
            }

            arr[level] = current;
        }

        if (isComment || !isOpen || current.voidElement) {
            if (!isComment) {
                level--;
            }
            if (!inComponent && nextChar !== '<' && nextChar) {
                // trailing text node
                // if we're at the root, push a base text node. otherwise add as
                // a child to the current node.
                parent = level === -1 ? result : arr[level].children;
                pushTextNode(parent, html, level, start, options.ignoreWhitespace);
            }
        }
    });

    // If the "html" passed isn't actually html, add it as a text node.
    if (!result.length && html.length) {
        pushTextNode(result, html, 0, 0, options.ignoreWhitespace);
    }

    return result;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function addQueryString(url, params) {
  if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
    var queryString = '',
        e = encodeURIComponent;

    // Must encode data
    for (var paramName in params) {
      queryString += '&' + e(paramName) + '=' + e(params[paramName]);
    }

    if (!queryString) {
      return url;
    }

    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
}

// https://gist.github.com/Xeoncross/7663273
function ajax(url, options, callback, data, cache) {

  if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    if (!cache) {
      data['_t'] = new Date();
    }
    // URL encoded form data must be in querystring format
    data = addQueryString('', data).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;
    if (XMLHttpRequest) {
      x = new XMLHttpRequest();
    } else {
      x = new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    x.open(data ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (data) {
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data);
  } catch (e) {
    console && console.log(e);
  }
}

exports.default = ajax;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = defaults;
exports.extend = extend;
var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function extend(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(108);

var utils = _interopRequireWildcard(_utils);

var _ajax = __webpack_require__(107);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: JSON.parse,
    crossDomain: false,
    ajax: _ajax2.default
  };
}

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Backend);

    this.init(services, options);

    this.type = 'backend';
  }

  _createClass(Backend, [{
    key: 'init',
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.services = services;
      this.options = utils.defaults(options, this.options || {}, getDefaults());
    }
  }, {
    key: 'readMulti',
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: languages.join('+'), ns: namespaces.join('+') });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'read',
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: language, ns: namespace });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'loadUrl',
    value: function loadUrl(url, callback) {
      var _this = this;

      this.options.ajax(url, this.options, function (data, xhr) {
        if (xhr.status >= 500 && xhr.status < 600) return callback('failed loading ' + url, true /* retry */);
        if (xhr.status >= 400 && xhr.status < 500) return callback('failed loading ' + url, false /* no retry */);

        var ret = void 0,
            err = void 0;
        try {
          ret = _this.options.parse(data, url);
        } catch (e) {
          err = 'failed parsing ' + url + ' to json';
        }
        if (err) return callback(err, false);
        callback(null, ret);
      });
    }
  }, {
    key: 'create',
    value: function create(languages, namespace, key, fallbackValue) {
      var _this2 = this;

      if (typeof languages === 'string') languages = [languages];

      var payload = {};
      payload[key] = fallbackValue || '';

      languages.forEach(function (lng) {
        var url = _this2.services.interpolator.interpolate(_this2.options.addPath, { lng: lng, ns: namespace });

        _this2.options.ajax(url, _this2.options, function (data, xhr) {
          //const statusCode = xhr.status.toString();
          // TODO: if statusCode === 4xx do log
        }, payload);
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';

exports.default = Backend;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(109).default;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18nextXhrBackend = __webpack_require__(110);

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ajax(url) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$init = _ref.init,
      init = _ref$init === undefined ? {} : _ref$init;

  var cb = arguments[2];

  fetch(url, init).then(function (res) {
    if (res.ok) {
      return res.text().then(function (json) {
        cb(json, res);
      });
    }

    return cb('', res);
  });
}

var FetchBackend = function (_XHRBackend) {
  _inherits(FetchBackend, _XHRBackend);

  function FetchBackend(services) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FetchBackend);

    var options = Object.assign({ ajax: ajax }, opts);

    return _possibleConstructorReturn(this, (FetchBackend.__proto__ || Object.getPrototypeOf(FetchBackend)).call(this, services, options));
  }

  return FetchBackend;
}(_i18nextXhrBackend2.default);

exports.default = FetchBackend;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = i18nInit;

var _i18next = __webpack_require__(17);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextFetchBackend = __webpack_require__(111);

var _i18nextFetchBackend2 = _interopRequireDefault(_i18nextFetchBackend);

var _reactI18next = __webpack_require__(16);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initializes the i18next library to provide a translation dictionary to the app.
 * If your app is not multilingual, this file and references to it can be removed.
 * Elsewhere in the app to use the dictionary `import { t } from 'i18next'; ... t('key')`
 * @param {string} language Optional, the initial language. Only used for SSR; otherwise language set in RouteHandler.
 * @param {*} dictionary Optional, the dictionary to load. Only used for SSR; otherwise, the dictionary is loaded via JSS dictionary service.
 */
function i18nInit(language, dictionary) {
  return new Promise(function (resolve, reject) {
    var options = {
      debug: false,
      lng: language,
      fallbackLng: false, // fallback to keys
      load: 'currentOnly', // e.g. don't load 'es' when requesting 'es-MX' -- Sitecore config should handle this
      useCookie: false, // using URLs and Sitecore to store language context, don't need a cookie

      interpolation: {
        escapeValue: false // not needed for react
      }
    };

    if (dictionary) {
      // if we got dictionary passed, that means we're in a SSR context with a server-provided dictionary
      // so we do not want a backend, because we already know all possible keys
      options.resources = {};
      options.resources[language] = {
        translation: dictionary
      };

      _i18next2.default.use(_reactI18next.reactI18nextModule).init(options, function (error) {
        if (error) reject(error);
        resolve();
      });
    } else {
      // We're running client-side, so we get translation data from the Sitecore dictionary API using fetch backend
      // For higher performance (but less simplicity), consider adding the i18n chained backend to a local cache option like the local storage backend.

      // eslint-disable-next-line prettier/prettier
      var dictionaryServicePath = _config2.default.sitecoreApiHost + '/sitecore/api/jss/dictionary/' + _config2.default.jssAppName + '/{{lng}}?sc_apikey=' + _config2.default.sitecoreApiKey;

      options.backend = {
        loadPath: dictionaryServicePath,
        parse: function parse(data) {
          var parsedData = JSON.parse(data);
          if (parsedData.phrases) {
            return parsedData.phrases;
          }
          return parsedData;
        }
      };

      _i18next2.default.use(_i18nextFetchBackend2.default).use(_reactI18next.reactI18nextModule).init(options, function (error) {
        if (error) reject(error);

        resolve();
      });
    }
  });
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(15);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(115);
var isArguments = __webpack_require__(114);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 117 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(1);
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(118));
var shallowEqual = _interopDefault(__webpack_require__(117));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(121);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(124);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var p=__webpack_require__(15),aa=__webpack_require__(39),r=__webpack_require__(1),u=__webpack_require__(37),w=__webpack_require__(38),ba=__webpack_require__(125),ca=__webpack_require__(123),da=__webpack_require__(35);
function x(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}
var y="function"===typeof Symbol&&Symbol.for,ea=y?Symbol.for("react.portal"):60106,z=y?Symbol.for("react.fragment"):60107,fa=y?Symbol.for("react.strict_mode"):60108,ha=y?Symbol.for("react.profiler"):60114,A=y?Symbol.for("react.provider"):60109,ia=y?Symbol.for("react.context"):60110,ja=y?Symbol.for("react.async_mode"):60111,ka=y?Symbol.for("react.forward_ref"):60112,la=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
C=Object.prototype.hasOwnProperty,E={},F={};function G(a){if(C.call(F,a))return!0;if(C.call(E,a))return!1;if(la.test(a))return F[a]=!0;E[a]=!0;return!1}function ma(a,b,d,c){if(null!==d&&0===d.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(c)return!1;if(null!==d)return!d.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,d,c){if(null===b||"undefined"===typeof b||ma(a,b,d,c))return!0;if(c)return!1;if(null!==d)switch(d.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function H(a,b,d,c,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=c;this.attributeNamespace=g;this.mustUseProperty=d;this.propertyName=a;this.type=b}var I={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){I[a]=new H(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];I[b]=new H(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){I[a]=new H(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","preserveAlpha"].forEach(function(a){I[a]=new H(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){I[a]=new H(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){I[a]=new H(a,3,!0,a.toLowerCase(),null)});
["capture","download"].forEach(function(a){I[a]=new H(a,4,!1,a.toLowerCase(),null)});["cols","rows","size","span"].forEach(function(a){I[a]=new H(a,6,!1,a.toLowerCase(),null)});["rowSpan","start"].forEach(function(a){I[a]=new H(a,5,!1,a.toLowerCase(),null)});var J=/[\-:]([a-z])/g;function K(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(J,
K);I[b]=new H(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(J,K);I[b]=new H(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(J,K);I[b]=new H(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});I.tabIndex=new H("tabIndex",1,!1,"tabindex",null);var oa=/["'&<>]/;
function L(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=oa.exec(a);if(b){var d="",c,g=0;for(c=b.index;c<a.length;c++){switch(a.charCodeAt(c)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}g!==c&&(d+=a.substring(g,c));g=c+1;d+=b}a=g!==c?d+a.substring(g,c):d}return a}var M={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function N(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var O={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pa=p({menuitem:!0},O),P={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,
fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qa=["Webkit","ms","Moz","O"];Object.keys(P).forEach(function(a){qa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);P[b]=P[a]})});var Q=r.Children.toArray,R=u.thatReturns("");u.thatReturns("");var ra={listing:!0,pre:!0,textarea:!0};
function S(a){return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}var sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},ta=ca(function(a){return ba(a)});function ua(a){var b="";r.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}function va(a,b){if(a=a.contextTypes){var d={},c;for(c in a)d[c]=b[c];b=d}else b=w;return b}
var wa=Object.prototype.hasOwnProperty,xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function U(a,b){void 0===a&&x("152",S(b)||"Component")}
function ya(a,b){function d(c,g){var d=va(g,b),f=[],k=!1,h={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===f)return null},enqueueReplaceState:function(a,b){k=!0;f=[b]},enqueueSetState:function(a,b){if(null===f)return null;f.push(b)}},e=void 0;if(g.prototype&&g.prototype.isReactComponent){if(e=new g(c.props,d,h),"function"===typeof g.getDerivedStateFromProps){var v=g.getDerivedStateFromProps.call(null,c.props,e.state);null!=v&&(e.state=p({},e.state,v))}}else if(e=g(c.props,
d,h),null==e||null==e.render){a=e;U(a,g);return}e.props=c.props;e.context=d;e.updater=h;h=e.state;void 0===h&&(e.state=h=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),f.length){h=f;var t=k;f=null;k=!1;if(t&&
1===h.length)e.state=h[0];else{v=t?h[0]:e.state;var m=!0;for(t=t?1:0;t<h.length;t++){var n=h[t];n="function"===typeof n?n.call(e,v,c.props,d):n;null!=n&&(m?(m=!1,v=p({},v,n)):p(v,n))}e.state=v}}else f=null;a=e.render();U(a,g);c=void 0;if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){c=e.getChildContext();for(var q in c)q in d?void 0:x("108",S(g)||"Unknown",q)}c&&(b=p({},b,c))}for(;r.isValidElement(a);){var c=a,g=c.type;if("function"!==typeof g)break;d(c,g)}return{child:a,
context:b}}
var V=function(){function a(b,d){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");r.isValidElement(b)?b.type!==z?b=[b]:(b=b.props.children,b=r.isValidElement(b)?[b]:Q(b)):b=Q(b);this.stack=[{type:null,domNamespace:M.html,children:b,childIndex:0,context:w,footer:""}];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=d;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[]}a.prototype.pushProvider=function(b){var a=
++this.contextIndex,c=b.type._context,g=c._currentValue;this.contextStack[a]=c;this.contextValueStack[a]=g;c._currentValue=b.props.value};a.prototype.popProvider=function(){var a=this.contextIndex,d=this.contextStack[a],c=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;d._currentValue=c};a.prototype.read=function(a){if(this.exhausted)return null;for(var b="";b.length<a;){if(0===this.stack.length){this.exhausted=!0;break}var c=this.stack[this.stack.length-
1];if(c.childIndex>=c.children.length){var g=c.footer;b+=g;""!==g&&(this.previousWasTextNode=!1);this.stack.pop();"select"===c.type?this.currentSelectValue=null:null!=c.type&&null!=c.type.type&&c.type.type.$$typeof===A&&this.popProvider(c.type)}else g=c.children[c.childIndex++],b+=this.render(g,c.context,c.domNamespace)}return b};a.prototype.render=function(a,d,c){if("string"===typeof a||"number"===typeof a){c=""+a;if(""===c)return"";if(this.makeStaticMarkup)return L(c);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+
L(c);this.previousWasTextNode=!0;return L(c)}d=ya(a,d);a=d.child;d=d.context;if(null===a||!1===a)return"";if(!r.isValidElement(a)){if(null!=a&&null!=a.$$typeof){var b=a.$$typeof;b===ea?x("257"):void 0;x("258",b.toString())}a=Q(a);this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""});return""}b=a.type;if("string"===typeof b)return this.renderDOM(a,d,c);switch(b){case fa:case ja:case ha:case z:return a=Q(a.props.children),this.stack.push({type:null,domNamespace:c,children:a,
childIndex:0,context:d,footer:""}),""}if("object"===typeof b&&null!==b)switch(b.$$typeof){case ka:return a=Q(b.render(a.props,a.ref)),this.stack.push({type:null,domNamespace:c,children:a,childIndex:0,context:d,footer:""}),"";case A:return b=Q(a.props.children),c={type:a,domNamespace:c,children:b,childIndex:0,context:d,footer:""},this.pushProvider(a),this.stack.push(c),"";case ia:return b=Q(a.props.children(a.type._currentValue)),this.stack.push({type:a,domNamespace:c,children:b,childIndex:0,context:d,
footer:""}),""}x("130",null==b?b:typeof b,"")};a.prototype.renderDOM=function(a,d,c){var b=a.type.toLowerCase();c===M.html&&N(b);T.hasOwnProperty(b)||(sa.test(b)?void 0:x("65",b),T[b]=!0);var f=a.props;if("input"===b)f=p({type:void 0},f,{defaultChecked:void 0,defaultValue:void 0,value:null!=f.value?f.value:f.defaultValue,checked:null!=f.checked?f.checked:f.defaultChecked});else if("textarea"===b){var k=f.value;if(null==k){k=f.defaultValue;var l=f.children;null!=l&&(null!=k?x("92"):void 0,Array.isArray(l)&&
(1>=l.length?void 0:x("93"),l=l[0]),k=""+l);null==k&&(k="")}f=p({},f,{value:void 0,children:""+k})}else if("select"===b)this.currentSelectValue=null!=f.value?f.value:f.defaultValue,f=p({},f,{value:void 0});else if("option"===b){l=this.currentSelectValue;var D=ua(f.children);if(null!=l){var B=null!=f.value?f.value+"":D;k=!1;if(Array.isArray(l))for(var h=0;h<l.length;h++){if(""+l[h]===B){k=!0;break}}else k=""+l===B;f=p({selected:void 0,children:void 0},f,{selected:k,children:D})}}if(k=f)pa[b]&&(null!=
k.children||null!=k.dangerouslySetInnerHTML?x("137",b,R()):void 0),null!=k.dangerouslySetInnerHTML&&(null!=k.children?x("60"):void 0,"object"===typeof k.dangerouslySetInnerHTML&&"__html"in k.dangerouslySetInnerHTML?void 0:x("61")),null!=k.style&&"object"!==typeof k.style?x("62",R()):void 0;k=f;l=this.makeStaticMarkup;D=1===this.stack.length;B="<"+a.type;for(q in k)if(wa.call(k,q)){var e=k[q];if(null!=e){if("style"===q){h=void 0;var v="",t="";for(h in e)if(e.hasOwnProperty(h)){var m=0===h.indexOf("--"),
n=e[h];null!=n&&(v+=t+ta(h)+":",t=h,m=null==n||"boolean"===typeof n||""===n?"":m||"number"!==typeof n||0===n||P.hasOwnProperty(t)&&P[t]?(""+n).trim():n+"px",v+=m,t=";")}e=v||null}h=null;b:if(m=b,n=k,-1===m.indexOf("-"))m="string"===typeof n.is;else switch(m){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":m=!1;break b;default:m=!0}if(m)xa.hasOwnProperty(q)||(h=q,h=G(h)&&null!=e?
h+"="+('"'+L(e)+'"'):"");else{m=q;h=e;e=I.hasOwnProperty(m)?I[m]:null;if(n="style"!==m)n=null!==e?0===e.type:!(2<m.length)||"o"!==m[0]&&"O"!==m[0]||"n"!==m[1]&&"N"!==m[1]?!1:!0;n||na(m,h,e,!1)?h="":null!==e?(m=e.attributeName,e=e.type,h=3===e||4===e&&!0===h?m+'=""':m+"="+('"'+L(h)+'"')):h=G(m)?m+"="+('"'+L(h)+'"'):""}h&&(B+=" "+h)}}l||D&&(B+=' data-reactroot=""');var q=B;k="";O.hasOwnProperty(b)?q+="/>":(q+=">",k="</"+a.type+">");a:{l=f.dangerouslySetInnerHTML;if(null!=l){if(null!=l.__html){l=l.__html;
break a}}else if(l=f.children,"string"===typeof l||"number"===typeof l){l=L(l);break a}l=null}null!=l?(f=[],ra[b]&&"\n"===l.charAt(0)&&(q+="\n"),q+=l):f=Q(f.children);a=a.type;c=null==c||"http://www.w3.org/1999/xhtml"===c?N(a):"http://www.w3.org/2000/svg"===c&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":c;this.stack.push({domNamespace:c,type:b,children:f,childIndex:0,context:d,footer:k});this.previousWasTextNode=!1;return q};return a}();
function za(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}});b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}
var W=function(a){function b(d,c){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");var g=a.call(this,{});if(!this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");g=!g||"object"!==typeof g&&"function"!==typeof g?this:g;g.partialRenderer=new V(d,c);return g}za(b,a);b.prototype._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(c){this.emit("error",c)}};return b}(da.Readable),X={renderToString:function(a){return(new V(a,
!1)).read(Infinity)},renderToStaticMarkup:function(a){return(new V(a,!0)).read(Infinity)},renderToNodeStream:function(a){return new W(a,!1)},renderToStaticNodeStream:function(a){return new W(a,!0)},version:"16.4.2"},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(126);
} else {}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(15),n=__webpack_require__(39),p=__webpack_require__(38),q=__webpack_require__(37),r="function"===typeof Symbol&&Symbol.for,t=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,v=r?Symbol.for("react.fragment"):60107,w=r?Symbol.for("react.strict_mode"):60108,x=r?Symbol.for("react.profiler"):60114,y=r?Symbol.for("react.provider"):60109,z=r?Symbol.for("react.context"):60110,A=r?Symbol.for("react.async_mode"):60111,B=
r?Symbol.for("react.forward_ref"):60112;r&&Symbol.for("react.timeout");var C="function"===typeof Symbol&&Symbol.iterator;function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);n(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}
var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function F(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}
G.prototype=F.prototype;function H(a,b,e){this.props=a;this.context=b;this.refs=p;this.updater=e||E}var I=H.prototype=new G;I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:t,type:a,key:g,ref:h,props:d,_owner:J.current}}
function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===t}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,e,c){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case t:case u:g=!0}}if(g)return e(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+T(d,h);g+=S(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),
h=0;!(d=a.next()).done;)d=d.value,f=b+T(d,h++),g+=S(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function U(a,b){a.func.call(a.context,b,a.count++)}
function V(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,q.thatReturnsArgument):null!=a&&(N(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e,a={$$typeof:t,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(O,"$&/")+"/");b=Q(b,g,c,d);null==a||S(a,"",V,b);R(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=Q(null,null,b,e);null==a||S(a,"",U,b);R(b)},count:function(a){return null==a?0:S(a,"",q.thatReturnsNull,null)},toArray:function(a){var b=[];W(a,b,null,q.thatReturnsArgument);return b},only:function(a){N(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:z,
_calculateChangedBits:b,_defaultValue:a,_currentValue:a,_currentValue2:a,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null};a.Provider={$$typeof:y,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:B,render:a}},Fragment:v,StrictMode:w,unstable_AsyncMode:A,unstable_Profiler:x,createElement:M,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==
b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:t,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,
assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default?Z.default:Z;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/



// Generate an internal UID to make the regexp pattern harder to guess.
var UID                 = Math.floor(Math.random() * 0x10000000000).toString(16);
var PLACE_HOLDER_REGEXP = new RegExp('"@__(F|R|D)-' + UID + '-(\\d+)__@"', 'g');

var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
var UNSAFE_CHARS_REGEXP   = /[<>\/\u2028\u2029]/g;

// Mapping of unsafe HTML and invalid JavaScript line terminator chars to their
// Unicode char counterparts which are safe to use in JavaScript strings.
var ESCAPED_CHARS = {
    '<'     : '\\u003C',
    '>'     : '\\u003E',
    '/'     : '\\u002F',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};

function escapeUnsafeChars(unsafeChar) {
    return ESCAPED_CHARS[unsafeChar];
}

module.exports = function serialize(obj, options) {
    options || (options = {});

    // Backwards-compatibility for `space` as the second argument.
    if (typeof options === 'number' || typeof options === 'string') {
        options = {space: options};
    }

    var functions = [];
    var regexps   = [];
    var dates     = [];

    // Returns placeholders for functions and regexps (identified by index)
    // which are later replaced by their string representation.
    function replacer(key, value) {
        if (!value) {
            return value;
        }

        // If the value is an object w/ a toJSON method, toJSON is called before
        // the replacer runs, so we use this[key] to get the non-toJSONed value.
        var origValue = this[key];
        var type = typeof origValue;

        if (type === 'object') {
            if(origValue instanceof RegExp) {
                return '@__R-' + UID + '-' + (regexps.push(origValue) - 1) + '__@';
            }

            if(origValue instanceof Date) {
                return '@__D-' + UID + '-' + (dates.push(origValue) - 1) + '__@';
            }
        }

        if (type === 'function') {
            return '@__F-' + UID + '-' + (functions.push(origValue) - 1) + '__@';
        }

        return value;
    }

    var str;

    // Creates a JSON string representation of the value.
    // NOTE: Node 0.12 goes into slow mode with extra JSON.stringify() args.
    if (options.isJSON && !options.space) {
        str = JSON.stringify(obj);
    } else {
        str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
    }

    // Protects against `JSON.stringify()` returning `undefined`, by serializing
    // to the literal string: "undefined".
    if (typeof str !== 'string') {
        return String(str);
    }

    // Replace unsafe HTML and invalid JavaScript line terminator chars with
    // their safe Unicode char counterpart. This _must_ happen before the
    // regexps and functions are serialized and added back to the string.
    if (options.unsafe !== true) {
        str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
    }

    if (functions.length === 0 && regexps.length === 0 && dates.length === 0) {
        return str;
    }

    // Replaces all occurrences of function, regexp and date placeholders in the
    // JSON string with their string representations. If the original value can
    // not be found, then `undefined` is used.
    return str.replace(PLACE_HOLDER_REGEXP, function (match, type, valueIndex) {
        if (type === 'D') {
            return "new Date(\"" + dates[valueIndex].toISOString() + "\")";
        }

        if (type === 'R') {
            return regexps[valueIndex].toString();
        }

        var fn           = functions[valueIndex];
        var serializedFn = fn.toString();

        if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
            throw new TypeError('Serializing native function: ' + fn.name);
        }

        return serializedFn;
    });
}


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderView = renderView;
exports.parseRouteUrl = parseRouteUrl;

var _serializeJavascript = __webpack_require__(129);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(36);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(9);

var _reactHelmet = __webpack_require__(14);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _config = __webpack_require__(13);

var _config2 = _interopRequireDefault(_config);

var _i18n = __webpack_require__(112);

var _i18n2 = _interopRequireDefault(_i18n);

var _AppRoot = __webpack_require__(102);

var _AppRoot2 = _interopRequireDefault(_AppRoot);

var _RouteHandler = __webpack_require__(18);

var _index = __webpack_require__(41);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main entry point to the application when run via Server-Side Rendering,
 * either in Integrated Mode, or with a Node proxy host like the node-express-ssr sample.
 * This function will be invoked by the server to return the rendered HTML.
 * @param {Function} callback Function to call when rendering is complete. Signature callback(error, successData).
 * @param {string} path Current route path being rendered
 * @param {string} data JSON Layout service data for the rendering from Sitecore
 * @param {string} viewBag JSON view bag data from Sitecore (extensible context stuff)
 */
function renderView(callback, path, data, viewBag) {
  try {
    var state = parseServerData(data, viewBag);

    (0, _RouteHandler.setServerSideRenderingState)(state);

    /*
      App Rendering
    */
    initializei18n(state).then(function () {
      return _server2.default.renderToString(_react2.default.createElement(_AppRoot2.default, { path: path, Router: _reactRouterDom.StaticRouter }));
    }).then(function (renderedAppHtml) {
      var helmet = _reactHelmet2.default.renderStatic();

      // We remove the viewBag from the server-side state before sending it back to the client.
      // This saves bandwidth, because by default the viewBag contains the translation dictionary,
      // which is better cached as a separate client HTTP request than on every page, and HTTP context
      // information that is not meaningful to the client-side rendering.
      // If you wish to place items in the viewbag that are needed by client-side rendering, this
      // can be removed - but still delete state.viewBag.dictionary, at least.
      delete state.viewBag;

      // Inject the rendered app into the index.html template (built from /public/index.html)
      // IMPORTANT: use serialize-javascript or similar instead of JSON.stringify() to emit initial state,
      // or else you're vulnerable to XSS.
      var html = _index2.default
      // write the React app
      .replace('<div id="root"></div>', '<div id="root">' + renderedAppHtml + '</div>')
      // write the string version of our state
      .replace('__JSS_STATE__=null', '__JSS_STATE__=' + (0, _serializeJavascript2.default)(state))
      // render <head> contents from react-helmet
      .replace('<head>', '<head>' + helmet.title.toString() + helmet.meta.toString() + helmet.link.toString());

      callback(null, { html: html });
    }).catch(function (error) {
      return callback(error, null);
    });
  } catch (err) {
    // need to ensure the callback is always invoked no matter what
    // or else SSR will hang
    callback(err, null);
  }
}

/**
 * Parses an incoming url to match against the route table. This function is implicitly used
 * by node-express-ssr when rendering the site in headless mode. It enables rewriting the incoming path,
 * say '/en-US/hello', to the path and language to pass to Layout Service (a Sitecore item path), say
 * { sitecoreRoute: '/hello', lang: 'en-US' }.
 * This function is _not_ used in integrated mode, as Sitecore's built in route parsing is used.
 * If no URL transformations are required (i.e. single language site), then this function can be removed.
 * @param {string} url The incoming URL to the proxy server
 * @returns { sitecoreRoute?: string, lang?: string }
 */
function parseRouteUrl(url) {
  if (!url) {
    return null;
  }

  var result = null;

  // use react-router-dom to find the route matching the incoming URL
  // then return its match params
  _AppRoot.routePatterns.forEach(function (pattern) {
    var match = (0, _reactRouterDom.matchPath)(url, { pattern: pattern });
    if (match && match.params) {
      result = match.params;
    }
  });

  return result;
}

function parseServerData(data, viewBag) {
  var parsedData = data instanceof Object ? data : JSON.parse(data);
  var parsedViewBag = viewBag instanceof Object ? viewBag : JSON.parse(viewBag);

  return {
    viewBag: parsedViewBag,
    sitecore: parsedData && parsedData.sitecore
  };
}

function initializei18n(state) {
  // don't init i18n for not found routes
  if (!state || !state.sitecore || !state.sitecore.context) return Promise.resolve();

  return (0, _i18n2.default)(state.sitecore.context.language, state.viewBag.dictionary);
}

/***/ })
/******/ ])));
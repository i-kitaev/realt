(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReAlt"] = factory();
	else
		root["ReAlt"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createReducer = exports.createActions = undefined;

	var _createActions = __webpack_require__(1);

	var _createActions2 = _interopRequireDefault(_createActions);

	var _createReducer = __webpack_require__(9);

	var _createReducer2 = _interopRequireDefault(_createReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Actions
	exports.createActions = _createActions2.default;
	exports.createReducer = _createReducer2.default;

	// Reducers

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createActions;

	var _createInstance = __webpack_require__(2);

	var _createInstance2 = _interopRequireDefault(_createInstance);

	var _makeActionCreator = __webpack_require__(7);

	var _makeActionCreator2 = _interopRequireDefault(_makeActionCreator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Create Redux actions from Class or object
	 * @param {Class} Actions
	 * @return {Object} Action creators
	 */
	function createActions(Actions) {
	  var actions = (0, _createInstance2.default)(Actions);

	  return Object.keys(actions).reduce(function (result, name) {
	    return _extends({}, result, _defineProperty({}, name, (0, _makeActionCreator2.default)(name, actions[name])));
	  }, {});
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createInstance;

	var _identity = __webpack_require__(3);

	var _identity2 = _interopRequireDefault(_identity);

	var _isFunction = __webpack_require__(4);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _getInternalMethods = __webpack_require__(6);

	var _getInternalMethods2 = _interopRequireDefault(_getInternalMethods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function createInstance(Actions) {
	  if (!(0, _isFunction2.default)(Actions)) return Actions;

	  var actions = (0, _getInternalMethods2.default)(Actions);

	  var ActionsGenerator = function (_Actions) {
	    _inherits(ActionsGenerator, _Actions);

	    function ActionsGenerator() {
	      _classCallCheck(this, ActionsGenerator);

	      return _possibleConstructorReturn(this, (ActionsGenerator.__proto__ || Object.getPrototypeOf(ActionsGenerator)).apply(this, arguments));
	    }

	    _createClass(ActionsGenerator, [{
	      key: 'generate',

	      /**
	       * Creates actions by their names
	       * @param {...string} actionNames
	       */
	      value: function generate() {
	        for (var _len = arguments.length, actionNames = Array(_len), _key = 0; _key < _len; _key++) {
	          actionNames[_key] = arguments[_key];
	        }

	        actionNames.forEach(function (actionName) {
	          actions[actionName] = _identity2.default;
	        });
	      }
	    }]);

	    return ActionsGenerator;
	  }(Actions);

	  return _extends({}, actions, new ActionsGenerator());
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = function (Class) {
		return Object.getOwnPropertyNames(Class.prototype).reduce(function (object, methodName) {
			return methodName !== 'constructor' ? _extends({}, object, _defineProperty({}, methodName, Class.prototype[methodName])) : object;
		}, {});
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = makeAction;

	var _identity = __webpack_require__(3);

	var _identity2 = _interopRequireDefault(_identity);

	var _isFunction = __webpack_require__(4);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _toConstant = __webpack_require__(8);

	var _toConstant2 = _interopRequireDefault(_toConstant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeAction(name, payload) {
	  var type = (0, _toConstant2.default)(name);
	  var finalPayload = (0, _isFunction2.default)(payload) ? payload : _identity2.default;

	  var action = function action() {
	    return {
	      type: type, payload: finalPayload.apply(undefined, arguments)
	    };
	  };

	  action.toString = function () {
	    return type;
	  };

	  return action;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (string) {
		return string.replace(/[a-z]([A-Z])/g, function (i) {
			return i[0] + "_" + i[1].toLowerCase();
		}).toUpperCase();
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createReducer;

	var _reduceReducers = __webpack_require__(10);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	var _createInstance2 = __webpack_require__(11);

	var _createInstance3 = _interopRequireDefault(_createInstance2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Create Redux reducer from Class
	 * @param {Class} Reducer
	 * @return {Function} Reducer
	 */
	function createReducer(Reducer) {
	  var _createInstance = (0, _createInstance3.default)(Reducer);

	  var reducers = _createInstance.reducers;
	  var initialState = _createInstance.initialState;

	  var reducer = _reduceReducers2.default.apply(undefined, _toConsumableArray(reducers));

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	    return reducer(state, action);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createInstance;

	var _makeActionHandler = __webpack_require__(12);

	var _makeActionHandler2 = _interopRequireDefault(_makeActionHandler);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function createInstance(Reducer) {
	  var reducers = [];

	  var ReducerGenerator = function (_Reducer) {
	    _inherits(ReducerGenerator, _Reducer);

	    function ReducerGenerator() {
	      _classCallCheck(this, ReducerGenerator);

	      return _possibleConstructorReturn(this, (ReducerGenerator.__proto__ || Object.getPrototypeOf(ReducerGenerator)).apply(this, arguments));
	    }

	    _createClass(ReducerGenerator, [{
	      key: 'bindHandler',

	      /**
	       * Attaches reducer's handler function to specific action type
	       * @param {function} reducerHandler
	       * @param {object} actionCreator
	       */
	      value: function bindHandler(reducerHandler, actionCreator) {
	        reducers.push((0, _makeActionHandler2.default)(reducerHandler, actionCreator, this.initialState));
	      }
	    }]);

	    return ReducerGenerator;
	  }(Reducer);

	  var reducer = new ReducerGenerator();

	  return { reducers: reducers, initialState: reducer.initialState };
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = makeActionHandler;
	function makeActionHandler(reducerHandler, actionCreator, initialState) {
	  var actionCreatorType = actionCreator.toString();

	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	    return actionCreatorType === action.type ? reducerHandler(state, action.payload) : state;
	  };
	}

/***/ }
/******/ ])
});
;
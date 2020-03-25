/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"es-es5-example~._s": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/Users/lamho/Desktop/前端代码/Ncnbb/omg-rc-cli/example/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/es-es5-example/js/es-es5-example.js","react-runtime~..","vendors~es-es5-example~.."]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/es-es5-example/js/es-es5-example.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var root_tool_console__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(\"./tool/console.js\");\n/* harmony import */ var root_tool_console__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(root_tool_console__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _Object$entries2;\n\n\nvar THIS_IS_CONST = 123;\nvar this_is_let = 123;\n\nvar say = function say() {\n  console.log('hi, i\\'m omg-cli');\n};\n\nsay();\n\nvar Circle = function Circle() {\n  Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, Circle);\n};\n\nfunction timeout(ms) {\n  return new _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {\n    _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default()(resolve, ms, 'done');\n  });\n}\n\ntimeout(100).then(function (value) {\n  console.log(value);\n});\n\nvar count = function count() {\n  return new _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {\n    _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default()(function () {\n      reject('promise故意抛出异常');\n    }, 1000);\n  });\n};\n\nvar list = function list() {\n  return new _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_7___default.a(function (resolve, reject) {\n    _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_6___default()(function () {\n      resolve([1, 2, 3]);\n    }, 1000);\n  });\n};\n\nvar getList = /*#__PURE__*/function () {\n  var _ref = Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__[\"default\"])( /*#__PURE__*/_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {\n    var c, l;\n    return _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return count();\n\n          case 2:\n            c = _context.sent;\n            console.log('async'); //此段代码并没有执行\n\n            _context.next = 6;\n            return list();\n\n          case 6:\n            l = _context.sent;\n            return _context.abrupt(\"return\", {\n              count: c,\n              list: l\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getList() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nconsole.time('start');\ngetList().then(function (res) {\n  console.log(res);\n}).catch(function (err) {\n  console.timeEnd('start');\n  console.log(err);\n});\nvar entry = {\n  a: 1\n};\n\nvar getEntry = _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_3___default()((_Object$entries2 = {}, Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_Object$entries2, _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_2___default()(), 1), Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_Object$entries2, \"two\", 2), _Object$entries2));\n\nvar getAssign = _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, entry);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXMtZXM1LWV4YW1wbGUvanMvZXMtZXM1LWV4YW1wbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXMtZXM1LWV4YW1wbGUvanMvZXMtZXM1LWV4YW1wbGUuanM/YTNkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX09iamVjdCRhc3NpZ24gZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9hc3NpZ25cIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX1N5bWJvbCBmcm9tIFwiL1VzZXJzL2xhbWhvL0Rlc2t0b3AvXFx1NTI0RFxcdTdBRUZcXHU0RUUzXFx1NzgwMS9OY25iYi9vbWctcmMtY2xpL2V4YW1wbGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvc3ltYm9sXCI7XG5pbXBvcnQgX09iamVjdCRlbnRyaWVzIGZyb20gXCIvVXNlcnMvbGFtaG8vRGVza3RvcC9cXHU1MjREXFx1N0FFRlxcdTRFRTNcXHU3ODAxL05jbmJiL29tZy1yYy1jbGkvZXhhbXBsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9vYmplY3QvZW50cmllc1wiO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL3JlZ2VuZXJhdG9yXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCBfc2V0VGltZW91dCBmcm9tIFwiL1VzZXJzL2xhbWhvL0Rlc2t0b3AvXFx1NTI0RFxcdTdBRUZcXHU0RUUzXFx1NzgwMS9OY25iYi9vbWctcmMtY2xpL2V4YW1wbGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvc2V0LXRpbWVvdXRcIjtcbmltcG9ydCBfUHJvbWlzZSBmcm9tIFwiL1VzZXJzL2xhbWhvL0Rlc2t0b3AvXFx1NTI0RFxcdTdBRUZcXHU0RUUzXFx1NzgwMS9OY25iYi9vbWctcmMtY2xpL2V4YW1wbGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvcHJvbWlzZVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiL1VzZXJzL2xhbWhvL0Rlc2t0b3AvXFx1NTI0RFxcdTdBRUZcXHU0RUUzXFx1NzgwMS9OY25iYi9vbWctcmMtY2xpL2V4YW1wbGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcblxudmFyIF9PYmplY3QkZW50cmllczI7XG5cbmltcG9ydCBjb25zb2xlMiBmcm9tICdyb290L3Rvb2wvY29uc29sZSc7XG52YXIgVEhJU19JU19DT05TVCA9IDEyMztcbnZhciB0aGlzX2lzX2xldCA9IDEyMztcblxudmFyIHNheSA9IGZ1bmN0aW9uIHNheSgpIHtcbiAgY29uc29sZS5sb2coJ2hpLCBpXFwnbSBvbWctY2xpJyk7XG59O1xuXG5zYXkoKTtcblxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZSgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENpcmNsZSk7XG59O1xuXG5mdW5jdGlvbiB0aW1lb3V0KG1zKSB7XG4gIHJldHVybiBuZXcgX1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIF9zZXRUaW1lb3V0KHJlc29sdmUsIG1zLCAnZG9uZScpO1xuICB9KTtcbn1cblxudGltZW91dCgxMDApLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGNvbnNvbGUubG9nKHZhbHVlKTtcbn0pO1xuXG52YXIgY291bnQgPSBmdW5jdGlvbiBjb3VudCgpIHtcbiAgcmV0dXJuIG5ldyBfUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgX3NldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmVqZWN0KCdwcm9taXNl5pWF5oSP5oqb5Ye65byC5bi4Jyk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufTtcblxudmFyIGxpc3QgPSBmdW5jdGlvbiBsaXN0KCkge1xuICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBfc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKFsxLCAyLCAzXSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xufTtcblxudmFyIGdldExpc3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgdmFyIGMsIGw7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuIGNvdW50KCk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhc3luYycpOyAvL+atpOauteS7o+eggeW5tuayoeacieaJp+ihjFxuXG4gICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgIHJldHVybiBsaXN0KCk7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBsID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBjb3VudDogYyxcbiAgICAgICAgICAgICAgbGlzdDogbFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGdldExpc3QoKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuY29uc29sZS50aW1lKCdzdGFydCcpO1xuZ2V0TGlzdCgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICBjb25zb2xlLmxvZyhyZXMpO1xufSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICBjb25zb2xlLnRpbWVFbmQoJ3N0YXJ0Jyk7XG4gIGNvbnNvbGUubG9nKGVycik7XG59KTtcbnZhciBlbnRyeSA9IHtcbiAgYTogMVxufTtcblxudmFyIGdldEVudHJ5ID0gX09iamVjdCRlbnRyaWVzKChfT2JqZWN0JGVudHJpZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfT2JqZWN0JGVudHJpZXMyLCBfU3ltYm9sKCksIDEpLCBfZGVmaW5lUHJvcGVydHkoX09iamVjdCRlbnRyaWVzMiwgXCJ0d29cIiwgMiksIF9PYmplY3QkZW50cmllczIpKTtcblxudmFyIGdldEFzc2lnbiA9IF9PYmplY3QkYXNzaWduKHt9LCBlbnRyeSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/es-es5-example/js/es-es5-example.js\n");

/***/ }),

/***/ "./tool/console.js":
/***/ (function(module, exports) {

eval("console.log('123123');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90b29sL2NvbnNvbGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90b29sL2NvbnNvbGUuanM/NWQxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnMTIzMTIzJyk7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./tool/console.js\n");

/***/ })

/******/ });
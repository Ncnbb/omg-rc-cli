/******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tree-shaking/js/tree-shaking.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzPzlmMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\n");

/***/ }),

/***/ "./src/tree-shaking/js/a.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"post\", function() { return post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AAA\", function() { return AAA; });\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n\nfunction post() {\n  console.log('post');\n}\nfunction get() {\n  console.log('get');\n}\nvar AAA = function AAA() {\n  Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AAA);\n\n  this.a = '123123';\n};\n\nArray.prototype.aaa = function () {\n  console.log('fuck');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS1zaGFraW5nL2pzL2EuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS1zaGFraW5nL2pzL2EuanM/ZGExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCIvVXNlcnMvbGFtaG8vRGVza3RvcC9cXHU1MjREXFx1N0FFRlxcdTRFRTNcXHU3ODAxL05jbmJiL29tZy1yYy1jbGkvZXhhbXBsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoKSB7XG4gIGNvbnNvbGUubG9nKCdwb3N0Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0KCkge1xuICBjb25zb2xlLmxvZygnZ2V0Jyk7XG59XG5leHBvcnQgdmFyIEFBQSA9IGZ1bmN0aW9uIEFBQSgpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFBQSk7XG5cbiAgdGhpcy5hID0gJzEyMzEyMyc7XG59O1xuXG5BcnJheS5wcm90b3R5cGUuYWFhID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnZnVjaycpO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tree-shaking/js/a.js\n");

/***/ }),

/***/ "./src/tree-shaking/js/b.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AAA; });\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n\n\nvar AAA = function AAA() {\n  Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AAA);\n\n  this.a = '123123';\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS1zaGFraW5nL2pzL2IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHJlZS1zaGFraW5nL2pzL2IuanM/MjUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCIvVXNlcnMvbGFtaG8vRGVza3RvcC9cXHU1MjREXFx1N0FFRlxcdTRFRTNcXHU3ODAxL05jbmJiL29tZy1yYy1jbGkvZXhhbXBsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuXG52YXIgQUFBID0gZnVuY3Rpb24gQUFBKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQUFBKTtcblxuICB0aGlzLmEgPSAnMTIzMTIzJztcbn07XG5cbmV4cG9ydCB7IEFBQSBhcyBkZWZhdWx0IH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tree-shaking/js/b.js\n");

/***/ }),

/***/ "./src/tree-shaking/js/tree-shaking.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./src/tree-shaking/js/a.js\");\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./src/tree-shaking/js/b.js\");\n\n\n\nvar foo = function foo() {};\n\nvar baz = function baz() {\n  var x = 1;\n  console.log(x);\n\n  function aaa(param) {\n    return 5;\n  }\n\n  Object(_a__WEBPACK_IMPORTED_MODULE_0__[\"post\"])();\n  return x;\n  var c = x + 1;\n  return c;\n};\n\nvar aa = new _b__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconsole.log(aa);\nbaz();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS1zaGFraW5nL2pzL3RyZWUtc2hha2luZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cmVlLXNoYWtpbmcvanMvdHJlZS1zaGFraW5nLmpzP2U5OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4vYSc7XG5pbXBvcnQgQUFBQ2xhc3MgZnJvbSAnLi9iJztcblxudmFyIGZvbyA9IGZ1bmN0aW9uIGZvbygpIHt9O1xuXG52YXIgYmF6ID0gZnVuY3Rpb24gYmF6KCkge1xuICB2YXIgeCA9IDE7XG4gIGNvbnNvbGUubG9nKHgpO1xuXG4gIGZ1bmN0aW9uIGFhYShwYXJhbSkge1xuICAgIHJldHVybiA1O1xuICB9XG5cbiAgcG9zdCgpO1xuICByZXR1cm4geDtcbiAgdmFyIGMgPSB4ICsgMTtcbiAgcmV0dXJuIGM7XG59O1xuXG52YXIgYWEgPSBuZXcgQUFBQ2xhc3MoKTtcbmNvbnNvbGUubG9nKGFhKTtcbmJheigpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tree-shaking/js/tree-shaking.js\n");

/***/ })

/******/ });
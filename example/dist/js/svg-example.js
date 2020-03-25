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
/******/ 		"svg-example": 0
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
/******/ 	deferredModules.push(["./src/svg-example/js/svg-example.jsx","react-runtime","vender~svg-example"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/svg-example/js/svg-example.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/createSuper.js\");\n/* harmony import */ var _Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"./node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"./node_modules/react/umd/react.development.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"./node_modules/react-dom/umd/react-dom.development.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"./src/svg-example/style/index.scss\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _svg_edit_svg_sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(\"./src/svg-example/svg/edit.svg?__sprite\");\n/* harmony import */ var _svg_ic_free_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(\"./src/svg-example/svg/ic_free.svg\");\n\n\n\n\nvar _jsxFileName = \"/Users/lamho/Desktop/\\u524D\\u7AEF\\u4EE3\\u7801/Ncnbb/omg-rc-cli/example/src/svg-example/js/svg-example.jsx\";\n\n\n\n\n\nconsole.log(_svg_edit_svg_sprite__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nconsole.log(_svg_ic_free_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\nvar App = /*#__PURE__*/function (_Component) {\n  Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(App, _Component);\n\n  var _super = Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(App);\n\n  function App() {\n    Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_Users_lamho_Desktop_Ncnbb_omg_rc_cli_example_node_modules_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(App, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 17\n        }\n      }, \"OMG-CLI\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        className: \"inline-svg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 17\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n        className: \"url-svg\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 17\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }\n      }, \"js\\u5F15\\u5165\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"svg\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 17\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"use\", {\n        xlinkHref: \"#\".concat(_svg_edit_svg_sprite__WEBPACK_IMPORTED_MODULE_7__[\"default\"].id),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 22\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_svg_ic_free_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        style: {\n          fill: 'red'\n        },\n        className: \"123\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(App, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }\n}), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWV4YW1wbGUvanMvc3ZnLWV4YW1wbGUuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1leGFtcGxlL2pzL3N2Zy1leGFtcGxlLmpzeD9kYWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCIvVXNlcnMvbGFtaG8vRGVza3RvcC9cXHU1MjREXFx1N0FFRlxcdTRFRTNcXHU3ODAxL05jbmJiL29tZy1yYy1jbGkvZXhhbXBsZS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiL1VzZXJzL2xhbWhvL0Rlc2t0b3AvXFx1NTI0RFxcdTdBRUZcXHU0RUUzXFx1NzgwMS9OY25iYi9vbWctcmMtY2xpL2V4YW1wbGUvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIi9Vc2Vycy9sYW1oby9EZXNrdG9wL1xcdTUyNERcXHU3QUVGXFx1NEVFM1xcdTc4MDEvTmNuYmIvb21nLXJjLWNsaS9leGFtcGxlL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG52YXIgX2pzeEZpbGVOYW1lID0gXCIvVXNlcnMvbGFtaG8vRGVza3RvcC9cXHU1MjREXFx1N0FFRlxcdTRFRTNcXHU3ODAxL05jbmJiL29tZy1yYy1jbGkvZXhhbXBsZS9zcmMvc3ZnLWV4YW1wbGUvanMvc3ZnLWV4YW1wbGUuanN4XCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4uL3N0eWxlL2luZGV4LnNjc3MnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi4vc3ZnL2VkaXQuc3ZnP19fc3ByaXRlJztcbmltcG9ydCBJY29uIGZyb20gJy4uL3N2Zy9pY19mcmVlLnN2Zyc7XG5jb25zb2xlLmxvZyhlZGl0KTtcbmNvbnNvbGUubG9nKEljb24pO1xuXG52YXIgQXBwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBcHAsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXBwKTtcblxuICBmdW5jdGlvbiBBcHAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwcCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXBwLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTIsXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxM1xuICAgICAgICB9XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTMsXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxN1xuICAgICAgICB9XG4gICAgICB9LCBcIk9NRy1DTElcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImlubGluZS1zdmdcIixcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTQsXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxN1xuICAgICAgICB9XG4gICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwidXJsLXN2Z1wiLFxuICAgICAgICBfX3NlbGY6IHRoaXMsXG4gICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiAxNSxcbiAgICAgICAgICBjb2x1bW5OdW1iZXI6IDE3XG4gICAgICAgIH1cbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTcsXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxN1xuICAgICAgICB9XG4gICAgICB9LCBcImpzXFx1NUYxNVxcdTUxNjVcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHtcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTgsXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxN1xuICAgICAgICB9XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVzZVwiLCB7XG4gICAgICAgIHhsaW5rSHJlZjogXCIjXCIuY29uY2F0KGVkaXQuaWQpLFxuICAgICAgICBfX3NlbGY6IHRoaXMsXG4gICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICBsaW5lTnVtYmVyOiAxOCxcbiAgICAgICAgICBjb2x1bW5OdW1iZXI6IDIyXG4gICAgICAgIH1cbiAgICAgIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGZpbGw6ICdyZWQnXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogXCIxMjNcIixcbiAgICAgICAgX19zZWxmOiB0aGlzLFxuICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMTksXG4gICAgICAgICAgY29sdW1uTnVtYmVyOiAxN1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFwcDtcbn0oQ29tcG9uZW50KTtcblxuUmVhY3RET00ucmVuZGVyKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcbiAgX19zZWxmOiB0aGlzLFxuICBfX3NvdXJjZToge1xuICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgbGluZU51bWJlcjogMjYsXG4gICAgY29sdW1uTnVtYmVyOiA1XG4gIH1cbn0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-example/js/svg-example.jsx\n");

/***/ }),

/***/ "./src/svg-example/style/index.scss":
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWV4YW1wbGUvc3R5bGUvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdmctZXhhbXBsZS9zdHlsZS9pbmRleC5zY3NzP2I2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-example/style/index.scss\n");

/***/ }),

/***/ "./src/svg-example/svg/edit.svg?__sprite":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"edit\",\n  \"use\": \"edit-usage\",\n  \"viewBox\": \"0 0 34 32\",\n  \"content\": \"<symbol xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 34 32\\\" id=\\\"edit\\\"><path fill=\\\"#232C36\\\" d=\\\"M28.5 32h-23C3.6 32 2 30.4 2 28.5v-25C2 1.6 3.6 0 5.5 0h15c.8 0 1.5.7 1.5 1.5S21.3 3 20.5 3h-15c-.3 0-.5.2-.5.5v25c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5v-17c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v17c0 1.9-1.6 3.5-3.5 3.5z\\\" /><path fill=\\\"#232C36\\\" d=\\\"M13 20.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l17-17c.6-.6 1.5-.6 2.1 0s.6 1.5 0 2.1l-17 17c-.2.3-.6.4-1 .4z\\\" /></symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWV4YW1wbGUvc3ZnL2VkaXQuc3ZnP19fc3ByaXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1leGFtcGxlL3N2Zy9lZGl0LnN2Zz9lZWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImVkaXRcIixcbiAgXCJ1c2VcIjogXCJlZGl0LXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAzNCAzMlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDM0IDMyXFxcIiBpZD1cXFwiZWRpdFxcXCI+PHBhdGggZmlsbD1cXFwiIzIzMkMzNlxcXCIgZD1cXFwiTTI4LjUgMzJoLTIzQzMuNiAzMiAyIDMwLjQgMiAyOC41di0yNUMyIDEuNiAzLjYgMCA1LjUgMGgxNWMuOCAwIDEuNS43IDEuNSAxLjVTMjEuMyAzIDIwLjUgM2gtMTVjLS4zIDAtLjUuMi0uNS41djI1YzAgLjMuMi41LjUuNWgyM2MuMyAwIC41LS4yLjUtLjV2LTE3YzAtLjguNy0xLjUgMS41LTEuNXMxLjUuNyAxLjUgMS41djE3YzAgMS45LTEuNiAzLjUtMy41IDMuNXpcXFwiIC8+PHBhdGggZmlsbD1cXFwiIzIzMkMzNlxcXCIgZD1cXFwiTTEzIDIwLjVjLS40IDAtLjgtLjEtMS4xLS40LS42LS42LS42LTEuNSAwLTIuMWwxNy0xN2MuNi0uNiAxLjUtLjYgMi4xIDBzLjYgMS41IDAgMi4xbC0xNyAxN2MtLjIuMy0uNi40LTEgLjR6XFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/svg-example/svg/edit.svg?__sprite\n");

/***/ }),

/***/ "./src/svg-example/svg/ic_free.svg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IcFreeIconComponent; });\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./node_modules/react/umd/react.development.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n  \"id\": \"ic_free\",\n  \"use\": \"ic_free-usage\",\n  \"viewBox\": \"0 0 18 18\",\n  \"content\": \"<symbol xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 18 18\\\" id=\\\"ic_free\\\"><path d=\\\"M9.1 5h.4v3H17V5H9.1zm-.2 0H1v3h7.5V5h.4zm1.2-1H17c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-1v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9H1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6.9L4.6.7l.7-.7 3.6 3.6L12.5 0l.7.7L10.1 4zM8.5 9H3v7c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V9H9.5v8h-1V9z\\\" /></symbol>\"\n});\n_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);\nfunction IcFreeIconComponent(props) {\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('svg', props, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('use', {\n    xlinkHref: '#ic_free'\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3ZnLWV4YW1wbGUvc3ZnL2ljX2ZyZWUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N2Zy1leGFtcGxlL3N2Zy9pY19mcmVlLnN2Zz8wYjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImljX2ZyZWVcIixcbiAgXCJ1c2VcIjogXCJpY19mcmVlLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxOCAxOFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDE4IDE4XFxcIiBpZD1cXFwiaWNfZnJlZVxcXCI+PHBhdGggZD1cXFwiTTkuMSA1aC40djNIMTdWNUg5LjF6bS0uMiAwSDF2M2g3LjVWNWguNHptMS4yLTFIMTdjLjYgMCAxIC40IDEgMXYzYzAgLjYtLjQgMS0xIDFoLTF2N2MwIDEuMS0uOSAyLTIgMkg0Yy0xLjEgMC0yLS45LTItMlY5SDFjLS42IDAtMS0uNC0xLTFWNWMwLS42LjQtMSAxLTFoNi45TDQuNi43bC43LS43IDMuNiAzLjZMMTIuNSAwbC43LjdMMTAuMSA0ek04LjUgOUgzdjdjMCAuNi40IDEgMSAxaDEwYy42IDAgMS0uNCAxLTFWOUg5LjV2OGgtMVY5elxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG5zcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY0ZyZWVJY29uQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBwcm9wcywgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywge1xuICAgIHhsaW5rSHJlZjogJyNpY19mcmVlJ1xuICB9KSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/svg-example/svg/ic_free.svg\n");

/***/ })

/******/ });
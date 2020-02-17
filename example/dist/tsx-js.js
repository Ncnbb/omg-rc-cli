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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tsx-js/js/tsx-js.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tsx-js/js/tsx-js.tsx":
/*!**********************************!*\
  !*** ./src/tsx-js/js/tsx-js.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import * as React from \"react\";\n// class MyPortals extends React.Component {\n//   constructor(props: boolean) {\n//     super(props);\n//     this.state = {\n//       open: false,\n//     };\n//   }\n//   public clickHandler = () => {\n//     this.setState({\n//       open: true,\n//     });\n//   }\n//   public clickHandlerClose = () => {\n//     this.setState({\n//       open: false,\n//     });\n//   }\n//   public render() {\n//     const { open } = this.state;\n//     return (\n//       <div>\n//          {open} hello world\n//       </div>\n//     );\n//   }\n// }\n// export default MyPortals;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHN4LWpzL2pzL3RzeC1qcy50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHN4LWpzL2pzL3RzeC1qcy50c3g/OTYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbiBcbi8vIGNsYXNzIE15UG9ydGFscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzOiBib29sZWFuKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7XG4vLyAgICAgICBvcGVuOiBmYWxzZSxcbi8vICAgICB9O1xuLy8gICB9XG4gXG4vLyAgIHB1YmxpYyBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBvcGVuOiB0cnVlLFxuLy8gICAgIH0pO1xuLy8gICB9XG4gXG4vLyAgIHB1YmxpYyBjbGlja0hhbmRsZXJDbG9zZSA9ICgpID0+IHtcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcbi8vICAgICAgIG9wZW46IGZhbHNlLFxuLy8gICAgIH0pO1xuLy8gICB9XG4gXG4vLyAgIHB1YmxpYyByZW5kZXIoKSB7XG4vLyAgICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzLnN0YXRlO1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICAge29wZW59IGhlbGxvIHdvcmxkXG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG4gXG4vLyBleHBvcnQgZGVmYXVsdCBNeVBvcnRhbHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tsx-js/js/tsx-js.tsx\n");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts-js/js/ts-js.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts-js/js/ts-js.ts":
/*!*******************************!*\
  !*** ./src/ts-js/js/ts-js.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Aliagnment {\n    constructor() {\n        this.list = [];\n    }\n    save(data) {\n        this.list.push(data);\n    }\n    check() {\n        return this.list;\n    }\n    get(index) {\n        if (index === 'first') {\n            return this.list.shift();\n        }\n        else if (index === 'last') {\n            return this.list.pop();\n        }\n        else if (this.list[index]) {\n            const result = this.list[index];\n            this.list.splice(index, 1);\n            return result;\n        }\n        return undefined;\n    }\n}\nconst aliagnment = new Aliagnment();\nconsole.log(aliagnment);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMtanMvanMvdHMtanMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdHMtanMvanMvdHMtanMudHM/NmM1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBbGlhZ25tZW50IHtcbiAgICBsaXN0OiBBcnJheTxhbnk+XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICB9XG4gICAgc2F2ZSAoIGRhdGE6IGFueSApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goIGRhdGEgKTtcbiAgICB9XG4gICAgY2hlY2sgKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gICAgfVxuICAgIGdldCAoIGluZGV4OiBhbnkgKTogdm9pZCB7XG4gICAgICAgIGlmICggaW5kZXggPT09ICdmaXJzdCcgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNoaWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIGluZGV4ID09PSAnbGFzdCcgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0LnBvcCgpO1xuICAgICAgICB9IGVsc2UgaWYgKCAgdGhpcy5saXN0W2luZGV4XSAgKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNvbnN0IGFsaWFnbm1lbnQgPSBuZXcgQWxpYWdubWVudCgpO1xuY29uc29sZS5sb2coYWxpYWdubWVudCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts-js/js/ts-js.ts\n");

/***/ })

/******/ });
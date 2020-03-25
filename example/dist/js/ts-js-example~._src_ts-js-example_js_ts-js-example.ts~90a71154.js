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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts-js-example/js/ts-js-example.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts-js-example/js/ts-js-example.ts":
/***/ (function(module, exports) {

eval("class Test {\n    constructor() {\n        this.list = [];\n    }\n    save(data) {\n        this.list.push(data);\n    }\n    check() {\n        return this.list;\n    }\n    get(index) {\n        if (index === 'first') {\n            return this.list.shift();\n        }\n        else if (index === 'last') {\n            return this.list.pop();\n        }\n        else if (this.list[index]) {\n            const result = this.list[index];\n            this.list.splice(index, 1);\n            return result;\n        }\n        return undefined;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMtanMtZXhhbXBsZS9qcy90cy1qcy1leGFtcGxlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RzLWpzLWV4YW1wbGUvanMvdHMtanMtZXhhbXBsZS50cz8wNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRlc3Qge1xuICAgIGxpc3Q6IEFycmF5PGFueT5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH1cbiAgICBzYXZlICggZGF0YTogYW55ICk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCggZGF0YSApO1xuICAgIH1cbiAgICBjaGVjayAoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdDtcbiAgICB9XG4gICAgZ2V0ICggaW5kZXg6IGFueSApOiB2b2lkIHtcbiAgICAgICAgaWYgKCBpbmRleCA9PT0gJ2ZpcnN0JyApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3Quc2hpZnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICggaW5kZXggPT09ICdsYXN0JyApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3QucG9wKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoICB0aGlzLmxpc3RbaW5kZXhdICApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMubGlzdFtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKCBpbmRleCwgMSApO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts-js-example/js/ts-js-example.ts\n");

/***/ })

/******/ });
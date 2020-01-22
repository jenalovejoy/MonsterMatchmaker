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
/******/ 	__webpack_require__.p = "/Users/brandaegrein/SchoolWork/MonsterMatchmaker/MonsterMatchmaker/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/filterBuilder.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filterBuilder.ts":
/*!******************************!*\
  !*** ./src/filterBuilder.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(async () => {\n    const monsterTypes = [\"Aberration\", \"Beast\", \"Celestial\", \"Construct\", \"Dragon\", \"Elemental\", \"Fey\", \"Fiend\", \"Giant\", \"Humanoid\", \"Monstrosity\", \"Ooze\", \"Plant\", \"Undead\"];\n    const alignmentA = [\"Lawful\", \"Neutral\", \"Chaotic\"];\n    const alignmentB = [\"Good\", \"Neutral\", \"Evil\"];\n    const alignment = buildMultidimentionalOptions(alignmentA, alignmentB);\n    buildLabelTable(\"#typeSelector\", monsterTypes, \"Type\", 4);\n    buildLabelTable(\"#alignmentSelector\", alignment, \"Alignment\", 3);\n});\n// Constructs a table of checkbox form elements, given an array of table elements, a title, and width\nfunction buildLabelTable(container, elements, title, width) {\n    const numItems = elements.length;\n    const numRows = numItems / width;\n    let tableTemplate = `<h6 title=${title}>${title}</h6>\n        <table class=\"optionsTable\" id=\"${title}Table\">\n        </table>`;\n    $(container).append(tableTemplate); // append primary table\n    for (let i = 0; i < numRows; i++) {\n        let rowTemplate = `<tr id=\"${title}TableRow${i}\"><div class=\"form-check form-check-inline\">\n            </tr>`;\n        $(`#${title}Table`).append(rowTemplate); // append individual row\n        // For each row of the table, append the appropriate number of columns\n        for (let j = i * width; j < (i + 1) * width; j++) {\n            if (j < elements.length) { // go until there are no more elements to add\n                let item = elements[j];\n                let labelItemTemplate = `<td id=${title}TableItem>\n                    <label for=\"${item}Check\"><input type=\"checkbox\" value=\"\" id=\"${item}Check\">\n                        ${item}\n                    </label></td>`;\n                $(`#${title}TableRow${i}`).append(labelItemTemplate);\n            }\n        }\n    }\n}\n// Combines two dimensions of options into their cross-product\nfunction buildMultidimentionalOptions(rows, columns) {\n    let options = [];\n    for (let r of rows) {\n        for (let c of columns) {\n            options.push(`${r} ${c}`);\n        }\n    }\n    return options;\n}\n\n\n//# sourceURL=webpack:///./src/filterBuilder.ts?");

/***/ })

/******/ });
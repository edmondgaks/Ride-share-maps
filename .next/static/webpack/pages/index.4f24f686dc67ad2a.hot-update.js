"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _googlemaps_react_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/react-wrapper */ \"./node_modules/@googlemaps/react-wrapper/dist/index.umd.js\");\n/* harmony import */ var _googlemaps_react_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_react_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ubilabs_threejs_overlay_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ubilabs/threejs-overlay-view */ \"./node_modules/@ubilabs/threejs-overlay-view/dist/threejs-overlay-view.modern.js\");\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-places-autocomplete */ \"./node_modules/use-places-autocomplete/dist/index.esm.js\");\n/* harmony import */ var _utils_calculateCenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/calculateCenter */ \"./utils/calculateCenter.js\");\n/* harmony import */ var _components_MyMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyMap */ \"./components/MyMap.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_googlemaps_react_wrapper__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        apiKey: \"AIzaSyDBcHJYFW4qubVFy7jhhlt1oC-SDcV7eqg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyMap__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/pages/index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/edmond/Documents/google-maps-threejs/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJEO0FBQ1A7QUFDVztBQUNiO0FBQ2lCO0FBQ1Q7QUFDYztBQUNBO0FBQ1I7QUFDVDtBQUNmO0FBR3pCLFNBQVNnQixNQUFNO0lBQzVCLHFCQUNFLDhEQUFDWiw4REFBT0E7UUFBQ2EsUUFBTztrQkFDZCw0RUFBQ0YseURBQUtBOzs7Ozs7Ozs7O0FBR1osQ0FBQztLQU51QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIkBnb29nbGVtYXBzL3JlYWN0LXdyYXBwZXJcIjtcbmltcG9ydCBUaHJlZWpzT3ZlcmxheVZpZXcgZnJvbSBcIkB1YmlsYWJzL3RocmVlanMtb3ZlcmxheS12aWV3XCI7XG5pbXBvcnQgeyBDYXRtdWxsUm9tQ3VydmUzLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXJcIjtcbmltcG9ydCB7IExpbmUyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saW5lcy9MaW5lMi5qc1wiO1xuaW1wb3J0IHsgTGluZU1hdGVyaWFsIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saW5lcy9MaW5lTWF0ZXJpYWwuanNcIjtcbmltcG9ydCB7IExpbmVHZW9tZXRyeSB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGluZXMvTGluZUdlb21ldHJ5LmpzXCI7XG5pbXBvcnQgeyBnZXRHZW9jb2RlLCBnZXRMYXRMbmcgfSBmcm9tIFwidXNlLXBsYWNlcy1hdXRvY29tcGxldGVcIjtcbmltcG9ydCBjYWxjdWxhdGVDZW50ZXIgZnJvbSBcIi4uL3V0aWxzL2NhbGN1bGF0ZUNlbnRlclwiO1xuaW1wb3J0IE15TWFwIGZyb20gXCIuLi9jb21wb25lbnRzL015TWFwXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGFwaUtleT1cIkFJemFTeURCY0hKWUZXNHF1YlZGeTdqaGhsdDFvQy1TRGNWN2VxZ1wiPlxuICAgICAgPE15TWFwIC8+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIldyYXBwZXIiLCJUaHJlZWpzT3ZlcmxheVZpZXciLCJDYXRtdWxsUm9tQ3VydmUzIiwiVmVjdG9yMyIsIkdMVEZMb2FkZXIiLCJMaW5lMiIsIkxpbmVNYXRlcmlhbCIsIkxpbmVHZW9tZXRyeSIsImdldEdlb2NvZGUiLCJnZXRMYXRMbmciLCJjYWxjdWxhdGVDZW50ZXIiLCJNeU1hcCIsIkFwcCIsImFwaUtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
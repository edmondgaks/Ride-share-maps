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

/***/ "./components/Directions.js":
/*!**********************************!*\
  !*** ./components/Directions.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ANIMATION_MS\": function() { return /* binding */ ANIMATION_MS; },\n/* harmony export */   \"default\": function() { return /* binding */ Directions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchDirections */ \"./utils/fetchDirections.js\");\n/* harmony import */ var _utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/calculateDistance */ \"./utils/calculateDistance.js\");\n/* harmony import */ var _constants_stops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/stops */ \"./constants/stops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet ANIMATION_MS = 0;\nfunction Directions(param) {\n    let { setRoute , map  } = param;\n    _s();\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0].location);\n    const [nextStop, setNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [distanceToNextStop, setDistanceToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timeToNextStop, setTimeToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const averageSpeed = 60; // km/h\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const watchId = navigator.geolocation.watchPosition((position)=>{\n            setCurrentPosition({\n                lat: position.coords.latitude,\n                lng: position.coords.longitude\n            });\n        }, (error)=>{\n            console.error(\"Error getting current position:\", error);\n        });\n        return ()=>{\n            navigator.geolocation.clearWatch(watchId);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (map) {\n            _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach((stop, index)=>{\n                new window.google.maps.Marker({\n                    position: stop.location,\n                    map: map,\n                    label: index + 1 + \"\",\n                    title: stop.name\n                });\n            });\n        }\n    }, [\n        map\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Find the index of the next stop\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>stop.name === nextStop.name);\n        // Calculate the distance and time to the next stop\n        if (nextStopIndex !== -1) {\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, nextStop.location.lat, nextStop.location.lng);\n            const time = distance / averageSpeed; // time = distance / speed (hours)\n            setDistanceToNextStop(distance);\n            setTimeToNextStop(time);\n        }\n    }, [\n        currentPosition,\n        nextStop\n    ]);\n    // Update next stop when the car reaches a stop\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>{\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, stop.location.lat, stop.location.lng);\n            // You can define a threshold distance to consider the car has reached the stop\n            return distance < 0.1; // For example, consider the car has reached the stop if it's within 100 meters\n        });\n        if (nextStopIndex !== -1) {\n            setNextStop(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][nextStopIndex]);\n        }\n    }, [\n        currentPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"directions\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Directions\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Nyabugogo - Kimironko\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: nextStop.name\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Distance to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        distanceToNextStop.toFixed(2),\n                        \" km\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Estimated Time to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        (timeToNextStop * 60).toFixed(0),\n                        \" minutes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Directions, \"ilrjf9n6viAqO4AN4SZ3a8PA6vc=\");\n_c = Directions;\nvar _c;\n$RefreshReg$(_c, \"Directions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7OEJBQUd0QyxTQUFTNkIsSUFBSTs7Ozs7OzhCQUNqQiw4REFBQ1E7O3dCQUFHO3dCQUFhckMsU0FBUzZCLElBQUk7Ozs7Ozs7OEJBQzlCLDhEQUFDUzs7d0JBQUdwQyxtQkFBbUJxQyxPQUFPLENBQUM7d0JBQUc7Ozs7Ozs7OEJBQ2xDLDhEQUFDRjs7d0JBQUc7d0JBQW1CckMsU0FBUzZCLElBQUk7Ozs7Ozs7OEJBQ3BDLDhEQUFDUzs7d0JBQUlsQyxDQUFBQSxpQkFBaUIsRUFBQyxFQUFHbUMsT0FBTyxDQUFDO3dCQUFHOzs7Ozs7Ozs7Ozs7OztBQUk3QyxDQUFDO0dBekZxQjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlyZWN0aW9ucy5qcz80MjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaERpcmVjdGlvbnMgZnJvbSBcIi4uL3V0aWxzL2ZldGNoRGlyZWN0aW9uc1wiO1xuaW1wb3J0IGNhbGN1bGF0ZURpc3RhbmNlIGZyb20gXCIuLi91dGlscy9jYWxjdWxhdGVEaXN0YW5jZVwiO1xuaW1wb3J0IHN0b3BzIGZyb20gXCIuLi9jb25zdGFudHMvc3RvcHNcIjtcblxuXG5cblxuXG5leHBvcnQgbGV0IEFOSU1BVElPTl9NUyA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpcmVjdGlvbnMoeyBzZXRSb3V0ZSwgbWFwIH0pIHtcbiAgICBjb25zdCBbY3VycmVudFBvc2l0aW9uLCBzZXRDdXJyZW50UG9zaXRpb25dID0gdXNlU3RhdGUoc3RvcHNbMF0ubG9jYXRpb24pO1xuICAgIGNvbnN0IFtuZXh0U3RvcCwgc2V0TmV4dFN0b3BdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtkaXN0YW5jZVRvTmV4dFN0b3AsIHNldERpc3RhbmNlVG9OZXh0U3RvcF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdGltZVRvTmV4dFN0b3AsIHNldFRpbWVUb05leHRTdG9wXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IGF2ZXJhZ2VTcGVlZCA9IDYwOyAvLyBrbS9oXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB3YXRjaElkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIHNldEN1cnJlbnRQb3NpdGlvbih7XG4gICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY3VycmVudCBwb3NpdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIHN0b3BzLmZvckVhY2goKHN0b3AsIGluZGV4KSA9PiB7XG4gICAgICAgICAgbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHN0b3AubG9jYXRpb24sXG4gICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgIGxhYmVsOiBpbmRleCArIDEgKyBcIlwiLFxuICAgICAgICAgICAgdGl0bGU6IHN0b3AubmFtZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW21hcF0pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG5leHQgc3RvcFxuICAgICAgY29uc3QgbmV4dFN0b3BJbmRleCA9IHN0b3BzLmZpbmRJbmRleChcbiAgICAgICAgKHN0b3ApID0+IHN0b3AubmFtZSA9PT0gbmV4dFN0b3AubmFtZVxuICAgICAgKTtcbiAgXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGFuZCB0aW1lIHRvIHRoZSBuZXh0IHN0b3BcbiAgICAgIGlmIChuZXh0U3RvcEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKFxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sYXQsXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLmxuZyxcbiAgICAgICAgICBuZXh0U3RvcC5sb2NhdGlvbi5sYXQsXG4gICAgICAgICAgbmV4dFN0b3AubG9jYXRpb24ubG5nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBkaXN0YW5jZSAvIGF2ZXJhZ2VTcGVlZDsgLy8gdGltZSA9IGRpc3RhbmNlIC8gc3BlZWQgKGhvdXJzKVxuICAgICAgICBzZXREaXN0YW5jZVRvTmV4dFN0b3AoZGlzdGFuY2UpO1xuICAgICAgICBzZXRUaW1lVG9OZXh0U3RvcCh0aW1lKTtcbiAgICAgIH1cbiAgICB9LCBbY3VycmVudFBvc2l0aW9uLCBuZXh0U3RvcF0pO1xuICBcbiAgICAvLyBVcGRhdGUgbmV4dCBzdG9wIHdoZW4gdGhlIGNhciByZWFjaGVzIGEgc3RvcFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0U3RvcEluZGV4ID0gc3RvcHMuZmluZEluZGV4KChzdG9wKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLmxhdCxcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ubG5nLFxuICAgICAgICAgIHN0b3AubG9jYXRpb24ubGF0LFxuICAgICAgICAgIHN0b3AubG9jYXRpb24ubG5nXG4gICAgICAgICk7XG4gICAgICAgIC8vIFlvdSBjYW4gZGVmaW5lIGEgdGhyZXNob2xkIGRpc3RhbmNlIHRvIGNvbnNpZGVyIHRoZSBjYXIgaGFzIHJlYWNoZWQgdGhlIHN0b3BcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgMC4xOyAvLyBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGNhciBoYXMgcmVhY2hlZCB0aGUgc3RvcCBpZiBpdCdzIHdpdGhpbiAxMDAgbWV0ZXJzXG4gICAgICB9KTtcbiAgICAgIGlmIChuZXh0U3RvcEluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZXROZXh0U3RvcChzdG9wc1tuZXh0U3RvcEluZGV4XSk7XG4gICAgICB9XG4gICAgfSwgW2N1cnJlbnRQb3NpdGlvbl0pO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XG4gICAgICAgICAgPGg0PkRpcmVjdGlvbnM8L2g0PlxuICAgICAgICAgIDxoND5OeWFidWdvZ28gLSBLaW1pcm9ua288L2g0PlxuICAgICAgICAgIDxoNT5OZXh0IFN0b3A8L2g1PlxuICAgICAgICAgIDxwPntuZXh0U3RvcC5uYW1lfTwvcD5cbiAgICAgICAgICA8aDU+RGlzdGFuY2UgdG8ge25leHRTdG9wLm5hbWV9PC9oNT5cbiAgICAgICAgICA8cD57ZGlzdGFuY2VUb05leHRTdG9wLnRvRml4ZWQoMil9IGttPC9wPlxuICAgICAgICAgIDxoNT5Fc3RpbWF0ZWQgVGltZSB0byB7bmV4dFN0b3AubmFtZX08L2g1PlxuICAgICAgICAgIDxwPnsodGltZVRvTmV4dFN0b3AgKiA2MCkudG9GaXhlZCgwKX0gbWludXRlczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmV0Y2hEaXJlY3Rpb25zIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJzdG9wcyIsIkFOSU1BVElPTl9NUyIsIkRpcmVjdGlvbnMiLCJzZXRSb3V0ZSIsIm1hcCIsImN1cnJlbnRQb3NpdGlvbiIsInNldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwibmV4dFN0b3AiLCJzZXROZXh0U3RvcCIsImRpc3RhbmNlVG9OZXh0U3RvcCIsInNldERpc3RhbmNlVG9OZXh0U3RvcCIsInRpbWVUb05leHRTdG9wIiwic2V0VGltZVRvTmV4dFN0b3AiLCJhdmVyYWdlU3BlZWQiLCJ3YXRjaElkIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImVycm9yIiwiY29uc29sZSIsImNsZWFyV2F0Y2giLCJmb3JFYWNoIiwic3RvcCIsImluZGV4Iiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIk1hcmtlciIsImxhYmVsIiwidGl0bGUiLCJuYW1lIiwibmV4dFN0b3BJbmRleCIsImZpbmRJbmRleCIsImRpc3RhbmNlIiwidGltZSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaDUiLCJwIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Directions.js\n"));

/***/ })

});
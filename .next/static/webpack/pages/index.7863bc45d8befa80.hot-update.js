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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ANIMATION_MS\": function() { return /* binding */ ANIMATION_MS; },\n/* harmony export */   \"default\": function() { return /* binding */ Directions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchDirections */ \"./utils/fetchDirections.js\");\n/* harmony import */ var _utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/calculateDistance */ \"./utils/calculateDistance.js\");\n/* harmony import */ var _constants_stops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/stops */ \"./constants/stops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet ANIMATION_MS = 0;\nfunction Directions(param) {\n    let { setRoute , map  } = param;\n    _s();\n    const [origin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Nyabugogo\");\n    const [destination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Kimironko\");\n    const averageSpeed = 60;\n    const [nextStop, setNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [distanceToNextStop, setDistanceToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timeToNextStop, setTimeToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0].location);\n    const [eta, setEta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const watchId = navigator.geolocation.watchPosition((position)=>{\n            setCurrentPosition({\n                lat: position.coords.latitude,\n                lng: position.coords.longitude\n            });\n        }, (error)=>{\n            console.error(\"Error getting current position:\", error);\n        });\n        return ()=>{\n            navigator.geolocation.clearWatch(watchId);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (map) {\n            _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach((stop, index)=>{\n                new window.google.maps.Marker({\n                    position: stop.location,\n                    map: map,\n                    label: index + 1 + \"\",\n                    title: stop.name\n                });\n            });\n        }\n    }, [\n        map\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Find the index of the next stop\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>stop.name === nextStop.name);\n        // Calculate the distance and time to the next stop\n        if (nextStopIndex !== -1) {\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, nextStop.location.lat, nextStop.location.lng);\n            const time = distance / averageSpeed; // time = distance / speed (hours)\n            setDistanceToNextStop(distance);\n            setTimeToNextStop(time);\n        }\n    }, [\n        currentPosition,\n        nextStop\n    ]);\n    // Update next stop when the car reaches a stop\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>{\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, stop.location.lat, stop.location.lng);\n            // You can define a threshold distance to consider the car has reached the stop\n            return distance < 0.1; // For example, consider the car has reached the stop if it's within 100 meters\n        });\n        if (nextStopIndex !== -1) {\n            setNextStop(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][nextStopIndex]);\n        }\n    }, [\n        currentPosition\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(origin, destination, setRoute);\n    }, [\n        origin,\n        destination\n    ]);\n    ANIMATION_MS = timeToNextStop * 60 * 600;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"directions\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Directions\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Nyabugogo - Kimironko\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: nextStop.name\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Distance to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        distanceToNextStop.toFixed(2),\n                        \" km\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Estimated Time to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        (timeToNextStop * 60).toFixed(0),\n                        \" minutes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n            lineNumber: 102,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Directions, \"/l93gbES+lDUZDB8qRr+CfO+GYk=\");\n_c = Directions;\nvar _c;\n$RefreshReg$(_c, \"Directions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMwQyxjQUFjO1FBQ2xDLENBQUM7SUFDSCxHQUFHO1FBQUM1QjtLQUFnQjtJQUdsQmxCLGdEQUFTQSxDQUFDLElBQU07UUFDZEUsa0VBQWVBLENBQUNPLFFBQVFDLGFBQWFIO0lBQ3ZDLEdBQUc7UUFBQ0U7UUFBUUM7S0FBWTtJQUV4QkwsZUFBZVcsaUJBQWlCLEtBQUs7SUFFckMscUJBQ0U7a0JBQ0UsNEVBQUNrQztZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7OEJBQUcxQyxTQUFTaUMsSUFBSTs7Ozs7OzhCQUNqQiw4REFBQ1E7O3dCQUFHO3dCQUFhekMsU0FBU2lDLElBQUk7Ozs7Ozs7OEJBQzlCLDhEQUFDUzs7d0JBQUd4QyxtQkFBbUJ5QyxPQUFPLENBQUM7d0JBQUc7Ozs7Ozs7OEJBQ2xDLDhEQUFDRjs7d0JBQUc7d0JBQW1CekMsU0FBU2lDLElBQUk7Ozs7Ozs7OEJBQ3BDLDhEQUFDUzs7d0JBQUl0QyxDQUFBQSxpQkFBaUIsRUFBQyxFQUFHdUMsT0FBTyxDQUFDO3dCQUFHOzs7Ozs7Ozs7Ozs7OztBQUs3QyxDQUFDO0dBdkd1QmpEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlyZWN0aW9ucy5qcz80MjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaERpcmVjdGlvbnMgZnJvbSBcIi4uL3V0aWxzL2ZldGNoRGlyZWN0aW9uc1wiO1xuaW1wb3J0IGNhbGN1bGF0ZURpc3RhbmNlIGZyb20gXCIuLi91dGlscy9jYWxjdWxhdGVEaXN0YW5jZVwiO1xuaW1wb3J0IHN0b3BzIGZyb20gXCIuLi9jb25zdGFudHMvc3RvcHNcIjtcblxuXG5cblxuXG5leHBvcnQgbGV0IEFOSU1BVElPTl9NUyA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpcmVjdGlvbnMoeyBzZXRSb3V0ZSwgbWFwIH0pIHtcbiAgICBjb25zdCBbb3JpZ2luXSA9IHVzZVN0YXRlKFwiTnlhYnVnb2dvXCIpO1xuICAgIGNvbnN0IFtkZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZShcIktpbWlyb25rb1wiKTtcbiAgICBjb25zdCBhdmVyYWdlU3BlZWQgPSA2MDtcblxuICAgIGNvbnN0IFtuZXh0U3RvcCwgc2V0TmV4dFN0b3BdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbZGlzdGFuY2VUb05leHRTdG9wLCBzZXREaXN0YW5jZVRvTmV4dFN0b3BdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0aW1lVG9OZXh0U3RvcCwgc2V0VGltZVRvTmV4dFN0b3BdID0gdXNlU3RhdGUoMCk7XG4gIFxuICAgIGNvbnN0IFtjdXJyZW50UG9zaXRpb24sIHNldEN1cnJlbnRQb3NpdGlvbl0gPSB1c2VTdGF0ZShzdG9wc1swXS5sb2NhdGlvbik7XG4gICAgY29uc3QgW2V0YSwgc2V0RXRhXSA9IHVzZVN0YXRlKCk7XG4gIFxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50UG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGN1cnJlbnQgcG9zaXRpb246XCIsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgICB9O1xuICB9LCBbXSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtYXApIHtcbiAgICAgICAgc3RvcHMuZm9yRWFjaCgoc3RvcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIG5ldyB3aW5kb3cuZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RvcC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgICAgICBsYWJlbDogaW5kZXggKyAxICsgXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogc3RvcC5uYW1lLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW21hcF0pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBzdG9wXG4gICAgY29uc3QgbmV4dFN0b3BJbmRleCA9IHN0b3BzLmZpbmRJbmRleChcbiAgICAgIChzdG9wKSA9PiBzdG9wLm5hbWUgPT09IG5leHRTdG9wLm5hbWVcbiAgICApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBhbmQgdGltZSB0byB0aGUgbmV4dCBzdG9wXG4gICAgaWYgKG5leHRTdG9wSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKFxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGF0LFxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubG5nLFxuICAgICAgICBuZXh0U3RvcC5sb2NhdGlvbi5sYXQsXG4gICAgICAgIG5leHRTdG9wLmxvY2F0aW9uLmxuZ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBkaXN0YW5jZSAvIGF2ZXJhZ2VTcGVlZDsgLy8gdGltZSA9IGRpc3RhbmNlIC8gc3BlZWQgKGhvdXJzKVxuICAgICAgc2V0RGlzdGFuY2VUb05leHRTdG9wKGRpc3RhbmNlKTtcbiAgICAgIHNldFRpbWVUb05leHRTdG9wKHRpbWUpO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQb3NpdGlvbiwgbmV4dFN0b3BdKTtcblxuICAvLyBVcGRhdGUgbmV4dCBzdG9wIHdoZW4gdGhlIGNhciByZWFjaGVzIGEgc3RvcFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5leHRTdG9wSW5kZXggPSBzdG9wcy5maW5kSW5kZXgoKHN0b3ApID0+IHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sYXQsXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sbmcsXG4gICAgICAgIHN0b3AubG9jYXRpb24ubGF0LFxuICAgICAgICBzdG9wLmxvY2F0aW9uLmxuZ1xuICAgICAgKTtcbiAgICAgIC8vIFlvdSBjYW4gZGVmaW5lIGEgdGhyZXNob2xkIGRpc3RhbmNlIHRvIGNvbnNpZGVyIHRoZSBjYXIgaGFzIHJlYWNoZWQgdGhlIHN0b3BcbiAgICAgIHJldHVybiBkaXN0YW5jZSA8IDAuMTsgLy8gRm9yIGV4YW1wbGUsIGNvbnNpZGVyIHRoZSBjYXIgaGFzIHJlYWNoZWQgdGhlIHN0b3AgaWYgaXQncyB3aXRoaW4gMTAwIG1ldGVyc1xuICAgIH0pO1xuICAgIGlmIChuZXh0U3RvcEluZGV4ICE9PSAtMSkge1xuICAgICAgc2V0TmV4dFN0b3Aoc3RvcHNbbmV4dFN0b3BJbmRleF0pO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQb3NpdGlvbl0pO1xuICBcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoRGlyZWN0aW9ucyhvcmlnaW4sIGRlc3RpbmF0aW9uLCBzZXRSb3V0ZSk7XG4gICAgfSwgW29yaWdpbiwgZGVzdGluYXRpb25dKTtcbiAgXG4gICAgQU5JTUFUSU9OX01TID0gdGltZVRvTmV4dFN0b3AgKiA2MCAqIDYwMDtcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWN0aW9uc1wiPlxuICAgICAgICA8aDQ+RGlyZWN0aW9uczwvaDQ+XG4gICAgICAgIDxoND5OeWFidWdvZ28gLSBLaW1pcm9ua288L2g0PlxuICAgICAgICA8aDU+TmV4dCBTdG9wPC9oNT5cbiAgICAgICAgPHA+e25leHRTdG9wLm5hbWV9PC9wPlxuICAgICAgICA8aDU+RGlzdGFuY2UgdG8ge25leHRTdG9wLm5hbWV9PC9oNT5cbiAgICAgICAgPHA+e2Rpc3RhbmNlVG9OZXh0U3RvcC50b0ZpeGVkKDIpfSBrbTwvcD5cbiAgICAgICAgPGg1PkVzdGltYXRlZCBUaW1lIHRvIHtuZXh0U3RvcC5uYW1lfTwvaDU+XG4gICAgICAgIDxwPnsodGltZVRvTmV4dFN0b3AgKiA2MCkudG9GaXhlZCgwKX0gbWludXRlczwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Lz5cbiAgICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImZldGNoRGlyZWN0aW9ucyIsImNhbGN1bGF0ZURpc3RhbmNlIiwic3RvcHMiLCJBTklNQVRJT05fTVMiLCJEaXJlY3Rpb25zIiwic2V0Um91dGUiLCJtYXAiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsImF2ZXJhZ2VTcGVlZCIsIm5leHRTdG9wIiwic2V0TmV4dFN0b3AiLCJkaXN0YW5jZVRvTmV4dFN0b3AiLCJzZXREaXN0YW5jZVRvTmV4dFN0b3AiLCJ0aW1lVG9OZXh0U3RvcCIsInNldFRpbWVUb05leHRTdG9wIiwiY3VycmVudFBvc2l0aW9uIiwic2V0Q3VycmVudFBvc2l0aW9uIiwibG9jYXRpb24iLCJldGEiLCJzZXRFdGEiLCJ3YXRjaElkIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJ3YXRjaFBvc2l0aW9uIiwicG9zaXRpb24iLCJsYXQiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImVycm9yIiwiY29uc29sZSIsImNsZWFyV2F0Y2giLCJmb3JFYWNoIiwic3RvcCIsImluZGV4Iiwid2luZG93IiwiZ29vZ2xlIiwibWFwcyIsIk1hcmtlciIsImxhYmVsIiwidGl0bGUiLCJuYW1lIiwibmV4dFN0b3BJbmRleCIsImZpbmRJbmRleCIsImRpc3RhbmNlIiwidGltZSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiaDUiLCJwIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Directions.js\n"));

/***/ })

});
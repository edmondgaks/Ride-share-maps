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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ANIMATION_MS\": function() { return /* binding */ ANIMATION_MS; },\n/* harmony export */   \"default\": function() { return /* binding */ Directions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchDirections */ \"./utils/fetchDirections.js\");\n/* harmony import */ var _utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/calculateDistance */ \"./utils/calculateDistance.js\");\n/* harmony import */ var _constants_stops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/stops */ \"./constants/stops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet ANIMATION_MS = 0;\nfunction Directions(param) {\n    let { setRoute , map  } = param;\n    _s();\n    const [origin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Nyabugogo\");\n    const [destination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Kimironko\");\n    const averageSpeed = 60;\n    const [nextStop, setNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [distanceToNextStop, setDistanceToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timeToNextStop, setTimeToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0].location);\n    const [eta, setEta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const watchId = navigator.geolocation.watchPosition((position)=>{\n            setCurrentPosition({\n                lat: position.coords.latitude,\n                lng: position.coords.longitude\n            });\n        }, (error)=>{\n            console.error(\"Error getting current position:\", error);\n        });\n        return ()=>{\n            navigator.geolocation.clearWatch(watchId);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (map) {\n            _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach((stop, index)=>{\n                new window.google.maps.Marker({\n                    position: stop.location,\n                    map: map,\n                    label: index + 1 + \"\",\n                    title: stop.name\n                });\n            });\n        }\n    }, [\n        map\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Find the index of the next stop\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>stop.name === nextStop.name);\n        // Calculate the distance and time to the next stop\n        if (nextStopIndex !== -1) {\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, nextStop.location.lat, nextStop.location.lng);\n            const time = distance / averageSpeed; // time = distance / speed (hours)\n            setDistanceToNextStop(distance);\n            setTimeToNextStop(time);\n        }\n    }, [\n        currentPosition,\n        nextStop\n    ]);\n    // Update next stop when the car reaches a stop\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>{\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, stop.location.lat, stop.location.lng);\n            // You can define a threshold distance to consider the car has reached the stop\n            return distance < 0.1; // For example, consider the car has reached the stop if it's within 100 meters\n        });\n        if (nextStopIndex !== -1) {\n            setNextStop(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][nextStopIndex]);\n        }\n    }, [\n        currentPosition\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(origin, destination, setRoute);\n    }, [\n        origin,\n        destination\n    ]);\n    ANIMATION_MS = timeToNextStop * 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"directions\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Directions\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Nyabugogo - Kimironko\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: nextStop.name\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Distance to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        distanceToNextStop.toFixed(2),\n                        \" km\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Estimated Time to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        (timeToNextStop * 60).toFixed(0),\n                        \" minutes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n            lineNumber: 102,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Directions, \"/l93gbES+lDUZDB8qRr+CfO+GYk=\");\n_c = Directions;\nvar _c;\n$RefreshReg$(_c, \"Directions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMwQyxjQUFjO1FBQ2xDLENBQUM7SUFDSCxHQUFHO1FBQUM1QjtLQUFnQjtJQUdsQmxCLGdEQUFTQSxDQUFDLElBQU07UUFDZEUsa0VBQWVBLENBQUNPLFFBQVFDLGFBQWFIO0lBQ3ZDLEdBQUc7UUFBQ0U7UUFBUUM7S0FBWTtJQUV4QkwsZUFBZVcsaUJBQWlCO0lBRWhDLHFCQUNFO2tCQUNFLDRFQUFDa0M7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNBOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHMUMsU0FBU2lDLElBQUk7Ozs7Ozs4QkFDakIsOERBQUNROzt3QkFBRzt3QkFBYXpDLFNBQVNpQyxJQUFJOzs7Ozs7OzhCQUM5Qiw4REFBQ1M7O3dCQUFHeEMsbUJBQW1CeUMsT0FBTyxDQUFDO3dCQUFHOzs7Ozs7OzhCQUNsQyw4REFBQ0Y7O3dCQUFHO3dCQUFtQnpDLFNBQVNpQyxJQUFJOzs7Ozs7OzhCQUNwQyw4REFBQ1M7O3dCQUFJdEMsQ0FBQUEsaUJBQWlCLEVBQUMsRUFBR3VDLE9BQU8sQ0FBQzt3QkFBRzs7Ozs7Ozs7Ozs7Ozs7QUFLN0MsQ0FBQztHQXZHdUJqRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RpcmVjdGlvbnMuanM/NDIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hEaXJlY3Rpb25zIGZyb20gXCIuLi91dGlscy9mZXRjaERpcmVjdGlvbnNcIjtcbmltcG9ydCBjYWxjdWxhdGVEaXN0YW5jZSBmcm9tIFwiLi4vdXRpbHMvY2FsY3VsYXRlRGlzdGFuY2VcIjtcbmltcG9ydCBzdG9wcyBmcm9tIFwiLi4vY29uc3RhbnRzL3N0b3BzXCI7XG5cblxuXG5cblxuZXhwb3J0IGxldCBBTklNQVRJT05fTVMgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXJlY3Rpb25zKHsgc2V0Um91dGUsIG1hcCB9KSB7XG4gICAgY29uc3QgW29yaWdpbl0gPSB1c2VTdGF0ZShcIk55YWJ1Z29nb1wiKTtcbiAgICBjb25zdCBbZGVzdGluYXRpb25dID0gdXNlU3RhdGUoXCJLaW1pcm9ua29cIik7XG4gICAgY29uc3QgYXZlcmFnZVNwZWVkID0gNjA7XG5cbiAgICBjb25zdCBbbmV4dFN0b3AsIHNldE5leHRTdG9wXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2Rpc3RhbmNlVG9OZXh0U3RvcCwgc2V0RGlzdGFuY2VUb05leHRTdG9wXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGltZVRvTmV4dFN0b3AsIHNldFRpbWVUb05leHRTdG9wXSA9IHVzZVN0YXRlKDApO1xuICBcbiAgICBjb25zdCBbY3VycmVudFBvc2l0aW9uLCBzZXRDdXJyZW50UG9zaXRpb25dID0gdXNlU3RhdGUoc3RvcHNbMF0ubG9jYXRpb24pO1xuICAgIGNvbnN0IFtldGEsIHNldEV0YV0gPSB1c2VTdGF0ZSgpO1xuICBcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgICAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgc2V0Q3VycmVudFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBjdXJyZW50IHBvc2l0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgICAgfTtcbiAgfSwgW10pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobWFwKSB7XG4gICAgICAgIHN0b3BzLmZvckVhY2goKHN0b3AsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0b3AubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGluZGV4ICsgMSArIFwiXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHN0b3AubmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFttYXBdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG5leHQgc3RvcFxuICAgIGNvbnN0IG5leHRTdG9wSW5kZXggPSBzdG9wcy5maW5kSW5kZXgoXG4gICAgICAoc3RvcCkgPT4gc3RvcC5uYW1lID09PSBuZXh0U3RvcC5uYW1lXG4gICAgKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYW5kIHRpbWUgdG8gdGhlIG5leHQgc3RvcFxuICAgIGlmIChuZXh0U3RvcEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxhdCxcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxuZyxcbiAgICAgICAgbmV4dFN0b3AubG9jYXRpb24ubGF0LFxuICAgICAgICBuZXh0U3RvcC5sb2NhdGlvbi5sbmdcbiAgICAgICk7XG4gICAgICBjb25zdCB0aW1lID0gZGlzdGFuY2UgLyBhdmVyYWdlU3BlZWQ7IC8vIHRpbWUgPSBkaXN0YW5jZSAvIHNwZWVkIChob3VycylcbiAgICAgIHNldERpc3RhbmNlVG9OZXh0U3RvcChkaXN0YW5jZSk7XG4gICAgICBzZXRUaW1lVG9OZXh0U3RvcCh0aW1lKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50UG9zaXRpb24sIG5leHRTdG9wXSk7XG5cbiAgLy8gVXBkYXRlIG5leHQgc3RvcCB3aGVuIHRoZSBjYXIgcmVhY2hlcyBhIHN0b3BcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXh0U3RvcEluZGV4ID0gc3RvcHMuZmluZEluZGV4KChzdG9wKSA9PiB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGNhbGN1bGF0ZURpc3RhbmNlKFxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubGF0LFxuICAgICAgICBjdXJyZW50UG9zaXRpb24ubG5nLFxuICAgICAgICBzdG9wLmxvY2F0aW9uLmxhdCxcbiAgICAgICAgc3RvcC5sb2NhdGlvbi5sbmdcbiAgICAgICk7XG4gICAgICAvLyBZb3UgY2FuIGRlZmluZSBhIHRocmVzaG9sZCBkaXN0YW5jZSB0byBjb25zaWRlciB0aGUgY2FyIGhhcyByZWFjaGVkIHRoZSBzdG9wXG4gICAgICByZXR1cm4gZGlzdGFuY2UgPCAwLjE7IC8vIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgY2FyIGhhcyByZWFjaGVkIHRoZSBzdG9wIGlmIGl0J3Mgd2l0aGluIDEwMCBtZXRlcnNcbiAgICB9KTtcbiAgICBpZiAobmV4dFN0b3BJbmRleCAhPT0gLTEpIHtcbiAgICAgIHNldE5leHRTdG9wKHN0b3BzW25leHRTdG9wSW5kZXhdKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50UG9zaXRpb25dKTtcbiAgXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaERpcmVjdGlvbnMob3JpZ2luLCBkZXN0aW5hdGlvbiwgc2V0Um91dGUpO1xuICAgIH0sIFtvcmlnaW4sIGRlc3RpbmF0aW9uXSk7XG4gIFxuICAgIEFOSU1BVElPTl9NUyA9IHRpbWVUb05leHRTdG9wICogNjAgXG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cbiAgICAgICAgPGg0PkRpcmVjdGlvbnM8L2g0PlxuICAgICAgICA8aDQ+TnlhYnVnb2dvIC0gS2ltaXJvbmtvPC9oND5cbiAgICAgICAgPGg1Pk5leHQgU3RvcDwvaDU+XG4gICAgICAgIDxwPntuZXh0U3RvcC5uYW1lfTwvcD5cbiAgICAgICAgPGg1PkRpc3RhbmNlIHRvIHtuZXh0U3RvcC5uYW1lfTwvaDU+XG4gICAgICAgIDxwPntkaXN0YW5jZVRvTmV4dFN0b3AudG9GaXhlZCgyKX0ga208L3A+XG4gICAgICAgIDxoNT5Fc3RpbWF0ZWQgVGltZSB0byB7bmV4dFN0b3AubmFtZX08L2g1PlxuICAgICAgICA8cD57KHRpbWVUb05leHRTdG9wICogNjApLnRvRml4ZWQoMCl9IG1pbnV0ZXM8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPC8+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJmZXRjaERpcmVjdGlvbnMiLCJjYWxjdWxhdGVEaXN0YW5jZSIsInN0b3BzIiwiQU5JTUFUSU9OX01TIiwiRGlyZWN0aW9ucyIsInNldFJvdXRlIiwibWFwIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJhdmVyYWdlU3BlZWQiLCJuZXh0U3RvcCIsInNldE5leHRTdG9wIiwiZGlzdGFuY2VUb05leHRTdG9wIiwic2V0RGlzdGFuY2VUb05leHRTdG9wIiwidGltZVRvTmV4dFN0b3AiLCJzZXRUaW1lVG9OZXh0U3RvcCIsImN1cnJlbnRQb3NpdGlvbiIsInNldEN1cnJlbnRQb3NpdGlvbiIsImxvY2F0aW9uIiwiZXRhIiwic2V0RXRhIiwid2F0Y2hJZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhcldhdGNoIiwiZm9yRWFjaCIsInN0b3AiLCJpbmRleCIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJNYXJrZXIiLCJsYWJlbCIsInRpdGxlIiwibmFtZSIsIm5leHRTdG9wSW5kZXgiLCJmaW5kSW5kZXgiLCJkaXN0YW5jZSIsInRpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImg1IiwicCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Directions.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ANIMATION_MS\": function() { return /* binding */ ANIMATION_MS; },\n/* harmony export */   \"default\": function() { return /* binding */ Directions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchDirections */ \"./utils/fetchDirections.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst stops = [\n    {\n        name: \"Nyabugogo\",\n        location: {\n            lat: -1.939826787816454,\n            lng: 30.0445426438232\n        }\n    },\n    {\n        name: \"Stop A\",\n        location: {\n            lat: -1.9355377074007851,\n            lng: 30.060163829002217\n        }\n    },\n    {\n        name: \"Stop B\",\n        location: {\n            lat: -1.9358808342336546,\n            lng: 30.08024820994666\n        }\n    },\n    {\n        name: \"Stop C\",\n        location: {\n            lat: -1.9489196023037583,\n            lng: 30.092607828989397\n        }\n    },\n    {\n        name: \"Stop D\",\n        location: {\n            lat: -1.9592132952818164,\n            lng: 30.106684061788073\n        }\n    },\n    {\n        name: \"Stop E\",\n        location: {\n            lat: -1.9487480402200394,\n            lng: 30.126596781356923\n        }\n    },\n    {\n        name: \"Kimironko\",\n        location: {\n            lat: -1.9365670876910166,\n            lng: 30.13020167024439\n        }\n    }\n];\nlet ANIMATION_MS = 0;\nfunction Directions(param) {\n    let { setRoute , map  } = param;\n    _s();\n    const [origin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Nyabugogo\");\n    const [destination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Kimironko\");\n    const averageSpeed = 60;\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(stops[0].location);\n    const [eta, setEta] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const watchId = navigator.geolocation.watchPosition((position)=>{\n            setCurrentPosition({\n                lat: position.coords.latitude,\n                lng: position.coords.longitude\n            });\n        }, (error)=>{\n            console.error(\"Error getting current position:\", error);\n        });\n        return ()=>{\n            navigator.geolocation.clearWatch(watchId);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (map) {\n            stops.forEach((stop, index)=>{\n                new window.google.maps.Marker({\n                    position: stop.location,\n                    map: map,\n                    label: index + 1 + \"\",\n                    title: stop.name\n                });\n            });\n        }\n    }, [\n        map\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nextStopIndex = Math.min(stops.findIndex((stop)=>stop.name === \"Kimironko\") + 1, stops.length - 1);\n        const nextStop = stops[nextStopIndex];\n        const distanceToNextStop = calculateDistance(currentPosition.lat, currentPosition.lng, nextStop.location.lat, nextStop.location.lng);\n        const etaInSeconds = distanceToNextStop / averageSpeed * 3600;\n        const etaInMinutes = Math.round(etaInSeconds / 60);\n        const etaInKilometers = Math.round(distanceToNextStop * 100) / 100;\n        ANIMATION_MS = etaInMinutes * 60000;\n        setEta({\n            distance: etaInKilometers,\n            time: etaInMinutes,\n            nextStop: nextStop.name\n        });\n    }, [\n        currentPosition\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(origin, destination, setRoute);\n    }, [\n        origin,\n        destination\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: eta && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"directions\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Directions\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 97,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: eta.nextStop\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Distance to Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 99,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        eta.distance,\n                        \" km\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Estimated Time to Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        eta.time,\n                        \" minutes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n            lineNumber: 95,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Directions, \"iPLPYIy3/5sPI6eos8Byu2z29XI=\");\n_c = Directions;\nvar _c;\n$RefreshReg$(_c, \"Directions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtTLEtBQUssQ0FBQ0YsZUFBZTtRQUMvQyxNQUFNRyxrQkFBa0JWLEtBQUtTLEtBQUssQ0FBQ0oscUJBQXFCLE9BQU87UUFHL0RyQyxlQUFld0MsZUFBZTtRQUU5QjlCLE9BQU87WUFDSGlDLFVBQVVEO1lBQ1ZFLE1BQU1KO1lBQ05KLFVBQVVBLFNBQVN4QyxJQUFJO1FBQzNCO0lBQ0YsR0FBRztRQUFDVztLQUFnQjtJQUdsQmYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSxrRUFBZUEsQ0FBQ1UsUUFBUUMsYUFBYUg7SUFDdkMsR0FBRztRQUFDRTtRQUFRQztLQUFZO0lBR3hCLHFCQUNFO2tCQUNDSSxxQkFDQyw4REFBQ29DO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFBR3hDLElBQUkyQixRQUFROzs7Ozs7OEJBQ2hCLDhEQUFDWTs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs7d0JBQUd4QyxJQUFJa0MsUUFBUTt3QkFBQzs7Ozs7Ozs4QkFDakIsOERBQUNLOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzt3QkFBR3hDLElBQUltQyxJQUFJO3dCQUFDOzs7Ozs7Ozs7Ozs7OztBQUt6QixDQUFDO0dBeEZ1QjNDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlyZWN0aW9ucy5qcz80MjBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaERpcmVjdGlvbnMgZnJvbSBcIi4uL3V0aWxzL2ZldGNoRGlyZWN0aW9uc1wiO1xuXG5cblxuXG5jb25zdCBzdG9wcyA9IFtcbiAgICB7IG5hbWU6IFwiTnlhYnVnb2dvXCIsIGxvY2F0aW9uOiB7IGxhdDogLTEuOTM5ODI2Nzg3ODE2NDU0LCBsbmc6ICAzMC4wNDQ1NDI2NDM4MjMyIH0gfSxcbiAgICB7IG5hbWU6IFwiU3RvcCBBXCIsIGxvY2F0aW9uOiB7IGxhdDogLTEuOTM1NTM3NzA3NDAwNzg1MSwgbG5nOiAzMC4wNjAxNjM4MjkwMDIyMTcgfSB9LFxuICAgIHsgbmFtZTogXCJTdG9wIEJcIiwgbG9jYXRpb246IHsgbGF0OiAtMS45MzU4ODA4MzQyMzM2NTQ2LCBsbmc6IDMwLjA4MDI0ODIwOTk0NjY2IH0gfSxcbiAgICB7IG5hbWU6IFwiU3RvcCBDXCIsIGxvY2F0aW9uOiB7IGxhdDogLTEuOTQ4OTE5NjAyMzAzNzU4MywgbG5nOiAzMC4wOTI2MDc4Mjg5ODkzOTcgfSB9LFxuICAgIHsgbmFtZTogXCJTdG9wIERcIiwgbG9jYXRpb246IHsgbGF0OiAtMS45NTkyMTMyOTUyODE4MTY0LCBsbmc6IDMwLjEwNjY4NDA2MTc4ODA3MyB9IH0sXG4gICAgeyBuYW1lOiBcIlN0b3AgRVwiLCBsb2NhdGlvbjogeyBsYXQ6IC0xLjk0ODc0ODA0MDIyMDAzOTQsIGxuZzogMzAuMTI2NTk2NzgxMzU2OTIzIH0gfSxcbiAgICB7IG5hbWU6IFwiS2ltaXJvbmtvXCIsIGxvY2F0aW9uOiB7IGxhdDogLTEuOTM2NTY3MDg3NjkxMDE2NiwgbG5nOiAzMC4xMzAyMDE2NzAyNDQzOSB9IH0sIC8vIEVuZGluZyBQb2ludFxuXTtcblxuZXhwb3J0IGxldCBBTklNQVRJT05fTVMgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXJlY3Rpb25zKHsgc2V0Um91dGUsIG1hcCB9KSB7XG4gICAgY29uc3QgW29yaWdpbl0gPSB1c2VTdGF0ZShcIk55YWJ1Z29nb1wiKTtcbiAgICBjb25zdCBbZGVzdGluYXRpb25dID0gdXNlU3RhdGUoXCJLaW1pcm9ua29cIik7XG4gICAgY29uc3QgYXZlcmFnZVNwZWVkID0gNjA7XG5cbiAgXG4gICAgY29uc3QgW2N1cnJlbnRQb3NpdGlvbiwgc2V0Q3VycmVudFBvc2l0aW9uXSA9IHVzZVN0YXRlKHN0b3BzWzBdLmxvY2F0aW9uKTtcbiAgICBjb25zdCBbZXRhLCBzZXRFdGFdID0gdXNlU3RhdGUoKTtcbiAgXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB3YXRjaElkID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIHNldEN1cnJlbnRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgY3VycmVudCBwb3NpdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gIFxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uY2xlYXJXYXRjaCh3YXRjaElkKTtcbiAgICAgIH07XG4gIH0sIFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hcCkge1xuICAgICAgICBzdG9wcy5mb3JFYWNoKChzdG9wLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbmV3IHdpbmRvdy5nb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdG9wLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBpbmRleCArIDEgKyBcIlwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBzdG9wLm5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbbWFwXSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5leHRTdG9wSW5kZXggPSBNYXRoLm1pbihcbiAgICAgICAgc3RvcHMuZmluZEluZGV4KChzdG9wKSA9PiBzdG9wLm5hbWUgPT09IFwiS2ltaXJvbmtvXCIpICsgMSxcbiAgICAgICAgc3RvcHMubGVuZ3RoIC0gMVxuICAgICk7XG4gICAgY29uc3QgbmV4dFN0b3AgPSBzdG9wc1tuZXh0U3RvcEluZGV4XTtcbiAgICBjb25zdCBkaXN0YW5jZVRvTmV4dFN0b3AgPSBjYWxjdWxhdGVEaXN0YW5jZShcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxhdCxcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLmxuZyxcbiAgICAgICAgbmV4dFN0b3AubG9jYXRpb24ubGF0LFxuICAgICAgICBuZXh0U3RvcC5sb2NhdGlvbi5sbmdcbiAgICApO1xuICAgIGNvbnN0IGV0YUluU2Vjb25kcyA9IChkaXN0YW5jZVRvTmV4dFN0b3AgLyBhdmVyYWdlU3BlZWQpICogMzYwMDtcbiAgICBjb25zdCBldGFJbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKGV0YUluU2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBldGFJbktpbG9tZXRlcnMgPSBNYXRoLnJvdW5kKGRpc3RhbmNlVG9OZXh0U3RvcCAqIDEwMCkgLyAxMDA7XG4gIFxuICBcbiAgICBBTklNQVRJT05fTVMgPSBldGFJbk1pbnV0ZXMgKiA2MDAwMDtcbiAgICBcbiAgICBzZXRFdGEoe1xuICAgICAgICBkaXN0YW5jZTogZXRhSW5LaWxvbWV0ZXJzLFxuICAgICAgICB0aW1lOiBldGFJbk1pbnV0ZXMsXG4gICAgICAgIG5leHRTdG9wOiBuZXh0U3RvcC5uYW1lLFxuICAgIH0pO1xuICB9LCBbY3VycmVudFBvc2l0aW9uXSk7XG4gIFxuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2hEaXJlY3Rpb25zKG9yaWdpbiwgZGVzdGluYXRpb24sIHNldFJvdXRlKTtcbiAgICB9LCBbb3JpZ2luLCBkZXN0aW5hdGlvbl0pO1xuICBcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICB7ZXRhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XG4gICAgICAgICAgICA8aDI+RGlyZWN0aW9uczwvaDI+XG4gICAgICAgICAgICA8aDM+TmV4dCBTdG9wPC9oMz5cbiAgICAgICAgICAgIDxwPntldGEubmV4dFN0b3B9PC9wPlxuICAgICAgICAgICAgPGgzPkRpc3RhbmNlIHRvIE5leHQgU3RvcDwvaDM+XG4gICAgICAgICAgICA8cD57ZXRhLmRpc3RhbmNlfSBrbTwvcD5cbiAgICAgICAgICAgIDxoMz5Fc3RpbWF0ZWQgVGltZSB0byBOZXh0IFN0b3A8L2gzPlxuICAgICAgICAgICAgPHA+e2V0YS50aW1lfSBtaW51dGVzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJmZXRjaERpcmVjdGlvbnMiLCJzdG9wcyIsIm5hbWUiLCJsb2NhdGlvbiIsImxhdCIsImxuZyIsIkFOSU1BVElPTl9NUyIsIkRpcmVjdGlvbnMiLCJzZXRSb3V0ZSIsIm1hcCIsIm9yaWdpbiIsImRlc3RpbmF0aW9uIiwiYXZlcmFnZVNwZWVkIiwiY3VycmVudFBvc2l0aW9uIiwic2V0Q3VycmVudFBvc2l0aW9uIiwiZXRhIiwic2V0RXRhIiwid2F0Y2hJZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhcldhdGNoIiwiZm9yRWFjaCIsInN0b3AiLCJpbmRleCIsIndpbmRvdyIsImdvb2dsZSIsIm1hcHMiLCJNYXJrZXIiLCJsYWJlbCIsInRpdGxlIiwibmV4dFN0b3BJbmRleCIsIk1hdGgiLCJtaW4iLCJmaW5kSW5kZXgiLCJsZW5ndGgiLCJuZXh0U3RvcCIsImRpc3RhbmNlVG9OZXh0U3RvcCIsImNhbGN1bGF0ZURpc3RhbmNlIiwiZXRhSW5TZWNvbmRzIiwiZXRhSW5NaW51dGVzIiwicm91bmQiLCJldGFJbktpbG9tZXRlcnMiLCJkaXN0YW5jZSIsInRpbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Directions.js\n"));

/***/ })

});
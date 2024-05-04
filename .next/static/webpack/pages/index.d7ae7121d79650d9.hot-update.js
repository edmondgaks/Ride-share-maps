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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ANIMATION_MS\": function() { return /* binding */ ANIMATION_MS; },\n/* harmony export */   \"default\": function() { return /* binding */ Directions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchDirections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchDirections */ \"./utils/fetchDirections.js\");\n/* harmony import */ var _utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/calculateDistance */ \"./utils/calculateDistance.js\");\n/* harmony import */ var _constants_stops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/stops */ \"./constants/stops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nlet ANIMATION_MS = 10000;\nfunction Directions(param) {\n    let { setRoute , map  } = param;\n    _s();\n    const [currentPosition, setCurrentPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0].location);\n    const [nextStop, setNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [distanceToNextStop, setDistanceToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [timeToNextStop, setTimeToNextStop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const averageSpeed = 60; // km/h\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const watchId = navigator.geolocation.watchPosition((position)=>{\n            setCurrentPosition({\n                lat: position.coords.latitude,\n                lng: position.coords.longitude\n            });\n        }, (error)=>{\n            console.error(\"Error getting current position:\", error);\n        });\n        return ()=>{\n            navigator.geolocation.clearWatch(watchId);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (map) {\n            _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach((stop, index)=>{\n                new window.google.maps.Marker({\n                    position: stop.location,\n                    map: map,\n                    label: index + 1 + \"\",\n                    title: stop.name\n                });\n            });\n        }\n    }, [\n        map\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Find the index of the next stop\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>stop.name === nextStop.name);\n        // Calculate the distance and time to the next stop\n        if (nextStopIndex !== -1) {\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, nextStop.location.lat, nextStop.location.lng);\n            const time = distance / averageSpeed; // time = distance / speed (hours)\n            setDistanceToNextStop(distance);\n            setTimeToNextStop(time);\n        }\n    }, [\n        currentPosition,\n        nextStop\n    ]);\n    // Update next stop when the car reaches a stop\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nextStopIndex = _constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findIndex((stop)=>{\n            const distance = (0,_utils_calculateDistance__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentPosition.lat, currentPosition.lng, stop.location.lat, stop.location.lng);\n            // You can define a threshold distance to consider the car has reached the stop\n            return distance < 0.1; // For example, consider the car has reached the stop if it's within 100 meters\n        });\n        if (nextStopIndex !== -1) {\n            setNextStop(_constants_stops__WEBPACK_IMPORTED_MODULE_4__[\"default\"][nextStopIndex]);\n        }\n    }, [\n        currentPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"directions\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Directions\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Nyabugogo - Kimironko\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: \"Next Stop\"\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: nextStop.name\n                }, void 0, false, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Distance to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        distanceToNextStop.toFixed(2),\n                        \" km\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: [\n                        \"Estimated Time to \",\n                        nextStop.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        (timeToNextStop * 60).toFixed(0),\n                        \" minutes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edmond/Documents/google-maps-threejs/components/Directions.js\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Directions, \"ilrjf9n6viAqO4AN4SZ3a8PA6vc=\");\n_c = Directions;\nvar _c;\n$RefreshReg$(_c, \"Directions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RpcmVjdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBQ0o7QUFDSTtBQUNwQjtBQU1oQyxJQUFJTyxlQUFlLE1BQU07QUFFakIsU0FBU0MsV0FBVyxLQUFpQixFQUFFO1FBQW5CLEVBQUVDLFNBQVEsRUFBRUMsSUFBRyxFQUFFLEdBQWpCOztJQUMvQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdYLCtDQUFRQSxDQUFDSyxvRUFBaUI7SUFDeEUsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDZSxvQkFBb0JDLHNCQUFzQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDN0QsTUFBTSxDQUFDaUIsZ0JBQWdCQyxrQkFBa0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1tQixlQUFlLElBQUksT0FBTztJQUVoQ2xCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNbUIsVUFBVUMsVUFBVUMsV0FBVyxDQUFDQyxhQUFhLENBQ2pELENBQUNDLFdBQWE7WUFDWmIsbUJBQW1CO2dCQUNqQmMsS0FBS0QsU0FBU0UsTUFBTSxDQUFDQyxRQUFRO2dCQUM3QkMsS0FBS0osU0FBU0UsTUFBTSxDQUFDRyxTQUFTO1lBQ2hDO1FBQ0YsR0FDQSxDQUFDQyxRQUFVO1lBQ1RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ25EO1FBR0YsT0FBTyxJQUFNO1lBQ1hULFVBQVVDLFdBQVcsQ0FBQ1UsVUFBVSxDQUFDWjtRQUNuQztJQUNGLEdBQUcsRUFBRTtJQUVMbkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLEtBQUs7WUFDUEosZ0VBQWEsQ0FBQyxDQUFDNkIsTUFBTUMsUUFBVTtnQkFDN0IsSUFBSUMsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztvQkFDNUJmLFVBQVVVLEtBQUt0QixRQUFRO29CQUN2QkgsS0FBS0E7b0JBQ0wrQixPQUFPTCxRQUFRLElBQUk7b0JBQ25CTSxPQUFPUCxLQUFLUSxJQUFJO2dCQUNsQjtZQUNGO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ2pDO0tBQUk7SUFFUlIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGtDQUFrQztRQUNsQyxNQUFNMEMsZ0JBQWdCdEMsa0VBQWUsQ0FDbkMsQ0FBQzZCLE9BQVNBLEtBQUtRLElBQUksS0FBSzdCLFNBQVM2QixJQUFJO1FBR3ZDLG1EQUFtRDtRQUNuRCxJQUFJQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCLE1BQU1FLFdBQVd6QyxvRUFBaUJBLENBQ2hDTSxnQkFBZ0JlLEdBQUcsRUFDbkJmLGdCQUFnQmtCLEdBQUcsRUFDbkJmLFNBQVNELFFBQVEsQ0FBQ2EsR0FBRyxFQUNyQlosU0FBU0QsUUFBUSxDQUFDZ0IsR0FBRztZQUV2QixNQUFNa0IsT0FBT0QsV0FBVzFCLGNBQWMsa0NBQWtDO1lBQ3hFSCxzQkFBc0I2QjtZQUN0QjNCLGtCQUFrQjRCO1FBQ3BCLENBQUM7SUFDSCxHQUFHO1FBQUNwQztRQUFpQkc7S0FBUztJQUU5QiwrQ0FBK0M7SUFDL0NaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNMEMsZ0JBQWdCdEMsa0VBQWUsQ0FBQyxDQUFDNkIsT0FBUztZQUM5QyxNQUFNVyxXQUFXekMsb0VBQWlCQSxDQUNoQ00sZ0JBQWdCZSxHQUFHLEVBQ25CZixnQkFBZ0JrQixHQUFHLEVBQ25CTSxLQUFLdEIsUUFBUSxDQUFDYSxHQUFHLEVBQ2pCUyxLQUFLdEIsUUFBUSxDQUFDZ0IsR0FBRztZQUVuQiwrRUFBK0U7WUFDL0UsT0FBT2lCLFdBQVcsS0FBSywrRUFBK0U7UUFDeEc7UUFDQSxJQUFJRixrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hCN0IsWUFBWVQsd0RBQUssQ0FBQ3NDLGNBQWM7UUFDbEMsQ0FBQztJQUNILEdBQUc7UUFBQ2pDO0tBQWdCO0lBRXBCLHFCQUNFO2tCQUNFLDRFQUFDcUM7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNBOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHdEMsU0FBUzZCLElBQUk7Ozs7Ozs4QkFDakIsOERBQUNROzt3QkFBRzt3QkFBYXJDLFNBQVM2QixJQUFJOzs7Ozs7OzhCQUM5Qiw4REFBQ1M7O3dCQUFHcEMsbUJBQW1CcUMsT0FBTyxDQUFDO3dCQUFHOzs7Ozs7OzhCQUNsQyw4REFBQ0Y7O3dCQUFHO3dCQUFtQnJDLFNBQVM2QixJQUFJOzs7Ozs7OzhCQUNwQyw4REFBQ1M7O3dCQUFJbEMsQ0FBQUEsaUJBQWlCLEVBQUMsRUFBR21DLE9BQU8sQ0FBQzt3QkFBRzs7Ozs7Ozs7Ozs7Ozs7QUFJN0MsQ0FBQztHQXpGcUI3QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RpcmVjdGlvbnMuanM/NDIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hEaXJlY3Rpb25zIGZyb20gXCIuLi91dGlscy9mZXRjaERpcmVjdGlvbnNcIjtcbmltcG9ydCBjYWxjdWxhdGVEaXN0YW5jZSBmcm9tIFwiLi4vdXRpbHMvY2FsY3VsYXRlRGlzdGFuY2VcIjtcbmltcG9ydCBzdG9wcyBmcm9tIFwiLi4vY29uc3RhbnRzL3N0b3BzXCI7XG5cblxuXG5cblxuZXhwb3J0IGxldCBBTklNQVRJT05fTVMgPSAxMDAwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlyZWN0aW9ucyh7IHNldFJvdXRlLCBtYXAgfSkge1xuICAgIGNvbnN0IFtjdXJyZW50UG9zaXRpb24sIHNldEN1cnJlbnRQb3NpdGlvbl0gPSB1c2VTdGF0ZShzdG9wc1swXS5sb2NhdGlvbik7XG4gICAgY29uc3QgW25leHRTdG9wLCBzZXROZXh0U3RvcF0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2Rpc3RhbmNlVG9OZXh0U3RvcCwgc2V0RGlzdGFuY2VUb05leHRTdG9wXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0aW1lVG9OZXh0U3RvcCwgc2V0VGltZVRvTmV4dFN0b3BdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgYXZlcmFnZVNwZWVkID0gNjA7IC8vIGttL2hcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHdhdGNoSWQgPSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcbiAgICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFBvc2l0aW9uKHtcbiAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBjdXJyZW50IHBvc2l0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIFxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZCk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgc3RvcHMuZm9yRWFjaCgoc3RvcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RvcC5sb2NhdGlvbixcbiAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgbGFiZWw6IGluZGV4ICsgMSArIFwiXCIsXG4gICAgICAgICAgICB0aXRsZTogc3RvcC5uYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbbWFwXSk7XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBzdG9wXG4gICAgICBjb25zdCBuZXh0U3RvcEluZGV4ID0gc3RvcHMuZmluZEluZGV4KFxuICAgICAgICAoc3RvcCkgPT4gc3RvcC5uYW1lID09PSBuZXh0U3RvcC5uYW1lXG4gICAgICApO1xuICBcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYW5kIHRpbWUgdG8gdGhlIG5leHQgc3RvcFxuICAgICAgaWYgKG5leHRTdG9wSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLmxhdCxcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ubG5nLFxuICAgICAgICAgIG5leHRTdG9wLmxvY2F0aW9uLmxhdCxcbiAgICAgICAgICBuZXh0U3RvcC5sb2NhdGlvbi5sbmdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdGltZSA9IGRpc3RhbmNlIC8gYXZlcmFnZVNwZWVkOyAvLyB0aW1lID0gZGlzdGFuY2UgLyBzcGVlZCAoaG91cnMpXG4gICAgICAgIHNldERpc3RhbmNlVG9OZXh0U3RvcChkaXN0YW5jZSk7XG4gICAgICAgIHNldFRpbWVUb05leHRTdG9wKHRpbWUpO1xuICAgICAgfVxuICAgIH0sIFtjdXJyZW50UG9zaXRpb24sIG5leHRTdG9wXSk7XG4gIFxuICAgIC8vIFVwZGF0ZSBuZXh0IHN0b3Agd2hlbiB0aGUgY2FyIHJlYWNoZXMgYSBzdG9wXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IG5leHRTdG9wSW5kZXggPSBzdG9wcy5maW5kSW5kZXgoKHN0b3ApID0+IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBjYWxjdWxhdGVEaXN0YW5jZShcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ubGF0LFxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi5sbmcsXG4gICAgICAgICAgc3RvcC5sb2NhdGlvbi5sYXQsXG4gICAgICAgICAgc3RvcC5sb2NhdGlvbi5sbmdcbiAgICAgICAgKTtcbiAgICAgICAgLy8gWW91IGNhbiBkZWZpbmUgYSB0aHJlc2hvbGQgZGlzdGFuY2UgdG8gY29uc2lkZXIgdGhlIGNhciBoYXMgcmVhY2hlZCB0aGUgc3RvcFxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCAwLjE7IC8vIEZvciBleGFtcGxlLCBjb25zaWRlciB0aGUgY2FyIGhhcyByZWFjaGVkIHRoZSBzdG9wIGlmIGl0J3Mgd2l0aGluIDEwMCBtZXRlcnNcbiAgICAgIH0pO1xuICAgICAgaWYgKG5leHRTdG9wSW5kZXggIT09IC0xKSB7XG4gICAgICAgIHNldE5leHRTdG9wKHN0b3BzW25leHRTdG9wSW5kZXhdKTtcbiAgICAgIH1cbiAgICB9LCBbY3VycmVudFBvc2l0aW9uXSk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cbiAgICAgICAgICA8aDQ+RGlyZWN0aW9uczwvaDQ+XG4gICAgICAgICAgPGg0Pk55YWJ1Z29nbyAtIEtpbWlyb25rbzwvaDQ+XG4gICAgICAgICAgPGg1Pk5leHQgU3RvcDwvaDU+XG4gICAgICAgICAgPHA+e25leHRTdG9wLm5hbWV9PC9wPlxuICAgICAgICAgIDxoNT5EaXN0YW5jZSB0byB7bmV4dFN0b3AubmFtZX08L2g1PlxuICAgICAgICAgIDxwPntkaXN0YW5jZVRvTmV4dFN0b3AudG9GaXhlZCgyKX0ga208L3A+XG4gICAgICAgICAgPGg1PkVzdGltYXRlZCBUaW1lIHRvIHtuZXh0U3RvcC5uYW1lfTwvaDU+XG4gICAgICAgICAgPHA+eyh0aW1lVG9OZXh0U3RvcCAqIDYwKS50b0ZpeGVkKDApfSBtaW51dGVzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJmZXRjaERpcmVjdGlvbnMiLCJjYWxjdWxhdGVEaXN0YW5jZSIsInN0b3BzIiwiQU5JTUFUSU9OX01TIiwiRGlyZWN0aW9ucyIsInNldFJvdXRlIiwibWFwIiwiY3VycmVudFBvc2l0aW9uIiwic2V0Q3VycmVudFBvc2l0aW9uIiwibG9jYXRpb24iLCJuZXh0U3RvcCIsInNldE5leHRTdG9wIiwiZGlzdGFuY2VUb05leHRTdG9wIiwic2V0RGlzdGFuY2VUb05leHRTdG9wIiwidGltZVRvTmV4dFN0b3AiLCJzZXRUaW1lVG9OZXh0U3RvcCIsImF2ZXJhZ2VTcGVlZCIsIndhdGNoSWQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiZXJyb3IiLCJjb25zb2xlIiwiY2xlYXJXYXRjaCIsImZvckVhY2giLCJzdG9wIiwiaW5kZXgiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiTWFya2VyIiwibGFiZWwiLCJ0aXRsZSIsIm5hbWUiLCJuZXh0U3RvcEluZGV4IiwiZmluZEluZGV4IiwiZGlzdGFuY2UiLCJ0aW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDQiLCJoNSIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Directions.js\n"));

/***/ })

});
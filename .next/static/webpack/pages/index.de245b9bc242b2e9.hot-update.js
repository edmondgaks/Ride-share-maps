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

/***/ "./utils/fetchDirections.js":
/*!**********************************!*\
  !*** ./utils/fetchDirections.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ fetchDirections; }\n/* harmony export */ });\n/* harmony import */ var use_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-places-autocomplete */ \"./node_modules/use-places-autocomplete/dist/index.esm.js\");\n\nconst stops = [\n    {\n        name: \"Nyabugogo\",\n        location: {\n            lat: -1.939826787816454,\n            lng: 30.0445426438232\n        }\n    },\n    {\n        name: \"Stop A\",\n        location: {\n            lat: -1.9355377074007851,\n            lng: 30.060163829002217\n        }\n    },\n    {\n        name: \"Stop B\",\n        location: {\n            lat: -1.9358808342336546,\n            lng: 30.08024820994666\n        }\n    },\n    {\n        name: \"Stop C\",\n        location: {\n            lat: -1.9489196023037583,\n            lng: 30.092607828989397\n        }\n    },\n    {\n        name: \"Stop D\",\n        location: {\n            lat: -1.9592132952818164,\n            lng: 30.106684061788073\n        }\n    },\n    {\n        name: \"Stop E\",\n        location: {\n            lat: -1.9487480402200394,\n            lng: 30.126596781356923\n        }\n    },\n    {\n        name: \"Kimironko\",\n        location: {\n            lat: -1.9365670876910166,\n            lng: 30.13020167024439\n        }\n    }\n];\nasync function fetchDirections(origin, destination, setRoute) {\n    const [originResults, destinationResults] = await Promise.all([\n        (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.getGeocode)({\n            address: origin\n        }),\n        (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.getGeocode)({\n            address: destination\n        })\n    ]);\n    const [originLocation, destinationLocation] = await Promise.all([\n        (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.getLatLng)(originResults[0]),\n        (0,use_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.getLatLng)(destinationResults[0])\n    ]);\n    const waypoints = stops.map((stop)=>({\n            location: \"\".concat(stop.location.lat, \",\").concat(stop.location.lng),\n            stopover: true\n        }));\n    const service = new google.maps.DirectionsService();\n    service.route({\n        origin: originLocation,\n        destination: destinationLocation,\n        waypoints: waypoints,\n        optimizeWaypoints: true,\n        travelMode: google.maps.TravelMode.DRIVING\n    }, (result, status)=>{\n        if (status === \"OK\" && result) {\n            const route = result.routes[0].overview_path.map((path)=>({\n                    lat: path.lat(),\n                    lng: path.lng()\n                }));\n            setRoute(route);\n        }\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZXRjaERpcmVjdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBZ0U7QUFFaEUsTUFBTUUsUUFBUTtJQUNWO1FBQUVDLE1BQU07UUFBYUMsVUFBVTtZQUFFQyxLQUFLLENBQUM7WUFBbUJDLEtBQU07UUFBaUI7SUFBRTtJQUNuRjtRQUFFSCxNQUFNO1FBQVVDLFVBQVU7WUFBRUMsS0FBSyxDQUFDO1lBQW9CQyxLQUFLO1FBQW1CO0lBQUU7SUFDbEY7UUFBRUgsTUFBTTtRQUFVQyxVQUFVO1lBQUVDLEtBQUssQ0FBQztZQUFvQkMsS0FBSztRQUFrQjtJQUFFO0lBQ2pGO1FBQUVILE1BQU07UUFBVUMsVUFBVTtZQUFFQyxLQUFLLENBQUM7WUFBb0JDLEtBQUs7UUFBbUI7SUFBRTtJQUNsRjtRQUFFSCxNQUFNO1FBQVVDLFVBQVU7WUFBRUMsS0FBSyxDQUFDO1lBQW9CQyxLQUFLO1FBQW1CO0lBQUU7SUFDbEY7UUFBRUgsTUFBTTtRQUFVQyxVQUFVO1lBQUVDLEtBQUssQ0FBQztZQUFvQkMsS0FBSztRQUFtQjtJQUFFO0lBQ2xGO1FBQUVILE1BQU07UUFBYUMsVUFBVTtZQUFFQyxLQUFLLENBQUM7WUFBb0JDLEtBQUs7UUFBa0I7SUFBRTtDQUN2RjtBQUVjLGVBQWVDLGdCQUFnQkMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRTtJQUN6RSxNQUFNLENBQUNDLGVBQWVDLG1CQUFtQixHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztRQUM1RGQsbUVBQVVBLENBQUM7WUFBRWUsU0FBU1A7UUFBTztRQUM3QlIsbUVBQVVBLENBQUM7WUFBRWUsU0FBU047UUFBWTtLQUNuQztJQUVELE1BQU0sQ0FBQ08sZ0JBQWdCQyxvQkFBb0IsR0FBRyxNQUFNSixRQUFRQyxHQUFHLENBQUM7UUFDOURiLGtFQUFTQSxDQUFDVSxhQUFhLENBQUMsRUFBRTtRQUMxQlYsa0VBQVNBLENBQUNXLGtCQUFrQixDQUFDLEVBQUU7S0FDaEM7SUFFRCxNQUFNTSxZQUFZaEIsTUFBTWlCLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztZQUNuQ2hCLFVBQVUsR0FBd0JnQixPQUFyQkEsS0FBS2hCLFFBQVEsQ0FBQ0MsR0FBRyxFQUFDLEtBQXFCLE9BQWxCZSxLQUFLaEIsUUFBUSxDQUFDRSxHQUFHO1lBQ25EZSxVQUFVLElBQUk7UUFDaEI7SUFDQSxNQUFNQyxVQUFVLElBQUlDLE9BQU9DLElBQUksQ0FBQ0MsaUJBQWlCO0lBQ2pESCxRQUFRSSxLQUFLLENBQ1g7UUFDRWxCLFFBQVFRO1FBQ1JQLGFBQWFRO1FBQ2JDLFdBQVdBO1FBQ1hTLG1CQUFtQixJQUFJO1FBQ3ZCQyxZQUFZTCxPQUFPQyxJQUFJLENBQUNLLFVBQVUsQ0FBQ0MsT0FBTztJQUM1QyxHQUNBLENBQUNDLFFBQVFDLFNBQVc7UUFDbEIsSUFBSUEsV0FBVyxRQUFRRCxRQUFRO1lBQzdCLE1BQU1MLFFBQVFLLE9BQU9FLE1BQU0sQ0FBQyxFQUFFLENBQUNDLGFBQWEsQ0FBQ2YsR0FBRyxDQUFDLENBQUNnQixPQUFVO29CQUMxRDlCLEtBQUs4QixLQUFLOUIsR0FBRztvQkFDYkMsS0FBSzZCLEtBQUs3QixHQUFHO2dCQUNmO1lBQ0FJLFNBQVNnQjtRQUNYLENBQUM7SUFDSDtBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2hEaXJlY3Rpb25zLmpzP2Q3YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0R2VvY29kZSwgZ2V0TGF0TG5nIH0gZnJvbSBcInVzZS1wbGFjZXMtYXV0b2NvbXBsZXRlXCI7XG5cbmNvbnN0IHN0b3BzID0gW1xuICAgIHsgbmFtZTogXCJOeWFidWdvZ29cIiwgbG9jYXRpb246IHsgbGF0OiAtMS45Mzk4MjY3ODc4MTY0NTQsIGxuZzogIDMwLjA0NDU0MjY0MzgyMzIgfSB9LFxuICAgIHsgbmFtZTogXCJTdG9wIEFcIiwgbG9jYXRpb246IHsgbGF0OiAtMS45MzU1Mzc3MDc0MDA3ODUxLCBsbmc6IDMwLjA2MDE2MzgyOTAwMjIxNyB9IH0sXG4gICAgeyBuYW1lOiBcIlN0b3AgQlwiLCBsb2NhdGlvbjogeyBsYXQ6IC0xLjkzNTg4MDgzNDIzMzY1NDYsIGxuZzogMzAuMDgwMjQ4MjA5OTQ2NjYgfSB9LFxuICAgIHsgbmFtZTogXCJTdG9wIENcIiwgbG9jYXRpb246IHsgbGF0OiAtMS45NDg5MTk2MDIzMDM3NTgzLCBsbmc6IDMwLjA5MjYwNzgyODk4OTM5NyB9IH0sXG4gICAgeyBuYW1lOiBcIlN0b3AgRFwiLCBsb2NhdGlvbjogeyBsYXQ6IC0xLjk1OTIxMzI5NTI4MTgxNjQsIGxuZzogMzAuMTA2Njg0MDYxNzg4MDczIH0gfSxcbiAgICB7IG5hbWU6IFwiU3RvcCBFXCIsIGxvY2F0aW9uOiB7IGxhdDogLTEuOTQ4NzQ4MDQwMjIwMDM5NCwgbG5nOiAzMC4xMjY1OTY3ODEzNTY5MjMgfSB9LFxuICAgIHsgbmFtZTogXCJLaW1pcm9ua29cIiwgbG9jYXRpb246IHsgbGF0OiAtMS45MzY1NjcwODc2OTEwMTY2LCBsbmc6IDMwLjEzMDIwMTY3MDI0NDM5IH0gfSwgLy8gRW5kaW5nIFBvaW50XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaERpcmVjdGlvbnMob3JpZ2luLCBkZXN0aW5hdGlvbiwgc2V0Um91dGUpIHtcbiAgICBjb25zdCBbb3JpZ2luUmVzdWx0cywgZGVzdGluYXRpb25SZXN1bHRzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldEdlb2NvZGUoeyBhZGRyZXNzOiBvcmlnaW4gfSksXG4gICAgICBnZXRHZW9jb2RlKHsgYWRkcmVzczogZGVzdGluYXRpb24gfSksXG4gICAgXSk7XG4gIFxuICAgIGNvbnN0IFtvcmlnaW5Mb2NhdGlvbiwgZGVzdGluYXRpb25Mb2NhdGlvbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRMYXRMbmcob3JpZ2luUmVzdWx0c1swXSksXG4gICAgICBnZXRMYXRMbmcoZGVzdGluYXRpb25SZXN1bHRzWzBdKSxcbiAgICBdKTtcbiAgXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gc3RvcHMubWFwKHN0b3AgPT4gKHtcbiAgICAgIGxvY2F0aW9uOiBgJHtzdG9wLmxvY2F0aW9uLmxhdH0sJHtzdG9wLmxvY2F0aW9uLmxuZ31gLFxuICAgICAgc3RvcG92ZXI6IHRydWVcbiAgICB9KSk7XG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgIHNlcnZpY2Uucm91dGUoXG4gICAgICB7XG4gICAgICAgIG9yaWdpbjogb3JpZ2luTG9jYXRpb24sXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbkxvY2F0aW9uLFxuICAgICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcbiAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRydWUsXG4gICAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcbiAgICAgIH0sXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJPS1wiICYmIHJlc3VsdCkge1xuICAgICAgICAgIGNvbnN0IHJvdXRlID0gcmVzdWx0LnJvdXRlc1swXS5vdmVydmlld19wYXRoLm1hcCgocGF0aCkgPT4gKHtcbiAgICAgICAgICAgIGxhdDogcGF0aC5sYXQoKSxcbiAgICAgICAgICAgIGxuZzogcGF0aC5sbmcoKSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgc2V0Um91dGUocm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfSJdLCJuYW1lcyI6WyJnZXRHZW9jb2RlIiwiZ2V0TGF0TG5nIiwic3RvcHMiLCJuYW1lIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJmZXRjaERpcmVjdGlvbnMiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsInNldFJvdXRlIiwib3JpZ2luUmVzdWx0cyIsImRlc3RpbmF0aW9uUmVzdWx0cyIsIlByb21pc2UiLCJhbGwiLCJhZGRyZXNzIiwib3JpZ2luTG9jYXRpb24iLCJkZXN0aW5hdGlvbkxvY2F0aW9uIiwid2F5cG9pbnRzIiwibWFwIiwic3RvcCIsInN0b3BvdmVyIiwic2VydmljZSIsImdvb2dsZSIsIm1hcHMiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwib3B0aW1pemVXYXlwb2ludHMiLCJ0cmF2ZWxNb2RlIiwiVHJhdmVsTW9kZSIsIkRSSVZJTkciLCJyZXN1bHQiLCJzdGF0dXMiLCJyb3V0ZXMiLCJvdmVydmlld19wYXRoIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetchDirections.js\n"));

/***/ })

});
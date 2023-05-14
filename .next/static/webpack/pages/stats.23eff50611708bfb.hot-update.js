"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stats",{

/***/ "./components/TeamStats.js":
/*!*********************************!*\
  !*** ./components/TeamStats.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamStats; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 3px solid gray;\\n    border-radius: 10px;\\n    margin-bottom: 2vh;\\n    background-color: aliceblue;\\n    font-size: 1.5em;\\n\\n    h1 {\\n        margin-left: 2vw;\\n    }\\n\\n    #teamNotFound {\\n        color: red;\\n    }\\n\\n    p {\\n        margin-left: 4vw;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nfunction TeamStats(param) {\n    let { allMatches , teamNumber  } = param;\n    //Controls something idk what yet\n    //   const [currData, setCurrData] = useState(data1);\n    //   const changeToOC = (event) => {\n    //     event.preventDefault();\n    //     setEventName(\"Orange County Regional\");\n    //     setEventKey(\"2023caoc\");\n    //     setCurrData(data1);\n    // };\n    //Stores all the matches for the current team\n    var currTeamMatches = [];\n    //All the averages to be stored\n    var avgAutoGamePiecePts = 0;\n    var avgAutoGamePieceCount = 0;\n    var avgAutoPoints = 0;\n    var avgEndGameChargeStationPoints = 0;\n    var avgFoulPoints = 0;\n    var avgLinkPoints = 0;\n    var avgTeleopGamePieceCount = 0;\n    var avgTeleopGamePiecePoints = 0;\n    var avgTotalPoints = 0;\n    function isInvalidTeam() {\n        if (currTeamMatches.length === 0) {\n            return true;\n        }\n        return false;\n    }\n    //Functions for calculating stats\n    //Updates currData to only match the given team number\n    function getAllMatchesForTeam() {\n        for(var i = 0; i < allMatches.length; i++){\n            if (IsTeamOnBlueAlliance(allMatches[i]) || IsTeamOnRedAlliance(allMatches[i])) {\n                currTeamMatches.push(allMatches[i]);\n            }\n        }\n    }\n    //Calculates the averages for the current event \n    function calcEventAverages() {\n        for(var i = 0; i < allMatches.length; i++){\n            //Auto game pieces\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.red.autoGamePieceCount;\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.blue.autoGamePieceCount;\n            //Auto game piece pts\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.red.autoGamePiecePoints;\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.blue.autoGamePiecePoints;\n        }\n        //Convert totals to average\n        avgAutoGamePieceCount = avgAutoGamePieceCount / (allMatches.length * 2);\n        avgAutoGamePiecePts = avgAutoGamePiecePts / (allMatches.length * 2);\n    }\n    //returns true/false if team is on the blue alliance\n    function IsTeamOnBlueAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.blue.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    //returns true/false if team is on the red alliance\n    function IsTeamOnRedAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.red.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        children: [\n            getAllMatchesForTeam(),\n            isInvalidTeam() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                id: \"teamNotFound\",\n                children: [\n                    \"Team \",\n                    teamNumber,\n                    \" was not at this event.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \"Testing Score Breakdown: \",\n                    currTeamMatches[0].score_breakdown.red.autoGamePieceCount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n        lineNumber: 85,\n        columnNumber: 12\n    }, this);\n}\n_c = TeamStats;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"TeamStats\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLO0lBQ2hCO0lBRUEscUJBQU8sOERBQUNLOztZQUNIakI7WUFFQUYsZ0NBQ0csOERBQUNvQjtnQkFBR0MsSUFBRzs7b0JBQWU7b0JBQU1oQztvQkFBVzs7Ozs7O3FDQUV2Qyw4REFBQ2lDOztvQkFBRTtvQkFBMEJoQyxlQUFlLENBQUMsRUFBRSxDQUFDa0IsZUFBZSxDQUFDQyxHQUFHLENBQUNDLGtCQUFrQjs7Ozs7O29CQUN6Rjs7Ozs7OztBQUdULENBQUM7S0EzRnVCdkI7QUE2RnhCLE1BQU1nQyxVQUFVakMsNkRBQVU7TUFBcEJpQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlYW1TdGF0cy5qcz9lMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtU3RhdHMoe2FsbE1hdGNoZXMsIHRlYW1OdW1iZXJ9KSB7XG4gICAgICAvL0NvbnRyb2xzIHNvbWV0aGluZyBpZGsgd2hhdCB5ZXRcbiAgICAvLyAgIGNvbnN0IFtjdXJyRGF0YSwgc2V0Q3VyckRhdGFdID0gdXNlU3RhdGUoZGF0YTEpO1xuICAgIC8vICAgY29uc3QgY2hhbmdlVG9PQyA9IChldmVudCkgPT4ge1xuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBzZXRFdmVudE5hbWUoXCJPcmFuZ2UgQ291bnR5IFJlZ2lvbmFsXCIpO1xuICAgIC8vICAgICBzZXRFdmVudEtleShcIjIwMjNjYW9jXCIpO1xuICAgIC8vICAgICBzZXRDdXJyRGF0YShkYXRhMSk7XG4gICAgLy8gfTtcblxuICAgICAgLy9TdG9yZXMgYWxsIHRoZSBtYXRjaGVzIGZvciB0aGUgY3VycmVudCB0ZWFtXG4gICAgICB2YXIgY3VyclRlYW1NYXRjaGVzID0gW107XG5cbiAgICAgIC8vQWxsIHRoZSBhdmVyYWdlcyB0byBiZSBzdG9yZWRcbiAgICAgIHZhciBhdmdBdXRvR2FtZVBpZWNlUHRzID0gMDtcbiAgICAgIHZhciBhdmdBdXRvR2FtZVBpZWNlQ291bnQgPSAwO1xuICAgICAgdmFyIGF2Z0F1dG9Qb2ludHMgPSAwO1xuICAgICAgdmFyIGF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdGb3VsUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdMaW5rUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdUZWxlb3BHYW1lUGllY2VDb3VudCA9IDA7XG4gICAgICB2YXIgYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdUb3RhbFBvaW50cyA9IDA7XG5cbiAgICAgIGZ1bmN0aW9uIGlzSW52YWxpZFRlYW0oKSB7XG4gICAgICAgIGlmIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9GdW5jdGlvbnMgZm9yIGNhbGN1bGF0aW5nIHN0YXRzXG4gICAgICAvL1VwZGF0ZXMgY3VyckRhdGEgdG8gb25seSBtYXRjaCB0aGUgZ2l2ZW4gdGVhbSBudW1iZXJcbiAgICAgIGZ1bmN0aW9uIGdldEFsbE1hdGNoZXNGb3JUZWFtKCl7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWF0Y2hlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoSXNUZWFtT25CbHVlQWxsaWFuY2UoYWxsTWF0Y2hlc1tpXSkgfHwgSXNUZWFtT25SZWRBbGxpYW5jZShhbGxNYXRjaGVzW2ldKSl7XG4gICAgICAgICAgICAgICAgY3VyclRlYW1NYXRjaGVzLnB1c2goYWxsTWF0Y2hlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9DYWxjdWxhdGVzIHRoZSBhdmVyYWdlcyBmb3IgdGhlIGN1cnJlbnQgZXZlbnQgXG4gICAgICBmdW5jdGlvbiBjYWxjRXZlbnRBdmVyYWdlcygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxNYXRjaGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vQXV0byBnYW1lIHBpZWNlc1xuICAgICAgICAgICAgYXZnQXV0b0dhbWVQaWVjZUNvdW50ICs9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5hdXRvR2FtZVBpZWNlQ291bnQ7XG4gICAgICAgICAgICBhdmdBdXRvR2FtZVBpZWNlQ291bnQgKz0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5hdXRvR2FtZVBpZWNlQ291bnQ7XG4gICAgICAgICAgICAvL0F1dG8gZ2FtZSBwaWVjZSBwdHNcbiAgICAgICAgICAgIGF2Z0F1dG9HYW1lUGllY2VQdHMgKz0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9HYW1lUGllY2VQb2ludHM7XG4gICAgICAgICAgICBhdmdBdXRvR2FtZVBpZWNlUHRzICs9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuYXV0b0dhbWVQaWVjZVBvaW50cztcblxuICAgICAgICB9XG4gICAgICAgIC8vQ29udmVydCB0b3RhbHMgdG8gYXZlcmFnZVxuICAgICAgICBhdmdBdXRvR2FtZVBpZWNlQ291bnQgPSBhdmdBdXRvR2FtZVBpZWNlQ291bnQgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgYXZnQXV0b0dhbWVQaWVjZVB0cyA9IGF2Z0F1dG9HYW1lUGllY2VQdHMgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgIH1cblxuICAgICAgLy9yZXR1cm5zIHRydWUvZmFsc2UgaWYgdGVhbSBpcyBvbiB0aGUgYmx1ZSBhbGxpYW5jZVxuICAgICAgZnVuY3Rpb24gSXNUZWFtT25CbHVlQWxsaWFuY2UobWF0Y2gpe1xuICAgICAgICB2YXIgdGVhbUtleSA9IFwiZnJjXCIgKyB0ZWFtTnVtYmVyO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKyl7XG4gICAgICAgICAgICB2YXIgdGVhbSA9IG1hdGNoLmFsbGlhbmNlcy5ibHVlLnRlYW1fa2V5c1tqXTtcbiAgICAgICAgICAgIGlmICh0ZWFtID09PSB0ZWFtS2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8vcmV0dXJucyB0cnVlL2ZhbHNlIGlmIHRlYW0gaXMgb24gdGhlIHJlZCBhbGxpYW5jZVxuICAgIGZ1bmN0aW9uIElzVGVhbU9uUmVkQWxsaWFuY2UobWF0Y2gpe1xuICAgICAgICB2YXIgdGVhbUtleSA9IFwiZnJjXCIgKyB0ZWFtTnVtYmVyO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKyl7XG4gICAgICAgICAgICB2YXIgdGVhbSA9IG1hdGNoLmFsbGlhbmNlcy5yZWQudGVhbV9rZXlzW2pdO1xuICAgICAgICAgICAgaWYgKHRlYW0gPT09IHRlYW1LZXkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gPFdyYXBwZXI+XG4gICAgICAgIHtnZXRBbGxNYXRjaGVzRm9yVGVhbSgpfVxuICAgICAgICB7LyogYWxsIG9mIG91ciByZW5kZXJpbmcgZ29lcyBpbnNpZGUgdGhlIHZhbGlkIHRlYW0gY29uZGl0aW9uICovfVxuICAgICAgICB7aXNJbnZhbGlkVGVhbSgpID8gKFxuICAgICAgICAgICAgPGgxIGlkPVwidGVhbU5vdEZvdW5kXCI+VGVhbSB7dGVhbU51bWJlcn0gd2FzIG5vdCBhdCB0aGlzIGV2ZW50LjwvaDE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8cD5UZXN0aW5nIFNjb3JlIEJyZWFrZG93bjoge2N1cnJUZWFtTWF0Y2hlc1swXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9HYW1lUGllY2VDb3VudH08L3A+XG4gICAgICAgICl9XG5cbiAgICA8L1dyYXBwZXI+XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICBoMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XG4gICAgfVxuXG4gICAgI3RlYW1Ob3RGb3VuZCB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XG4gICAgfVxuYCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsIlRlYW1TdGF0cyIsImFsbE1hdGNoZXMiLCJ0ZWFtTnVtYmVyIiwiY3VyclRlYW1NYXRjaGVzIiwiYXZnQXV0b0dhbWVQaWVjZVB0cyIsImF2Z0F1dG9HYW1lUGllY2VDb3VudCIsImF2Z0F1dG9Qb2ludHMiLCJhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyIsImF2Z0ZvdWxQb2ludHMiLCJhdmdMaW5rUG9pbnRzIiwiYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQiLCJhdmdUZWxlb3BHYW1lUGllY2VQb2ludHMiLCJhdmdUb3RhbFBvaW50cyIsImlzSW52YWxpZFRlYW0iLCJsZW5ndGgiLCJnZXRBbGxNYXRjaGVzRm9yVGVhbSIsImkiLCJJc1RlYW1PbkJsdWVBbGxpYW5jZSIsIklzVGVhbU9uUmVkQWxsaWFuY2UiLCJwdXNoIiwiY2FsY0V2ZW50QXZlcmFnZXMiLCJzY29yZV9icmVha2Rvd24iLCJyZWQiLCJhdXRvR2FtZVBpZWNlQ291bnQiLCJibHVlIiwiYXV0b0dhbWVQaWVjZVBvaW50cyIsIm1hdGNoIiwidGVhbUtleSIsImoiLCJ0ZWFtIiwiYWxsaWFuY2VzIiwidGVhbV9rZXlzIiwiV3JhcHBlciIsImgxIiwiaWQiLCJwIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TeamStats.js\n"));

/***/ })

});
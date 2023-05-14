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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamStats; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 3px solid gray;\\n    border-radius: 10px;\\n    margin-bottom: 2vh;\\n    background-color: aliceblue;\\n    font-size: 1.5em;\\n\\n    h1 {\\n        margin-left: 2vw;\\n    }\\n\\n    #teamNotFound {\\n        color: red;\\n    }\\n\\n    p {\\n        margin-left: 4vw;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nfunction TeamStats(param) {\n    let { allMatches , teamNumber  } = param;\n    //Controls something idk what yet\n    //   const [currData, setCurrData] = useState(data1);\n    //   const changeToOC = (event) => {\n    //     event.preventDefault();\n    //     setEventName(\"Orange County Regional\");\n    //     setEventKey(\"2023caoc\");\n    //     setCurrData(data1);\n    // };\n    //Stores all the matches for the current team\n    var currTeamMatches = [];\n    //EVENT AVERAGES\n    //Sorry I was too lazy to learn how dictionaries work when I did this\n    var avgAutoGamePiecePts = 0;\n    var avgAutoGamePieceCount = 0;\n    var avgAutoPoints = 0;\n    var avgEndGameChargeStationPoints = 0;\n    var avgFoulPoints = 0;\n    var avgLinkPoints = 0;\n    var avgTeleopGamePieceCount = 0;\n    var avgTeleopGamePiecePoints = 0;\n    var avgTotalPoints = 0;\n    //TEAM'S AVERAGE\n    //I was less lazy today. Dictionaries are dope\n    var teamAverages = {\n        avgAutoGamePiecePoints: 0,\n        avgAutoGamePieceCount: 0,\n        avgAutoPoints: 0,\n        avgEndGameChargeStationPoints: 0,\n        avgFoulPoints: 0,\n        avgLinkPoints: 0,\n        avgTeleopGamePieceCount: 0,\n        avgTeleopGamePiecePoints: 0,\n        avgTotalPoints: 0\n    };\n    function isInvalidTeam() {\n        if (currTeamMatches.length === 0) {\n            return true;\n        }\n        return false;\n    }\n    //Functions for calculating stats\n    //Updates currData to only match the given team number\n    function getAllMatchesForTeam() {\n        for(var i = 0; i < allMatches.length; i++){\n            if (IsTeamOnBlueAlliance(allMatches[i]) || IsTeamOnRedAlliance(allMatches[i])) {\n                currTeamMatches.push(allMatches[i]);\n            }\n        }\n    }\n    //Calculates the averages for the current event \n    function calcEventAverages() {\n        for(var i = 0; i < allMatches.length; i++){\n            //Auto game pieces\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.red.autoGamePieceCount;\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.blue.autoGamePieceCount;\n            //Auto game piece pts\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.red.autoGamePiecePoints;\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.blue.autoGamePiecePoints;\n            //Auto points\n            avgAutoPoints = allMatches[i].score_breakdown.red.autoPoints;\n            avgAutoPoints = allMatches[i].score_breakdown.blue.autoPoints;\n            //End Game Charge Station Points\n            avgEndGameChargeStationPoints = allMatches[i].score_breakdown.red.endGameChargStationPoints;\n            avgEndGameChargeStationPoints = allMatches[i].score_breakdown.blue.endGameChargStationPoints;\n            //Foul Points\n            avgFoulPoints = allMatches[i].score_breakdown.red.foulPoints;\n            avgFoulPoints = allMatches[i].score_breakdown.blue.foulPoints;\n            //Link Points\n            avgLinkPoints = allMatches[i].score_breakdown.red.linkPoints;\n            avgLinkPoints = allMatches[i].score_breakdown.blue.linkPoints;\n            //Teleop Game Piece Count\n            avgTeleopGamePieceCount = allMatches[i].score_breakdown.red.teleopGamePieceCount;\n            avgTeleopGamePieceCount = allMatches[i].score_breakdown.blue.teleopGamePieceCount;\n            //Teleop Game Piece Points\n            avgTeleopGamePiecePoints = allMatches[i].score_breakdown.red.teleopGamePiecePoints;\n            avgTeleopGamePiecePoints = allMatches[i].score_breakdown.blue.teleopGamePiecePoints;\n            //Total Points\n            avgTotalPoints = allMatches[i].score_breakdown.red.totalPoints;\n            avgTotalPoints = allMatches[i].score_breakdown.blue.totalPoints;\n        }\n        //Convert totals to average\n        avgAutoGamePieceCount = avgAutoGamePieceCount / (allMatches.length * 2);\n        avgAutoGamePiecePts = avgAutoGamePiecePts / (allMatches.length * 2);\n        avgAutoPoints = avgAutoPoints / (allMatches.length * 2);\n        avgEndGameChargeStationPoints = avgEndGameChargeStationPoints / (allMatches.length * 2);\n        avgFoulPoints = avgFoulPoints / (allMatches.length * 2);\n        avgLinkPoints = avgLinkPoints / (allMatches.length * 2);\n        avgTeleopGamePieceCount = avgTeleopGamePieceCount / (allMatches.length * 2);\n        avgTeleopGamePiecePoints = avgTeleopGamePiecePoints / (allMatches.length * 2);\n        avgTotalPoints = avgTotalPoints / (allMatches.length * 2);\n    }\n    //Calculates the averages for the current team\n    function calcTeamAverages() {\n        for(var i = 0; i < currTeamMatches.length; i++){\n            //Auto game pieces\n            teamAverages.avgAutoGamePieceCount += currTeamMatches[i].score_breakdown.red.autoGamePieceCount + currTeamMatches[i].score_breakdown.blue.autoGamePieceCount;\n            //Auto game piece points\n            teamAverages.avgAutoGamePiecePoints += currTeamMatches[i].score_breakdown.red.autoGamePiecePoints + currTeamMatches[i].score_breakdown.blue.autoGamePiecePoints;\n            //Auto points\n            teamAverages.avgAutoPoints += currTeamMatches[i].score_breakdown.red.autoPoints + currTeamMatches[i].score_breakdown.blue.autoPoints;\n            //End Game Charge Station Points\n            teamAverages.avgEndGameChargeStationPoints += currTeamMatches[i].score_breakdown.red.endGameChargStationPoints + currTeamMatches[i].score_breakdown.blue.endGameChargStationPoints;\n            //Foul Points\n            teamAverages.avgFoulPoints += currTeamMatches[i].score_breakdown.red.foulPoints + currTeamMatches[i].score_breakdown.blue.foulPoints;\n            //Link Points\n            teamAverages.avgLinkPoints += currTeamMatches[i].score_breakdown.red.linkPoints + currTeamMatches[i].score_breakdown.blue.linkPoints;\n            //Teleop Game Piece Count\n            teamAverages.avgTeleopGamePieceCount += currTeamMatches[i].score_breakdown.red.teleopGamePieceCount + currTeamMatches[i].score_breakdown.blue.teleopGamePieceCount;\n            //Teleop Game Piece Points\n            teamAverages.avgTeleopGamePiecePoints += currTeamMatches[i].score_breakdown.red.teleopGamePiecePoints + currTeamMatches[i].score_breakdown.blue.teleopGamePiecePoints;\n            //Total Points\n            teamAverages.avgTotalPoints += currTeamMatches[i].score_breakdown.red.totalPoints + currTeamMatches[i].score_breakdown.blue.totalPoints;\n        }\n        //Convert team totals to average\n        teamAverages.avgAutoGamePieceCount = teamAverages.avgAutoGamePieceCount / (currTeamMatches.length * 2);\n        teamAverages.avgAutoGamePiecePoints = teamAverages.avgAutoGamePiecePoints / (currTeamMatches.length * 2);\n        teamAverages.avgAutoPoints = teamAverages.avgAutoPoints / (currTeamMatches.length * 2);\n        teamAverages.avgEndGameChargeStationPoints = teamAverages.avgEndGameChargeStationPoints / (currTeamMatches.length * 2);\n        teamAverages.avgFoulPoints = teamAverages.avgFoulPoints / (currTeamMatches.length * 2);\n        teamAverages.avgLinkPoints = teamAverages.avgLinkPoints / (currTeamMatches.length * 2);\n        teamAverages.avgTeleopGamePieceCount = teamAverages.avgTeleopGamePieceCount / (currTeamMatches.length * 2);\n        teamAverages.avgTeleopGamePiecePoints = teamAverages.avgTeleopGamePiecePoints / (currTeamMatches.length * 2);\n        teamAverages.avgTotalPoints = teamAverages.avgTotalPoints / (currTeamMatches.length * 2);\n    }\n    //returns true/false if team is on the blue alliance\n    function IsTeamOnBlueAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.blue.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    //returns true/false if team is on the red alliance\n    function IsTeamOnRedAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.red.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        children: [\n            getAllMatchesForTeam(),\n            calcEventAverages(),\n            calcTeamAverages(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StatWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: \"hi\"\n                }, void 0, false, {\n                    fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                    lineNumber: 176,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 175,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n        lineNumber: 171,\n        columnNumber: 12\n    }, this);\n}\n_c = TeamStats;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"TeamStats\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ0FhOzBCQUNELDhEQUFDUTswQkFDRyw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztLQWhMdUI1QztBQWtMeEIsTUFBTTBDLFVBQVUzQyw2REFBVTtNQUFwQjJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVhbVN0YXRzLmpzP2UyMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1TdGF0cyh7YWxsTWF0Y2hlcywgdGVhbU51bWJlcn0pIHtcbiAgICAgIC8vQ29udHJvbHMgc29tZXRoaW5nIGlkayB3aGF0IHlldFxuICAgIC8vICAgY29uc3QgW2N1cnJEYXRhLCBzZXRDdXJyRGF0YV0gPSB1c2VTdGF0ZShkYXRhMSk7XG4gICAgLy8gICBjb25zdCBjaGFuZ2VUb09DID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIHNldEV2ZW50TmFtZShcIk9yYW5nZSBDb3VudHkgUmVnaW9uYWxcIik7XG4gICAgLy8gICAgIHNldEV2ZW50S2V5KFwiMjAyM2Nhb2NcIik7XG4gICAgLy8gICAgIHNldEN1cnJEYXRhKGRhdGExKTtcbiAgICAvLyB9O1xuXG4gICAgICAvL1N0b3JlcyBhbGwgdGhlIG1hdGNoZXMgZm9yIHRoZSBjdXJyZW50IHRlYW1cbiAgICAgIHZhciBjdXJyVGVhbU1hdGNoZXMgPSBbXTtcblxuICAgICAgLy9FVkVOVCBBVkVSQUdFU1xuICAgICAgLy9Tb3JyeSBJIHdhcyB0b28gbGF6eSB0byBsZWFybiBob3cgZGljdGlvbmFyaWVzIHdvcmsgd2hlbiBJIGRpZCB0aGlzXG4gICAgICB2YXIgYXZnQXV0b0dhbWVQaWVjZVB0cyA9IDA7XG4gICAgICB2YXIgYXZnQXV0b0dhbWVQaWVjZUNvdW50ID0gMDtcbiAgICAgIHZhciBhdmdBdXRvUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyA9IDA7XG4gICAgICB2YXIgYXZnRm91bFBvaW50cyA9IDA7XG4gICAgICB2YXIgYXZnTGlua1BvaW50cyA9IDA7XG4gICAgICB2YXIgYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgPSAwO1xuICAgICAgdmFyIGF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyA9IDA7XG4gICAgICB2YXIgYXZnVG90YWxQb2ludHMgPSAwO1xuXG4gICAgICAvL1RFQU0nUyBBVkVSQUdFXG4gICAgICAvL0kgd2FzIGxlc3MgbGF6eSB0b2RheS4gRGljdGlvbmFyaWVzIGFyZSBkb3BlXG4gICAgICB2YXIgdGVhbUF2ZXJhZ2VzID0ge1xuICAgICAgICBhdmdBdXRvR2FtZVBpZWNlUG9pbnRzOiAwLFxuICAgICAgICBhdmdBdXRvR2FtZVBpZWNlQ291bnQ6IDAsXG4gICAgICAgIGF2Z0F1dG9Qb2ludHM6IDAsXG4gICAgICAgIGF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzOiAwLFxuICAgICAgICBhdmdGb3VsUG9pbnRzOiAwLFxuICAgICAgICBhdmdMaW5rUG9pbnRzOiAwLFxuICAgICAgICBhdmdUZWxlb3BHYW1lUGllY2VDb3VudDogMCxcbiAgICAgICAgYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzOiAwLFxuICAgICAgICBhdmdUb3RhbFBvaW50czogMFxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaXNJbnZhbGlkVGVhbSgpIHtcbiAgICAgICAgaWYgKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL0Z1bmN0aW9ucyBmb3IgY2FsY3VsYXRpbmcgc3RhdHNcbiAgICAgIC8vVXBkYXRlcyBjdXJyRGF0YSB0byBvbmx5IG1hdGNoIHRoZSBnaXZlbiB0ZWFtIG51bWJlclxuICAgICAgZnVuY3Rpb24gZ2V0QWxsTWF0Y2hlc0ZvclRlYW0oKXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxNYXRjaGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChJc1RlYW1PbkJsdWVBbGxpYW5jZShhbGxNYXRjaGVzW2ldKSB8fCBJc1RlYW1PblJlZEFsbGlhbmNlKGFsbE1hdGNoZXNbaV0pKXtcbiAgICAgICAgICAgICAgICBjdXJyVGVhbU1hdGNoZXMucHVzaChhbGxNYXRjaGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL0NhbGN1bGF0ZXMgdGhlIGF2ZXJhZ2VzIGZvciB0aGUgY3VycmVudCBldmVudCBcbiAgICAgIGZ1bmN0aW9uIGNhbGNFdmVudEF2ZXJhZ2VzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE1hdGNoZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy9BdXRvIGdhbWUgcGllY2VzXG4gICAgICAgICAgICBhdmdBdXRvR2FtZVBpZWNlQ291bnQgKz0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9HYW1lUGllY2VDb3VudDtcbiAgICAgICAgICAgIGF2Z0F1dG9HYW1lUGllY2VDb3VudCArPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmF1dG9HYW1lUGllY2VDb3VudDtcbiAgICAgICAgICAgIC8vQXV0byBnYW1lIHBpZWNlIHB0c1xuICAgICAgICAgICAgYXZnQXV0b0dhbWVQaWVjZVB0cyArPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuYXV0b0dhbWVQaWVjZVBvaW50cztcbiAgICAgICAgICAgIGF2Z0F1dG9HYW1lUGllY2VQdHMgKz0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5hdXRvR2FtZVBpZWNlUG9pbnRzO1xuICAgICAgICAgICAgLy9BdXRvIHBvaW50c1xuICAgICAgICAgICAgYXZnQXV0b1BvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5hdXRvUG9pbnRzO1xuICAgICAgICAgICAgYXZnQXV0b1BvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuYXV0b1BvaW50cztcbiAgICAgICAgICAgIC8vRW5kIEdhbWUgQ2hhcmdlIFN0YXRpb24gUG9pbnRzXG4gICAgICAgICAgICBhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5lbmRHYW1lQ2hhcmdTdGF0aW9uUG9pbnRzO1xuICAgICAgICAgICAgYXZnRW5kR2FtZUNoYXJnZVN0YXRpb25Qb2ludHMgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmVuZEdhbWVDaGFyZ1N0YXRpb25Qb2ludHM7XG4gICAgICAgICAgICAvL0ZvdWwgUG9pbnRzXG4gICAgICAgICAgICBhdmdGb3VsUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmZvdWxQb2ludHM7XG4gICAgICAgICAgICBhdmdGb3VsUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5mb3VsUG9pbnRzO1xuICAgICAgICAgICAgLy9MaW5rIFBvaW50c1xuICAgICAgICAgICAgYXZnTGlua1BvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5saW5rUG9pbnRzO1xuICAgICAgICAgICAgYXZnTGlua1BvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUubGlua1BvaW50cztcbiAgICAgICAgICAgIC8vVGVsZW9wIEdhbWUgUGllY2UgQ291bnRcbiAgICAgICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50ID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLnRlbGVvcEdhbWVQaWVjZUNvdW50O1xuICAgICAgICAgICAgYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRlbGVvcEdhbWVQaWVjZUNvdW50O1xuICAgICAgICAgICAgLy9UZWxlb3AgR2FtZSBQaWVjZSBQb2ludHNcbiAgICAgICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC50ZWxlb3BHYW1lUGllY2VQb2ludHM7XG4gICAgICAgICAgICBhdmdUZWxlb3BHYW1lUGllY2VQb2ludHMgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRlbGVvcEdhbWVQaWVjZVBvaW50cztcbiAgICAgICAgICAgIC8vVG90YWwgUG9pbnRzXG4gICAgICAgICAgICBhdmdUb3RhbFBvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC50b3RhbFBvaW50cztcbiAgICAgICAgICAgIGF2Z1RvdGFsUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS50b3RhbFBvaW50cztcblxuICAgICAgICB9XG4gICAgICAgIC8vQ29udmVydCB0b3RhbHMgdG8gYXZlcmFnZVxuICAgICAgICBhdmdBdXRvR2FtZVBpZWNlQ291bnQgPSBhdmdBdXRvR2FtZVBpZWNlQ291bnQgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgYXZnQXV0b0dhbWVQaWVjZVB0cyA9IGF2Z0F1dG9HYW1lUGllY2VQdHMgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgYXZnQXV0b1BvaW50cyA9IGF2Z0F1dG9Qb2ludHMgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgYXZnRW5kR2FtZUNoYXJnZVN0YXRpb25Qb2ludHMgPSBhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdGb3VsUG9pbnRzID0gYXZnRm91bFBvaW50cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdMaW5rUG9pbnRzID0gYXZnTGlua1BvaW50cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdUZWxlb3BHYW1lUGllY2VDb3VudCA9IGF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50IC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyA9IGF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdUb3RhbFBvaW50cyA9IGF2Z1RvdGFsUG9pbnRzIC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICB9XG5cbiAgICAgIC8vQ2FsY3VsYXRlcyB0aGUgYXZlcmFnZXMgZm9yIHRoZSBjdXJyZW50IHRlYW1cbiAgICAgIGZ1bmN0aW9uIGNhbGNUZWFtQXZlcmFnZXMoKXtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyVGVhbU1hdGNoZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy9BdXRvIGdhbWUgcGllY2VzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b0dhbWVQaWVjZUNvdW50ICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5hdXRvR2FtZVBpZWNlQ291bnRcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5hdXRvR2FtZVBpZWNlQ291bnQpO1xuICAgICAgICAgICAgLy9BdXRvIGdhbWUgcGllY2UgcG9pbnRzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b0dhbWVQaWVjZVBvaW50cyArPSAoY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuYXV0b0dhbWVQaWVjZVBvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmF1dG9HYW1lUGllY2VQb2ludHMpO1xuICAgICAgICAgICAgLy9BdXRvIHBvaW50c1xuICAgICAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0F1dG9Qb2ludHMgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9Qb2ludHNcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5hdXRvUG9pbnRzKTtcbiAgICAgICAgICAgIC8vRW5kIEdhbWUgQ2hhcmdlIFN0YXRpb24gUG9pbnRzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnRW5kR2FtZUNoYXJnZVN0YXRpb25Qb2ludHMgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmVuZEdhbWVDaGFyZ1N0YXRpb25Qb2ludHNcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5lbmRHYW1lQ2hhcmdTdGF0aW9uUG9pbnRzKTtcbiAgICAgICAgICAgIC8vRm91bCBQb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdGb3VsUG9pbnRzICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5mb3VsUG9pbnRzXG4gICAgICAgICAgICAgICAgKyBjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuZm91bFBvaW50cyk7XG4gICAgICAgICAgICAvL0xpbmsgUG9pbnRzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnTGlua1BvaW50cyArPSAoY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQubGlua1BvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmxpbmtQb2ludHMpO1xuICAgICAgICAgICAgLy9UZWxlb3AgR2FtZSBQaWVjZSBDb3VudFxuICAgICAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50ICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC50ZWxlb3BHYW1lUGllY2VDb3VudFxuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRlbGVvcEdhbWVQaWVjZUNvdW50KTtcbiAgICAgICAgICAgIC8vVGVsZW9wIEdhbWUgUGllY2UgUG9pbnRzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC50ZWxlb3BHYW1lUGllY2VQb2ludHNcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS50ZWxlb3BHYW1lUGllY2VQb2ludHMpO1xuICAgICAgICAgICAgLy9Ub3RhbCBQb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdUb3RhbFBvaW50cyArPSAoY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQudG90YWxQb2ludHNcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS50b3RhbFBvaW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy9Db252ZXJ0IHRlYW0gdG90YWxzIHRvIGF2ZXJhZ2VcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0F1dG9HYW1lUGllY2VDb3VudCA9IHRlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlQ291bnQgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b0dhbWVQaWVjZVBvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlUG9pbnRzIC8gKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0F1dG9Qb2ludHMgPSB0ZWFtQXZlcmFnZXMuYXZnQXV0b1BvaW50cyAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIHRlYW1BdmVyYWdlcy5hdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIHRlYW1BdmVyYWdlcy5hdmdGb3VsUG9pbnRzID0gdGVhbUF2ZXJhZ2VzLmF2Z0ZvdWxQb2ludHMgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnTGlua1BvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdMaW5rUG9pbnRzIC8gKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50ID0gdGVhbUF2ZXJhZ2VzLmF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50IC8gKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdUZWxlb3BHYW1lUGllY2VQb2ludHMgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnVG90YWxQb2ludHMgPSB0ZWFtQXZlcmFnZXMuYXZnVG90YWxQb2ludHMgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgfVxuXG4gICAgICAvL3JldHVybnMgdHJ1ZS9mYWxzZSBpZiB0ZWFtIGlzIG9uIHRoZSBibHVlIGFsbGlhbmNlXG4gICAgICBmdW5jdGlvbiBJc1RlYW1PbkJsdWVBbGxpYW5jZShtYXRjaCl7XG4gICAgICAgIHZhciB0ZWFtS2V5ID0gXCJmcmNcIiArIHRlYW1OdW1iZXI7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKXtcbiAgICAgICAgICAgIHZhciB0ZWFtID0gbWF0Y2guYWxsaWFuY2VzLmJsdWUudGVhbV9rZXlzW2pdO1xuICAgICAgICAgICAgaWYgKHRlYW0gPT09IHRlYW1LZXkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgLy9yZXR1cm5zIHRydWUvZmFsc2UgaWYgdGVhbSBpcyBvbiB0aGUgcmVkIGFsbGlhbmNlXG4gICAgZnVuY3Rpb24gSXNUZWFtT25SZWRBbGxpYW5jZShtYXRjaCl7XG4gICAgICAgIHZhciB0ZWFtS2V5ID0gXCJmcmNcIiArIHRlYW1OdW1iZXI7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKXtcbiAgICAgICAgICAgIHZhciB0ZWFtID0gbWF0Y2guYWxsaWFuY2VzLnJlZC50ZWFtX2tleXNbal07XG4gICAgICAgICAgICBpZiAodGVhbSA9PT0gdGVhbUtleSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiA8V3JhcHBlcj5cbiAgICAgICAge2dldEFsbE1hdGNoZXNGb3JUZWFtKCl9XG4gICAgICAgIHtjYWxjRXZlbnRBdmVyYWdlcygpfVxuICAgICAgICB7Y2FsY1RlYW1BdmVyYWdlcygpfVxuICAgICAgICA8U3RhdFdyYXBwZXI+XG4gICAgICAgICAgICA8cD5oaTwvcD5cbiAgICAgICAgPC9TdGF0V3JhcHBlcj5cblxuICAgIDwvV3JhcHBlcj5cbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgICB9XG5cbiAgICAjdGVhbU5vdEZvdW5kIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgICB9XG5gIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVkIiwiVGVhbVN0YXRzIiwiYWxsTWF0Y2hlcyIsInRlYW1OdW1iZXIiLCJjdXJyVGVhbU1hdGNoZXMiLCJhdmdBdXRvR2FtZVBpZWNlUHRzIiwiYXZnQXV0b0dhbWVQaWVjZUNvdW50IiwiYXZnQXV0b1BvaW50cyIsImF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzIiwiYXZnRm91bFBvaW50cyIsImF2Z0xpbmtQb2ludHMiLCJhdmdUZWxlb3BHYW1lUGllY2VDb3VudCIsImF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyIsImF2Z1RvdGFsUG9pbnRzIiwidGVhbUF2ZXJhZ2VzIiwiYXZnQXV0b0dhbWVQaWVjZVBvaW50cyIsImlzSW52YWxpZFRlYW0iLCJsZW5ndGgiLCJnZXRBbGxNYXRjaGVzRm9yVGVhbSIsImkiLCJJc1RlYW1PbkJsdWVBbGxpYW5jZSIsIklzVGVhbU9uUmVkQWxsaWFuY2UiLCJwdXNoIiwiY2FsY0V2ZW50QXZlcmFnZXMiLCJzY29yZV9icmVha2Rvd24iLCJyZWQiLCJhdXRvR2FtZVBpZWNlQ291bnQiLCJibHVlIiwiYXV0b0dhbWVQaWVjZVBvaW50cyIsImF1dG9Qb2ludHMiLCJlbmRHYW1lQ2hhcmdTdGF0aW9uUG9pbnRzIiwiZm91bFBvaW50cyIsImxpbmtQb2ludHMiLCJ0ZWxlb3BHYW1lUGllY2VDb3VudCIsInRlbGVvcEdhbWVQaWVjZVBvaW50cyIsInRvdGFsUG9pbnRzIiwiY2FsY1RlYW1BdmVyYWdlcyIsIm1hdGNoIiwidGVhbUtleSIsImoiLCJ0ZWFtIiwiYWxsaWFuY2VzIiwidGVhbV9rZXlzIiwiV3JhcHBlciIsIlN0YXRXcmFwcGVyIiwicCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TeamStats.js\n"));

/***/ })

});
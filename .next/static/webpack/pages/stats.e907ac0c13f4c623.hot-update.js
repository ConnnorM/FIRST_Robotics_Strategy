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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TeamStats; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    border: 3px solid gray;\\n    border-radius: 10px;\\n    margin-bottom: 2vh;\\n    background-color: aliceblue;\\n    font-size: 1.5em;\\n\\n    h1 {\\n        margin-left: 2vw;\\n    }\\n\\n    #teamNotFound {\\n        color: red;\\n    }\\n\\n    p {\\n        margin-left: 4vw;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nfunction TeamStats(param) {\n    let { allMatches , teamNumber  } = param;\n    //Controls something idk what yet\n    //   const [currData, setCurrData] = useState(data1);\n    //   const changeToOC = (event) => {\n    //     event.preventDefault();\n    //     setEventName(\"Orange County Regional\");\n    //     setEventKey(\"2023caoc\");\n    //     setCurrData(data1);\n    // };\n    //Stores all the matches for the current team\n    var currTeamMatches = [];\n    //EVENT AVERAGES\n    //Sorry I was too lazy to learn how dictionaries work when I did this\n    var avgAutoGamePiecePts = 0;\n    var avgAutoGamePieceCount = 0;\n    var avgAutoPoints = 0;\n    var avgEndGameChargeStationPoints = 0;\n    var avgFoulPoints = 0;\n    var avgLinkPoints = 0;\n    var avgTeleopGamePieceCount = 0;\n    var avgTeleopGamePiecePoints = 0;\n    var avgTotalPoints = 0;\n    //TEAM'S AVERAGE\n    //I was less lazy today. Dictionaries are dope\n    var teamAverages = {\n        avgAutoGamePiecePoints: 0,\n        avgAutoGamePieceCount: 0,\n        avgAutoPoints: 0,\n        avgEndGameChargeStationPoints: 0,\n        avgFoulPoints: 0,\n        avgLinkPoints: 0,\n        avgTeleopGamePieceCount: 0,\n        avgTeleopGamePiecePoints: 0,\n        avgTotalPoints: 0\n    };\n    function isInvalidTeam() {\n        if (currTeamMatches.length === 0) {\n            return true;\n        }\n        return false;\n    }\n    //Functions for calculating stats\n    //Updates currData to only match the given team number\n    function getAllMatchesForTeam() {\n        for(var i = 0; i < allMatches.length; i++){\n            if (IsTeamOnBlueAlliance(allMatches[i]) || IsTeamOnRedAlliance(allMatches[i])) {\n                currTeamMatches.push(allMatches[i]);\n            }\n        }\n    }\n    //Calculates the averages for the current event \n    function calcEventAverages() {\n        for(var i = 0; i < allMatches.length; i++){\n            //Auto game pieces\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.red.autoGamePieceCount;\n            avgAutoGamePieceCount += allMatches[i].score_breakdown.blue.autoGamePieceCount;\n            //Auto game piece pts\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.red.autoGamePiecePoints;\n            avgAutoGamePiecePts += allMatches[i].score_breakdown.blue.autoGamePiecePoints;\n            //Auto points\n            avgAutoPoints = allMatches[i].score_breakdown.red.autoPoints;\n            avgAutoPoints = allMatches[i].score_breakdown.blue.autoPoints;\n            //End Game Charge Station Points\n            avgEndGameChargeStationPoints = allMatches[i].score_breakdown.red.endGameChargStationPoints;\n            avgEndGameChargeStationPoints = allMatches[i].score_breakdown.blue.endGameChargStationPoints;\n            //Foul Points\n            avgFoulPoints = allMatches[i].score_breakdown.red.foulPoints;\n            avgFoulPoints = allMatches[i].score_breakdown.blue.foulPoints;\n            //Link Points\n            avgLinkPoints = allMatches[i].score_breakdown.red.linkPoints;\n            avgLinkPoints = allMatches[i].score_breakdown.blue.linkPoints;\n            //Teleop Game Piece Count\n            avgTeleopGamePieceCount = allMatches[i].score_breakdown.red.teleopGamePieceCount;\n            avgTeleopGamePieceCount = allMatches[i].score_breakdown.blue.teleopGamePieceCount;\n            //Teleop Game Piece Points\n            avgTeleopGamePiecePoints = allMatches[i].score_breakdown.red.teleopGamePiecePoints;\n            avgTeleopGamePiecePoints = allMatches[i].score_breakdown.blue.teleopGamePiecePoints;\n            //Total Points\n            avgTotalPoints = allMatches[i].score_breakdown.red.totalPoints;\n            avgTotalPoints = allMatches[i].score_breakdown.blue.totalPoints;\n        }\n        //Convert totals to average\n        avgAutoGamePieceCount = avgAutoGamePieceCount / (allMatches.length * 2);\n        avgAutoGamePiecePts = avgAutoGamePiecePts / (allMatches.length * 2);\n        avgAutoPoints = avgAutoPoints / (allMatches.length * 2);\n        avgEndGameChargeStationPoints = avgEndGameChargeStationPoints / (allMatches.length * 2);\n        avgFoulPoints = avgFoulPoints / (allMatches.length * 2);\n        avgLinkPoints = avgLinkPoints / (allMatches.length * 2);\n        avgTeleopGamePieceCount = avgTeleopGamePieceCount / (allMatches.length * 2);\n        avgTeleopGamePiecePoints = avgTeleopGamePiecePoints / (allMatches.length * 2);\n        avgTotalPoints = avgTotalPoints / (allMatches.length * 2);\n    }\n    //Calculates the averages for the current team\n    function calcTeamAverages() {\n        for(var i = 0; i < currTeamMatches.length; i++){\n            //Auto game pieces\n            teamAverages.avgAutoGamePieceCount += currTeamMatches[i].score_breakdown.red.autoGamePieceCount + currTeamMatches[i].score_breakdown.blue.autoGamePieceCount;\n            //Auto game piece points\n            teamAverages.avgAutoGamePiecePoints += currTeamMatches[i].score_breakdown.red.autoGamePiecePoints + currTeamMatches[i].score_breakdown.blue.autoGamePiecePoints;\n            //Auto points\n            teamAverages.avgAutoPoints += currTeamMatches[i].score_breakdown.red.autoPoints + currTeamMatches[i].score_breakdown.blue.autoPoints;\n            //End Game Charge Station Points\n            teamAverages.avgEndGameChargeStationPoints += currTeamMatches[i].score_breakdown.red.endGameChargStationPoints + currTeamMatches[i].score_breakdown.blue.endGameChargStationPoints;\n            //Foul Points\n            teamAverages.avgFoulPoints += currTeamMatches[i].score_breakdown.red.foulPoints + currTeamMatches[i].score_breakdown.blue.foulPoints;\n            //Link Points\n            teamAverages.avgLinkPoints += currTeamMatches[i].score_breakdown.red.linkPoints + currTeamMatches[i].score_breakdown.blue.linkPoints;\n            //Teleop Game Piece Count\n            teamAverages.avgTeleopGamePieceCount += currTeamMatches[i].score_breakdown.red.teleopGamePieceCount + currTeamMatches[i].score_breakdown.blue.teleopGamePieceCount;\n            //Teleop Game Piece Points\n            teamAverages.avgTeleopGamePiecePoints += currTeamMatches[i].score_breakdown.red.teleopGamePiecePoints + currTeamMatches[i].score_breakdown.blue.teleopGamePiecePoints;\n            //Total Points\n            teamAverages.avgTotalPoints += currTeamMatches[i].score_breakdown.red.totalPoints + currTeamMatches[i].score_breakdown.blue.totalPoints;\n        }\n        //Convert team totals to average\n        teamAverages.avgAutoGamePieceCount = teamAverages.avgAutoGamePieceCount / (currTeamMatches.length * 2);\n        teamAverages.avgAutoGamePiecePoints = teamAverages.avgAutoGamePiecePoints / (currTeamMatches.length * 2);\n        teamAverages.avgAutoPoints = teamAverages.avgAutoPoints / (currTeamMatches.length * 2);\n        teamAverages.avgEndGameChargeStationPoints = teamAverages.avgEndGameChargeStationPoints / (currTeamMatches.length * 2);\n        teamAverages.avgFoulPoints = teamAverages.avgFoulPoints / (currTeamMatches.length * 2);\n        teamAverages.avgLinkPoints = teamAverages.avgLinkPoints / (currTeamMatches.length * 2);\n        teamAverages.avgTeleopGamePieceCount = teamAverages.avgTeleopGamePieceCount / (currTeamMatches.length * 2);\n        teamAverages.avgTeleopGamePiecePoints = teamAverages.avgTeleopGamePiecePoints / (currTeamMatches.length * 2);\n        teamAverages.avgTotalPoints = teamAverages.avgTotalPoints / (currTeamMatches.length * 2);\n    }\n    //returns true/false if team is on the blue alliance\n    function IsTeamOnBlueAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.blue.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    //returns true/false if team is on the red alliance\n    function IsTeamOnRedAlliance(match) {\n        var teamKey = \"frc\" + teamNumber;\n        for(var j = 0; j < 3; j++){\n            var team = match.alliances.red.team_keys[j];\n            if (team === teamKey) {\n                return true;\n            }\n        }\n        return false;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        children: [\n            getAllMatchesForTeam(),\n            calcEventAverages(),\n            calcTeamAverages(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Autonomous:\"\n            }, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 175,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StatWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Average Game Piece Count: \",\n                        teamAverages.avgAutoGamePieceCount\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                    lineNumber: 179,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 178,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Teleop:\"\n            }, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 183,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StatWrapper, {}, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Misc:\"\n            }, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 188,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StatWrapper, {}, void 0, false, {\n                fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n                lineNumber: 191,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/connorm/Desktop/Web_Eng/Code/FIRST_Robotics_Strategy/components/TeamStats.js\",\n        lineNumber: 171,\n        columnNumber: 12\n    }, this);\n}\n_c = TeamStats;\nconst StatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c1 = StatWrapper;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject1());\n_c2 = Wrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TeamStats\");\n$RefreshReg$(_c1, \"StatWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SHpCO1lBQ0FLO1lBQ0FhOzBCQUNELDhEQUFDUTswQkFBRzs7Ozs7OzBCQUdKLDhEQUFDQzswQkFDRyw0RUFBQ0M7O3dCQUFFO3dCQUM0QmhDLGFBQWFSLHFCQUFxQjs7Ozs7Ozs7Ozs7OzBCQUdyRSw4REFBQ3NDOzBCQUFHOzs7Ozs7MEJBR0osOERBQUNDOzs7OzswQkFFRCw4REFBQ0Q7MEJBQUc7Ozs7OzswQkFHSiw4REFBQ0M7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztLQS9MdUI1QztBQWlNeEIsTUFBTTRDLGNBQWM3Qyw2REFBVTtNQUF4QjZDO0FBSU4sTUFBTUYsVUFBVTNDLDZEQUFVO01BQXBCMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtU3RhdHMuanM/ZTIyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbVN0YXRzKHthbGxNYXRjaGVzLCB0ZWFtTnVtYmVyfSkge1xuICAgICAgLy9Db250cm9scyBzb21ldGhpbmcgaWRrIHdoYXQgeWV0XG4gICAgLy8gICBjb25zdCBbY3VyckRhdGEsIHNldEN1cnJEYXRhXSA9IHVzZVN0YXRlKGRhdGExKTtcbiAgICAvLyAgIGNvbnN0IGNoYW5nZVRvT0MgPSAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgc2V0RXZlbnROYW1lKFwiT3JhbmdlIENvdW50eSBSZWdpb25hbFwiKTtcbiAgICAvLyAgICAgc2V0RXZlbnRLZXkoXCIyMDIzY2FvY1wiKTtcbiAgICAvLyAgICAgc2V0Q3VyckRhdGEoZGF0YTEpO1xuICAgIC8vIH07XG5cbiAgICAgIC8vU3RvcmVzIGFsbCB0aGUgbWF0Y2hlcyBmb3IgdGhlIGN1cnJlbnQgdGVhbVxuICAgICAgdmFyIGN1cnJUZWFtTWF0Y2hlcyA9IFtdO1xuXG4gICAgICAvL0VWRU5UIEFWRVJBR0VTXG4gICAgICAvL1NvcnJ5IEkgd2FzIHRvbyBsYXp5IHRvIGxlYXJuIGhvdyBkaWN0aW9uYXJpZXMgd29yayB3aGVuIEkgZGlkIHRoaXNcbiAgICAgIHZhciBhdmdBdXRvR2FtZVBpZWNlUHRzID0gMDtcbiAgICAgIHZhciBhdmdBdXRvR2FtZVBpZWNlQ291bnQgPSAwO1xuICAgICAgdmFyIGF2Z0F1dG9Qb2ludHMgPSAwO1xuICAgICAgdmFyIGF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdGb3VsUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdMaW5rUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdUZWxlb3BHYW1lUGllY2VDb3VudCA9IDA7XG4gICAgICB2YXIgYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzID0gMDtcbiAgICAgIHZhciBhdmdUb3RhbFBvaW50cyA9IDA7XG5cbiAgICAgIC8vVEVBTSdTIEFWRVJBR0VcbiAgICAgIC8vSSB3YXMgbGVzcyBsYXp5IHRvZGF5LiBEaWN0aW9uYXJpZXMgYXJlIGRvcGVcbiAgICAgIHZhciB0ZWFtQXZlcmFnZXMgPSB7XG4gICAgICAgIGF2Z0F1dG9HYW1lUGllY2VQb2ludHM6IDAsXG4gICAgICAgIGF2Z0F1dG9HYW1lUGllY2VDb3VudDogMCxcbiAgICAgICAgYXZnQXV0b1BvaW50czogMCxcbiAgICAgICAgYXZnRW5kR2FtZUNoYXJnZVN0YXRpb25Qb2ludHM6IDAsXG4gICAgICAgIGF2Z0ZvdWxQb2ludHM6IDAsXG4gICAgICAgIGF2Z0xpbmtQb2ludHM6IDAsXG4gICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50OiAwLFxuICAgICAgICBhdmdUZWxlb3BHYW1lUGllY2VQb2ludHM6IDAsXG4gICAgICAgIGF2Z1RvdGFsUG9pbnRzOiAwXG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBpc0ludmFsaWRUZWFtKCkge1xuICAgICAgICBpZiAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vRnVuY3Rpb25zIGZvciBjYWxjdWxhdGluZyBzdGF0c1xuICAgICAgLy9VcGRhdGVzIGN1cnJEYXRhIHRvIG9ubHkgbWF0Y2ggdGhlIGdpdmVuIHRlYW0gbnVtYmVyXG4gICAgICBmdW5jdGlvbiBnZXRBbGxNYXRjaGVzRm9yVGVhbSgpe1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE1hdGNoZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKElzVGVhbU9uQmx1ZUFsbGlhbmNlKGFsbE1hdGNoZXNbaV0pIHx8IElzVGVhbU9uUmVkQWxsaWFuY2UoYWxsTWF0Y2hlc1tpXSkpe1xuICAgICAgICAgICAgICAgIGN1cnJUZWFtTWF0Y2hlcy5wdXNoKGFsbE1hdGNoZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vQ2FsY3VsYXRlcyB0aGUgYXZlcmFnZXMgZm9yIHRoZSBjdXJyZW50IGV2ZW50IFxuICAgICAgZnVuY3Rpb24gY2FsY0V2ZW50QXZlcmFnZXMoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTWF0Y2hlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvL0F1dG8gZ2FtZSBwaWVjZXNcbiAgICAgICAgICAgIGF2Z0F1dG9HYW1lUGllY2VDb3VudCArPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuYXV0b0dhbWVQaWVjZUNvdW50O1xuICAgICAgICAgICAgYXZnQXV0b0dhbWVQaWVjZUNvdW50ICs9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuYXV0b0dhbWVQaWVjZUNvdW50O1xuICAgICAgICAgICAgLy9BdXRvIGdhbWUgcGllY2UgcHRzXG4gICAgICAgICAgICBhdmdBdXRvR2FtZVBpZWNlUHRzICs9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5hdXRvR2FtZVBpZWNlUG9pbnRzO1xuICAgICAgICAgICAgYXZnQXV0b0dhbWVQaWVjZVB0cyArPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmF1dG9HYW1lUGllY2VQb2ludHM7XG4gICAgICAgICAgICAvL0F1dG8gcG9pbnRzXG4gICAgICAgICAgICBhdmdBdXRvUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9Qb2ludHM7XG4gICAgICAgICAgICBhdmdBdXRvUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5hdXRvUG9pbnRzO1xuICAgICAgICAgICAgLy9FbmQgR2FtZSBDaGFyZ2UgU3RhdGlvbiBQb2ludHNcbiAgICAgICAgICAgIGF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmVuZEdhbWVDaGFyZ1N0YXRpb25Qb2ludHM7XG4gICAgICAgICAgICBhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuZW5kR2FtZUNoYXJnU3RhdGlvblBvaW50cztcbiAgICAgICAgICAgIC8vRm91bCBQb2ludHNcbiAgICAgICAgICAgIGF2Z0ZvdWxQb2ludHMgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuZm91bFBvaW50cztcbiAgICAgICAgICAgIGF2Z0ZvdWxQb2ludHMgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmZvdWxQb2ludHM7XG4gICAgICAgICAgICAvL0xpbmsgUG9pbnRzXG4gICAgICAgICAgICBhdmdMaW5rUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmxpbmtQb2ludHM7XG4gICAgICAgICAgICBhdmdMaW5rUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5saW5rUG9pbnRzO1xuICAgICAgICAgICAgLy9UZWxlb3AgR2FtZSBQaWVjZSBDb3VudFxuICAgICAgICAgICAgYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQudGVsZW9wR2FtZVBpZWNlQ291bnQ7XG4gICAgICAgICAgICBhdmdUZWxlb3BHYW1lUGllY2VDb3VudCA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUudGVsZW9wR2FtZVBpZWNlQ291bnQ7XG4gICAgICAgICAgICAvL1RlbGVvcCBHYW1lIFBpZWNlIFBvaW50c1xuICAgICAgICAgICAgYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLnRlbGVvcEdhbWVQaWVjZVBvaW50cztcbiAgICAgICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyA9IGFsbE1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUudGVsZW9wR2FtZVBpZWNlUG9pbnRzO1xuICAgICAgICAgICAgLy9Ub3RhbCBQb2ludHNcbiAgICAgICAgICAgIGF2Z1RvdGFsUG9pbnRzID0gYWxsTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLnRvdGFsUG9pbnRzO1xuICAgICAgICAgICAgYXZnVG90YWxQb2ludHMgPSBhbGxNYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRvdGFsUG9pbnRzO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy9Db252ZXJ0IHRvdGFscyB0byBhdmVyYWdlXG4gICAgICAgIGF2Z0F1dG9HYW1lUGllY2VDb3VudCA9IGF2Z0F1dG9HYW1lUGllY2VDb3VudCAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdBdXRvR2FtZVBpZWNlUHRzID0gYXZnQXV0b0dhbWVQaWVjZVB0cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdBdXRvUG9pbnRzID0gYXZnQXV0b1BvaW50cyAvIChhbGxNYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICBhdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyA9IGF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzIC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIGF2Z0ZvdWxQb2ludHMgPSBhdmdGb3VsUG9pbnRzIC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIGF2Z0xpbmtQb2ludHMgPSBhdmdMaW5rUG9pbnRzIC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIGF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50ID0gYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzID0gYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzIC8gKGFsbE1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIGF2Z1RvdGFsUG9pbnRzID0gYXZnVG90YWxQb2ludHMgLyAoYWxsTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgIH1cblxuICAgICAgLy9DYWxjdWxhdGVzIHRoZSBhdmVyYWdlcyBmb3IgdGhlIGN1cnJlbnQgdGVhbVxuICAgICAgZnVuY3Rpb24gY2FsY1RlYW1BdmVyYWdlcygpe1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvL0F1dG8gZ2FtZSBwaWVjZXNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlQ291bnQgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmF1dG9HYW1lUGllY2VDb3VudFxuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmF1dG9HYW1lUGllY2VDb3VudCk7XG4gICAgICAgICAgICAvL0F1dG8gZ2FtZSBwaWVjZSBwb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlUG9pbnRzICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5hdXRvR2FtZVBpZWNlUG9pbnRzXG4gICAgICAgICAgICAgICAgKyBjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUuYXV0b0dhbWVQaWVjZVBvaW50cyk7XG4gICAgICAgICAgICAvL0F1dG8gcG9pbnRzXG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b1BvaW50cyArPSAoY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuYXV0b1BvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmF1dG9Qb2ludHMpO1xuICAgICAgICAgICAgLy9FbmQgR2FtZSBDaGFyZ2UgU3RhdGlvbiBQb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdFbmRHYW1lQ2hhcmdlU3RhdGlvblBvaW50cyArPSAoY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5yZWQuZW5kR2FtZUNoYXJnU3RhdGlvblBvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLmVuZEdhbWVDaGFyZ1N0YXRpb25Qb2ludHMpO1xuICAgICAgICAgICAgLy9Gb3VsIFBvaW50c1xuICAgICAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0ZvdWxQb2ludHMgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLmZvdWxQb2ludHNcbiAgICAgICAgICAgICAgICArIGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24uYmx1ZS5mb3VsUG9pbnRzKTtcbiAgICAgICAgICAgIC8vTGluayBQb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdMaW5rUG9pbnRzICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC5saW5rUG9pbnRzXG4gICAgICAgICAgICAgICAgKyBjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUubGlua1BvaW50cyk7XG4gICAgICAgICAgICAvL1RlbGVvcCBHYW1lIFBpZWNlIENvdW50XG4gICAgICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLnRlbGVvcEdhbWVQaWVjZUNvdW50XG4gICAgICAgICAgICAgICAgKyBjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLmJsdWUudGVsZW9wR2FtZVBpZWNlQ291bnQpO1xuICAgICAgICAgICAgLy9UZWxlb3AgR2FtZSBQaWVjZSBQb2ludHNcbiAgICAgICAgICAgIHRlYW1BdmVyYWdlcy5hdmdUZWxlb3BHYW1lUGllY2VQb2ludHMgKz0gKGN1cnJUZWFtTWF0Y2hlc1tpXS5zY29yZV9icmVha2Rvd24ucmVkLnRlbGVvcEdhbWVQaWVjZVBvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRlbGVvcEdhbWVQaWVjZVBvaW50cyk7XG4gICAgICAgICAgICAvL1RvdGFsIFBvaW50c1xuICAgICAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z1RvdGFsUG9pbnRzICs9IChjdXJyVGVhbU1hdGNoZXNbaV0uc2NvcmVfYnJlYWtkb3duLnJlZC50b3RhbFBvaW50c1xuICAgICAgICAgICAgICAgICsgY3VyclRlYW1NYXRjaGVzW2ldLnNjb3JlX2JyZWFrZG93bi5ibHVlLnRvdGFsUG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvL0NvbnZlcnQgdGVhbSB0b3RhbHMgdG8gYXZlcmFnZVxuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b0dhbWVQaWVjZUNvdW50ID0gdGVhbUF2ZXJhZ2VzLmF2Z0F1dG9HYW1lUGllY2VDb3VudCAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIHRlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlUG9pbnRzID0gdGVhbUF2ZXJhZ2VzLmF2Z0F1dG9HYW1lUGllY2VQb2ludHMgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnQXV0b1BvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdBdXRvUG9pbnRzIC8gKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzID0gdGVhbUF2ZXJhZ2VzLmF2Z0VuZEdhbWVDaGFyZ2VTdGF0aW9uUG9pbnRzIC8gKGN1cnJUZWFtTWF0Y2hlcy5sZW5ndGggKiAyKTtcbiAgICAgICAgdGVhbUF2ZXJhZ2VzLmF2Z0ZvdWxQb2ludHMgPSB0ZWFtQXZlcmFnZXMuYXZnRm91bFBvaW50cyAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIHRlYW1BdmVyYWdlcy5hdmdMaW5rUG9pbnRzID0gdGVhbUF2ZXJhZ2VzLmF2Z0xpbmtQb2ludHMgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgPSB0ZWFtQXZlcmFnZXMuYXZnVGVsZW9wR2FtZVBpZWNlQ291bnQgLyAoY3VyclRlYW1NYXRjaGVzLmxlbmd0aCAqIDIpO1xuICAgICAgICB0ZWFtQXZlcmFnZXMuYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzID0gdGVhbUF2ZXJhZ2VzLmF2Z1RlbGVvcEdhbWVQaWVjZVBvaW50cyAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICAgIHRlYW1BdmVyYWdlcy5hdmdUb3RhbFBvaW50cyA9IHRlYW1BdmVyYWdlcy5hdmdUb3RhbFBvaW50cyAvIChjdXJyVGVhbU1hdGNoZXMubGVuZ3RoICogMik7XG4gICAgICB9XG5cbiAgICAgIC8vcmV0dXJucyB0cnVlL2ZhbHNlIGlmIHRlYW0gaXMgb24gdGhlIGJsdWUgYWxsaWFuY2VcbiAgICAgIGZ1bmN0aW9uIElzVGVhbU9uQmx1ZUFsbGlhbmNlKG1hdGNoKXtcbiAgICAgICAgdmFyIHRlYW1LZXkgPSBcImZyY1wiICsgdGVhbU51bWJlcjtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAzOyBqKyspe1xuICAgICAgICAgICAgdmFyIHRlYW0gPSBtYXRjaC5hbGxpYW5jZXMuYmx1ZS50ZWFtX2tleXNbal07XG4gICAgICAgICAgICBpZiAodGVhbSA9PT0gdGVhbUtleSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvL3JldHVybnMgdHJ1ZS9mYWxzZSBpZiB0ZWFtIGlzIG9uIHRoZSByZWQgYWxsaWFuY2VcbiAgICBmdW5jdGlvbiBJc1RlYW1PblJlZEFsbGlhbmNlKG1hdGNoKXtcbiAgICAgICAgdmFyIHRlYW1LZXkgPSBcImZyY1wiICsgdGVhbU51bWJlcjtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAzOyBqKyspe1xuICAgICAgICAgICAgdmFyIHRlYW0gPSBtYXRjaC5hbGxpYW5jZXMucmVkLnRlYW1fa2V5c1tqXTtcbiAgICAgICAgICAgIGlmICh0ZWFtID09PSB0ZWFtS2V5KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxXcmFwcGVyPlxuICAgICAgICB7Z2V0QWxsTWF0Y2hlc0ZvclRlYW0oKX1cbiAgICAgICAge2NhbGNFdmVudEF2ZXJhZ2VzKCl9XG4gICAgICAgIHtjYWxjVGVhbUF2ZXJhZ2VzKCl9XG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIEF1dG9ub21vdXM6XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxTdGF0V3JhcHBlcj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEF2ZXJhZ2UgR2FtZSBQaWVjZSBDb3VudDoge3RlYW1BdmVyYWdlcy5hdmdBdXRvR2FtZVBpZWNlQ291bnR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvU3RhdFdyYXBwZXI+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIFRlbGVvcDpcbiAgICAgICAgPC9oMz5cbiAgICAgICAgPFN0YXRXcmFwcGVyPlxuICAgICAgICA8L1N0YXRXcmFwcGVyPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgICBNaXNjOlxuICAgICAgICA8L2gzPlxuICAgICAgICA8U3RhdFdyYXBwZXI+XG4gICAgICAgIDwvU3RhdFdyYXBwZXI+XG5cbiAgICA8L1dyYXBwZXI+XG59XG5cbmNvbnN0IFN0YXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblxuYFxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuXG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tbGVmdDogMnZ3O1xuICAgIH1cblxuICAgICN0ZWFtTm90Rm91bmQge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW4tbGVmdDogNHZ3O1xuICAgIH1cbmAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJUZWFtU3RhdHMiLCJhbGxNYXRjaGVzIiwidGVhbU51bWJlciIsImN1cnJUZWFtTWF0Y2hlcyIsImF2Z0F1dG9HYW1lUGllY2VQdHMiLCJhdmdBdXRvR2FtZVBpZWNlQ291bnQiLCJhdmdBdXRvUG9pbnRzIiwiYXZnRW5kR2FtZUNoYXJnZVN0YXRpb25Qb2ludHMiLCJhdmdGb3VsUG9pbnRzIiwiYXZnTGlua1BvaW50cyIsImF2Z1RlbGVvcEdhbWVQaWVjZUNvdW50IiwiYXZnVGVsZW9wR2FtZVBpZWNlUG9pbnRzIiwiYXZnVG90YWxQb2ludHMiLCJ0ZWFtQXZlcmFnZXMiLCJhdmdBdXRvR2FtZVBpZWNlUG9pbnRzIiwiaXNJbnZhbGlkVGVhbSIsImxlbmd0aCIsImdldEFsbE1hdGNoZXNGb3JUZWFtIiwiaSIsIklzVGVhbU9uQmx1ZUFsbGlhbmNlIiwiSXNUZWFtT25SZWRBbGxpYW5jZSIsInB1c2giLCJjYWxjRXZlbnRBdmVyYWdlcyIsInNjb3JlX2JyZWFrZG93biIsInJlZCIsImF1dG9HYW1lUGllY2VDb3VudCIsImJsdWUiLCJhdXRvR2FtZVBpZWNlUG9pbnRzIiwiYXV0b1BvaW50cyIsImVuZEdhbWVDaGFyZ1N0YXRpb25Qb2ludHMiLCJmb3VsUG9pbnRzIiwibGlua1BvaW50cyIsInRlbGVvcEdhbWVQaWVjZUNvdW50IiwidGVsZW9wR2FtZVBpZWNlUG9pbnRzIiwidG90YWxQb2ludHMiLCJjYWxjVGVhbUF2ZXJhZ2VzIiwibWF0Y2giLCJ0ZWFtS2V5IiwiaiIsInRlYW0iLCJhbGxpYW5jZXMiLCJ0ZWFtX2tleXMiLCJXcmFwcGVyIiwiaDMiLCJTdGF0V3JhcHBlciIsInAiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TeamStats.js\n"));

/***/ })

});
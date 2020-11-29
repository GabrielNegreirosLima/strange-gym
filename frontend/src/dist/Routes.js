"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Class_1 = require("./pages/App/Class");
var Enrollment_1 = require("./pages/App/Enrollment");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/App/Home");
var Modality_1 = require("./pages/App/Modality");
var PhysicalFitnessTest_1 = require("./pages/App/PhysicalFitnessTest");
var Plan_1 = require("./pages/App/Plan");
var Schedule_1 = require("./pages/App/Schedule");
var StudentSignUp_1 = require("./pages/App/StudentSignUp");
var Training_1 = require("./pages/App/Training");
var SignIn_1 = require("./pages/Auth/SignIn");
var SignUp_1 = require("./pages/Auth/SignUp");
var Dashboard_1 = require("./pages/App/Dashboard");
function Routes() {
    var user = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/signin" },
                react_1["default"].createElement(SignIn_1["default"], null)),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup" },
                react_1["default"].createElement(SignUp_1["default"], null)),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Dashboard_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/fisical-test", exact: true },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(PhysicalFitnessTest_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/student" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(StudentSignUp_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/modality" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Modality_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/enrollment" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Enrollment_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/plan" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Plan_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/schedule" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Schedule_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/class" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Class_1["default"], null))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/create/drill" },
                react_1["default"].createElement(Home_1["default"], null,
                    react_1["default"].createElement(Training_1["default"], null))),
            !user && react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/signin" }))));
}
exports["default"] = Routes;

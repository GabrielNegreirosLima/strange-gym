"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var card_1 = require("primereact/card");
var styled_components_1 = require("styled-components");
var Dashboard = function () {
    var user = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(card_1.Card, null,
            "Aluno: ", user === null || user === void 0 ? void 0 :
            user.username),
        react_1["default"].createElement("div", null, "AAAAA")));
};
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 500px;\n\theight: 350px;\n\tbackground-color: gray;\n"], ["\n\twidth: 500px;\n\theight: 350px;\n\tbackground-color: gray;\n"])));
exports["default"] = Dashboard;
var templateObject_1;

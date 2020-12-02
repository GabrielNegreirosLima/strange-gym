"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = axios_1["default"].create({
    baseURL: "http://localhost:8000"
});
api.defaults.headers["Access-Control-Allow-Origin"] = "http://localhost:3000";
exports["default"] = api;

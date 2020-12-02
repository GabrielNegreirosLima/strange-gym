"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var permissions = [
    {
        permission: 1,
        error: "You're a user, you should can't see this route",
        description: "Professor"
    },
    {
        permission: 2,
        error: "You're a user, you should can't see this route",
        description: "Secretary"
    },
    {
        permission: 3,
        error: "You're a user, you should can't see this route",
        description: "Doctor"
    },
    {
        permission: 4,
        error: "You're a user, you should can't see this route",
        description: "Students"
    },
];
var usePermissions = function (validate) {
    var user = react_redux_1.useSelector(function (state) { return state.auth; }).user;
    var _a = react_1.useState(false), permission = _a[0], setPermission = _a[1];
    react_1.useEffect(function () {
        setPermission((user === null || user === void 0 ? void 0 : user.enum_user) === validate);
    }, [setPermission]);
    return permission;
};
exports["default"] = usePermissions;

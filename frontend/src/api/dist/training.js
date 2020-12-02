"use strict";
exports.__esModule = true;
exports.createTraining = exports.fetchTrainingsByID = exports.fetchTrainings = void 0;
var _1 = require(".");
function fetchTrainings() {
    return _1["default"].get("api/trainings");
}
exports.fetchTrainings = fetchTrainings;
function fetchTrainingsByID(id) {
    return _1["default"].get("api/trainings/" + id);
}
exports.fetchTrainingsByID = fetchTrainingsByID;
function createTraining(_a) {
    var description = _a.description, teacherId = _a.teacherId, enrollmentId = _a.enrollmentId;
    return _1["default"].post("api/trainings", {
        description: description,
        teacherId: teacherId,
        enrollmentId: enrollmentId
    });
}
exports.createTraining = createTraining;

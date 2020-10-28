module.exports = app => {
	
	const students = require("../controllers/student.controller.js");

	var router = require("express").Router();

	router.get("/", students.findAll);
	router.get("/:id", students.findOne);
	app.use('/api/students', router);
};

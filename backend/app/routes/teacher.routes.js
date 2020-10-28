module.exports = app => {
	
	const teachers = require("../controllers/teacher.controller.js");

	var router = require("express").Router();

	router.get("/", teachers.findAll);
	router.get("/:id", teachers.findOne);
	app.use('/api/teachers', router);
};


module.exports = app => {
	
	const enrollments = require("../controllers/enrollment.controller.js");

	var router = require("express").Router();

	router.post("/", enrollments.createEnrollment)
	router.get("/", enrollments.findAll);
	router.get("/:id", enrollments.findOne);
	
	app.use('/api/enrollments', router);
};

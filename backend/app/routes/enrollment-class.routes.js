module.exports = app => {
	
	const enrollmentclass = require("../controllers/enrollment-class.controller.js");

	var router = require("express").Router();

	router.get("/", enrollmentclass.findAll);
	router.get("/:id", enrollmentclass.findOne);
	
	app.use('/api/enrollment-class', router);
};


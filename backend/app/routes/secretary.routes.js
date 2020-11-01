module.exports = app => {
	
	const secretaries = require("../controllers/secretary.controller.js");

	var router = require("express").Router();

	router.get("/", secretaries.findAll);
	router.get("/:id", secretaries.findOne);
	app.use('/api/secretaries', router);
};

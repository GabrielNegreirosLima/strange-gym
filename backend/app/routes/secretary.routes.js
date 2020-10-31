module.exports = app => {
	
	const secretaries = require("../controllers/secretary.controller.js");

	var router = require("express").Router();

	router.get("/", secretary.findAll);
	router.get("/:id", secretary.findOne);
	app.use('/api/secretaries', router);
};

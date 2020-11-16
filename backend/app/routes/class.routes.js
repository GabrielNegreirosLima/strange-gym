module.exports = app => {
	
	const classes = require("../controllers/class.controller.js");

	var router = require("express").Router();

	router.post("/", classes.createClass);
	router.get("/", classes.findAll);
	router.get("/:id", classes.findOne);
	
	app.use('/api/classes', router);
};


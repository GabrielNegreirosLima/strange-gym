module.exports = app => {
	
	const trainings = require("../controllers/training.controller.js");

	var router = require("express").Router();

	router.post("/", trainings.createTraining)
	router.get("/", trainings.findAll);
	router.get("/:id", trainings.findOne);
	
	app.use('/api/trainings', router);
};

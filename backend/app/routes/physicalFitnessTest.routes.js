module.exports = app => {

	const physicalFitnessTests = require("../controllers/physicalFitnessTest.controller.js");

	var router = require("express").Router();

	router.get("/", physicalFitnessTests.findAll);
	router.get("/:id", physicalFitnessTests.findOne);
	app.use('/api/physicalFitnessTests', router);
};

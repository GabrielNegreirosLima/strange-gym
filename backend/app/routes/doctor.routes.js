module.exports = app => {
	
	const doctors = require("../controllers/doctor.controller.js");

	var router = require("express").Router();

	router.get("/", doctors.findAll);
	router.get("/:id", doctors.findOne);
	app.use('/api/doctors', router);
};

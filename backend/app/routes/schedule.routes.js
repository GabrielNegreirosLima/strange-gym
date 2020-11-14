module.exports = app => {
	
	const schedules = require("../controllers/schedule.controller.js");

	var router = require("express").Router();

	router.post("/", schedules.createSchedule);
	router.get("/", schedules.findAll);
	router.get("/:id", schedules.findOne);
	router.put("/:id", schedules.update);
	router.delete("/:id", schedules.delete);
	
	app.use('/api/schedules', router);
};


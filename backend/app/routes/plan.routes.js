module.exports = app => {
	
	const plans = require("../controllers/plan.controller.js");

	var router = require("express").Router();

	router.post("/", plans.createPlan)
	router.get("/", plans.findAll);
	router.get("/:id", plans.findOne);
	
	app.use('/api/plans', router);
};

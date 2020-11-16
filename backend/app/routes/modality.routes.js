module.exports = app => {
	
	const modalities = require("../controllers/modality.controller.js");

	var router = require("express").Router();

	router.post("/", modalities.createModality);
	router.get("/", modalities.findAll);
	router.get("/:id", modalities.findOne);
	
	app.use('/api/modalities', router);
};


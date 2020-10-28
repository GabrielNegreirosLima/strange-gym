module.exports = app => {
	
	const users = require("../controllers/user.controller.js");

	var router = require("express").Router();

	router.get("/", users.findAll);
	router.get("/:id", users.findOne);
	router.put("/:id", users.update);
	// the 2 routes below cannot be exposed
	// router.delete("/:id", users.delete);
	// router.delete("/", users.deleteAll);
	app.use('/api/users', router);
};

const db = require("../models")
const Class = db.class

// Create a Class
exports.createClass = function (req, res) {
	const _class = {
		capacity: req.body.capacity,
		modalityId: req.body.modalityId,
		scheduleId: req.body.scheduleId
	}

	Class.create(_class)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Class."
			});
		});
}

// Retrieve all Classes from the database.
exports.findAll = (req, res) => {

	Class.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Classes."
			});
		});
};

// Find a single Class with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Class.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Class with id=" + id
			});
		});
};


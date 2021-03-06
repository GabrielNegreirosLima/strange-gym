const db = require("../models")
const Secretary = db.secretary
const User = db.user

// Create a Secretary
exports.createSecretary = function (req, res, userid) {
	const secretary = {
		name: req.body.name,
		userId: userid
	}

	Secretary.create(secretary)
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the Secretary."
			});
		});
}

// Retrieve all Secretarys from the database.
exports.findAll = (req, res) => {

	Secretary.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Secretary."
			});
		});
};

// Find a single Secretary with an id
exports.findOne = (req, res) => {
	const id = req.params.id;
	console.log("this's my ID mam: ", id)

	Secretary.findOne({
		where: { id: id }
	})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Secretary with id=" + id
		});
	});
};


const db = require("../models")
const Plan = db.plan

// Create a Plan
exports.createPlan = function (req, res) {
	const plan = {
		modalityId: req.body.modalityId,
		frequency: req.body.frequency,
		billing_frequency: req.body.billing_frequency,
		price: req.body.price
	}

	Plan.create(plan)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Plan."
			});
		});
}

// Retrieve all Planes from the database.
exports.findAll = (req, res) => {

	Plan.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Plans."
			});
		});
};

// Find a single Plan with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Plan.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Plan with id=" + id
			});
		});
};


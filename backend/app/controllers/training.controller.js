const db = require("../models")
const Training = db.training

// Create a Training
exports.createTraining = function (req, res, teacherId, enrollmentId) {
	const Training = {
		description: req.body.description,
		teacherId: teacherId,
		enrollmentId: enrollmentId
	}

	Training.create(Training)
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Training."
			});
		});
}

// Retrieve all Traininges from the database.
exports.findAll = (req, res) => {

	Training.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Trainings."
			});
		});
};

// Find a single Training with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Training.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Training with id=" + id
			});
		});
};


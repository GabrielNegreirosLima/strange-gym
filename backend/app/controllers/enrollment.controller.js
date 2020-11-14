const db = require("../models")
const Enrollment = db.enrollment


// Retrieve all Enrollment from the database.
exports.findAll = (req, res) => {

	Enrollment.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Enrollments."
			});
		});
};

// Find a single Enrollment with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Enrollment.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Enrollment with id=" + id
			});
		});
};


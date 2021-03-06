const db = require("../models")
const EnrollmentClass = db.enrollmentClass


// Create a Enrollment
exports.createEnrollmentClass = function (req, res) {
	const enrollmentClass = {
		studentId: req.body.studentId,
		planId: req.body.plansId
	}

	EnrollmentClass.create(enrollmentClass)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Enrollment-Class."
			});
		});
}

// Retrieve all EnrollmentClass from the database.
exports.findAll = (req, res) => {

	EnrollmentClass.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the EnrollmentClasss."
			});
		});
};

// Find a single EnrollmentClass with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	EnrollmentClass.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving EnrollmentClass with id=" + id
			});
		});
};


const db = require("../models")
const Enrollment = db.enrollment
const Student = db.student
const Plan = db.plan

// Create a Enrollment
exports.createEnrollment = function (req, res) {
	const enrollment = {
		studentId: req.body.studentId,
		planId: req.body.plansId
	}

	Enrollment.create(enrollment)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Enrollment."
			});
		});
}


// Retrieve all Enrollment from the database.
exports.findAll = (req, res) => {

	Enrollment.findAll({ include: [Student, Plan] })
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


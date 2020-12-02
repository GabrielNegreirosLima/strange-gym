const db = require("../models")
const PhysicalFitnessTest = db.physicalFitnessTest

// Create a PhysicalFitnessTest
exports.createPhysicalFitnessTest = function (req, res) {
	const physicalFitnessTest = {
		weight: req.body.weight,
		height: req.body.weight,
		blood_pressure: req.body.weight,
		body_fat_percentage: req.body.weight,
		body_mass_percentage: req.body.weight,
		result: req.body.result,
		doctorId: req.body.doctorId,
		studentId: req.body.studentId
	}

	console.log({ physicalFitnessTest })

	PhysicalFitnessTest.create(physicalFitnessTest)
		.then(data => {
			res.status(200).send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the PhysicalFitnessTest."
			});
		});
}

// Retrieve all PhysicalFitnessTests from the database.
exports.findAll = (req, res) => {

	PhysicalFitnessTest.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the PhysicalFitnessTests."
			});
		});
};

// Find a single PhysicalFitnessTests with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	PhysicalFitnessTest.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving PhysicalFitnessTest with id=" + id
			});
		});
};


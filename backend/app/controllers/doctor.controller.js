const db = require("../models")
const Doctor = db.doctor

// Create a Doctor
exports.createDoctor = function (req, res, userid) {
	const doctor = {
		name: req.body.name,
		userId: userid
	}

	Doctor.create(doctor)
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while creating the User."
			});
		});

}

// Retrieve all Doctors from the database.
exports.findAll = (req, res) => {

	Doctor.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Users."
			});
		});
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Doctor.findOne({
		where: { id: id }
	})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving User with id=" + id
		});
	});
};


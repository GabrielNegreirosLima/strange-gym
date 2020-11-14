const db = require("../models")
const Modality = db.modality


// Create a Modality
exports.createModality = function (req, res) {
	const modality = {
		name: req.body.name,
	}

	Modality.create(modality)
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Modality."
			});
		});
}


// Retrieve all Modalities from the database.
exports.findAll = (req, res) => {

	Modality.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Modalitys."
			});
		});
};

// Find a single Modality with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Modality.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Modality with id=" + id
			});
		});
};


const db = require("../models")
const Doctor = db.doctor

// Create a Doctor
exports.createDoctor = function(req, res){	
	const doctor = {
		name: req.body.doctor.name
	}

	Doctor.create(doctor)
	.catch(err => {
      	res.status(500).send({
        	message:
				err.message || "Some error occurred while creating the Doctor."
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
		  err.message || "Some error occurred while getting all the Doctor."
	  });
	});
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Doctor.find({ 
		where: { id: id },
		include: [User] 
	})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Doctor with id=" + id
		});	
	});
};


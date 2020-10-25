const db = require("../models")
const Doctor = db.doctors

exports.createDoctor = function(req, res){	
	const doctor = {
		name: req.body.doctor.name
	}
	console.log(doctor)

	Doctor.create(doctor).catch(err => {
      	res.status(500).send({
        	message:
      		err.message || "Some error occurred while creating the User."
		});
	});
}


const db = require("../models")
const Student = db.student

// Create a Student
exports.createStudent = function(req, res, userid){	
	const student = {
		name: req.body.name,
		cpf: req.body.cpf,
		rg: req.body.rg,
		birth_date: req.body.birth_date,
		cred_card_number: req.body.cred_card_number,
		cred_card_issuer: req.body.cred_card_issuer,
		cred_card_name: req.body.cred_card_name,
		cred_card_cvv: req.body.cred_card_cvv,
		userId: userid
	}

	Student.create(student)
	.catch(err => {
      	res.status(500).send({
        	message:
				err.message || 
				"Some error occurred while creating the Student."
		});
	});
}

// Retrieve all Doctors from the database.
exports.findAll = (req, res) => {

	Student.findAll()
	.then(data => {
		res.send(data);
	})
	.catch(err => {
	  res.status(500).send({
		message: 
		  err.message || "Some error occurred while getting all the Students."
	  });
	});
};

// Find a single Doctor with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Student.findOne({
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


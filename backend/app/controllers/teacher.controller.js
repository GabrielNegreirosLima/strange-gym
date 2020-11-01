const db = require("../models")
const Teacher = db.teacher

// Create a Teacher
exports.createTeacher = function(req, res, userid){	
	const teacher = {
		name: req.body.name,
		userId: userid
	}

	Teacher.create(teacher)
	.catch(err => {
      	res.status(500).send({
        	message:
				err.message || "Some error occurred while creating the Teachers."
		});
	});

}

// Retrieve all Teachers from the database.
exports.findAll = (req, res) => {

  Teacher.findAll()
	.then(data => {
		res.send(data);
	})
	.catch(err => {
	  res.status(500).send({
		message: 
		  err.message || "Some error occurred while getting all the Teachers."
	  });
	});
};

// Find a single Teacher with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Teacher.findOne({ 
		where: { id: id }
	})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving Teacher with id=" + id
		});	
	});
};


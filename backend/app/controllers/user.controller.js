const db = require("../models");
const { QueryTypes } = require('sequelize');
const User = db.users;
const Doctor = db.doctors;
const Op = db.Sequelize.Op;
const doctorController = require("./doctor.controller.js");

// Checks if the user exists
function checkPastUser(req, res){


}

// Create and Save a new User
exports.create = (req, res) => {
  
	if (!req.body.username || !req.body.password) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
		return;
	}

	const user = {
		username: req.body.username,
		password: req.body.password,
		enum_user: req.body.enum_user
	};

	// How to code SQL Injection:
	const check = db.sequelize.query(
		`SELECT * FROM users WHERE username='${req.body.username}'`, 
		{ type: QueryTypes.SELECT }
	)
	.then(data => {
		status = 0;

		if(data.length !== 0){ 
			res.status(500).send({
				message: "This user already exists!"
			});
			throw "User exists!"
		}

	})
	.then(data => {
		User.create(user)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.status(500).send({
				message: 
				err.message || "Some error occurred while creating the user"
			});
		})
	})
	.catch(err => {
		res.status(500).send({
			message: 
			err.message || "Some error occurred while checking if the user exists"
		});
	});
		
	switch(user.enum_user) {
		case 0:
			doctorController.createDoctor(req, res);
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
	} 

};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  User.findAll()
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

// Find a single User with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	User.findByPk(id)
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error retrieving User with id=" + id
		});	
	});
};

// Update a User by the id in the request
exports.update = (req, res) => {
	const id = req.params.id
	
	User.update({
		username: req.body.username,
		password: req.body.password
	}, 
	{
		where: {
			id: id
		}
	})
	.then(data => {
		res.send(data);
	})
	.catch(err => {
		res.status(500).send({
			message: "Error updating User with id=" + id
		});	
	});
};

// NOT PUBLIC: Delete a User with the specified id in the request
exports.delete = (req, res) => {

	const id = req.params.id

	User.destroy({ where: { id: id } })
	.then(num => {
		if(num != 1){
			res.send({
				message: `Could not delete User id=${id}, maybe User was not found`
			})
			return
		}

		res.send({ message: `Sucessfull delete of User id=${id}`})
	})
	.catch(err => {
		res.status(500).send({
			message: "Error destroying the User with id=" + id
		});	
	});
};

// NOT PUBLIC: Delete all Users from the database.
exports.deleteAll = (req, res) => {
	
	const id = req.params.id

	User.destroy()
	.then(num => {
		if(num != 1){
			res.send({
				message: `Could not delete all the users, are there any?`
			})
			return
		}

		res.send({ message: `Sucessfull delete of the Users`})
	})
	.catch(err => {
		res.status(500).send({
			message: "Error destroying the Users, try to destroy the user categories first!"
		});	
	});
};


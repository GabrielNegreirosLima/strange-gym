const db = require("../models");
const { QueryTypes } = require('sequelize');
const User = db.users;
const Doctor = db.doctors;
const Op = db.Sequelize.Op;

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


const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  
  if (!req.body.username || !req.body.password || !req.body.enum_user) {
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

  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
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
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};


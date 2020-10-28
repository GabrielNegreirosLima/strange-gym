const db = require("../models");
const config = require("../config/auth.config");
const Doctor = require("./doctor.controller.js");
const Student = require("./student.controller.js");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  	
	// Save User to Database
	User.create({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 8),
		enum_user: req.body.enum_user
	})
	.then(user => {
		
		switch(req.body.enum_user) {
			case 0:
				Doctor.createDoctor(req, res);
				res.send({ message: "Doctor was registered successfully!", user: user });
				break;
			case 1:
				Student.createStudent(req, res);
				res.send({ message: "Student was registered successfully!", user: user });
				break;
			case 2:
				break;
			case 3:
				break;
		} 

	})
	.catch(err => {
		res.status(500).send({ message: err.message });
    });
	
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        role: user.enum_user,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

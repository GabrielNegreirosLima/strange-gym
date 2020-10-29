const db = require("../models");
const config = require("../config/auth.config");
const Doctor = require("./doctor.controller.js");
const Student = require("./student.controller.js");
const Teacher = require("./teacher.controller.js");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

  const enum_user_number = Number(req.body.enum_user)
  // Save User to Database
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    enum_user: enum_user_number
  })
    .then(user => {

      switch (enum_user_number) {
        case 0:
          Student.createStudent(req, res);
          res.send({ message: "Student was registered successfully!", user: user });
          break;
        case 1:
          Teacher.createTeacher(req, res);
          res.send({ message: "Teacher was registered successfully!", user: user });
          break;
        case 2:
          break;
        case 3:
          Doctor.createDoctor(req, res);
          res.send({ message: "Doctor was registered successfully!", user: user });
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

      delete user.password;

      res.status(200).send({
        user: user,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

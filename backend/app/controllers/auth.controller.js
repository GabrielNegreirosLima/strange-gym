const db = require("../models");
const config = require("../config/auth.config");
const Doctor = require("./doctor.controller.js");
const Student = require("./student.controller.js");
const Teacher = require("./teacher.controller.js");
const Secretary = require("./secretary.controller.js");
const User = db.user;
const StudentModel = db.student;
const DoctorModel = db.doctor;
const TeacherModel = db.teacher;
const SecretaryModel = db.secretary
const EnrollmentModel = db.enrollment

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
					Student.createStudent(req, res, user.id);
					res.send({
						message: "Student was registered successfully!",
						user: user
					});
					break;
				case 1:
					Teacher.createTeacher(req, res, user.id);
					res.send({
						message: "Teacher was registered successfully!",
						user: user
					});
					break;
				case 2:
					Secretary.createSecretary(req, res, user.id);
					res.send({
						message: "Secretary was registered sucessfully!",
						user: user
					})
					break;
				case 3:
					Doctor.createDoctor(req, res, user.id);
					res.send({
						message: "Doctor was registered successfully!",
						user: user
					});
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
		.then(async user => {
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


			switch (user.enum_user) {
				case 0:
					const student = await StudentModel.findOne({
						where: {
							userId: user.id
						}
					})

					const enroment = await EnrollmentModel.findOne({
						where: {
							studentId: student.id
						}
					})

					user = { id: user.id, username: user.username, enum_user: user.enum_user, student: student, enrollment: enroment }
					break;
				case 1:
					const teacher = await TeacherModel.findOne({
						where: {
							userId: user.id
						}
					})
					user = { id: user.id, username: user.username, enum_user: user.enum_user, teacher: teacher }
					break;
				case 2:
					const secretary = await SecretaryModel.findOne({
						where: {
							userId: user.id
						}
					})
					user = { id: user.id, username: user.username, enum_user: user.enum_user, secretary: secretary }
					break;
				case 3:
					const doctor = await DoctorModel.findOne({
						where: {
							userId: user.id
						}
					})
					user = { id: user.id, username: user.username, enum_user: user.enum_user, doctor: doctor }
					break;
			}

			res.status(200).send({
				user: user,
				accessToken: token
			});
		})
		.catch(err => {
			res.status(500).send({ message: err.message });
		});
};

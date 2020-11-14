const db = require("../models")
const Schedule = db.schedule

// Create a Schedule
// DATE FORMAT: "2016-01-01 00:00:00"
exports.createSchedule = function (req, res) {
	const schedule = {
		day_of_week: req.body.day_of_week,
		time: req.body.time
	}

	Schedule.create(schedule)
		.catch(err => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Schedule. Maybe in date or day of the week format."
			});
		});
}

// Retrieve all Schedulees from the database.
exports.findAll = (req, res) => {

	Schedule.findAll()
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting all the Schedules."
			});
		});
};

// Find a single Schedule with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Schedule.findOne({
		where: { id: id }
	})
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: "Error retrieving Schedule with id=" + id
			});
		});
};

// Update a Schedule by the id in the request
exports.update = (req, res) => {
	const id = req.params.id
	
	Schedule.update({
		day_of_week: req.body.day_of_week,
		time: req.body.time
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
			message: "Error updating Schedule with id=" + id
		});	
	});
};

// NOT PUBLIC: Delete a Schedule with the specified id in the request
exports.delete = (req, res) => {

	const id = req.params.id

	Schedule.destroy({ where: { id: id } })
	.then(num => {
		if(num != 1){
			res.send({
				message: `Could not delete Schedule id=${id}, maybe User was not found`
			})
			return
		}

		res.send({ message: `Sucessfull delete of Schedule id=${id}`})
	})
	.catch(err => {
		res.status(500).send({
			message: "Error destroying the Schedule with id=" + id
		});	
	});
};



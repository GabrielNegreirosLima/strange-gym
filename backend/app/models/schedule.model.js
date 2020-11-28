module.exports = (sequelize, Sequelize) => {
	const Schedule = sequelize.define("schedule", {
		day_of_week: {
			type: Sequelize.ENUM("monday", "thursday", "wednesday", "tuesday", "friday")
		},
		time_initial: {
			// Format: "2016-01-01 00:00:00+00:00"
			type: Sequelize.DATE
		},
		time_end: {
			// Format: "2016-01-01 00:00:00+00:00"
			type: Sequelize.DATE
		}
	});

	return Schedule;
};


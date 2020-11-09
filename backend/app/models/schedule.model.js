module.exports = (sequelize, Sequelize) => {
	const Schedule = sequelize.define("schedule", {
		day_of_week: {
			type: Sequelize.ENUM("monday", "thursday", "wednesday", "tuesday", "friday")
		},
		time: {
			type: Sequelize.DATE
		}
	});

	return Schedule;
};


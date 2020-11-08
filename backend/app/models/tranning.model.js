module.exports = (sequelize, Sequelize) => {
	const Tranning = sequelize.define("tranning", {
		description: {
			type: Sequelize.TEXT
		}	
	});

	return Schedule;
};


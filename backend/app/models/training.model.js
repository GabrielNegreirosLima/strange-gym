module.exports = (sequelize, Sequelize) => {
	const Training = sequelize.define("training", {
		description: {
			type: Sequelize.TEXT
		}
	});

	return Training;
};


module.exports = (sequelize, Sequelize) => {
	const Modality = sequelize.define("modality", {
		name: {
			type: Sequelize.STRING
		}
	});

	return Modality;
};


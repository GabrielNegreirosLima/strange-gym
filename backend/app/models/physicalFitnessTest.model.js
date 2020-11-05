module.exports = (sequelize, Sequelize) => {
	const PhysicalFitnessTest = sequelize.define("physicalFitnessTest", {
		weight: {
			type: Sequelize.DOUBLE
		},
		height: {
			type: Sequelize.DOUBLE
		},
		blood_pressure: {
			type: Sequelize.STRING
		},
		body_fat_percentage: {
			type: Sequelize.DOUBLE
		},
		body_mass_percentage: {
			type: Sequelize.DOUBLE
		},
		result: {
			type: Sequelize.BOOLEAN
		}
	});

	return PhysicalFitnessTest;
};


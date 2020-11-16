module.exports = (sequelize, Sequelize) => {
	const Plan = sequelize.define("plan", {
		frequency: {
			// per week!
			type: Sequelize.ENUM("2", "3", "4", "5", "6", "7")
		},
		billing_frequency: {
			type: Sequelize.ENUM("monthly", "semiannual", "yearly")
		},
		price: {
			type: Sequelize.DOUBLE
		}
	});

	return Plan;
};


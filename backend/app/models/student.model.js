module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define("student", {
		name: {
			type: Sequelize.STRING
		},
		cpf: {
			type: Sequelize.STRING
		},
		rg: {
			type: Sequelize.STRING
		},
		birth_date: {
			type: Sequelize.DATE
		},
		cred_card_number: {
			type: Sequelize.STRING
		},
		cred_card_issuer: {
			type: Sequelize.STRING
		},
		cred_card_name: {
			type: Sequelize.STRING
		},
		cred_card_cvv: {
			type: Sequelize.STRING
		}
 	 });

	return Student;
};


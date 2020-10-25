module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		username: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},

		// enum for user type
		// 0 - student
		// 1 - teacher
		// 2 - secretary
		// 3 - doctor
    	enum_user: {
	  		type: Sequelize.INTEGER
		}
  	});

  return User;
};


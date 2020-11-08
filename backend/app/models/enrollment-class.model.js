module.exports = (sequelize, Sequelize) => {
	const EnrollmentClass = sequelize.define("enrollment-class", { });

	return EnrollmentClass;
};


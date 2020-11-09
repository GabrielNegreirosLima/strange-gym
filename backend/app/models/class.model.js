module.exports = (sequelize, Sequelize) => {
	const Class = sequelize.define("class", {
		capacity: {
			type: Sequelize.INTEGER
		}	
	});

	return Class;
};


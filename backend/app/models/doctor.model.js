module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    name: {
      type: Sequelize.STRING
    }
  });

  return Doctor;
};


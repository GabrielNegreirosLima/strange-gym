module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("Doctor", {
    name: {
      type: Sequelize.STRING
    }
  });

  return Doctor;
};


module.exports = (sequelize, Sequelize) => {
  const Secretary = sequelize.define("secretary", {
    name: {
      type: Sequelize.STRING
    }
  });

  return Secretary;
};


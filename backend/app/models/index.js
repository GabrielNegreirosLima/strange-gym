const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.doctor = require("./doctor.model.js")(sequelize, Sequelize);
db.student = require("./student.model.js")(sequelize, Sequelize);
db.teacher = require("./teacher.model.js")(sequelize, Sequelize);
db.secretary = require("./secretary.model.js")(sequelize, Sequelize);

db.user.hasMany(db.doctor, { as: "doctor" });
db.user.hasMany(db.student, { as: "student" });
db.user.hasMany(db.teacher, { as: "teacher" });
db.user.hasMany(db.secretary, { as: "teacher" });


module.exports = db;


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
db.physicalFitnessTest = require("./physicalFitnessTest.model")(sequelize, Sequelize);
db.enrollment = require("./enrollment.model.js")(sequelize, Sequelize);
db.plan = require("./plan.model.js")(sequelize, Sequelize);
db.modality = require("./modality.model.js")(sequelize, Sequelize);
db.schedule = require("./schedule.model.js")(sequelize, Sequelize);
db.class = require("./class.model.js")(sequelize, Sequelize);
db.enrollmentClass = require("./enrollment-class.model.js")(sequelize, Sequelize);
db.training = require("./tranning.model.js")(sequelize, Sequelize);

db.doctor.belongsTo(db.user);
db.student.belongsTo(db.user);
db.teacher.belongsTo(db.user);
db.secretary.belongsTo(db.user);

db.physicalFitnessTest.belongsTo(db.doctor)
db.physicalFitnessTest.belongsTo(db.student)

db.enrollment.belongsTo(db.student)
db.enrollment.belongsTo(db.plan)

db.plan.belongsTo(db.modality)

db.class.belongsTo(db.modality)
db.class.belongsTo(db.schedule)

db.enrollment.belongsToMany(db.class, { through: db.enrollmentClass })
db.class.belongsToMany(db.enrollment, { through: db.enrollmentClass })

db.training.belongsTo(db.enrollment)
db.training.belongsTo(db.teacher)

module.exports = db


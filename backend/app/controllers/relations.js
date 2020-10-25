const db = require("../models");
const User = db.users;
const Doctor = db.doctors;

Doctor.hasOne(User, { foreignKey: 'owner_id' });

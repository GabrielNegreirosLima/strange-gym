const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

//For dev 
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/ping", (req, res) => {
  res.json({ message: "pong!" });
});

//Routes
require("./app/routes/user.routes")(app);
require("./app/routes/doctor.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/secretary.routes")(app);
require("./app/routes/teacher.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/enrollment-class.routes")(app);
require("./app/routes/enrollment.routes")(app);
require("./app/routes/modality.routes")(app);
require("./app/routes/physicalFitnessTest.routes")(app);
require("./app/routes/plan.routes")(app);
require("./app/routes/schedule.routes")(app);
require("./app/routes/training.routes")(app);
require("./app/routes/class.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


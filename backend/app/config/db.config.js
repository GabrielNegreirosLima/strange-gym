module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "awesomepostgres",
  DB: "stranger-gym",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


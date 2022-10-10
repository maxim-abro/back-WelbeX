const config = require("../config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
  const { host, port, user, password, database } = config.database;
  await mysql.createConnection({ host, port, user, password });

  const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: "mysql",
    logging: false,
  });

  db.Table = require("../table/table.model")(sequelize);

  await sequelize.sync();
}

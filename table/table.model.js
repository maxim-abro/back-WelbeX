const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    date: {type: DataTypes.DATE},
    title: {type: DataTypes.STRING},
    count: {type: DataTypes.INTEGER},
    distance: {type: DataTypes.INTEGER},
  }

  const options = {
    timestamps: false,
    tableName: "table",
  }

  return sequelize.define("table", attributes, options);
}

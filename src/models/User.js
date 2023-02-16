const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = User;

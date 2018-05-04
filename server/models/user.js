'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {tableName: "users"});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Occasion, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Purchase, {
      foreignKey: "user_id"
    });
    User.hasMany(models.Recipient, {
      foreignKey: "user_id"
    });
  };
  return User;
};
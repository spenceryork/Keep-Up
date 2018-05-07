'use strict';
module.exports = (sequelize, DataTypes) => {
  var Occasion = sequelize.define('Occasion', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    budget: DataTypes.INTEGER
  }, {tableName: "occasions"});
  Occasion.associate = function(models) {
    // associations can be defined here
    Occasion.belongsTo(models.User, {
      foreignKey: "user_id"
    });
    Occasion.hasMany(models.Purchase, {
      foreignKey: "occasion_id"
    });
  };
  return Occasion;
};
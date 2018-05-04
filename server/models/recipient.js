'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipient = sequelize.define('Recipient', {
    name: DataTypes.STRING,
    date_of_birth: DataTypes.STRING
  }, {});
  Recipient.associate = function(models) {
    // associations can be defined here
  };
  return Recipient;
};
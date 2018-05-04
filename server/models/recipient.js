'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipient = sequelize.define('Recipient', {
    name: DataTypes.STRING,
    date_of_birth: DataTypes.STRING
  }, {tableName: "recipients"});
  Recipient.associate = function(models) {
    Recipient.belongsTo(models.User, {
      foreignKey: "user_id"
    })
    Recipient.belongsToMany(models.Occasion, {
      through:{ 
        model: "occasion_recipient",
        unique: false
      },
      constraints:false
    })
    Recipient.belongsTo(models.Recipient, {
      foreignKey: "recipient_id"
    });
  };
  return Recipient;
};
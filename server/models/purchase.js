'use strict';
module.exports = (sequelize, DataTypes) => {
  var Purchase = sequelize.define('Purchase', {
    name: DataTypes.STRING,
    price: DataTypes.REAL,
    description: DataTypes.STRING,
    recipient: DataTypes.STRING
  }, {tableName: "purchases"});
  Purchase.associate = function(models) {
    Purchase.belongsTo(models.User, {
      foreignKey: "user_id"
    })
    Purchase.belongsTo(models.Occasion, {
      foreignKey: "occasion_id"
    });
    Purchase.belongsTo(models.Recipient, {
      foreignKey: "recipient_id"
    });
  };
  return Purchase;
};
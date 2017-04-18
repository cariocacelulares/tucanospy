'use strict';
module.exports = function(sequelize, DataTypes) {
  var AdMarketplace = sequelize.define('AdMarketplace', {
    id:            {type: DataTypes.INTEGER, primaryKey: true},
    url:           DataTypes.STRING,
    priceTag:      DataTypes.STRING,
    priceMultTag:  DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return AdMarketplace;
};

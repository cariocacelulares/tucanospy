'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ad = sequelize.define('Ad', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Ad.hasMany(models.Marketplace, {
          foreignKey: 'adId',
          as: 'marketplaces'
        });
      }
    }
  });
  return Ad;
};

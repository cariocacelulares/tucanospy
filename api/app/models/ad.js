'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ad = sequelize.define('Ad', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Ad.belongsToMany(models.Marketplace, { through: 'AdMarketplace' });
      }
    }
  });
  return Ad;
};

'use strict';

module.exports = function(sequelize, DataTypes) {
  var Marketplace = sequelize.define('Marketplace', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Marketplace.belongsToMany(models.Ad, { through: 'AdMarketplace' });
      }
    }
  });

  return Marketplace;
};

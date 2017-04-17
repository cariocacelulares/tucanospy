'use strict';

module.exports = function(sequelize, DataTypes) {
  var Marketplace = sequelize.define('Marketplace', {
    url:          DataTypes.STRING,
    priceTag:     DataTypes.STRING,
    priceMultTag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Marketplace.belongsTo(models.Ad, {
          foreignKey: 'adId',
          onDelete: 'CASCADE'
        });
      }
    }
  });

  return Marketplace;
};

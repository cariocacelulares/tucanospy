'use strict';
module.exports = function(sequelize, DataTypes) {
  var AdMarketplace = sequelize.define('AdMarketplace', {
    adId:          DataTypes.STRING,
    marketplaceId: DataTypes.STRING,
    url:           DataTypes.STRING,
    priceTag:      DataTypes.STRING,
    priceMultTag:  DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        AdMarketplace.belongsTo(models.Ad, {
          foreignKey: 'adId',
          onDelete:   'CASCADE'
        });

        AdMarketplace.belongsTo(models.Marketplace, {
          foreignKey: 'marketplaceId',
          onDelete:   'CASCADE'
        });
      }
    }
  });
  return AdMarketplace;
};

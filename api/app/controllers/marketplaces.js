const Marketplace = require('../models').Marketplace;

module.exports = {
  create(req, res) {
    return Marketplace
      .create({
        adId:         req.params.adId,
        url:          req.body.url,
        priceTag:     req.body.priceTag,
        priceMultTag: req.body.priceMultTag
      })
      .then(resp => res.status(201).send(resp))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Marketplace
      .findById(req.params.marketplaceId)
      .then(marketplace => {
        if (!marketplace) {
          return res.status(404).send({
            message: 'Marketplace Not Found',
          });
        }
        return marketplace
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(marketplace))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Marketplace
      .findById(req.params.marketplaceId)
      .then(marketplace => {
        if (!marketplace) {
          return res.status(404).send({
            message: 'Marketplace Not Found',
          });
        }
        return marketplace
          .destroy()
          .then(() => res.status(204).send(marketplace))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};

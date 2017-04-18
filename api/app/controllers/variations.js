const AdMarketplace = require('../models').AdMarketplace;

module.exports = {
  retrieve(req, res) {
    return AdMarketplace
      .findById(req.params.variationId)
      .then(variation => {
        if (!variation) {
          return res.status(404).send({
            message: 'Variation Not Found',
          });
        }
        return res.status(200).send(variation);
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return AdMarketplace
      .create(req.body, { fields: Object.keys(req.body) })
      .then(resp => res.status(201).send(resp))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return AdMarketplace
      .findById(req.params.variationId, {
        include: [{
          model: Marketplace
        }]
      })
      .then(variation => {
        if (!variation) {
          return res.status(404).send({
            message: 'Variation Not Found',
          });
        }
        return variation
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(variation))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return AdMarketplace
      .findById(req.params.variationId)
      .then(variation => {
        if (!variation) {
          return res.status(404).send({
            message: 'Variation Not Found',
          });
        }
        return variation
          .destroy()
          .then(() => res.status(204).send(variation))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};

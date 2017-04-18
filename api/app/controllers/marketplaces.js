const Marketplace   = require('../models').Marketplace;
const Ad            = require('../models').Ad;

module.exports = {
  list(req, res) {
    return Marketplace
      .findAll({
        include: [{
          model: Ad
        }],
      })
      .then(todo => res.status(200).send(todo))
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
  },

  retrieve(req, res) {
    return Marketplace
      .findById(req.params.marketplaceId, {
        include: [{
          model: Ad
        }],
      })
      .then(ad => {
        if (!ad) {
          return res.status(404).send({
            message: 'Ad Not Found',
          });
        }
        return res.status(200).send(ad);
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return Marketplace
      .create(req.body, { fields: Object.keys(req.body) })
      .then(resp => res.status(201).send(resp))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Marketplace
      .findById(req.params.marketplaceId, {
        include: [{
          model: Ad
        }],
      })
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

const Ad            = require('../models').Ad;
const Marketplace   = require('../models').Marketplace;

module.exports = {
  create(req, res) {
    return Ad
      .create(req.body, { fields: Object.keys(req.body) })
      .then(resp => res.status(201).send(resp))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Ad
      .findById(req.params.adId, {
        include: [{
          model: Marketplace
        }]
      })
      .then(ad => {
        if (!ad) {
          return res.status(404).send({
            message: 'Ad Not Found',
          });
        }
        return ad
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(ad))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Ad
      .findById(req.params.adId)
      .then(ad => {
        if (!ad) {
          return res.status(404).send({
            message: 'Ad Not Found',
          });
        }
        return ad
          .destroy()
          .then(() => res.status(204).send(ad))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }
};

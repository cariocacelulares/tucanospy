const Ad          = require('../models').Ad;
const Marketplace = require('../models').Marketplace;

module.exports = {
  list(req, res) {
    return Ad
      .findAll({
        include: [{
          model: Marketplace,
          as: 'marketplaces',
        }],
      })
      .then(todo => res.status(200).send(todo))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Ad
      .findById(req.params.adId, {
        include: [{
          model: Marketplace,
          as: 'marketplaces',
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
    return Ad
      .create({
        title: req.body.title,
      })
      .then(resp => res.status(201).send(resp))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Ad
      .findById(req.params.adId, {
        include: [{
          model: Marketplace,
          as: 'marketplaces',
        }],
      })
      .then(ad => {
        if (!ad) {
          return res.status(404).send({
            message: 'Ad Not Found',
          });
        }
        return ad
          .update({
            title: req.body.title || ad.title,
          })
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

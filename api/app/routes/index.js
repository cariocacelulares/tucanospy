const adsController = require('../controllers').ads;
const marketplacesController = require('../controllers').marketplaces;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to TucanoSpy API!',
  }));

  app.get('/ads'         , adsController.list);
  app.get('/ads/:adId'   , adsController.retrieve);
  app.post('/ads'        , adsController.create);
  app.put('/ads/:adId'   , adsController.update);
  app.delete('/ads/:adId', adsController.destroy);

  app.post('/ads/:adId/marketplaces', marketplacesController.create);
  app.put('/ads/:adId/marketplaces/:marketplaceId', marketplacesController.update);
  app.delete('/ads/:adId/marketplaces/:marketplaceId', marketplacesController.destroy);
};

const adsController          = require('../controllers').ads;
const marketplacesController = require('../controllers').marketplaces;

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to TucanoSpy API!',
  }));

  app
    .get('/ads'         , adsController.list)
    .get('/ads/:adId'   , adsController.retrieve)
    .post('/ads'        , adsController.create)
    .put('/ads/:adId'   , adsController.update)
    .delete('/ads/:adId', adsController.destroy)

    .get('/marketplaces'                  , marketplacesController.list)
    .get('/marketplaces/:marketplaceId'   , marketplacesController.retrieve)
    .post('/marketplaces'                 , marketplacesController.create)
    .put('/marketplaces/:marketplaceId'   , marketplacesController.update)
    .delete('/marketplaces/:marketplaceId', marketplacesController.destroy)


  ;
};

const express = require('express');

const kingdomsRouter = require('./kingdoms.router');
const housesRouter = require('./houses.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/kingdoms', kingdomsRouter);
  router.use('/houses', housesRouter);
}

module.exports = routerApi;

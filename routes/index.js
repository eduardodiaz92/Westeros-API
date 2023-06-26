const express = require('express');

const kingdomsRouter = require('./kingdoms.router');
const housesRouter = require('./houses.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const characterRouter = require('./character.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/kingdoms', kingdomsRouter);
  router.use('/houses', housesRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/character', characterRouter);
}

module.exports = routerApi;

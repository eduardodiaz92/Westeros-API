const express = require('express');
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const HousesService = require('../services/house.service');
const {
  createHouseDto,
  updateHouseDto,
  getHouseDto,
  queryHouseDto,
} = require('../dtos/house.dto');
const router = express.Router();
const service = new HousesService();

router.get(
  '/',
  validatorHandler(queryHouseDto, 'query'),
  async (req, res, next) => {
    try {
      const house = await service.find(req.query);
      res.json(house);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getHouseDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await service.findOne(id);
      res.json(house);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'mad king'),
  validatorHandler(createHouseDto, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newHouse = await service.create(body);
      res.status(201).json(newHouse);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'mad king'),
  validatorHandler(getHouseDto, 'params'),
  validatorHandler(updateHouseDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const house = await service.update(id, body);
      res.json(house);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('mad king'),
  validatorHandler(getHouseDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

module.exports = router;

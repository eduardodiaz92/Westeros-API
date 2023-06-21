const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const KingdomService = require('../services/house.service');
const {
  createKingdomDto,
  getKingdomDto,
  updateKingdomDto,
} = require('../dtos/kingdom.dto');
const router = express.Router();
const service = new KingdomService();

router.get('/', async (req, res, next) => {
  try {
    const house = await service.find();
    res.json(house);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getKingdomDto, 'params'),
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
  validatorHandler(createKingdomDto, 'body'),
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
  validatorHandler(getKingdomDto, 'params'),
  validatorHandler(updateKingdomDto, 'body'),
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
  validatorHandler(getKingdomDto, 'params'),
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

const express = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const KingdomsService = require('../services/kingdom.service');
const {
  createKingdomDto,
  updateKingdomDto,
  getKingdomDto,
} = require('./../dtos/kingdom.dto');
const router = express.Router();
const service = new KingdomsService();

router.get('/', async (req, res, next) => {
  try {
    const kingdom = await service.find();
    res.json(kingdom);
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
      const kingdom = await service.findOne(id);
      res.json(kingdom);
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
      const newKingdom = await service.create(body);
      res.status(201).json(newKingdom);
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
      const user = await service.update(id, body);
      res.json(user);
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

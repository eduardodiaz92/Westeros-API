const express = require('express');
const { checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
const validatorHandler = require('../middlewares/validator.handler');
const KingdomService = require('../services/kingdom.service');
const {
  createKingdomDto,
  getKingdomDto,
  updateKingdomDto,
  queryKingdomDto,
} = require('../dtos/kingdom.dto');
const router = express.Router();
const service = new KingdomService();

router.get(
  '/',
  validatorHandler(queryKingdomDto, 'query'),
  async (req, res, next) => {
    try {
      const kingdom = await service.find(req.query);
      res.json(kingdom);
    } catch (error) {
      next(error);
    }
  }
);

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
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'mad king'),
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
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'mad king'),
  validatorHandler(getKingdomDto, 'params'),
  validatorHandler(updateKingdomDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const kingdom = await service.update(id, body);
      res.json(kingdom);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('mad king'),
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

module.exports = router;

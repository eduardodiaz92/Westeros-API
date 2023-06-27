const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const ruler = Joi.number().integer();
const capital = Joi.string().min(3).max(100);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createKingdomDto = Joi.object({
  name: name.required(),
  capital: capital.required(),
  ruler: ruler
});

const updateKingdomDto = Joi.object({
  name: name,
  ruler: ruler,
  capital: capital,
});

const getKingdomDto = Joi.object({
  id: id.required(),
});

const queryKingdomDto = Joi.object({
  limit,
  offset,
});

module.exports = {
  createKingdomDto,
  updateKingdomDto,
  getKingdomDto,
  queryKingdomDto,
};

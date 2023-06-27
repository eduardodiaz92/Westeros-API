const Joi = require('joi');

const id = Joi.number().integer();
const kingdom = Joi.string().min(3).max(100);
const ruledBy = Joi.number().integer();
const capital = Joi.string().min(3).max(100);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createKingdomDto = Joi.object({
  kingdom: kingdom.required(),
  capital: capital.required(),
  ruledBy: ruledBy
});

const updateKingdomDto = Joi.object({
  kingdom: kingdom,
  ruledBy: ruledBy,
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

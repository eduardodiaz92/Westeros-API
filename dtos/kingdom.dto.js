const Joi = require('joi');

const id = Joi.number().integer();
const kingdom = Joi.string().min(3).max(50);
const ruledBy = Joi.number().integer();
const capital = Joi.string().min(3).max(50);

const createKingdomDto = Joi.object({
  kingdom: kingdom.required(),
  ruledBy: ruledBy.required(),
  capital: capital.required(),
});

const updateKingdomDto = Joi.object({
  kingdom: kingdom,
  ruledBy: ruledBy,
  capital: capital,
});

const getKingdomDto = Joi.object({
  id: id.required(),
});

module.exports = { createKingdomDto, updateKingdomDto, getKingdomDto };

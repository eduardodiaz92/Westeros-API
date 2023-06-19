const Joi = require('joi');

const id = Joi.number().integer();
const kingdom = Joi.string().min(3).max(15);
const ruledBy = Joi.string().min(3).max(15);
const capital = Joi.string().min(3).max(15);

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

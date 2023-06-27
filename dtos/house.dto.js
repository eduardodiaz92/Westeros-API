const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const sigil = Joi.string().uri();
const words = Joi.string().min(3).max(100);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createHouseDto = Joi.object({
  name: name.required(),
  sigil: sigil.required(),
  words: words.required(),
});

const updateHouseDto = Joi.object({
  name: name,
  sigil: sigil,
  words: words,
});

const getHouseDto = Joi.object({
  id: id.required(),
});

const queryHouseDto = Joi.object({
  limit,
  offset,
});

module.exports = { createHouseDto, updateHouseDto, getHouseDto, queryHouseDto };

const Joi = require('joi');

const id = Joi.number().integer();
const house = Joi.string().min(3).max(100);
const head = Joi.string().min(3).max(100);
const vassals = Joi.string().min(3).max(150);
const words = Joi.string().min(3).max(100);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createHouseDto = Joi.object({
  house: house.required(),
  head: head.required(),
  vassals: vassals.required(),
  words: words.required(),
});

const updateHouseDto = Joi.object({
  house: house,
  head: head,
  vassals: vassals,
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

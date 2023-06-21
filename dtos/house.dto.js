const Joi = require('joi');

const id = Joi.number().integer();
const house = Joi.string().min(3).max(50);
const head = Joi.string().min(3).max(50);
const vassals = Joi.string().min(3).max(50);
const words = Joi.string().min(3).max(50);

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

module.exports = { createHouseDto, updateHouseDto, getHouseDto };

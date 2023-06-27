const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);
const title = Joi.string().max(30);
const houseId= Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createCharacterDto = Joi.object({
  name: name.required(),
  title: title.required(),
  houseId:houseId

});

const updateCharacterDto = Joi.object({
  name: name,
  title: title,
  houseId: houseId
});

const getCharacterDto = Joi.object({
  id: id.required(),
});

const queryCharacterDto = Joi.object({
  limit,
  offset,
});

module.exports = { createCharacterDto, updateCharacterDto, getCharacterDto, queryCharacterDto };

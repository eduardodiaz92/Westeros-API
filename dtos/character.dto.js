const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(30);
const title = Joi.string().max(30);


const createCharacterDto = Joi.object({
  name: name.required(),
  title: title.required(),

});

const updateCharacterDto = Joi.object({
  name: name,
  title: title
});

const getCharacterDto = Joi.object({
  id: id.required(),
});

module.exports = { createCharacterDto, updateCharacterDto, getCharacterDto };

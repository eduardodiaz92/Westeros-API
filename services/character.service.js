const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CharacterService {
  constructor() {
    //
  }

  async create(data) {
    const newCharacter = await models.Character.create(data);
    return newCharacter;
  }
  async find({ limit, offset }) {
    const options = {
      limit,
      offset,
    };
    const character = await models.Character.findAll(options);
    return character;
  }
  async findOne(id) {
    const character = await models.Character.findByPk(id);
    if (!character) {
      throw boom.notFound('Character not found');
    }
    return character;
  }
  async update(id, changes) {
    const character = await this.findOne(id);
    const rta = await character.update(changes);
    return rta;
  }
  async delete(id) {
    const character = await this.findOne(id);
    await character.destroy();
    return { id };
  }
}
module.exports = CharacterService;

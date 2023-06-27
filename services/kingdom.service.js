const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class KingdomsService {
  constructor() {
    //
  }

  async create(data) {
    const newKingdom = await models.Kingdom.create(data);
    return newKingdom;
  }
  async find( {limit, offset} ) {
    const options = {
      limit,
      offset,
    };
    const kingdom = await models.Kingdom.findAll(options);
    return kingdom;
  }
  async findOne(id) {
    const kingdom = await models.Kingdom.findByPk(id);
    if (!kingdom) {
      throw boom.notFound('Kingdom not found');
    }
    return kingdom;
  }
  async update(id, changes) {
    const kingdom = await this.findOne(id);
    const rta = await kingdom.update(changes);
    return rta;
  }
  async delete(id) {
    const kingdom = await this.findOne(id);
    await kingdom.destroy();
    return { id };
  }
}
module.exports = KingdomsService;

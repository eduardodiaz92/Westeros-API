const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class HousesService {
  constructor() {
    //
  }

  async create(data) {
    const newHouse = await models.House.create(data);
    return newHouse;
  }
  async find({ limit, offset }) {
    const options = {
      limit,
      offset,
    };
    const house = await models.House.findAll(options);
    return house;
  }
  async findOne(id) {
    const house = await models.House.findByPk(id);
    if (!house) {
      throw boom.notFound('House not found');
    }
    return house;
  }
  async update(id, changes) {
    const house = await this.findOne(id);
    const rta = await house.update(changes);
    return rta;
  }
  async delete(id) {
    const house = await this.findOne(id);
    await house.destroy();
    return { id };
  }
}
module.exports = HousesService;

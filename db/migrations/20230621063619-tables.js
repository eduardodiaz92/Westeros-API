'use strict';
const { KINGDOM_TABLE, KingdomSchema } = require('../models/kingdom.model');
const { HOUSE_TABLE, HouseSchema } = require('../models/house.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(HOUSE_TABLE, HouseSchema);
    await queryInterface.createTable(KINGDOM_TABLE, KingdomSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(HOUSE_TABLE, HouseSchema);
    await queryInterface.dropTable(KINGDOM_TABLE);
  },
};

'use strict';
const { USER_TABLE, UserSchema } = require('../models/user.model');
const { HOUSE_TABLE, HouseSchema  } = require('../models/house.model');
const { CHARACTER_TABLE, CharacterSchema } = require('../models/character.model');
const { KINGDOM_TABLE, KingdomSchema } = require('../models/kingdom.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(HOUSE_TABLE, HouseSchema);
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(KINGDOM_TABLE, KingdomSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  }
};

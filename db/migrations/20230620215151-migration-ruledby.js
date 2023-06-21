'use strict';
const { KINGDOM_TABLE } = require('../models/kingdom.model');
const { HOUSE_TABLE } = require('../models/house.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(KINGDOM_TABLE, {
      ruledBy: {
        field: 'ruled_by',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: HOUSE_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(KINGDOM_TABLE);
  },
};

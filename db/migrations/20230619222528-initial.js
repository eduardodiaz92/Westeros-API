'use strict';

const { KINGDOM_TABLE } = require('../models/kingdom.model');
const { HOUSE_TABLE } = require('../models/house.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(KINGDOM_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      kingdom: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      capital: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      ruledBy: {
        field: 'ruled_by',
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        references: {
          model: HOUSE_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable(HOUSE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      house: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      head: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      words: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        unique: true,
      },
      vassals: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(KINGDOM_TABLE);
    await queryInterface.dropTable(HOUSE_TABLE);
  },
};

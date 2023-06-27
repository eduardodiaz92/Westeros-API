const { Model, DataTypes, Sequelize } = require('sequelize');
const { CHARACTER_TABLE } = require('./character.model');

const KINGDOM_TABLE = 'kingdom';

const KingdomSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capital: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ruler: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: CHARACTER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};


class Kingdom extends Model {
  static associate(models) {
    this.belongsTo(models.Character, { as: 'character' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: KINGDOM_TABLE,
      modelName: 'Kingdom',
      timestamps: false,
    };
  }
}
module.exports = { KINGDOM_TABLE, KingdomSchema, Kingdom };

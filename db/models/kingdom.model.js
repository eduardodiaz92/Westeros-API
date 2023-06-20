const { Model, DataTypes, Sequelize } = require('sequelize');
const { HOUSE_TABLE } = require('./house.model');

const KINGDOM_TABLE = 'kingdom';

const KingdomSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  kingdom: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  capital: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  ruledBy: {
    field: 'ruled_by',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: HOUSE_TABLE,
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
    // this.belongsTo(models.House, { as: 'ruled' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: KINGDOM_TABLE,
      model: 'Kingdom',
      timestamps: false,
    };
  }
}
module.exports = { KINGDOM_TABLE, KingdomSchema, Kingdom };

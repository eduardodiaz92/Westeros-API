const { Model, DataTypes, Sequelize } = require('sequelize');
const { HOUSE_TABLE } = require("./house.model")

const CHARACTER_TABLE = 'character'

const CharacterSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  houseId: {
    field: 'house_id',
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: HOUSE_TABLE,
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};
class Character extends Model {
  static associate(models) {
    this.belongsTo(models.House, {as: 'house'})
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CHARACTER_TABLE,
      modelName: 'Character',
      timestamps: false,
    };
  }
}

module.exports = {CHARACTER_TABLE, CharacterSchema , Character}

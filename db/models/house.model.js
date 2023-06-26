const { Model, DataTypes, Sequelize } = require('sequelize');

const HOUSE_TABLE = 'house';

const HouseSchema = {
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
  sigil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  words: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class House extends Model {
  static associate() {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOUSE_TABLE,
      modelName: 'House',
      timestamps: false,
    };
  }
}
module.exports = { HOUSE_TABLE, HouseSchema, House };

const { Model, DataTypes, Sequelize } = require('sequelize');

const HOUSE_TABLE = 'house';

const HouseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  house: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  head: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  words: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  vassals: {
    allowNull: false,
    type: DataTypes.STRING,
    // references: {
    //   model:_ ,
    //   key: id
    // }
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
    // associate
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOUSE_TABLE,
      model: 'House',
      timestamps: false,
    };
  }
}
module.exports = { HOUSE_TABLE, HouseSchema, House };

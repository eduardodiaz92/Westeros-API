const { Model, DataTypes, Sequelize } = require('sequelize');

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
  ruledBy: {
    field: 'ruled_by',
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

class Kingdom extends Model {
  static associate() {
    // associate
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

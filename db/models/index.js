const { KingdomSchema, Kingdom } = require('./kingdom.model');
const { HouseSchema, House } = require('./house.model');

function setupModels(sequelize) {
  Kingdom.init(KingdomSchema, Kingdom.config(sequelize));
  House.init(HouseSchema, House.config(sequelize));

  House.associate(sequelize.models);
  Kingdom.associate(sequelize.models);
}

module.exports = setupModels;

const { KingdomSchema, Kingdom } = require('./kingdom.model');
const { HouseSchema, House } = require('./house.model');

function setupModels(sequelize) {
  Kingdom.init(KingdomSchema, Kingdom.config(sequelize));
  House.init(HouseSchema, House.config(sequelize));

  Kingdom.associate(sequelize.models);
  House.associate(sequelize.models);
}

module.exports = setupModels;

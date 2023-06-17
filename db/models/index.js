const { KingdomSchema, Kingdom } = require('./kingdom.model');

function setupModels(sequelize) {
  Kingdom.init(KingdomSchema, Kingdom.config(sequelize));
}

module.exports = setupModels;

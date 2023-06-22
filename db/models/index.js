const { KingdomSchema, Kingdom } = require('./kingdom.model');
const { HouseSchema, House } = require('./house.model');
const { UserSchema, User } = require('./user.model');

function setupModels(sequelize) {
  House.init(HouseSchema, House.config(sequelize));
  Kingdom.init(KingdomSchema, Kingdom.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  House.associate(sequelize.models);
  Kingdom.associate(sequelize.models);
}

module.exports = setupModels;

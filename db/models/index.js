const { KingdomSchema, Kingdom } = require('./kingdom.model');
const { HouseSchema, House } = require('./house.model');
const { UserSchema, User } = require('./user.model');
const { CharacterSchema, Character } = require('./character.model');

function setupModels(sequelize) {
  House.init(HouseSchema, House.config(sequelize));
  Character.init(CharacterSchema, Character.config(sequelize));
  Kingdom.init(KingdomSchema, Kingdom.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  House.associate(sequelize.models);
  Character.associate(sequelize.models);
  Kingdom.associate(sequelize.models);
}

module.exports = setupModels;

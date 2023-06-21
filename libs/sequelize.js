const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const URI = config.dbUrl;

// Option 1: Passing a connection URI

// Example for postgres
// Example for mysql
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize;

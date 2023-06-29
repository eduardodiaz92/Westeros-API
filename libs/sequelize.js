const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const URI = config.dbUrl;

// Option 1: Passing a connection URI

// Example for postgres
// Example for mysql
const sequelize = new Sequelize('postgresql://postgres:bRlY6lm3VnC8SrjD06O1@containers-us-west-28.railway.app:6821/railway', {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;

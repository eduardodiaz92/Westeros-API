const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'eduardo',
    password: 'admin123',
    database: 'my_db',
  });
  await client.connect();
  return client;
}
module.exports = getConnection;

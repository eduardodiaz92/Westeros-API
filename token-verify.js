const { config } = require('./config/config');
const jwt = require('jsonwebtoken');

const secret = config.jwtSecret;
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg3NDc3NzQ5fQ.WOavi1C2w6CV9H-70rAGKQVE3L55voHG0ZBZH0oSILM';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);

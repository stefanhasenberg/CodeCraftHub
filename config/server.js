// config/server.js
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
module.exports = { PORT };
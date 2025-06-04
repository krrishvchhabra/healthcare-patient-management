require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/healthcare',
  JWT_SECRET: process.env.JWT_SECRET || 'changeme',
  PORT: process.env.PORT || 5000,
};

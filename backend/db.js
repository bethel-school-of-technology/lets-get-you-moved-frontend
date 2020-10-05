const { Sequelize } = require('sequelize');
require('dotenv').config();

const isDevelopment = process.env.NODE_ENV !== 'production';

// DB initialization
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    define: {
      paranoid: true,
    },
    logging: isDevelopment,
  }
);

// Syncs models and DB tables
// if force protperty is true, it drops all tables before running CREATE TABLE IF NOT EXISTS
sequelize.sync({ force: isDevelopment });

(async () => {
  try {
    // Check DB connection
    await sequelize.authenticate();
    console.log('Connection with MySQL server has been established');
  } catch (error) {
    console.log('Error connecting to MySQL server: ', error);
  }
})();

module.exports = sequelize;

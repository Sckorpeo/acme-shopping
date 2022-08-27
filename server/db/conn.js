const Sequelize = require('sequelize');
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}
const config = {};

if (process.env.QUIET) {
    config.logging = false;
}

const conn = new Sequelize(
    process.env.DATABASE_URL || 'postgres://localhost/acme_db',
    config
);

module.exports = conn;

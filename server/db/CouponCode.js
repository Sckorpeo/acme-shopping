const conn = require('./conn');
const { Sequelize } = conn;
const { STRING } = conn.Sequelize;
const { INTEGER } = conn.Sequelize;

const CouponCode = conn.define('category', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: STRING,
        unique: true,
    },
    rate: {
        type: INTEGER,
    },
});

module.exports = CouponCode;

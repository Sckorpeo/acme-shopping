const conn = require('./conn');
const { Sequelize } = conn;

const Order = conn.define('order', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    isCart: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Order;

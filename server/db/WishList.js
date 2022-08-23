const conn = require('./conn');
const { Sequelize } = conn;

const WishList = conn.define('wishList', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1,
        },
    }
});

module.exports = WishList;
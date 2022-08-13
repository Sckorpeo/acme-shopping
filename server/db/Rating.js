const { UUID } = require("sequelize");
const conn = require("./conn");
const { INTEGER, TEXT } = conn.Sequelize;

const Rating = conn.define('rating', {
    userId: {
        type: INTEGER,
        allowNull: false
    },
    productId: {
        type: UUID,
        allowNull: false
    },
    value: {
        type: INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    comment: {
        type: TEXT,
    }
});

module.exports = Rating;
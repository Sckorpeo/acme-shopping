const conn = require('./conn');
const { UUID, UUIDV4, TEXT, INTEGER } = conn.Sequelize;

const Rating = conn.define('rating', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: UUID,
        allowNull: false,
    },
    productId: {
        type: UUID,
        allowNull: false,
    },
    value: {
        type: INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    comment: {
        type: TEXT,
    },
});

module.exports = Rating;

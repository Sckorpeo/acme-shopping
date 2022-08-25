const conn = require('./conn');
const { STRING, TEXT, INTEGER, UUID, UUIDV4, FLOAT } = conn.Sequelize;

const Product = conn.define('product', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    name: {
        type: STRING,
    },
    price: {
        type: FLOAT,
        validate: {
            min: 0,
        },
    },
    minPlayers: {
        type: INTEGER,
        defaultValue: 1,
        validate: {
            min: 1,
        },
    },
    maxPlayers: {
        type: INTEGER,
        defaultValue: 1,
        validate: {
            min: 1,
        },
    },
    timeToPlay: {
        type: INTEGER,
        validate: {
            min: 1,
        },
    },
    imageUrl: {
        type: TEXT,
    },
});

module.exports = Product;

const conn = require("./conn");
const { STRING, INTEGER, UUID, UUIDV4 } = conn.Sequelize;

const Product = conn.define("product", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  price: {
    type: INTEGER,
    validate: {
      min: 1,
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
});

module.exports = Product;

const conn = require('./conn');
const { STRING } = conn.Sequelize;

const Category = conn.define('category', {
    name: {
        type: STRING,
    },
});

module.exports = Category;

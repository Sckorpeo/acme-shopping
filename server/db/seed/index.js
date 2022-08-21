const { conn, User, Product } = require('../index');
const Category = require('../Category');
const boardGameSeed = require('./boardGameSeed');
const ratingsSeed = require('./ratingSeed');
const seedUser = require('./userSeed');

const syncAndSeed = async () => {
    try {
        await conn.sync({ force: true });
        await Category.create({ name: 'A' });
        await Category.create({ name: 'B' });
        await Category.create({ name: 'C' });
        const boardGames = await boardGameSeed();
        const users = await seedUser();
        await ratingsSeed(boardGames, users);
        console.log('seed successful !');
    } catch (ex) {
        console.log(ex);
    }
};

syncAndSeed();

module.exports = syncAndSeed;

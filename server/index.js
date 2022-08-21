const app = require('./app');
const { conn, User, Product } = require('./db');
const Category = require('./db/Category');
const boardGameSeed = require('./db/seed/boardGameSeed');
const ratingsSeed = require('./db/seed/ratingSeed');

const setUp = async () => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`listening on port ${port}`));
    } catch (ex) {
        console.log(ex);
    }
};

setUp();

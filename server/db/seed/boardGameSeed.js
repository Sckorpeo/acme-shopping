const { Product } = require('../index');
const getBoardGameData = require('./getBoardGameData');
const _URL =
    'https://api.boardgameatlas.com/api/search?name=*&client_id=YAGWkkE2GA&limit=50';

const boardGameSeed = async () => {
    console.log('In the board game seed ################');
    try {
        const boardGames = await getBoardGameData(_URL);
        await Promise.all(boardGames.map((game) => Product.create(game)));
    } catch (ex) {
        console.log(ex);
    }
};

module.exports = boardGameSeed;

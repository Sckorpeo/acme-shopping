const { Product } = require('../index');
const getBoardGameData = require('./getBoardGameData');
const _URL =
    'https://api.boardgameatlas.com/api/search?name=*&client_id=YAGWkkE2GA&limit=50';

const boardGameSeed = async () => {
    try {
        const boardGames = await getBoardGameData(_URL);
        const boardGamesSQL = await Promise.all(
            boardGames.map((game) => Product.create(game))
        );
        return boardGamesSQL;
    } catch (ex) {
        console.log(ex);
    }
};

module.exports = boardGameSeed;

const axios = require('axios');

const getBoardGameData = async (apiUrl) => {
    const games = (await axios.get(apiUrl)).data.games;
    const filteredData = [];

    games.forEach((game) => {
        let curr = {
            name: game.name,
            price: game.price,
            minPlayers: game.min_players,
            maxPlayers: game.max_players,
            timeToPlay: game.max_playtime,
            imageUrl: game.thumb_url,
            categoryId: Math.floor(Math.random() * 3) + 1,
        };
        filteredData.push(curr);
    });
    return filteredData;
};

module.exports = getBoardGameData;

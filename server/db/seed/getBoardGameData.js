// const axios = require('axios');

// const getBoardGameData = async (apiUrl) => {
//     const games = (await axios.get(apiUrl)).data.games;
//     const filteredData = [];

//     games.forEach((game) => {
//         let curr = {
//             name: game.name,
//             price: game.price,
//             minPlayers: game.min_players,
//             maxPlayers: game.max_players,
//             timeToPlay: game.max_playtime,
//             imageUrl: game.thumb_url,
//             categoryId: Math.floor(Math.random() * 4),
//         };
//         filteredData.push(curr);
//     });
//     console.log(filteredData);
//     return filteredData;
// };

// module.exports = getBoardGameData;

const { faker } = require('@faker-js/faker');

const GAMES = [];
const createRandomCampus = () => {
    return {
        name: `${faker.word.noun()}`,
        price: Math.floor(Math.random() * 80) + 20,
        minPlayers: Math.floor(Math.random() * 2),
        maxPlayers: Math.floor(Math.random() * 3) + 2,
        timeToPlay: Math.floor(Math.random() * 20) + 10,
        imageUrl: `${faker.image.cats(640, 640, true)}`,
        categoryId: Math.floor(Math.random() * 4),
    };
};

const getBoardGameData = () => {
    Array.from({ length: 100 }).forEach(() => GAMES.push(createRandomCampus()));
    return GAMES;
};

module.exports = getBoardGameData;

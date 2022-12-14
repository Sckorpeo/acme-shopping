const { Rating } = require('../index');
const fakeRatings = [
    { value: 1, comment: "I won't but it again" },
    { value: 1, comment: null },
    { value: 1, comment: 'average' },
    { value: 2, comment: 'its ok' },
    { value: 2, comment: "It's fun but not as fun" },
    { value: 2, comment: null },
    { value: 3, comment: 'Good game, but very slow delivery' },
    { value: 3, comment: null },
    { value: 4, comment: null },
    { value: 4, comment: 'fun' },
    { value: 4, comment: 'Played with my family, had a great time' },
    {
        value: 4,
        comment:
            'I bought this game last year and played it every week with my girls, I like the game and design, but it is kinda expensive, sign.',
    },
    { value: 5, comment: 'Good!' },
    { value: 5, comment: 'Best game I have ever played' },
    { value: 5, comment: 'Best game I have ever played' },
    { value: 5, comment: 'Best game I have ever played' },
    { value: 5, comment: 'Best game I have ever played' },
    { value: 5, comment: 'Best game I have ever played' },
    { value: 5, comment: null },
    { value: 5, comment: 'very fun' },
    { value: 5, comment: '5 star because I am the only one good at it' },
    {
        value: 5,
        comment:
            "its the WORSE, 5 star for y'all to see it, it took forever to play, and its actually so boring, no idea why so many 5 stars",
    },
];

const createRating = (products, users) => {
    const curr = fakeRatings[Math.floor(Math.random() * 22)];
    return {
        value: curr.value,
        comment: curr.comment,
        productId: products[Math.floor(Math.random() * 50)].id,
        userId: users[Math.floor(Math.random() * 4)].id,
    };
};

const ratingsSeed = async (products, users) => {
    try {
        console.log(products[1].id);
        const RATINGS = [];
        Array.from({ length: 200 }).forEach(() =>
            RATINGS.push(createRating(products, users))
        );
        await Promise.all(RATINGS.map((rating) => Rating.create(rating)));
    } catch (ex) {
        console.log(ex);
    }
};

module.exports = ratingsSeed;

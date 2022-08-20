const User = require('../User');

const _USERS = [
    { username: 'moe', password: 'moe_pw' },
    {
        username: 'lucy',
        password: 'lucy_pw',
    },
    {
        username: 'Kaiyuan',
        password: 'kaiyuan_pw',
        isAdmin: true,
    },
    {
        username: 'Kieran',
        password: 'kieran_pw',
        isAdmin: true,
    },
    {
        username: 'Austin',
        password: 'austin_pw',
        isAdmin: true,
    },
];

const seedUser = async () => {
    try {
        const users = await Promise.all(
            _USERS.map((user) => User.create(user))
        );
        return users;
    } catch (ex) {
        console.log(ex);
    }
};

module.exports = seedUser;

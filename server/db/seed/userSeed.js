const User = require('../User');

const _USERS = [
    {
        firstName: 'moe',
        lastName: 'lastName',
        username: 'moe',
        password: 'moe_pw',
    },
    {
        firstName: 'lucy',
        lastName: 'lastName',
        username: 'lucy',
        password: 'lucy_pw',
    },
    {
        firstName: 'Kaiyuan',
        lastName: 'Ma',
        username: 'Kaiyuan',
        password: 'kaiyuan_pw',
        isAdmin: true,
    },
    {
        firstName: 'Kieran',
        lastName: 'Brugman',
        username: 'Kieran',
        password: 'kieran_pw',
        isAdmin: true,
    },
    {
        firstName: 'Austin',
        lastName: 'Chen',
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

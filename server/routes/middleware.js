const { User } = require('../db');

const isLoggedIn = async (req, res, next) => {
    try {
        console.log(req.headers);
        req.user = await User.findByToken(req.headers.authorization);
        next();
    } catch (ex) {
        next(ex);
    }
};

const isAdmin = async (req, res, next) => {
    try {
        const admin = (await User.findByToken(req.headers.authorization))
            ?.isAdmin;
        if (admin) {
            next();
        }
        throw new Error('User is not an Admin');
    } catch (ex) {
        next(ex);
    }
};

module.exports = {
    isLoggedIn,
    isAdmin,
};

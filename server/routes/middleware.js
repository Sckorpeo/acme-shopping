const { User } = require('../db');

const isLoggedIn = async (req, res, next) => {
    try {
        req.user = await User.findByToken(req.headers.authorization);
        next();
    } catch (ex) {
        next(ex);
    }
};

const isAdminUser = async (req, res, next) => {
    try {
        req.user = await User.findByToken(req.headers.authorization);
        console.log(req.user);
        if (!req.user.isAdmin) throw 'do not have access';
        next();
    } catch (ex) {
        next(ex);
    }
};

module.exports = {
    isLoggedIn,
    isAdminUser,
};

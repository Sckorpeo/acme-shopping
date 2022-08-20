const { User } = require('../db');

const isLoggedIn = async (req, res, next) => {
    try {
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
        throw 'error';
    } catch (ex) {
        const error = new Error('User is not an Admin');
        error.status = 401;
        next(error);
    }
};

module.exports = {
    isLoggedIn,
    isAdmin,
};

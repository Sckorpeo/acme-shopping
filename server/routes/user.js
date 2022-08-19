const express = require('express');
const router = express.Router();
const { User } = require('../db');
const { isLoggedIn } = require('./middleware');

// Get logged in user's info
router.get('/', isLoggedIn, async (req, res, next) => {
    try {
        res.status(200).send(req.user);
    } catch (ex) {
        next(ex);
    }
});

// Get all users' info (allowed only for admin)
router.get('/all', isLoggedIn, async (req, res, next) => {
    try {
        if (req.user.isAdmin) {
            const users = await User.findAll();
            res.status(200).send(users);
        } else {
            const error = new Error('Bad Credentials');
            error.status = 401;
            throw error;
        }
    } catch (ex) {
        next(ex);
    };
})

router.put('/', isLoggedIn, async (req, res, next) => {
    try {
        await req.user.update(req.body);
        res.status(200).send(req.user);
    } catch (ex) {
        next(ex);
    };
})

module.exports = router;
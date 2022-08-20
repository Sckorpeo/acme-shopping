const express = require('express');
const router = express.Router();
const { User, Rating } = require('../db');
const { isLoggedIn, isAdmin } = require('./middleware');

router.post('/', async (req, res, next) => {
    try {
        const credentials = {
            username: req.body.username,
            password: req.body.password,
        };
        res.send({ token: await User.authenticate(credentials) });
    } catch (ex) {
        next(ex);
    }
});

router.get('/', isLoggedIn, async (req, res, next) => {
    res.send(req.user);
});

router.get('/rating', isLoggedIn, async (req, res, next) => {
    try {
        const userId = req.user.id;
        res.send(
            Rating.findAll({
                where: {
                    userId: userId,
                },
            })
        );
    } catch (ex) {
        next(ex);
    }
});

router.delete('/rating/:ratingId', isLoggedIn, async (req, res, next) => {
    try {
        const rating = await Rating.findByPK(req.params.ratingId);
        rating.destroy();
        res.sendStatus(200);
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

const express = require('express');
const app = express.Router();
const { User, Rating } = require('../db');
const { isLoggedIn } = require('./middleware');

app.post('/', async (req, res, next) => {
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

app.get('/', isLoggedIn, async (req, res, next) => {
    res.send(req.user);
});

app.get('/rating', isLoggedIn, async (req, res, next) => {
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

app.delete('/rating/:ratingId', isLoggedIn, async (req, res, next) => {
    try {
        const rating = await Rating.findByPK(req.params.ratingId);
        rating.destroy();
        res.sendStatus(200);
    } catch (ex) {
        next(ex);
    }
});

module.exports = app;

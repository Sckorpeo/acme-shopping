const express = require('express');
const router = express.Router();
const { Product, Rating, Category } = require('../db');
const { isLoggedIn, isAdmin } = require('./middleware');
const boardGameSeed = require('../db/seed/boardGameSeed');

router.get('/', async (req, res, next) => {
    try {
        res.send(await Product.findAll());
    } catch (ex) {
        next(ex);
    }
});

router.get('/category/:categoryId', async (req, res, next) => {
    try {
        res.send(
            await Product.findAll({
                where: {
                    categoryId: req.params.categoryId,
                },
            })
        );
    } catch (ex) {
        next(ex);
    }
});

router.get('/:productId', async (req, res, next) => {
    try {
        res.send(await Product.findByPk(req.params.productId));
    } catch (ex) {
        next(ex);
    }
});

router.get('/:productId/rating', async (req, res, next) => {
    try {
        req.send(
            await Rating.findAll({
                where: {
                    productId: req.params.productId,
                },
            })
        );
    } catch (ex) {
        next(ex);
    }
});

router.post('/:productId/rating', isLoggedIn, async (req, res, next) => {
    try {
        const userId = req.user.id;
        console.log(req.user);
        res.status(201).send(await Rating.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

router.get('/seed', isLoggedIn, async (req, res, next) => {
    console.log(
        'hit the route#################################################'
    );
    try {
        await boardGameSeed();
        res.sendStatus(201);
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

const express = require('express');
const app = express.Router();
const { Product, Rating, Category } = require('../db');
const { isLoggedIn } = require('./middleware');

app.get('/', async (req, res, next) => {
    try {
        res.send(await Product.findAll());
    } catch (ex) {
        next(ex);
    }
});

app.get('/category/:categoryId', async (req, res, next) => {
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

app.get('/:productId', async (req, res, next) => {
    try {
        res.send(await Product.findByPk(req.params.productId));
    } catch (ex) {
        next(ex);
    }
});

app.get('/:productId/rating', async (req, res, next) => {
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

app.post('/:productId/rating', isLoggedIn, async (req, res, next) => {
    try {
        const userId = req.user.id;
        res.status(201).send(await Rating.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

module.exports = app;

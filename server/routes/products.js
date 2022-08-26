const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();
const { Product, Rating, Category, LineItem } = require('../db');
const { isLoggedIn, isAdminUser } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        if (req.query.key) {
            res.send(await Product.findAll({
                where: {
                    name: {[Op.iLike]:`%${req.query.key}%`}
                },
                limit: req.query.limit
            }));
        } else {
            res.send(await Product.findAll());
        }
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
        res.send(
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
        // console.log(req.user);
        res.status(201).send(await Rating.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

router.post('/', isAdminUser, async (req, res, next) => {
    try {
        res.status(201).send(await Product.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

router.delete('/:productId', isAdminUser, async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.productId);
        await Rating.destroy({
            where: { productId: req.params.productId },
        });
        await LineItem.destroy({
            where: { productId: req.params.productId },
        });
        await product.destroy();
        res.sendStatus(200);
    } catch (ex) {
        next(ex);
    }
});

router.put('/:productId', isAdminUser, async (req, res, next) => {
    try {
        await Product.update(req.body, { where: { id: req.params.productId } });
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

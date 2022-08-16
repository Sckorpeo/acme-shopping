const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.post('/', isLoggedIn, async (req, res, next) => {
    try {
        res.send(await req.user.createOrderFromCart());
    } catch (ex) {
        next(ex);
    }
});

router.put('/cart', isLoggedIn, async (req, res, next) => {
    try {
        res.send(await req.user.addToCart(req.body));
    } catch (ex) {
        next(ex);
    }
});

router.get('/cart', isLoggedIn, async (req, res, next) => {
    try {
        res.send(await req.user.getCart());
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

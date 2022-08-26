const express = require('express');
const router = express.Router();
const { CouponCode } = require('../db');

const { isAdminUser } = require('./middleware');

router.get('/', isAdminUser, async (req, res, next) => {
    try {
        res.send(await CouponCode.findAll());
    } catch (ex) {
        next(ex);
    }
});

router.delete('/:couponId', isAdminUser, async (req, res, next) => {
    try {
        const coupon = await CouponCode.findByPk(req.params.couponId);
        await coupon.destroy();
    } catch (ex) {
        next(ex);
    }
});

router.post('/', isAdminUser, async (req, res, next) => {
    try {
        res.send(await CouponCode.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

router.get('/:name', async (req, res, next) => {
    try {
        res.send(
            await CouponCode.findOne({ where: { name: req.params.name } })
        );
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

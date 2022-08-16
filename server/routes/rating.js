const express = require('express');
const router = express.Router();
const { Rating } = require('../db');

router.get('/:userId', async (req, res, next) => {
    try {
        Rating.findAll({
            where: {
                userId: req.params.userId,
            },
        });
    } catch (ex) {
        next(ex);
    }
});

router.get('/:productId');

module.exports = router;
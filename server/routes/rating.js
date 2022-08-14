const express = require('express');
const app = express.Router();
const { Rating } = require('../db');

app.get('/:userId', async (req, res, next) => {
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

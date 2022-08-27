const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

router.post('/', async (req, res, next) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        res.status(200).send(paymentIntent.client_secret);
    } catch (ex) {
        res.status(500).send({ statusCode: 500, message: ex.message });
        next(ex);
    }
});

module.exports = router;

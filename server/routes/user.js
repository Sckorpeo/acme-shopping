const express = require('express');
const router = express.Router();
const { User } = require('../db');
const { isLoggedIn, isAdminUser } = require('./middleware');

// Get logged in user's info
router.get('/', isLoggedIn, async (req, res, next) => {
    try {
        res.status(200).send(req.user);
    } catch (ex) {
        next(ex);
    }
});

// Get all users' info (allowed only for admin)
router.get('/all', isAdminUser, async (req, res, next) => {
    try {
        res.status(200).send(await User.findAll());
    } catch (ex) {
        next(ex);
    }
});

router.get('/:userId', isAdminUser, async (req, res, next) => {
    try {
        res.status(200).send(await User.findByPk(req.params.userId));
    } catch (ex) {
        next(ex);
    }
});

router.put('/', isLoggedIn, async (req, res, next) => {
    try {
        await req.user.update(req.body);
        res.status(200).send(req.user);
    } catch (ex) {
        next(ex);
    }
});

router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await User.create(req.body));
    } catch (ex) {
        next(ex);
    }
});

module.exports = router;

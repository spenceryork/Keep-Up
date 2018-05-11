"use strict";

const { Router } = require('express');
const router = Router();
const { login, register, logout } = require('../controllers/authCtrl');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// For checking if user is logged in. Angular app can call this on page refresh, etc
router.get("/status", (req, res) => {
    if (!req.isAuthenticated()) {
        console.log("not authed in get status route");
        return res.status(200).send(null);
    }
    res.status(200).json({ username: req.user.username, id: req.user.id });
});

module.exports = router;


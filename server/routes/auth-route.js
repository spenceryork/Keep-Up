"use strict";

const { Router } = require('express');
const router = Router();
const { login, register, logout } = require('../controllers/authCtrl');

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;

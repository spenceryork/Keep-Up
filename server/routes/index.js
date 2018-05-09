"use strict";

const { Router } = require('express');
const router = Router();

router.use(require('./auth-route'));
router.use(require('./occasions-route'));
router.use(require('./purchases-route'));

module.exports = router;
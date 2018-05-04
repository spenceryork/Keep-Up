"use strict";

const { Router } = require("express");
const router = Router();
const { addNewPurchase } = require('../controllers/purchasesServerCtrl');

router.post("/recipients", addNewPurchase);

module.exports = router;
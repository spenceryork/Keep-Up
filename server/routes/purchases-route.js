"use strict";

const { Router } = require("express");
const router = Router();
const { addPurchase } = require('../controllers/purchasesServerCtrl');
const { getOccasions } = require('../controllers/occasionsServerCtrl');


// router.post("/recipients", addNewPurchase);
router.get("/purchases", getOccasions);
router.post("/purchases", addPurchase);

module.exports = router;
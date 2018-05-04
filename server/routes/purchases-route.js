"use strict";

const { Router } = require("express");
const router = Router();
const { addNewPurchase, getUserOccasions } = require('../controllers/purchasesServerCtrl');
const { getOccasions } = require('../controllers/occasionsServerCtrl');



// router.post("/recipients", addNewPurchase);
router.get("/purchases", getOccasions);

module.exports = router;
"use strict";

const { Router } = require("express");
const router = Router();
const { addPurchase, deletePurchase } = require('../controllers/purchasesServerCtrl');
const { getOccasions } = require('../controllers/occasionsServerCtrl');


// router.post("/recipients", addNewPurchase);
router.get("/purchases", getOccasions);
router.post("/purchases", addPurchase);
router.delete("/purchases/:id", deletePurchase);

module.exports = router;
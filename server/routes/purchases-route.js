"use strict";

const { Router } = require("express");
const router = Router();
const { addPurchase, deletePurchase, updatePurchase, getOccasions, getPurchases } = require('../controllers/purchasesServerCtrl');
// const { getOccasions } = require('../controllers/occasionsServerCtrl');


router.get("/purchases", getOccasions);
// router.get("/purchases", getPurchases);
router.post("/purchases", addPurchase);
router.delete("/purchases/:id", deletePurchase);
router.patch("/purchases/:id", updatePurchase );


module.exports = router;
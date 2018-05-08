"use strict";

const { Router } = require("express");
const router = Router();
const { addPurchase, deletePurchase, updatePurchase } = require('../controllers/purchasesServerCtrl');
const { getOccasions } = require('../controllers/occasionsServerCtrl');


router.get("/purchases", getOccasions);
router.post("/purchases", addPurchase);
router.delete("/purchases/:id", deletePurchase);
router.patch("/purchases/:id", updatePurchase );


module.exports = router;
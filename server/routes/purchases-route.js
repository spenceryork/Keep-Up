"use strict";

const { Router } = require("express");
const router = Router();
const { addPurchase, deletePurchase, updatePurchase, getOccasions, getPurchases } = require('../controllers/purchasesServerCtrl');

router.get("/purchases", getOccasions);
router.post("/purchases", addPurchase);
router.delete("/purchases/:id", deletePurchase);
router.patch("/purchases/:id", updatePurchase);

module.exports = router;
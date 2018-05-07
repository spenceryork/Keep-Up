"use strict";

const { Router } = require("express");
const router = Router();
const { addNewOccasion, getOccasions, deleteOccasion, updateOccasion, getOneOccasion } = require('../controllers/occasionsServerCtrl');
const { getPurchases } = require('../controllers/purchasesServerCtrl');


router.post("/occasions", addNewOccasion);
router.get("/occasions", getOccasions);
// router.patch("/occasions/:id", editOccasion);
// router.delete("/occasions", deleteOccasion);
router.get("/occasions/:id", getOneOccasion );
router.patch("/occasions/:id", updateOccasion );



module.exports = router;




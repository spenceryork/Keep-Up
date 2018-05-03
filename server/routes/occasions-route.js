"use strict";

const { Router } = require("express");
const router = Router();
const { addNewOccasion, getOccasions, deleteOccasion, editOccasion, getSingleOccasion } = require('../controllers/occasionsServerCtrl');

router.post("/occasions", addNewOccasion);
router.get("/occasions", getOccasions);
router.patch("/occasions/:id", editOccasion);
router.delete("/occasions", deleteOccasion);
router.get("/occasions/:id", getSingleOccasion);

module.exports = router;




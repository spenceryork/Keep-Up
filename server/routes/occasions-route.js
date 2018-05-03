"use strict";

const { Router } = require("express");
const router = Router();
const { addNewOccasion, getOccasions, deleteOccasion, editOccasion, getOneOccasion } = require('../controllers/occasionsServerCtrl');

router.post("/occasions", addNewOccasion);
router.get("/occasions", getOccasions);
router.patch("/occasions/:id", editOccasion);
router.delete("/occasions", deleteOccasion);
router.get("/occasions/:id", getOneOccasion);

module.exports = router;




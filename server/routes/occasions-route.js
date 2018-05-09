"use strict";

const { Router } = require("express");
const router = Router();
const { addNewOccasion, getOccasions, deleteOccasion, updateOccasion, getOneOccasion } = require('../controllers/occasionsServerCtrl');
const { getPurchases } = require('../controllers/purchasesServerCtrl');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

router.post("/occasions", addNewOccasion);
router.get("/occasions", getOccasions);
router.delete("/occasions/:id", deleteOccasion);
router.get("/occasions/:id", getOneOccasion);
router.patch("/occasions/:id", updateOccasion);


module.exports = router;




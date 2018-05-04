"use strict";

const { Router } = require("express");
const router = Router();
const { addNewRecipient } = require('../controllers/recipientsServerCtrl');

router.post("/recipients", addNewRecipient);

module.exports = router;
"use strict";

// module.exports.addNewPurchase = () => {

// }

module.exports.getUserOccasions = () => {
    const { Occasion } = req.app.get("models");
    Occasion.findAll({
        raw: true,
        where: { user_id: req.user.id }
    })
    .then(occasions => {
        res.status(200).json(occasions);
    })
    .catch(error => {
        next(error)
    })
}
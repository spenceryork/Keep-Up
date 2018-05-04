"use strict";

module.exports.addPurchase = ({ app, body: { user_id, purchase_name, price, occasion_id, recipient_id } }, res, next) => {
    let Purchase = app.get("models").Purchase;
    Purchase.create( {user_id, purchase_name, price, occasion_id, recipient_id})
    .then(() => {
        res.status(201).end();
    })
    .catch( error => {
        next(error)
    })
}

// module.exports.getUserOccasions = (req, res, next) => {
//     const { Occasion } = req.app.get("models");
//     Occasion.findAll({
//         raw: true,
//         where: { user_id: req.user.id }
//     })
//     .then(occasions => {
//         res.status(200).json(occasions);
//     })
//     .catch(error => {
//         next(error)
//     })
// }

// Using sequelize - THIS IS WHAT I NEED TO DO DURING THE POST

// I need to get the occasion_id from the occasion table using the occasion_title thats provided within the 'purchase object'

// I need to get the recipient_id from the recipient table using the recipient_name thats provided within the 'purchase object'


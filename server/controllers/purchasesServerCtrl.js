"use strict";

module.exports.addPurchase = ({ app, body: { user_id, name, price, occasion_id, recipient_id, recipient, description } }, res, next) => {
    let Purchase = app.get("models").Purchase;
    Purchase.create( {user_id, name, price, occasion_id, recipient_id, recipient, description })
    .then(() => {
        res.status(201).end();
    })
    .catch( error => {
        next(error)
    })
}

module.exports.deletePurchase = (req, res, next) => {
    const { Purchase } = req.app.get("models"); 
    Purchase.destroy({
        where: { id: req.params.id }
    })
    .then( purchase => {
        console.log("")
        res.status(200).json(purchase)
    })
    .catch( error => {
        next(error)
    });
}




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

module.exports.getPurchases = (req, res, next) => {
    const { Purchase } = req.app.get("models");
    console.log("what are the req params", req.params)
    Purchase.findAll({
        raw: true,
        where: { occasion_id: req.params.id }
    })
    .then( purchases => {
        res.status(200).json(purchases)
        // console.log("purchases from server function", purchases)
    })
    .catch( error => {
        next(error)
    })
}



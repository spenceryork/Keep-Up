"use strict";

module.exports.addPurchase = ({ app, body: { user_id, name, price, occasion_id, recipient_id, recipient, description } }, res, next) => {
    let Purchase = app.get("models").Purchase;
    Purchase.create({ user_id, name, price, occasion_id, recipient_id, recipient, description })
        .then(() => {
            res.status(201).end();
        })
        .catch(error => {
            next(error)
        })
}

module.exports.deletePurchase = (req, res, next) => {
    const { Purchase } = req.app.get("models");
    Purchase.destroy({
        where: { id: req.params.id }
    })
        .then(purchase => {
            console.log("")
            res.status(200).json(purchase)
        })
        .catch(error => {
            next(error)
        });
}

module.exports.updatePurchase = ({ app, body: { name, recipient, description, price, id } }, res, next) => {
    // module.exports.updatePurchase = (req, res, next) => {
    let Purchase = app.get("models").Purchase;
    // const { Purchase } = req.app.get("models");

    Purchase.update(
        { name, recipient, description, price, id },
        { where: { id: id } }
    )
        .then(purchase =>
            res.status(200).json(purchase)
        )
        .catch(error =>
            next(error)
        )
}

module.exports.getOccasions = (req, res, next) => {
    const { Occasion } = req.app.get("models");
    Occasion.findAll({
        raw: true,
        where: { user_id: req.user.id }
    })
    .then(occasions => {
        // console.log("this is the specific occasion", occasion);

        module.exports.getPurchases(req, res, next, occasions);
    })
    .catch(error => {
        next(error)
    })
}

module.exports.getPurchases = (req, res, next, occasions) => {
    const { Purchase, Occasion } = req.app.get("models");
    Purchase.findAll({
        // raw: true,
        where: { user_id: req.user.id },
        include: [{
            model: Occasion,
            required: false,
            attributes: ["title"]
        }]
    })
        .then(purchases => {
            // console.log("this is the specific occasion", occasion);
            res.status(200).json({purchases, occasions});
        })
        .catch(error => {
            next(error)
        })

}




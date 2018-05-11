"use strict";

module.exports.addNewOccasion = ({ app, body: { user_id, title, date, budget } }, res, next) => {
    console.log("what is the req app?", app);
    let Occasion = app.get("models").Occasion;
    Occasion.create({ user_id, title, date, budget })
    .then(() => {
        res.status(201).end();
    })
    .catch(error => {
        next(error)
    })
}

module.exports.getOccasions = (req, res, next) => {
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

module.exports.deleteOccasion = (req, res, next) => {
    const { Occasion } = req.app.get("models");
    Occasion.destroy({
        where: { id: req.params.id }
    })
    .then( occasion => {
        res.status(200).json(occasion)
    })
    .catch( error => {
        next(error)
    });
}

module.exports.updateOccasion = ({ app, body: { title, date, budget, id } }, res, next) => {
    let Occasion = app.get("models").Occasion;
    Occasion.update(
        { title, date, budget },
        { where: { id: id } }
    )
    .then(occasion =>
        res.status(200).json(occasion)
    )
    .catch(error =>
        next(error)
    )
}

// This function is getting the occasion details as well as all the purchases for this specific occasion.
module.exports.getOneOccasion = (req, res, next) => {
    const { Occasion, Purchase, sequelize } = req.app.get("models");
    Occasion.findAll({
        where: { id: req.params.id },
        include: [{
            model: Purchase,
            required: false,
            where: { occasion_id: req.params.id },
        }]
    })
    .then(occasion => {
        res.status(200).json(occasion);
    })
    .catch(error => {
        next(error)
    })
}



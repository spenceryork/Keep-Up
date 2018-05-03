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
    });
}

module.exports.deleteOccasion = () => {

}

module.exports.editOccasion = () => {

}

module.exports.getOneOccasion = (id) => {
    const { Occasion } = req.app.get("models");
    Occasion.findOne({
        raw: true,
        where: { occasion_id: id}
    })
    .then( occasion => {
        res(status).json(occasion);
    })

}



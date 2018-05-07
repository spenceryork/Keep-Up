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

module.exports.deleteOccasion = () => {

}

module.exports.editOccasion = () => {

}




module.exports.getOneOccasion = (req, res, next) => {
    console.log("what is req.params", req.params)
    const { Occasion } = req.app.get("models");
    Occasion.findOne({
        raw: true,
        where: { id: req.params.id}
    })
    .then( occasion => {
        console.log("this is the specific occasion", occasion);
        res.status(200).json(occasion);
    })
    .catch(error => {
        next(error)
    })

}



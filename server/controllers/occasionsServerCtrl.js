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

module.exports.getOccasions = () => {

}

module.exports.deleteOccasion = () => {

}

module.exports.editOccasion = () => {

}

module.exports.getSingleOccasion = () => {

}



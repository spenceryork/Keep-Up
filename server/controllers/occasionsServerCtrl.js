"use strict";

module.exports.addNewOccasion = ({ app, body: { title, date, budget } }, res, next) => {
    console.log("what is the req app?", app);
    let Occasion = app.get("models").Occasion;
    Occasion.create({ title, date, budget })
    .then(() => {
        res.status(201).end();
    })
    .catch(error => {
        next(error)
    })
}

// module.exports.addNewOccasion = (req, res, next) => {
//     console.log("what is the req?", req);
//     let Occasion = app.get("models").Occasion;
//     Occasion.create({ title, date, budget })
//     .then(() => {
//         res.status(201).end();
//     })
//     .catch(error => {
//         next(error)
//     })
// }

module.exports.getOccasions = () => {

}

module.exports.deleteOccasion = () => {

}

module.exports.editOccasion = () => {

}

module.exports.getSingleOccasion = () => {

}



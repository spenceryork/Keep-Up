"use strict";

module.exports.addOccasion = ({ app, body: { user_id, title, date, budget } }, res, next) => {
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

// module.exports.saveToWatchlist = ({ app, body: { user_id, imdb_id } }, res, next) => {
//     let Movie = app.get("models").Movie;
//     Movie.create({ user_id, imdb_id })
//       .then(() => {
//         res.status(201).end(); // 201 = new resource created
//       })
//       .catch(err => {
//         next(err);
//       });
//   };


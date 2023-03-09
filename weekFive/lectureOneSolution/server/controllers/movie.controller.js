const Movie = require('../models/movie.model');

// Path: controllers/movie.controller.js
// Compare this snippet from controllers/movie.controller.js:
// module.exports = {
//     index: (req, res) => {
//         Movie.find()
//             .then(movies => res.json(movies))
//             .catch(err => res.json(err));
//     },
//     create: (req, res) => {
//         Movie.create(req.body)
//             .then(movie => res.json(movie))
//             .catch(err => res.json(err));
//     },
//     show: (req, res) => {
//         Movie.findById(req.params.id)
//             .then(movie => res.json(movie))
//             .catch(err => res.json(err));
//     },
//     update: (req, res) => {

//     },
//     destroy: (req, res) => {

//     }
// }
module.exports.index = (req, res) => {
    Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    Movie.create(req.body)
        .then(movie => res.json(movie))
        .catch(err => res.json(err));
}

module.exports.show = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) => {

}

module.exports.destroy = (req, res) => {

}

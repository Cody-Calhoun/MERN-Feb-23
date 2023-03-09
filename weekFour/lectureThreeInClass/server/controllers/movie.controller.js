const Movie = require('../models/movie.model');

module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then((allMovies) => {
            res.json({ allMovies })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json({ movie: newlyCreatedMovie })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
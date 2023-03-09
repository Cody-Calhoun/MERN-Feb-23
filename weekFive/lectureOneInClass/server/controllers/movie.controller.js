const Movie = require('../models/movie.model');

module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => res.json({ movies: allMovies }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.create = (req, res) => {
    const { title, genre, year } = req.body;
    Movie.create({
        title,
        genre,
        year
    })
    // Movie.create(req.body)
        .then(newMovie => res.json({ movie: newMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
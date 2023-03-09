const Movie = require('../models/movie.model');

// Find all Movies
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => res.json({ movies: allMovies }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Create a Movie
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

// Gives back an array of movies with the same genre.
// If we use the findOne method, we will get back the first movie with the same genre but NOT all movies.
module.exports.findByGenre = (req, res) => {
    Movie.findOne({ genre: req.params.genre.toLowerCase() })
        .then(movie => res.json({ movie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// Find one Movie by ID
module.exports.findOneById = (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => res.json({ movie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// Update one Movie by ID
// module.exports.updateMovie = (req, res) => {
//     Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
//         .then(updatedMovie => res.json({ movie: updatedMovie }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// Update one Movie by Id with Patch
module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedMovie => res.json({ movie: updatedMovie }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// Delete one Movie by ID
module.exports.deleteMovie = (req, res) => {
    Movie.findByIdAndDelete({ _id: req.params.id })
        .then(deleteConfirmation => res.json({ deleteConfirmation }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

const movie = require('../models/movie.model');


module.exports.allMovies = (req, res) => {
    movie.find({})
        .then((movies) => {
            res.json({ allMovies: movies });
        })
        .catch((err) => {
            res.json({ message: "There was an error.", error: err });
        });
}

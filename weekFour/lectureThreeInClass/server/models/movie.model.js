const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    year: {
        type: Number,
    },
    genre: {
        type: String,
    },
});

// const Movie = mongoose.model('Movie', movieSchema);
// module.exports = Movie;

module.exports = mongoose.model('Movie', movieSchema);

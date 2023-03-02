const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    actors: [String],
    plot: String,

    // The following fields are added by the server
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
});

const Movie = mongoose.model('Movie', movieSchema);

// Export the model
module.exports = Movie;


// this is shorthand for the above
// module.exports = mongoose.model('Movie', movieSchema);

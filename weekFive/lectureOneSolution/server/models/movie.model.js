const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
}, 
    {
        timestamps: true
    }

);

module.exports = mongoose.model('Movie', MovieSchema);
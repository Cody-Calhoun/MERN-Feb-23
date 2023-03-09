const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [255, "Title must be less than 255 characters long"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        minlength: [3, "Genre must be at least 3 characters long"],
        maxlength: [255, "Genre must be less than 255 characters long"]
    },
    year: {
        type: Number,
        required: [true, "Release year is required"],
        min: [1900, "Release year must be at least 1900"],
        max: [2023, "Release year must be less than 2023"]
    },
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);

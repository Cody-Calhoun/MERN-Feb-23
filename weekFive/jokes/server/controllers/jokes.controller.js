const Joke = require("../models/jokes.model");

// Get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Get one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findById(req.params.id )
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Create a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Update an existing joke
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Delete an existing joke
module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}
const Player = require("../models/player.model");

// Find All Players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({ players: allPlayers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Find One Player
module.exports.findOnePlayer = (req, res) => {
    Player.findById(req.params.id)
        .then(onePlayer => res.json({ player: onePlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Create Player
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({ player: newPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Update Player
module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPlayer => res.json({ player: updatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Delete Player
module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
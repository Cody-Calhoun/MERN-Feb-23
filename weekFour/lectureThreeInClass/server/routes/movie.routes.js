const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.post('/api/movies', MovieController.createNewMovie);
    // app.get('/api/movies/:id', MovieController.findOneSingleMovie);
}
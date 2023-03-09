const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.post('/api/movies', MovieController.create);
}
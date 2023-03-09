const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.findAllMovies);
    app.get('/api/movies/one_movie/:id', MovieController.findOneById);
    app.get('/api/movies/genre/:genre', MovieController.findByGenre);
    app.post('/api/movies', MovieController.create);
    // app.put('/api/movies/update/:id', MovieController.updateMovie);
    app.patch('/api/movies/update/:id', MovieController.updateMovie);
    app.delete('/api/movies/delete/:id', MovieController.deleteMovie)
}
const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.get('/movies', MovieController.allMovies);
    // app.get('/movies/:id', MovieController.oneMovie);
    // app.post('/movies', MovieController.createMovie);
    // app.put('/movies/:id', MovieController.updateMovie);
    // app.delete('/movies/:id', MovieController.deleteMovie);
}


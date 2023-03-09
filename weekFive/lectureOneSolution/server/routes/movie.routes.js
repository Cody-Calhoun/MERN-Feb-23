const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.get('/api/movies', MovieController.index);
    app.post('/api/movies', MovieController.create);
    app.get('/api/movies/:id', MovieController.show);
    app.put('/api/movies/:id', MovieController.update);
    app.delete('/api/movies/:id', MovieController.destroy);
}


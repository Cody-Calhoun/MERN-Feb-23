const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post('/api/users/register', UserController.registerUser);
    // app.post('/api/users/login', UserController.loginUser);
    // app.get('/api/users/logout', UserController.logoutUser);
    // app.get('/api/users/loggedin', UserController.getLoggedInUser);
}

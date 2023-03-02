const express = require('express');
const app = express();

// Require the Mongoose configuration file which does the rest for us
require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

// Require the routes.js file and pass it the app variable  
const movieRoutes = require('./routes/movie.routes');
movieRoutes(app);

// Tell the express app to listen on port 8000
app.listen(8000, () => console.log("The server is all fired up on port 8000"));

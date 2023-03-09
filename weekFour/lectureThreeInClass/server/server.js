const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const MovieRoutes = require('./routes/movie.routes');
MovieRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
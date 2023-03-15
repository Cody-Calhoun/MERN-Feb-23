const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/player.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

const express = requie('express');
const app = express();
const routes = require('./src/routes');

routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
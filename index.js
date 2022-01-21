const express = require('express');
const wordRouter = require('./backend/routers/wordRouter');

const port = 8080;
const app = express();

app.use('/', wordRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

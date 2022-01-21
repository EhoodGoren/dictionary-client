const express = require('express');
const wordRouter = require('./backend/routers/wordRouter');
const partOfSpeechRouter = require('./backend/routers/partOfSpeechRouter');

const port = 8080;
const app = express();

app.use('/part-of-speech', partOfSpeechRouter);
app.use('/', wordRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

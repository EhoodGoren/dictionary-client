const express = require('express');

const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('hi');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

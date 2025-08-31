const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Uber Backend");
});

module.exports = app;

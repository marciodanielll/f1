const express = require('express');
const { raceControllers } = require('./controllers');

const app = express();

app.use(express.json());

app.use('/qualify/one', raceControllers.qualifyOne);
app.use('/qualify/two', raceControllers.qualifyTwo);

module.exports = app;
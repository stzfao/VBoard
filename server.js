const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// <-----------bodyparser middleware----------->
app.use(bodyParser.json());


// <-----------setting up routes----------->
const cards = require('./routes/cardRouter');
app.use('/card', cards);

// <-----------connect to DB----------->
const db = require('./config/keys').MONGO_URI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected.'))
    .catch(error => console.log(error));

// <-----------connect to port----------->
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on ${port}`));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodyparser
app.use(bodyParser.json());

//DB
const db = require('./config/keys').mongoURI;

//connect db
mongoose.connect(db)
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));

    const port = process.env.port || 5000;

    app.listen(port, () => console.log('Server started on port ${port}'));
    
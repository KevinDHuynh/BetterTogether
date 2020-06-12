const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//API routes
const habit_recorders = require('./routes/api/habit_recorders');
app.use('/api/habit_recorders', habit_recorders);

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
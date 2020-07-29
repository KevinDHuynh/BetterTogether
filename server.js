const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('config')
const path = require('path');


//Instantiate Express app
const app = express();

//Bodyparser
app.use(express.json());

app.use(cors())

//API routes
app.use('/api/habit_recorders', require('./routes/api/habit_recorders'));   // habit entities
app.use('/api/register', require('./routes/api/register'));                 // registration
app.use('/api/login', require('./routes/api/login'));                        // login


app.use('/portal', express.static(path.join(__dirname, 'client/build')));

app.use('/', express.static(path.join(__dirname, 'public')));


app.get('/portal/*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    });

app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });


//Connect to DB
const db = config.get('mongoURI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('config')


//Instantiate Express app
const app = express();

//Bodyparser
app.use(express.json());

app.use(cors())

//API routes
app.use('/api/habit_recorders', require('./routes/api/habit_recorders'));   // habit entities
app.use('/api/register', require('./routes/api/register'));                 // registration
app.use('/api/login', require('./routes/api/login'))                        // login

//Connect to DB
const db = config.get('mongoURI');

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));

    const port = process.env.port || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
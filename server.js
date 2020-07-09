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
app.use('/api/login', require('./routes/api/login'))                        // login


// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

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
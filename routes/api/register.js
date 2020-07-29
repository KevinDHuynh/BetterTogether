const express = require('express');
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const router = express.Router();

// HabitRecorder model
const User = require('../../models/User');

// POST: /api/register --> PUBLIC
// Register new user
router.post('/', (req, res) => {
    // Get user parameters
    const { name, username, password } = req.body;

    // Check parameter validity
    if(!name) {
        return res.status(400).json({ error_msg: 'Please enter a name' });
    }

    if(!username) {
        return res.status(400).json({ error_msg: 'Please enter a username' });
    }

    if(!password) {
        return res.status(400).json({ error_msg: 'Please enter a password' });
    }
    else if(password.length < 8) {
        return res.status(400).json({ error_msg: 'Password does not meet length requirements' });
    }

    // Ensure no duplicate users
    User.findOne({ username })
        .then(user => {
            if(user) {
                return res.status(400).json({ error_msg: 'Username already in use' });
            }
        });
    
    // Create new user
    const newUser = new User({
        name: name,
        username: username,
        password: password
    });

    // Encrypt password and save new user
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user => {
                    jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: 7200 }, (err, token) => {
                        if(err) throw err;
                        res.json({
                            token: token,
                            user: {
                                id: user.id,
                                name: user.name,
                                username: user.username
                            }
                        });
                    });
                });
        });
    });
}); // end POST route

module.exports = router;
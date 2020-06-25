const express = require('express');
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')
const router = express.Router();

// HabitRecorder model
const User = require('../../models/User');

// POST: /api/login --> PUBLIC
// Authenticate user
router.post('/', (req, res) => {
    // Get user parameters
    const { username, password } = req.body;

    // Check parameter validity
    if(!username) {
        return res.status(400).json({ error_msg: 'Please enter a username' });
    }

    if(!password) {
        return res.status(400).json({ error_msg: 'Please enter a password' });
    }
    else if(password.length < 8) {
        return res.status(400).json({ error_msg: 'Password does not meet length requirements' });
    }

    // Ensure user exists and credentials match
    User.findOne({ username })
        .then(user => {
            // Ensure user exists
            if(!user) {
                return res.status(400).json({ error_msg: 'Username could not be found' });
            }

            // Validate user password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) {
                        return res.status(400).json({ error_msg: 'Password invalid' });
                    }

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
}); // end POST route

// GET: /api/login/user --> PRIVATE
// Validate user with authenticated token
router.get('/user', authenticate, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            res.json(user);
        });
});

module.exports = router;
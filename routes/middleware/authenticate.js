const jwt = require('jsonwebtoken')
const config = require('config')

// Check authentication token
function authenticate(req, res, complete) {
    // Validate token
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ error_msg: 'User unauthorized- token does not exist' });
    }

    // Verify token and add user 
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        complete();
    } catch(e) {
        res.status(400).json({ error_msg: 'Token invalid' })
    }
}

module.exports = authenticate;
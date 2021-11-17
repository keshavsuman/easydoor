const jsonwebtoken = require('jsonwebtoken');

async function adminAuthToken(req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({
        status: 401,
        error: 'Token not provided',
        });
    }
    
    const [, token] = authHeader.split(' ');
    
    try {
        const decoded = jsonwebtoken.verify(token, process.env.SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        return res.status(401).json({
        status: 401,
        error: 'Token invalid',
        });
    }
}

module.exports = adminAuthToken;
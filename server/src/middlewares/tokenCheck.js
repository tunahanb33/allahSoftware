const { decodedToken } = require('../utils/authToken');
const userModel = require('../database/userModel');
const logger = require('../utils/logger');

const tokenCheck = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ success: false, message: 'Auth Token Required' })
    else {
        decodedToken(token)
            .then(async m => {
                const uuid = m.user.uuid;
                const user = await userModel.findOne({ uuid });
                if (!user) return res.status(401).json({ success: false, message: '401: Unauthorized' });
                logger.log({
                    level: 'info',
                    searchParams: req.body,
                    username: user.username,
                  });
                next();
            })
            .catch(() => res.status(401).json({ success: false, message: '401: Expired Token' }))
    }
}

module.exports = tokenCheck;
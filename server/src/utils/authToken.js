const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_SECRET_KEY;



const generateToken = (payload) => jwt.sign({ user: payload }, privateKey, { algorithm: 'HS512', expiresIn: 60* 30 });

const decodedToken = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) reject(err)
        else resolve(decoded)
    })
})

module.exports = {
    generateToken,
    decodedToken
};
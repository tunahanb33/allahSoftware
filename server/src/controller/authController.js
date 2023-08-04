const userModel = require('../database/userModel');
const { generateToken, decodedToken } = require('../utils/authToken');
const generateUUID = require('../utils/generateUniqueUid');

const register = async (req, res) => {
    const { username, password, rePassword } = req.body;
    if (!username || !password || (password != rePassword)) return;
    const user = await userModel.findOne({ username });
    if (user) return res.status(200).json({ success: true, message: 'Username Exists' })
    userModel.create({ uuid: generateUUID, username, password, userAgent: req.get('User-Agent') })
        .then(() => res.status(201).json({ success: true }))
        .catch(err => res.status(500).json({ success: false, message: err }))
}

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return;
    const user = await userModel.findOne({ username });
    if (!user || (user.password != password)) return res.status(200).json({ success: false, message: 'Invalid username or pass' });
    if (!user.isVerified) return res.status(200).json({ success: false, message: 'Hesabın onaylanmayı bekliyor..' });
    const ipAdress = req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.ip;
    const userAgent = req.get('User-Agent');
    if (user.userAgent != userAgent) {
        if (user.byPassVal == 1) {
            user.userAgent = userAgent;
            user.byPassVal--;
        } else if (user.byPassVal == 0) return res.status(200).json({ success: false, message: 'Hesap paylaşımından dolayı uzaklaştırıldın..' });
    }
    user.logins.push({ ip: ipAdress });
    user.save();
    const token = generateToken({ username: user.username, uuid: user.uuid });

    res.status(200).json({ success: true, data: { token, username: user.username } });
}

const getUser = async (req, res) => {
    const { token } = req.params;
    decodedToken(token).then(async m => {
        const uuid = m.user.uuid;
        const user = await userModel.findOne({ uuid })
        if (user)
            res.status(200).json({ success: true, username: user.username })
        else
            res.status(400).json({ success: false, message: 'User not Found!' })
    }).catch(() => res.status(500).json({ success: false, message: 'API ERROR' }))
}

module.exports = {
    register,
    login,
    getUser
}
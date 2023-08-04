const router = require('express').Router();
const { register, login, getUser } = require('../controller/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/getuser/:token', getUser);

module.exports = router;
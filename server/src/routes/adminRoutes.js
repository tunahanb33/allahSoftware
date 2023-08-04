const router = require('express').Router();
const userModel = require('../database/userModel');
router.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.json(users);
});

router.get('/users/manage/:username', async (req, res) => {
    try {
        const users = await userModel.findOne({ username: req.params.username });
        if (users.isVerified) {
            await userModel.findOneAndDelete({ username: req.params.username });
        } else {
            users.isVerified = true;
            users.save();
        }
    } catch (error) {
        res.status(500).json({ success: false });
    } finally {
        const newUsers = await userModel.find();
        res.status(200).json({ success: true, response: newUsers })
    }
})

module.exports = router;
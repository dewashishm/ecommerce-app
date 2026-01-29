const express = require('express')
const {signup, login} = require('../controllers/authController');
const {authMiddleware} = require('../middleware/authMiddleware');
const User = require('../models/user');

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
// router.post('/logout', logout)
router.get('/user', authMiddleware, async(req, res)=> {
    const user = await User.findById(req.user.userId).select('-password');

    res.status(200).json({
        message: "User Authenticated",
        user
    });
});

module.exports = router;
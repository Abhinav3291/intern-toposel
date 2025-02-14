const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const { body } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware.js');


router.post(
    '/register',
    [
        body('username',
             'Username is required'
            ).notEmpty(),
        body('email', 'Email is required').isEmail(),
        body('password', 'Password is required and must be at least 6 characters').isLength({ min: 6 }),
        body('fullName', 'Full name is required').notEmpty(),
        body('gender', 'Gender is required').notEmpty(),
        body('dateOfBirth', 'Date of birth is required').notEmpty(),
        body('country', 'Country is required').notEmpty(),
    ],
    registerUser
);
router.post('/login', loginUser);

router.get('/search', authMiddleware , getUser );

module.exports = router;
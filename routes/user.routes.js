const express = require('express');
const router = express.Router();
const { postSignUp, getSignUp, postSignin, getSignin, getDashboard } = require('../controllers/user.controllers');


router.get('/signup', getSignUp);
router.post('/register', postSignUp);
router.get('/login', getSignin);
router.post('/login', postSignin);
router.get('/dashboard', getDashboard);

module.exports = router;
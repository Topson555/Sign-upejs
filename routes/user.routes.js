const express = require('express');
const router = express.Router();
const { postSignup, getSignup, postSignin, getSignin, getDashboard } = require('../controllers/user.controllers');


router.get('/signup', getSignup);
router.post('/register', postSignup);
router.get('/login', getSignin);
router.post('/login', postSignin);
router.get('/dashboard', getDashboard);

module.exports = router;
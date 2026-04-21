const express = require('express');
const router = express.Router();
const { postSignup, getSignup, postSignin, getSignin, getDashboard, getAllUsers } = require('../controllers/user.controllers');
// const {postSignup, getSignup, postSignin, getSignin, getDashboard, getAllUsers} = require('../controllers/user.controllers');


router.get('/signup', getSignup);
router.post('/register', postSignup);
router.get('/signin', getSignin);
router.post('/login', postSignin);
router.get('/dashboard', getDashboard);

router.get('/registeredUsers', getAllUsers);

module.exports = router;
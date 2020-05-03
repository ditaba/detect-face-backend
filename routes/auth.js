const path = require('path');

const express = require('express');

const registerController = require('../controllers/register');
const signinController = require('./controllers/signin');

const router = express.Router();

router.post('/signin', signinController.signinAuthentication);

router.post('/register', registerController.handleRegister);

module.exports = router;

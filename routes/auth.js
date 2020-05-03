const path = require('path');

const express = require('express');

const registerController = require('../controllers/register');
const signinController = require('../controllers/signin');

const router = express.Router();

router.post('/signin', signinController.signinAuthentication);

router.post('/register', registerController.handleRegister);

router.post('/test', signinController.signinTest);

router.post('/test2', registerController.handleTest);

module.exports = router;

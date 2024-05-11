const express = require('express');
const router = express.Router();
const signupCtrl = require('../controllers/auth')

router.post('/', signupCtrl.signUp);

module.exports = router;

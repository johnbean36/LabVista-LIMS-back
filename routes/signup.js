const express = require('express');
const router = express.Router();
const signupCtrl = require('../controllers/auth')

router.post('/', signupCtrl.signup);

module.exports = router;

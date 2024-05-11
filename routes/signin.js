const express = require('express');
const router = express.Router();
const signinCtrl = require('../controllers/auth');

router.post('/', signinCtrl.signIn);

module.exports = router;
const express = require('express');
const router = express.Router();
const samplesCtrl = require('../controllers/samples')
const { stripToken, verifyRights, verifyToken } = require('../middleware');

router.get(
    '/idnumber',
    stripToken,
    verifyToken,
    samplesCtrl.idLookup
)

router.post(
    '/register',
    stripToken,
    verifyToken,
    samplesCtrl.registerSample
)

module.exports = router
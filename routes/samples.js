const express = require('express');
const router = express.Router();
const samplesCtrl = require('../controllers/samples')
const { stripToken, verifyRights, verifyToken } = require('../middleware');

router.post(
    '/register',
    stripToken,
    verifyToken,
    samplesCtrl.registerSample
)

router.get(
    '/customer',
    stripToken,
    verifyToken,
    samplesCtrl.getCust
)

router.get(
    '/commodity',
    stripToken,
    verifyToken,
    samplesCtrl.getComm
)

router.get(
    '/tests',
    stripToken,
    verifyToken,
    samplesCtrl.getTest
)

router.post(
    '/viewsamples',
    stripToken,
    verifyToken,
    samplesCtrl.viewSamples
)

router.get(
    'checkId',
    stripToken,
    verifyToken,
    samplesCtrl.checkId
)

module.exports = router
const express = require('express');
const router = express.Router();
const samplesCtrl = require('../controllers/samples')
const { stripToken, verifyRights, verifyToken } = require('../middleware');

router.get(
    '/sampleid',
    stripToken,
    verifyToken,
    samplesCtrl.getIds
)

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
    '/checkId',
    stripToken,
    verifyToken,
    samplesCtrl.checkId
)

router.delete(
    '/deletesamples',
    stripToken,
    verifyToken,
    verifyRights,
    samplesCtrl.deleteSamples
)

router.get(
    '/viewbydate',
    stripToken,
    verifyToken,
    samplesCtrl.viewByDate
)

router.post(
    '/overduelist',
    stripToken,
    verifyToken,
    samplesCtrl.overDueList
)

router.post(
    '/validate',
    stripToken,
    verifyToken,
    verifyRights,
    samplesCtrl.setValidate
)

router.post(
    '/getReport',
    stripToken,
    verifyToken,
    verifyRights,
    samplesCtrl.getReport
)

router.post(
    'updatesamples',
    stripToken,
    verifyToken,
    samplesCtrl.updateSamples
)

module.exports = router
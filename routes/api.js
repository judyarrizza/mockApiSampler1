const express = require('express');
const utilities = require('../services/common/utilities');
const auth = require('../services/common/auth');

const router = express.Router();

router.post('/authentication/login', function (req, res, next) {
    const loginResponse = auth.getLoginResponse(req);
    utilities.callDump(req);
    res.send( loginResponse );
});

router.post('/authentication/sso', function (req, res, next) {
    const ssoResponse = auth.getSSOResponse(req);
    utilities.callDump(req);
    res.send(ssoResponse);
});

router.post('/auth/sso', function (req, res, next) {
    const ssoDataResponse = auth.getSSODataResponse(req);
    utilities.callDump(req);
    res.send(ssoDataResponse);
});

router.post('/auth/login', function (req, res, next) {
    const authLoginResponse = auth.getAuthLoginResponse(req);
    utilities.callDump(req);
    res.send(authLoginResponse);
});


module.exports = router;

const express = require('express');
const utilities = require('../services/common/utilities');
const spsRoutes = require('../services/data/sps');

const router = express.Router();

router.get('/data', function (req, res, next) {
    utilities.callDump(req);
    res.status(200).send(
        spsRoutes.getCurrentData()
    );
});

router.post('/data', function (req, res, next) {
    utilities.callDump(req);
    spsRoutes.setCurrentData(req.body);
    res.send(spsRoutes.getCurrentData());
});

module.exports = router;

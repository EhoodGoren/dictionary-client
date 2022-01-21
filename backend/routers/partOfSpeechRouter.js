const express = require('express');
const docClient = require('../awsConnection');

const router = express.Router();

router.get('/:part', async (req, res, next) => {
    const { letter } = req.query;
    if(!letter) return next();
    const { part } = req.params;
});

router.get('/:part', async (req, res) => {
    const { part } = req.params;
});

module.exports = router;

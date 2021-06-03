const express = require('express');
const router = express.Router();
const nestleDao = require('../../dao/nestle/index.js');

router.post('/coupon/redeem', async (req, res) => {
   let results = await nestleDao.redeem(req.body);
   res.json(results);
});

router.post('/coupon/transaction_check', async (req, res) => {
   let results = await nestleDao.check(req.body);
   res.json(results);
});

module.exports = router;
const express = require('express');
const router = express.Router();
const wowprimeDao = require('../../dao/wowprime/index.js');

router.post('/', async (req, res) => {
   let result = await wowprimeDao.transactionList(req.body);
   res.json(result);
});

module.exports = router;
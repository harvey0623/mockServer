const express = require('express');
const router = express.Router();
const caltrateDao = require('../../dao/caltrate/index.js');

router.post('/', async (req, res) => {
   let result = await caltrateDao.test(req.body);
   res.json({});
});

module.exports = router;
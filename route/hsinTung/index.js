const express = require('express');
const router = express.Router();
const hsinTungDao = require('../../dao/hsinTung/index.js');

router.post('/term/brief_term', async (req, res) => {
   let result = await hsinTungDao.getTerm(req.body);
   res.json(result);
})

module.exports = router;
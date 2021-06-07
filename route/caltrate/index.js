const express = require('express');
const router = express.Router();
const caltrateDao = require('../../dao/caltrate/index.js');

router.post('/update_member_mobile', async (req, res) => {
   let result = await caltrateDao.updateMobile(req.body);
   res.json(result);
});

module.exports = router;
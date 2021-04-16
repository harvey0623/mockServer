const express = require('express');
const router = express.Router();
const hsinTungDao = require('../../dao/hsinTung/index.js');

router.post('/term/brief_term', async (req, res) => {
   let result = await hsinTungDao.getTerm(req.body);
   res.json(result);
});

router.post('/login', async (req, res) => {
   let result = await hsinTungDao.login(req.body);
   res.json(result);
});

router.post('/checkMobile', async (req, res) => {
   let result = await hsinTungDao.checkMobile(req.body);
   res.json(result);
});

router.post('/checkEmail', async (req, res) => {
   let result = await hsinTungDao.checkEmail(req.body);
   res.json(result);
});

router.post('/verifyMobile', async (req, res) => {
   let result = await hsinTungDao.verifyMobile(req.body);
   res.json(result);
});

module.exports = router;
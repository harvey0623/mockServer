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

router.post('/search_store', async (req, res) => {
   let result = await hsinTungDao.searchStore(req.body);
   res.json(result);
});

router.post('/store_information', async (req, res) => {
   let result = await hsinTungDao.storeInformation(req.body);
   res.json(result);
});

router.post('/add', async (req, res) => {
   let result = await hsinTungDao.add(req.body);
   res.json(result);
});

router.post('/forget', async (req, res) => {
   let result = await hsinTungDao.forget(req.body);
   res.json(result);
});

router.post('/login_with_external_member', async (req, res) => {
   let result = await hsinTungDao.externalLogin(req.body);
   res.json(result);
});

module.exports = router;
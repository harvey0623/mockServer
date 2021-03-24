const express = require('express');
const router = express.Router();
const hexagonDao = require('../../dao/hexagon/index.js');

router.post('/member/login', async(req, res) => {
   let result = await hexagonDao.login(req.body);
   res.json(result);
});

router.post('/member/register', async(req, res) => {
   let result = await hexagonDao.register(req.body);
   res.json(result);
});

router.post('/member/send_verify', async(req, res) => {
   let result = await hexagonDao.send_verify(req.body);
   res.json(result);
});

router.post('/member/verify', async(req, res) => {
   let result = await hexagonDao.verify(req.body);
   res.json(result);
});

router.post('/member/update_cellphone', async(req, res) => {
   let result = await hexagonDao.update_cellphone(req.body);
   res.json(result);
});

router.post('/member/forget_password', async(req, res) => {
   let result = await hexagonDao.forget_password(req.body);
   res.json(result);
});

router.post('/member/update_password', async(req, res) => {
   let result = await hexagonDao.update_password(req.body);
   res.json(result);
});

router.post('/member/info', async(req, res) => {
   let result = await hexagonDao.info(req.body);
   res.json(result);
});

router.post('/member/update', async(req, res) => {
   let result = await hexagonDao.update(req.body);
   res.json(result);
});

module.exports = router;
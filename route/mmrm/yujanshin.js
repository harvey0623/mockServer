const express = require('express');
const router = express.Router();
const pointDao = require('../../dao/yujanshin/point/index.js');
const { decode } = require('../../utility/crypto/yujanshin.js');

//===會員點數
router.post('/query_member_point', async(req, res) => {
   // console.log(req.body)
   let result = await pointDao.memberPoint(req.body).then(res => res);
   res.json(result);
});

//===會員點數明細
router.post('/query_member_point_detail', async(req, res) => {
   let result = await pointDao.pointDetail(req.body).then(res => res);
   res.json(result);
});

//===遠端會員點數
router.post('/remoteMemberPoint', async(req, res) => {
   let result = await pointDao.remoteMemberPoint(req.body).then(res => res);
   res.json(result);
});

//===遠端會員點數明細
router.post('/remoteMemberPointDetail', async(req, res) => {
   let result = await pointDao.remoteMemberPointDetail(req.body).then(res => res);
   res.json(result);
});

//===遠端等級查詢
router.post('/remoteMemberInfo', async(req, res) => {
   let result = await pointDao.remoteMemberInfo(req.body).then(res => res);
   res.json(result);
});

//===遠端第三方會員系統
router.post('/remoteMemberThirty', async(req, res) => {
   let result = await pointDao.remoteMemberThirty().then(res => res);
   res.json(result);
});

module.exports = router;
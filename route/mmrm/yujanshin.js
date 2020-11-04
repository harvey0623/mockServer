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
   let result = await pointDao.remoteMemberPoint().then(res => res);
   res.json(result);
});

module.exports = router;
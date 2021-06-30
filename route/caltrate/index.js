const express = require('express');
const router = express.Router();
const caltrateDao = require('../../dao/caltrate/index.js');

router.post('/update_member_mobile', async (req, res) => {
   let result = await caltrateDao.updateMobile(req.body);
   res.json(result);
});

router.post('/home_delivery/my_order_list', async (req, res) => {
   let result = await caltrateDao.orderList(req.body);
   res.json(result);
});

router.post('/home_delivery/my_order_detail', async (req, res) => {
   let result = await caltrateDao.orderDetail(req.body);
   res.json(result);
});

router.post('/home_delivery/create_order', async (req, res) => {
   let result = await caltrateDao.createOrder(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/couponSearch', async (req, res) => { //查詢行銷票券
   let result = await caltrateDao.couponSearch(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/couponRedeem', async (req, res) => { //票券核銷
   let result = await caltrateDao.redeem(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

router.post('/couponTransactionCheck', async (req, res) => { //票券檢查
   let results = await caltrateDao.check(req.body);
   res.json(results);
});

module.exports = router;
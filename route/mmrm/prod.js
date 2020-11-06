const express = require('express');
const router = express.Router();
const pointDao = require('../../dao/mmrm/point/index.js');
const transactionDao = require('../../dao/mmrm/transaction/index.js');
const brandDao = require('../../dao/mmrm/brand/index.js');
const memberDao = require('../../dao/mmrm/member/index.js');
const levelDao = require('../../dao/mmrm/level/index.js');
const storeDao = require('../../dao/mmrm/store/index.js');
const couponDao = require('../../dao/mmrm/coupon/index.js');
const activityDao = require('../../dao/mmrm/activity/index.js');
const cmsDao = require('../../dao/mmrm/cms/index.js');
const termDao = require('../../dao/mmrm/term/index.js');

//===多品牌api
router.post('/multiple_brand', (req, res) => {
   res.json({ 
      multiple_brand: '1', //0(單品牌) 1(多品牌)
      open_external_link_hint: ''
   });
});

//===level
router.post('/level_information', async (req, res) => {
   let result = await levelDao.getLevelInfo(req.body);
   res.json(result);
});

//===member
router.post('/member_summary', async (req, res) => {
   let result = await memberDao.memberSummary();
   res.json(result);
});

router.post('/member_profile', async (req, res) => {
   let result = await memberDao.memberProfile();
   res.json(result);
});

router.post('/member_card', async (req, res) => {
   let result = await memberDao.memberCard();
   res.json(result);
});

//===point
router.post('/point_history', async (req, res) => {
   let result = await pointDao.getPointHistory(req.body);
   res.json(result);
});

router.post('/point_due_to_expire', async (req, res) => {
   console.log(req.body)
   let result = await pointDao.pointExpire(req.body);
   res.json(result);
});

router.post('/point_information', async (req, res) => {
   let result = await pointDao.getPointInfo(req.body);
   res.json(result);
});

//===transaction
router.post('/transaction_history', async (req, res) => {
   let result = await transactionDao.getHistory(req.body);
   res.json(result);
});

router.post('/transaction_detail', async (req, res) => {
   let result = await transactionDao.getDetail(req.body);
   res.json(result);
});

//===brand
router.post('/search_brand', async (req, res) => {
   let result = await brandDao.searchBrand();
   res.json(result);
});

router.post('/brand_information', async (req, res) => {
   let result = await brandDao.getBrandInfo(req.body);
   res.json(result);
});

//===store
router.post('/search_coupon_available_store', async (req, res) => {
   let result = await storeDao.searchStore(req.body);
   res.json(result);
});

//===coupon
router.post('/my_coupon_list', async (req, res) => {
   let result = await couponDao.couponList(req.body);
   res.json(result);
});

router.post('/my_coupon_detail', async (req, res) => {
   let result = await couponDao.couponDetail(req.body);
   res.json(result);
});

router.post('/coupon_information', async (req, res) => {
   let result = await couponDao.couponInfo(req.body);
   res.json(result);
});

router.post('/transfer_my_coupon', async (req, res) => {
   let result = await couponDao.couponTransfer(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

//===activity
router.post('/brief_coupon_activity_type', async (req, res) => {
   let result = await activityDao.briefCouponActivity();
   res.json(result);
});

router.post('/search_coupon_activity', async (req, res) => {
   let result = await activityDao.searchCouponActivity(req.body);
   res.json(result);
});

router.post('/coupon_activity_information', async (req, res) => {
   let result = await activityDao.couponActivityInformation(req.body);
   res.json(result);
});

router.post('/redeem_coupon_activity', async (req, res) => {
   let result = await activityDao.redeemCouponActivity(req.body);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 401
   res.status(statusCode).json(result);
});

router.post('/brief_point_activity_type', async (req, res) => {
   let result = await activityDao.briefPointActivity(req.body);
   res.json(result);
});

router.post('/search_point_activity', async (req, res) => {
   let result = await activityDao.searchPointActivity(req.body);
   res.json(result);
});

router.post('/point_activity_information', async (req, res) => {
   let result = await activityDao.pointActivityInformation(req.body);
   res.json(result);
});

router.post('/redeem_point_activity', async (req, res) => {
   console.log(req.body);
   let result = await activityDao.redeemPointActivity(req.body);
   console.log(result);
   let statusCode = result.rcrm.RC === 'C01' ? 200 : 400;
   res.status(statusCode).json(result);
});

//===cms
router.post('/search_cms_list_item', async (req, res) => {
   let result = await cmsDao.searchListItem(req.body);
   res.json(result);
});

router.post('/cms_book', async (req, res) => {
   let result = await cmsDao.cmsBook(req.body);
   res.json(result);
});

router.post('/cms_book_page', async (req, res) => {
   let result = await cmsDao.cmsBookPage(req.body);
   res.json(result);
});

//===term
router.post('/brief_term', async (req, res) => {
   let result = await termDao.term(req.body);
   res.json(result);
});


module.exports = router;
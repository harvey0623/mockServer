const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;
const activityDao = {
   briefCouponActivity() {
      let signText = wmSign({
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/brief_coupon_activity_type',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   searchCouponActivity(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/search_coupon_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   couponActivityInformation(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/coupon_activity_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   redeemCouponActivity(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/redeem_coupon_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   briefPointActivity() {
      let signText = wmSign({
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/brief_point_activity_type',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   searchPointActivity(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/search_point_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   pointActivityInformation(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/point_activity_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   redeemPointActivity(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/activity/redeem_point_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}

module.exports = activityDao;

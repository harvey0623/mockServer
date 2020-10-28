const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/index.js');
const couponDao = {
   async couponList(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/coupon/my_coupon_list',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async couponDetail(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/coupon/my_coupon_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async couponTransfer(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/coupon/transfer_my_coupon',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async couponInfo(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/coupon/coupon_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
};

module.exports = couponDao;
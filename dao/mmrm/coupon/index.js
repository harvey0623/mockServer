const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;
const couponDao = {
   couponList(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/coupon/my_coupon_list',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   couponDetail(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/coupon/my_coupon_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   couponTransfer(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/coupon/transfer_my_coupon',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   couponInfo(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
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
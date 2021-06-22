const { updatePhoneAxios, orderAxios, couponAxios } = require("../../utility/axios/caltrate.js");
const wmSign = require('../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;

const caltrateDao = {
   updateMobile(payload) { //更新手機
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return updatePhoneAxios({
         url: '/member/update_member_mobile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   orderList(payload) { //訂單列表
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return orderAxios({
         url: '/home_delivery/my_order_list',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   orderDetail(payload) { //訂單詳情
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return orderAxios({
         url: '/home_delivery/my_order_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   createOrder(payload) { //建立訂單
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return orderAxios({
         url: '/home_delivery/create_order',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async couponSearch(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return couponAxios({
         url: '/coupon/search',
         method: 'post',
         data: { sign: signText }
      }).then(res =>{
         return res.data;
      }).catch(err => {
         console.log(null)
      })
   },
   async redeem(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return couponAxios({
         url: '/coupon/redeem',
         method: 'post',
         data: { sign: signText }
      }).then(res =>{
         return res.data;
      })
   },
   async check(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return couponAxios({
         url: '/coupon/transaction_check',
         method: 'post',
         data: { sign: signText }
      }).then(res =>{
         return res.data;
      })
   },
};

module.exports = caltrateDao;
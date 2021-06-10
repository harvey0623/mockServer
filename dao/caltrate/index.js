const CryptoJS = require("crypto-js");
const { updatePhoneAxios, orderAxios } = require("../../utility/axios/caltrate.js");
const wmSign = require('../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;
const aes_key = '10e792ba9574fac55d37cc64f8ef917c';
const wm_aes = function(input) {
   var keyHash = CryptoJS.SHA384(aes_key);
   var key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0,64));
   var iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64,96));
   var encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv });
   return encrypted.toString();
}

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
         "request_parameter": { 
            ...payload,
            mobile: wm_aes(payload.mobile)
         },
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
   }
};

module.exports = caltrateDao;
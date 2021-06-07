const CryptoJS = require("crypto-js");
const { updatePhoneAxios, orderAxios } = require("../../utility/axios/caltrate.js");
const wmSign = require('../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;
const aes_key = '05df9754ee84811f23f109a4f245a8c7';
const wm_aes = function(input) {
   var keyHash = CryptoJS.SHA384(aes_key);
   var key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0,64));
   var iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64,96));
   var encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv });
   return encrypted.toString();
}

const caltrateDao = {
   updateMobile(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return updatePhoneAxios({
         url: '/update_member_mobile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   orderList(payload) {
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
   orderDetail(payload) {
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
   createOrder(payload) {
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
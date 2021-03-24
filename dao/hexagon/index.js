const hexagonAxios = require('../../utility/axios/hexagon.js');
const cryptoObj = require('../../utility/crypto/hexagon.js');

const hexagonDao = {
   login(payload) {
      return hexagonAxios({
         url: '/member/login',
         method: 'post',
         data: {
            login_type: payload.login_type,
            account: cryptoObj.encrypt(payload.account),
            password: cryptoObj.encrypt(payload.password),
            channel: payload.channel
         }
      }).then(res => res.data);
   },
   register(payload) {
      return hexagonAxios({
         url: '/member/register',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   send_verify(payload) { //重新寄驗證碼
      return hexagonAxios({
         url: '/member/send_verify',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   verify(payload) {
      return hexagonAxios({
         url: '/member/verify',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   update_cellphone(payload) {
      return hexagonAxios({
         url: '/member/update_cellphone',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   forget_password(payload) {
      return hexagonAxios({
         url: '/member/forget_password',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   update_password(payload) {
      return hexagonAxios({
         url: '/member/update_password',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   info(payload) {
      return hexagonAxios({
         url: '/member/info',
         method: 'post',
         data: payload
      }).then(res => res.data);
   },
   update() {
      return hexagonAxios({
         url: '/member/update',
         method: 'post',
         data: payload
      }).then(res => res.data);
   }
};

module.exports = hexagonDao;

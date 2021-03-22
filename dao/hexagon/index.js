const hexagonAxios = require('../../utility/axios/hexagon.js');
const cryptoObj = require('../../utility/crypto/hexagon.js');

const hexagonDao = {
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
   }
};

module.exports = hexagonDao;

const hsinTungAxios = require('../../utility/axios/hsinTung.js');
const cryptoObj = require('../../utility/crypto/hsinTung.js');

const hsinTungDao = {
   async getTerm(payload) {
      return hsinTungAxios({
         url: '/term/brief_term',
         method: 'post',
         data: {
            sign: cryptoObj.wm_sign(payload)
         }
      }).then(res => res.data)
   }
}

module.exports = hsinTungDao;
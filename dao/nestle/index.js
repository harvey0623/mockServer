const nestleAxios = require("../../utility/axios/nestle.js");
const wmSign = require('../../utility/crypto/mmrm.js');

const nestleDao = {
   async redeem() {
      return nestleAxios({
         url: '/coupon/redeem',
         method: 'post',
         data: {}
      }).then(res => res.data)
   }
};

module.exports = nestleDao;
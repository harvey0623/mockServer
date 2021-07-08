const nestleAxios = require("../../utility/axios/nestle.js");
const wmSign = require('../../utility/crypto/mmrm.js');

const nestleDao = {
   redeem(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return nestleAxios({
         url: '/coupon/redeem',
         method: 'post',
         data: { sign: signText }
      }).then(res =>{
         return res.data;
      })
   },
   check(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return nestleAxios({
         url: '/coupon/transaction_check',
         method: 'post',
         data: { sign: signText }
      }).then(res =>{
         return res.data;
      })
   },
};

module.exports = nestleDao;
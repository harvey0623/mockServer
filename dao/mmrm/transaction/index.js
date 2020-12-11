const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/mmrm.js');
const transactionDao = {
   async getHistory(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/transaction/transaction_history',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getDetail(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/transaction/transaction_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
};

module.exports = transactionDao;

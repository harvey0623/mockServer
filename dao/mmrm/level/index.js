const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/mmrm.js');
const memberDao = {
   getLevelInfo(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/level/level_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
};

module.exports = memberDao;
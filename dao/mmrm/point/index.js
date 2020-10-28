const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/index.js');
const pointDao = {
   async getPointHistory(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/point/point_history',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getPointInfo(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/point/point_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async pointExpire(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/point/point_due_to_expire',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}

module.exports = pointDao;
const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/mmrm.js');
const isDev = process.env.NODE_ENV === 'dev';
const access_token = isDev ? process.env.MMRM_ACCESS_TOKEN : process.env.CUSTOM_ACCESS_TOKEN;
const pointDao = {
   getPointHistory(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/point/point_history',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   getPointInfo(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/point/point_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   getExternalPointInfo(payload) {
      let signText = wmSign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/point/external_point_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   pointExpire(payload) {
      let signText = wmSign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
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
const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/index.js');
const memberDao = {
   async memberSummary() {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/member/member_summary',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async memberProfile() {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/member/get_member_profile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async memberCard() {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/member/get_member_card',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async verifyPassword(payload) {
      let signText = wmSign({
         "member_access_token": process.env.MMRM_ACCESS_TOKEN,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/member/verify_member_password',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
}

module.exports = memberDao;
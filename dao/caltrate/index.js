const { updatePhoneAxios } = require("../../utility/axios/caltrate.js");
const wmSign = require('../../utility/crypto/mmrm.js');

const caltrateDao = {
   async updateMobile(payload) {
      return updatePhoneAxios({
         url: '/update_member_mobile',
         method: 'post',
         data: {}
      }).then(res => res.data)
   }
};

module.exports = caltrateDao;
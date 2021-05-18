const caltrateAxios = require("../../utility/axios/nestle.js");
const wmSign = require('../../utility/crypto/mmrm.js');

const caltrateDao = {
   async test(payload) {
      return caltrateAxios({
         url: '',
         method: 'post',
         data: {}
      }).then(res => res.data)
   }
};

module.exports = caltrateDao;
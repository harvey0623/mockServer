const axios = require('axios');
const projectDao = {
   async autoComplete(payload) {
      return await axios({
         url: 'http://suggestqueries.google.com/complete/search?client=firefox',
         mehtod: 'get',
         params: {
            q: payload.keyword
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         return [];
      });
   }
}

module.exports = projectDao;
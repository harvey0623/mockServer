const axios = require('axios');
const projectDao = {
   autoComplete(payload) {
      return axios({
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
const axios = require('axios');
const mmrmAxios = axios.create({
   baseURL: process.env.MMRM_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'language': 'zh_TW',
      'app-id': '999ca0e82be8da98d769d138ab9a5b09',
      'device-uuid': '123e4567-e89b-12d3-a456-426655440000'
   },
});


module.exports = mmrmAxios;
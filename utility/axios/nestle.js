const axios = require('axios');
const nestleAxios = axios.create({
   baseURL: 'https://ndg-pos-uat.wisho2o.com/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '32b69906388000a6383158c73d4a0759',
      'device-uuid': '123'
   },
});

module.exports = nestleAxios;
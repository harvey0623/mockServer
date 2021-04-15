const axios = require('axios');
const hsinTungAxios = axios.create({
   baseURL: 'https://hty-app-uat.wisho2o.com/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '743dd291528258617364ce4022fe3e7d',
      'device-uuid': '213'
   },
});

module.exports = hsinTungAxios;
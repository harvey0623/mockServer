const axios = require('axios');
const caltrateAxios = axios.create({
   baseURL: 'https://cal-app-uat.wisho2o.com/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '05df9754ee84811f23f109a4f245a8c7',
      'device-uuid': '123'
   },
});

module.exports = caltrateAxios;
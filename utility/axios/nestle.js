const axios = require('axios');
const nestleAxios = axios.create({
   baseURL: '',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '743dd291528258617364ce4022fe3e7d',
      'device-uuid': '213'
   },
});

module.exports = nestleAxios;
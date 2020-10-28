const axios = require('axios');
const yuAxios = axios.create({
   baseURL: process.env.YUCUSTOM_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': 'fad8d355365d9b3e32df7efe8dc9e25b',
      'device-uuid': '1323'
   },
});

module.exports = yuAxios;
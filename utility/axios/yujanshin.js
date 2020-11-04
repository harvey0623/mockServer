const axios = require('axios');
const yuAxios = axios.create({
   baseURL: process.env.YUJANSHIN_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': 'd9399f9ab81cdba45ac11df6184026c5',
      'device-uuid': '123'
   }
});

module.exports = yuAxios;
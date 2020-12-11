const axios = require('axios');
const yuAxios = axios.create({
   baseURL: process.env.YUJANSHIN_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': process.env.YUJANSHIN_APP_ID,
      'device-uuid': process.env.YUJANSHIN_DEVICE_UUID
   }
});

module.exports = yuAxios;
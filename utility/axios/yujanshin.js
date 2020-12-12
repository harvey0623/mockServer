const axios = require('axios');
const yuAxios = axios.create({
   baseURL: process.env.CUSTOM_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': process.env.CUSTOM_APP_ID,
      'device-uuid': process.env.CUSTOM_DEVICE_UUID
   }
});

module.exports = yuAxios;
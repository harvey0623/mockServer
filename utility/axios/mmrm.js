const axios = require('axios');
const isDev = process.env.NODE_ENV === 'dev';
const baseURL = isDev ? process.env.MMRM_BASE_URL : process.env.CUSTOM_BASE_URL;
const appId = isDev ? process.env.MMRM_APP_ID : process.env.CUSTOM_APP_ID;
const deviceId = isDev ? process.env.MMRM_DEVICE_UUID : process.env.CUSTOM_DEVICE_UUID;
const mmrmAxios = axios.create({
   baseURL,
   headers: {
      'Content-Type': 'application/json',
      'language': 'zh_TW',
      'app-id': appId,
      'device-uuid': deviceId
   },
});

module.exports = mmrmAxios;
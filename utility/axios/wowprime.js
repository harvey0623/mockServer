const axios = require('axios');
const tradeAxios = axios.create({
   baseURL: 'https://wowprime-app-uat.wowapp.com.tw/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '30da9eb4b4cfe279cceb4bf7849a011c',
      'device-uuid': 'WOWPRIME_LINE'
   },
});

module.exports = {
   tradeAxios
};
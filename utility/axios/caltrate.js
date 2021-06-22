const axios = require('axios');
const updatePhoneAxios = axios.create({
   baseURL: 'https://cal-app-uat.wisho2o.com/external/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '05df9754ee84811f23f109a4f245a8c7',
      'device-uuid': '123'
   },
});

const orderAxios = axios.create({
   baseURL: 'https://cal-app-uat.wisho2o.com/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '05df9754ee84811f23f109a4f245a8c7',
      'device-uuid': '123'
   },
});

const couponAxios = axios.create({
   baseURL: 'https://cal-pos-uat.wisho2o.com/api',
   headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'zh-TW',
      'app-id': '05df9754ee84811f23f109a4f245a8c7',
      'device-uuid': '123'
   },
});


module.exports = {
   updatePhoneAxios,
   orderAxios,
   couponAxios
};
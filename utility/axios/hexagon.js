const axios = require('axios');
const hexagonAxios = axios.create({
   baseURL: 'http://crm-tt.wishmobile.com:3019/api',
   headers: {
      'Content-Type': 'application/json',
   },
});

module.exports = hexagonAxios;
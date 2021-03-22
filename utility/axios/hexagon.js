const axios = require('axios');
const hexagonAxios = axios.create({
   baseURL: process.env.HEXAGON_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
});

module.exports = hexagonAxios;
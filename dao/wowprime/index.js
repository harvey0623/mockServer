const { tradeAxios } = require("../../utility/axios/wowprime.js");
const { wm_sign, wm_aes, wm_decode } = require('../../utility/crypto/wowprime.js');

const wowprimeDao = {
   tradeList(payload) {
      let signText = wm_sign({
         request_parameter: {
            member_access_token: '202bda34-12e7-4ae8-bc6f-c39d1519bd19',
            url: payload.url,
            payload: wm_aes(JSON.stringify(payload.payload))
         },
         timestamp : "2021/07/01 14:35:02"
      });
      return tradeAxios({
         url: '/function/encrypt_relay',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         let response = res.data;
         let decodeData = wm_decode(response.results.data.payload);
         response.results.data.payload = JSON.parse(decodeData);
         return response;
      }).catch(err => {
         console.log(err);
      });
   }
}

module.exports = wowprimeDao;
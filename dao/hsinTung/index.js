const hsinTungAxios = require("../../utility/axios/hsinTung.js");
const cryptoObj = require("../../utility/crypto/hsinTung.js");
const HTY_API_KEY = '7e014f3a7350';

const hsinTungDao = {
   async getTerm(payload) {
      return hsinTungAxios({
         url: "/term/brief_term",
         method: "post",
         data: {
            sign: cryptoObj.wm_sign({
               ...payload,
               timestamp: "2020/01/01 10:00:05",
            }),
         },
      }).then(res => res.data);
   },
   async login(payload) {
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            "Q1": payload.Q1,
            "Q2": payload.Q2
         }
      }
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/vfy',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: "/function/encrypt_relay",
         method: "post",
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async checkMobile(payload) {
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            "Q1": payload.Q1,
         }
      };
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/checkMobile',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: '/function/encrypt_relay',
         method: 'post',
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async checkEmail(payload) {
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            "Q1": payload.Q1,
         }
      };
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/checkEmail',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: '/function/encrypt_relay',
         method: 'post',
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async verifyMobile(payload) {
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            "Q1": payload.Q1,
         }
      };
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/verifyMobile',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: '/function/encrypt_relay',
         method: 'post',
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async searchStore(payload) {
      return hsinTungAxios({
         url: "/store/search_store",
         method: "post",
         data: {
            sign: cryptoObj.wm_sign({
               request_parameter: { ...payload },
               timestamp: "2020/01/01 10:00:05",
            }),
         },
      }).then(res => res.data);
   },
   async storeInformation(payload) {
      return hsinTungAxios({
         url: "/store/store_information",
         method: "post",
         data: {
            sign: cryptoObj.wm_sign({
               request_parameter: { ...payload },
               timestamp: "2020/01/01 10:00:05",
            }),
         },
      }).then(res => res.data);
   },
   async add(payload) { //註冊
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            ...payload
         }
      }
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/add',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: "/function/encrypt_relay",
         method: "post",
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async forget(payload) { //忘記密碼
      let params = {
         "http_method": "POST",
         "merchant": "HTY",
         "header": null,
         "request_body_type": "x-www-form-urlencoded",
         "body": {
            "K": HTY_API_KEY,
            "F": "JSON",
            "Q1": payload.Q1
         }
      }
      let sign = cryptoObj.wm_sign({
         request_parameter: {
            url: '/app/forget',
            payload: cryptoObj.wm_aes(JSON.stringify(params)),
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: "/function/encrypt_relay",
         method: "post",
         data: { sign },
      }).then(res => {
         return {
            ...res.data,
            results: {
               data: {
                  payload: cryptoObj.wm_des(res.data.results.data.payload)
               }
            }
         }
      });
   },
   async externalLogin(payload) { //第三方登入
      let params = {
         "K": HTY_API_KEY,
         "Q1": payload.Q1,
      };
      let sign = cryptoObj.wm_sign({
         "request_parameter": {
            "source": "project_member",
            "verify_data": {
               "payload": cryptoObj.wm_aes(JSON.stringify(params)),
            }
         },
         timestamp: "2020/01/01 10:00:05",
      });
      return hsinTungAxios({
         url: "/member/login_with_external_member",
         method: "post",
         data: { sign },
      }).then(res => res.data);
   },
};

module.exports = hsinTungDao;

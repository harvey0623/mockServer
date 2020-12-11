const CryptoJS = require("crypto-js");
const sign_key = process.env.NODE_ENV === 'dev'? process.env.MMRM_SIGN_KEY : process.env.YUJANSHIN_SIGN_KEY

const wmSign = function(body) {
   var payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)));
   var signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, sign_key));
   var sign = payload + "." + signature;
   return sign;
}

module.exports = wmSign;
const CryptoJS = require("crypto-js");
const sign_key = 'e456f38f675eac049d283cc2147ecd70';

const wmSign = function(body) {
   var payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)));
   var signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, sign_key));
   var sign = payload + "." + signature;
   return sign;
}

module.exports = wmSign;
const CryptoJS = require("crypto-js");
const aes_key = 'eebfda858b61cd8dfb7590084b1b6e20';
const sign_key = '4b9a30cf7b841e260f89cc6b403ac615'

let cryptoObj = {
   wm_sign(body) {
      var payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)));
      var signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, sign_key));
      var sign = payload + "." + signature;
      return sign;
   },
   wm_aes(input) {
      var keyHash = CryptoJS.SHA384(aes_key);
      var key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0,64));
      var iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64,96));
      var encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv });
      return encrypted.toString();
   }
};

module.exports = cryptoObj;
const CryptoJS = require("crypto-js");
const HEXAGON_KEY = process.env.HEXAGON_KEY;
const HEXAGON_IV = process.env.HEXAGON_IV;

let cryptoObj = {
   // wm_sign(body) {
   //    var payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)));
   //    var signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, pm.environment.get("sign_key")));
   //    var sign = payload + "." + signature;
   //    return sign;
   // },
   // wm_aes(input) {
   //    var keyHash = CryptoJS.SHA384(pm.environment.get("aes_key"));
   //    var key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0, 64));
   //    var iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64, 96));
   //    var encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv });
   //    return encrypted.toString();
   // },
   encrypt(strWord) {
      let keyUtf8 = CryptoJS.enc.Utf8.parse(HEXAGON_KEY);
      let ivUtf8 = CryptoJS.enc.Utf8.parse(HEXAGON_IV);
      let encrypted = CryptoJS.AES.encrypt(strWord, keyUtf8, {
         iv: ivUtf8,
         mode: CryptoJS.mode.CBC,
         padding: CryptoJS.pad.Pkcs7,
      });
      return encrypted.toString();
   },
};

module.exports = cryptoObj;

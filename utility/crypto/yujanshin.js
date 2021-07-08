const CryptoJS = require("crypto-js");
const sign_key = '6916fb7ad79dad7650a0135a34333d4a';
const aes_key = 'e502ac1b5d82a009b1bbe2f33915554c';

const wm_sign = function(body) {
   var payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)));
   var signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, sign_key));
   var sign = payload + "." + signature;
   return sign;
}

const wm_aes = function(input) {
   var keyHash = CryptoJS.SHA384(aes_key);
   var key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0, 64));
   var iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64, 96));
   var encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv });
   return encrypted.toString();
}

const decode = function (input) {
   let keyHash = CryptoJS.SHA384(aes_key);
   let key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0, 64));
   let iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64, 96));
   var encrypted = CryptoJS.AES.decrypt(input, key, { iv: iv });
   return encrypted.toString(CryptoJS.enc.Utf8);
}

module.exports = {
   wm_sign,
   wm_aes,
   decode
}
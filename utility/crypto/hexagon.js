const CryptoJS = require("crypto-js");
const HEXAGON_KEY = 'wishmobilelakafa';
const HEXAGON_IV = 'wishmobilelakafa';

let cryptoObj = {
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

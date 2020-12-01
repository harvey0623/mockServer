const axios = require('axios');
const qs = require('qs');

const social = {
   async getLineToken(code) {
      return await axios({
         url: 'https://api.line.me/oauth2/v2.1/token',
         method: 'post',
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
         data: qs.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: process.env.LINE_REDIRECT_URI,
            client_id: process.env.LINE_CLIENT_ID,
            client_secret: process.env.LINE_CLIENT_SECRET
         })
      }).then(res => {
         return { status: true, id_token: res.data.id_token };
      }).catch(err => {
         return { status: false, id_token: '' };
      });
   },
   async getLineProfile(id_token) {
      return await axios({
         url: 'https://api.line.me/oauth2/v2.1/verify',
         method: 'post',
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
         data: qs.stringify({ 
            id_token, 
            client_id: process.env.LINE_CLIENT_ID 
         })
      }).then(res => {
         return { status: true, profile: res.data };
      }).catch(err => {
         return { status: false, profile: null };
      });
   },
   async getFbToken(code) {
      return await axios({
         url: 'https://graph.facebook.com/v9.0/oauth/access_token',
         method: 'get',
         params: {
            client_id: process.env.FB_CLIENT_ID,
            redirect_uri: process.env.FB_REDIRECT_URI,
            client_secret: process.env.FB_CLIENT_SECRET,
            code
         },
      }).then(res => {
         return { status: true, access_token: res.data.access_token };
      }).catch(err => {
         return { status: false, access_token: '' };
      });
   },
   async getFbProfile(access_token) {
      return await axios({
         url: 'https://graph.facebook.com/me',
         method: 'get',
         params: { 
            access_token,
            fields: 'id,name,email,picture.width(640).height(640)'
         }
      }).then(res => {
         return { status: true, profile: res.data }
      }).catch(err => {
         return { status: false, profile: null }
      });
   }
}

module.exports = social;
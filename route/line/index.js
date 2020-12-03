const express = require('express');
const router = express.Router();
const social = require('../../dao/social/index');

let userInfo = {
   name: '',
   picture: '',
   email: ''
};

router.get('/login', (req, res) => {
   let line_client_id = process.env.LINE_CLIENT_ID;
   let line_redirect_uri = process.env.LINE_REDIRECT_URI;
   let url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${line_client_id}&redirect_uri=${line_redirect_uri}&state=12345abcde&scope=profile%20openid%20email&nonce=09876xyz`
   res.redirect(url);
});

router.get('/token', async (req, res) => {
   let code = req.query.code;
   let tokenResult = await social.getLineToken(code).then(res => res);
   if (!tokenResult.status) return;
   let { status, profile } = await social.getLineProfile(tokenResult.id_token).then(res => res);
   if (status) {
      userInfo.name = profile.name;
      userInfo.picture = profile.picture;
      userInfo.email = profile.email;
      res.redirect('/line/login_result');
   } else {
      res.redirect('/socialLogin');
   }
});

router.get('/login_result', (req, res) => {
   res.render('login_result', {
      locals: { ...userInfo }
   });
});

module.exports = router;
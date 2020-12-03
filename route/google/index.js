const express = require('express');
const router = express.Router();
const social = require('../../dao/social/index');

let userInfo = {
   name: '',
   picture: '',
   email: ''
};

router.get('/login', (req, res) => {
   let client_id = process.env.GOOGLE_CLIENT_ID;
   let redirect_uri = process.env.GOOGLE_REDIRECT_URI;
   let url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=openid%20profile%20email`;
   res.redirect(url);
});

router.get('/token', async (req, res) => {
   let code = req.query.code;
   let err = req.query.error;
   if (err) return res.redirect('/socialLogin');
   let tokenResult = await social.getGoogleToken(code).then(res => res);
   if (!tokenResult) return;
   let { status, profile } = await social.getGoogleProfile(tokenResult.access_token).then(res => res);
   if (status) {
      userInfo.name = profile.name;
      userInfo.picture = profile.picture;
      userInfo.email = profile.email;
      res.redirect('/google/login_result');
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
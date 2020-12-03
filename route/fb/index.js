const express = require('express');
const router = express.Router();
const social = require('../../dao/social/index');

let userInfo = {
   name: '',
   picture: '',
   email: ''
};

router.get('/login', (req, res) => {
   let client_id = process.env.FB_CLIENT_ID;
   let redirect_uri = process.env.FB_REDIRECT_URI;
   let url = `https://www.facebook.com/v9.0/dialog/oauth?client_id=${client_id}&redirect_uri=${redirect_uri}&state={"{st=state123abc,ds=123456789}"}`;
   res.redirect(url);
});

router.get('/token', async (req, res) => {
   let code = req.query.code;
   let error = req.query.error;
   if (error) return res.redirect('/socialLogin');
   let tokenResult = await social.getFbToken(code).then(res => res);
   if (!tokenResult.status) return;
   let { status, profile } = await social.getFbProfile(tokenResult.access_token).then(res => res);
   if (status) {
      userInfo.name = profile.name;
      userInfo.picture = profile.picture.data.url;
      userInfo.email = profile.email;
      res.redirect('/fb/login_result');
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
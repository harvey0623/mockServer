const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3034;
const dotenv = require('dotenv').config({
   path: '.env.dev'
});
const sideproject = require('./route/sideProject/index.js');
const mmrm = require('./route/mmrm/dev.js');
const mmrmProd = require('./route/mmrm/prod.js');
const yujanshin = require('./route/mmrm/yujanshin.js');
const line = require('./route/line/index.js');
const fb = require('./route/fb/index.js');
const google = require('./route/google/index.js');
const hexagon = require('./route/hexagon/index.js');
const hsinTung = require('./route/hsinTung/index.js');
const nestle = require('./route/nestle/index.js');
const caltrate = require('./route/caltrate/index.js');
const wowprime = require('./route/wowprime/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cookieParser());
app.use(cors());
app.listen(port);
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/side-project', sideproject);
app.use('/mmrm', mmrm);
app.use('/mmrmProd', mmrmProd);
app.use('/yujanshin', yujanshin);
app.use('/hexagon', hexagon);
app.use('/hsinTung', hsinTung);
app.use('/nestle', nestle);
app.use('/caltrate', caltrate);
app.use('/wowprime', wowprime);
app.use('/line', line);
app.use('/fb', fb);
app.use('/google', google);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/socialLogin', (req, res) => {
   res.render('socialLogin', {
      locals: { 
         lineLoingUrl: '/line/login',
         fbLoginUrl: '/fb/login',
         googleLoginUrl: '/google/login'
      }
   });
});

app.use((req, res) => {
   res.write('<h1>Hello mock server ~</h1>');
   res.end();
});

//===heroku url
// https://boiling-fortress-97054.herokuapp.com

//===mmrm
// 0999803025 / 1qaz2wsx (主要)
// 0932359305 / a123456

//===裕珍馨
// 146fc014-1d82-4f77-b040-d60c24eafcaa (自己辦的 0986104667/12345)
// 7184027a-ff84-4e06-b201-745d867196e3 (威許提供 0932220208/m12345)
// 2891205a-6f81-4929-9b0b-f0764f1002c8 (威許提供 0900000001/h000001)

//===燕進鑫
// 0911144268 / a0911144268
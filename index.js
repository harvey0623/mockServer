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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
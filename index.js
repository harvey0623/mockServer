const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3034;
const dotenv = require('dotenv').config({
   path: '.env.dev'
});
const sideproject = require('./route/sideProject/index.js');
const mmrm = require('./route/mmrm/dev.js');
const mmrmProd = require('./route/mmrm/prod.js');
const yujanshin = require('./route/mmrm/yujanshin.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.listen(port);

app.use('/side-project', sideproject);
app.use('/mmrm', mmrm);
app.use('/mmrmProd', mmrmProd);
app.use('/yujanshin', yujanshin);

app.use((req, res) => {
   res.write('<h1>Hello world test ~</h1>');
   res.end();
});
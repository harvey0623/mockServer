const express = require('express');
const router = express.Router();
const projectDao = require('../../dao/sideProject/index.js');

router.post('/autocomplete', async (req, res) => {
   let result = await projectDao.autoComplete(req.body).then(res => res); 
   res.json({ result });
});

router.get('/marquee', async (req, res) => {
   res.json({
      result: [
         '台積電不排除投資高雄 魏哲家：全台都是基地',
         '美次卿訪台 美議員提決議案：恢復與台灣正式邦交美次卿訪台',
         '史達偉：支持台灣 確保有能力抵抗中共脅迫'
      ]
   })
});


module.exports = router;
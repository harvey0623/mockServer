const express = require('express');
const router = express.Router();
const wowprimeDao = require('../../dao/wowprime/index.js');

router.post('/function/encrypt_relay', async (req, res) => {
   // let result = await wowprimeDao.tradeList(req.body);
   // res.json(result);
   res.json({
      "rcrm": {
         "RC": "C01",
         "RM": "",
         "RM_detail": "",
         "RM_debug": ""
      },
      "results": {
         "data": {
            "payload": {
               "isdone": "T",
               "message": "A01",
               "data": {
                  "sale": [
                     {
                        "t_sale": "185350",
                        "sale_id": "00D5592C-9974-4F5A-B8E0-A8D30D1933F6",
                        "sale_id_p": "",
                        "stor_name": "三峽大學店",
                        "stor_id": "112062",
                        "d_sale": "20210102",
                        "sale_invamt": "841",
                        "brnd_name": "石二鍋",
                        "brnd_id": "112"
                     }
                  ],
                  "lastdata": "10",
                  "lastpage": "2"
               }
            }
         }
      },
      "next": null
   })
});

module.exports = router;
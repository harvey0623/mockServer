const express = require('express');
const router = express.Router();
const wowprimeDao = require('../../dao/wowprime/index.js');

router.post('/function/encrypt_relay', async (req, res) => { //交易列表
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
                        "brnd_id": "WM01"
                     },
                     {
                        "t_sale": "182335",
                        "sale_id": "d328f9d0-d20e-4b08-a383-44948204a7f2",
                        "sale_id_p": "return",
                        "stor_name": "桃園同德",
                        "stor_id": "103004",
                        "d_sale": "20190922",
                        "sale_invamt": "1210",
                        "brnd_name": "王品",
                        "brnd_id": "E05"
                     },
                  ],
                  "lastdata": "10",
                  "lastpage": "5"
               }
            }
         }
      },
      "next": null
   })
});

router.post('/function/encrypt_relay2', async (req, res) => { //交易詳情
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
                  "saleh": { //交易主檔案資訊
                     "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                     "t_sale": "",
                     "sale_id_p": "",
                     "stor_id": "108028",
                     "stor_name": "大里德芳南",
                     "d_sale": "20191103",
                     "sale_invamt": "7850",
                     "brnd_id": "WM01",
                     "brnd_name": "陶板屋"
                  },
                  "listi": [ //交易發票資訊
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "sale_taxid": "",
                        "recno": "33F874FB-C5BB-4827-AE3C-B907A33D1AEA",
                        "sale_invamt": "3350",
                        "sale_invno": "WV95800028"
                     },
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "sale_taxid": "",
                        "recno": "8F503392-88A5-4F4A-9AFA-31EE5910F1A3",
                        "sale_invamt": "4500",
                        "sale_invno": "WV95800027"
                     }
                  ],
                  "listp": [ //交易付款資訊
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "payd_type_name": "信用卡",
                        "cardbin": "",
                        "recno": "22f0379a-6b00-4382-9491-f353f6ef955c",
                        "payd_type": "C10",
                        "sale_payamt": "3350"
                     },
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "payd_type_name": "信用卡",
                        "cardbin": "",
                        "recno": "bd3dcb21-3ce8-4fb8-91df-c150eb91bf71",
                        "payd_type": "C10",
                        "sale_payamt": "4500"
                     }
                  ],
                  "listd": [ //交易商品資訊
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "part_qty": 2,
                        "recno": "1",
                        "part_id": "501053",
                        "part_unit": "份",
                        "part_name": "(大)香蒜瓦片牛肉"
                     },
                     {
                        "sale_id": "7d07ef76-e164-42a3-baf5-68356843fc11",
                        "part_qty": 2,
                        "recno": "2",
                        "part_id": "501248",
                        "part_unit": "份",
                        "part_name": "單-特選10盎司沙朗牛排"
                     }
                  ]
               }
            }
         }
      },
      "next": null
   })
});

module.exports = router;
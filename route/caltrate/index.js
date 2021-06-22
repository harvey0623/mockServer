const express = require('express');
const router = express.Router();
const caltrateDao = require('../../dao/caltrate/index.js');

router.post('/update_member_mobile', async (req, res) => {
   let result = await caltrateDao.updateMobile(req.body);
   res.json(result);
});

router.post('/home_delivery/my_order_list', async (req, res) => {
   // let result = await caltrateDao.orderList(req.body);
   // res,json(result);
   res.json({
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "home_delivery_order_list": [
            {
               "order": {
                  "order_no": "20190930000001",
                  "created_time": "2020/01/01 12:30:30",
                  "order_status": "completed"
               },
               "source": {
                  "type": "coupon",
                  "context": {
                     "my_coupon_id": 203023,
                     "coupon_id": 1
                  }
               }
            },
         ]
      }
   });
});

router.post('/home_delivery/my_order_detail', async (req, res) => {
   // let result = await caltrateDao.orderDetail(req.body);
   // res,json(result);
   res.json({
      "rcrm": {
         "RC": "C01",
         "RM": "成功",
         "RM_detail": ""
      },
      "results": {
         "home_delivery_order_detail": {
            "order": {
               "order_no": "20190930000001",
               "created_time": "2020/01/01 12:30:30",
               "order_status": "completed"
            },
            "source": {
               "type": "coupon",
               "context": {
                  "my_coupon_id": 203023,
                  "coupon_id": 1,
                  "coupon_type": "product_free_of_charge",
                  "product_free_of_charge_info": {
                     "product_item": [
                        {
                           "title": "美式咖啡",
                           "code": "PRM000001X"
                        },
                        {
                           "title": "觀音拿鐵奶茶",
                           "code": "PRM000001Q"
                        }
                     ]

                  }
               }
            },
            "mobile": "0987654321",
            "name": "myname",
            "city": "台北市",
            "district": "中山區",
            "address": "民權東路一段43號5樓",
            "pos_code": "104",
            "external_code": "891203",
            "remark": "這是備註文字"
         }
      }
   });
});

router.post('/home_delivery/create_order', async (req, res) => {
   // let result = await caltrateDao.createOrder(req.body);
   // res,json(result);
   res.json({});
});

router.post('/couponSearch', async (req, res) => { // 查詢行銷票券
   let results = await caltrateDao.couponSearch(req.body);
   res.json(results);
});

router.post('/coupon/redeem', async (req, res) => {
   let results = await caltrateDao.redeem(req.body);
   res.json(results);
});

router.post('/coupon/transaction_check', async (req, res) => {
   let results = await caltrateDao.check(req.body);
   res.json(results);
});

module.exports = router;
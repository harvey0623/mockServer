const yuAxios = require('../../../utility/axios/yujanshin.js');
const { wm_sign, wm_aes, decode } = require('../../../utility/crypto/yujanshin.js');

const pointDao = {
   async memberPoint() {
      return {
         "rcrm": {
            "RC": "C01",
            "RM": "成功",
            "RM_detail": ""
         },
         "results": {
            "api_name": "<predefined_api_name>",
            "payload": "",
            send_payload: {
               "member_point": [
                  {
                     "ProgramNo": "abc",
                     "ProgramNa": "a點",
                     "Point": 12,
                     "StDate": "",
                     "EdDate": "2020/12/31",
                     "LastUpdDate": "2018/01/31",
                     "UseShop": ""
                  },
                  {
                     "ProgramNo": "VIPPT",
                     "ProgramNa": "紅利積點",
                     "Point": 1000,
                     "StDate": "",
                     "EdDate": "2020/10/31",
                     "LastUpdDate": "2018/01/31",
                     "UseShop": ""
                  },
               ]
            }
         }
      }
   },
   async pointDetail() {
      return {
         "rcrm": {
            "RC": "C01",
            "RM": "成功",
            "RM_detail": ""
         },
         "results": {
            "api_name": "<predefined_api_name>",
            "payload": "",
            send_payload: {
               "member_point_detail": [
                  {
                     "ProgramNo": "VIPPT",
                     "ProgramNa": "紅利積點",
                     "PointType": "(集點)瑞太門市",
                     "Point": 1000,
                     "StDate": "2020/05/01",
                     "EdDate": "2021/05/31"
                  },
                  {
                     "ProgramNo": "VIPPT",
                     "ProgramNa": "紅利積點",
                     "PointType": "(集點)瑞太門市",
                     "Point": -200,
                     "StDate": "2020/05/30",
                     "EdDate": "2021/05/31"
                  },
                  {
                     "ProgramNo": "VIPPT",
                     "ProgramNa": "紅利積點",
                     "PointType": "aa門市",
                     "Point": 1000,
                     "StDate": "2020/10/01",
                     "EdDate": "2021/05/31"
                  },
                  {
                     "ProgramNo": "VIPPT",
                     "ProgramNa": "紅利積點",
                     "PointType": "bb門市",
                     "Point": -200,
                     "StDate": "2020/10/30",
                     "EdDate": "2021/05/31"
                  },
               ]
            }
         }
      }
   },
   remoteMemberPoint({ payload }) {
      let sign = wm_sign({
         'member_access_token': process.env.CUSTOM_ACCESS_TOKEN,
         'api_name': '/member/query_member_point',
         'request_parameter': {
           'payload': payload
         },
         'timestamp': '2019/01/01 10:00:05'
      });
      return yuAxios({
         url: '/relay/send_payload',
         method: 'post',
         data: { sign }
      }).then(res => {
         let pointResult = res.data;
         let decodeResult = decode(pointResult.results.payload);
         pointResult.results.send_payload = JSON.parse(decodeResult);
         // console.log(pointResult)
         return pointResult;
      }).catch(err => {
         console.log(err);
         return [];
      })
   },
   remoteMemberPointDetail({ payload }) {
      let sign = wm_sign({
         'member_access_token': process.env.CUSTOM_ACCESS_TOKEN,
         'api_name': '/member/query_member_point_detail',
         'request_parameter': {
           'payload': payload
         },
         'timestamp': '2019/01/01 10:00:05'
      });
      return yuAxios({
         url: '/relay/send_payload',
         method: 'post',
         data: { sign }
      }).then(res => {
         let pointResult = res.data;
         let decodeResult = decode(pointResult.results.payload);
         pointResult.results.send_payload = JSON.parse(decodeResult);
         // console.log(pointResult)
         return pointResult;
      }).catch(err => {
         console.log(err);
         return [];
      })
   },
   remoteMemberInfo({ payload }) { //升等條件、升等進度
      let sign = wm_sign({
         'member_access_token': process.env.CUSTOM_ACCESS_TOKEN,
         'api_name': '/member/query_member_info',
         'request_parameter': {
           'payload': payload
         },
         'timestamp': '2019/01/01 10:00:05'
      });
      return yuAxios({
         url: '/relay/send_payload',
         method: 'post',
         data: { sign }
      }).then(res => {
         let memberResult = res.data;
         let decodeResult = decode(memberResult.results.payload);
         memberResult.results.send_payload = JSON.parse(decodeResult);
         // console.log(memberResult)
         return memberResult;
      }).catch(err => {
         console.log(err);
         return null;
      })
   },
   remoteMemberThirty() { //第三方會員系統
      let sign = wm_sign({
         'member_access_token': process.env.CUSTOM_ACCESS_TOKEN,
         'api_name': '/member/check_third_party_crm_data',
         'request_parameter': {
           'payload': '7zNApflhXKbY1AGckmjoMro3PYrM9mmMKjmRvh37sqI='
         },
         'timestamp': '2019/01/01 10:00:05'
      });
      return yuAxios({
         url: '/relay/send_payload',
         method: 'post',
         data: { sign }
      }).then(res => {
         let memberResult = res.data;
         let decodeResult = decode(memberResult.results.payload);
         memberResult.results.send_payload = JSON.parse(decodeResult);
         return memberResult;
      }).catch(err => {
         console.log(err);
         return [];
      })
   }
}

module.exports = pointDao;
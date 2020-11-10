const mmrmAxios = require('../../../utility/axios/mmrm.js');
const wmSign = require('../../../utility/crypto/index.js');
const cmsDao = {
   async searchListItem(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/cms/search_cms_list_item',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async cmsBook(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/cms/cms_book',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async cmsBookPage(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/cms/cms_book_page',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async listCategory(payload) {
      let signText = wmSign({
         request_parameter: { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/cms/cms_list_category_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}

module.exports = cmsDao;
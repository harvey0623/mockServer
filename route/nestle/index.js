const express = require('express');
const router = express.Router();
const nestleDao = require('../../dao/nestle/index.js');

router.get('/test', async (req, res) => {
   res.json({ text: 'hello' })
});

module.exports = router;
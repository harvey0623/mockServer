const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
   res.json({ status: true });
});

module.exports = router;
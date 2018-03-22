const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hey: 'It works!' });
});

module.exports = router;

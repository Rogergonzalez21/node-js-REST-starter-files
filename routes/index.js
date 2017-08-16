const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.json({ Hey: 'It works!' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET test  */
router.get('/', function(req, res, next) {
  res.send('API is working properly');
});

module.exports = router;
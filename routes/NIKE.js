var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('NIKE', { title: 'Search Results of NIKE' });
});

module.exports = router;
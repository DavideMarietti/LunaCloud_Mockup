let express = require('express');
let router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

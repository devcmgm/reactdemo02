var express = require('express');
var path = require('path');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(__dirname + "/../public/zach.html");
  res.sendFile(path.resolve(__dirname + "/../public/zach.html"));
});

module.exports = router;

var express = require('express');
var router = express.Router();
var monk=require('monk');


var db=monk('localhost:27017/aditya');
console.log('connected');
var collection=db.get('signup');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});






module.exports = router;

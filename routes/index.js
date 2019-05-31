var express = require('express');
var router = express.Router();
var monk=require('monk');


var db=monk('localhost:27017/project1');
console.log('connected');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',function(req,res)
{
res.render('home');
});



module.exports = router;

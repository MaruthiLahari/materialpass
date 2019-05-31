var express = require('express');
var router = express.Router();/*router connection establishment*/
var monk=require('monk');

//home page redirecting//
var db=monk('localhost:27017/aditya');
console.log('connected');
var collection=db.get('signup');
var collection1=db.get('register');



/* GET home page. */
router.get('/', function(req, res, next) 
{ /* /represents display home page */
  res.render('index', { title: 'Express' });/*render means display */
});
router.get('/home',function(req,res)
{

collection1.find({},function(err,docs){
console.log(docs);
res.locals.data=docs;
res.render('home');
});
});
/*posting a data from sign up*/
router.post('/signup',function(req,res)
{
//1st model
//var fname=req.body.a;
//var password=req.body.b;
//console.log(password);
//var email=req.body.c;
//console.log(email);
//var num=req.body.d;
//console.log(num);
//var female=req.body.gender;
//console.log(female);
//console.log(req.body);
//
//2nd model
var data=
{
/* name represents the varaible*/
name:req.body.a,/*a represents name in html for paarticular field*/
password:req.body.b,
email:req.body.c,
number:req.body.d,
gender:req.body.female,
}
collection.insert(data,function(err,data)
{
if(err)
{
console.log("error");
}
else
{
console.log(data);

}

res.redirect("/");
});

});
router.post('/login',function(req,res)
{
var name=req.body.n;
console.log(name);
var password=req.body.p;
console.log(password);

collection.findOne({"name":req.body.n,"password":req.body.p},function(err,docs)
/* here req.body.p is stored in variable name so we can directly write name*/
{
if(!docs)
{
console.log("invalid username");
res.render('index',{err:"Invalid uername or password"});
}
else if(docs)
{
console.log("success");
//home page redirecting//
res.redirect('/home');
}
else
{
console.log(err);
}
});
});







router.post('/register',function(req,res)
{
var data1=
{
/* name represents the varaible*/
name:req.body.uname,/*a represents name in html for paarticular field*/
roolnumber:req.body.rno,
email:req.body.emailid,
number:req.body.telephone,
}
collection1.insert(data1,function(err,docs){
console.log(docs);
res.redirect('/home');
});

/* here req.body.p is stored in variable name so we can directly write name*/

});

module.exports = router;

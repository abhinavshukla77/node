var express = require('express');
var router = express.Router();
const userdata = require('./users.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/read', function(req, res) {
  userdata.find()
  .then(function(val){
    res.render('read' ,{value : val})
  })
});

router.get('/update/:aaidee', function(req, res) {
  userdata.findOne({
    _id : req.params.aaidee,
  })
  .then(function(val){
    res.render('update' ,{val:val});
  }).catch(function(err){
    console.log(err);
  })
});

router.get('/delete/:aaidee',function(req, res){
  userdata.findOneAndDelete({
    _id : req.params.aaidee,
  })
  .then(function(val){
    res.redirect('/read')
  }).catch(function(err){
    console.log(err);
  })
})

router.post('/create', function(req, res) {
  userdata.create({
    vichar : req.body.thought
  })
  .then(function(val){
    res.redirect('/read')
    // res.send(req.body)
  })
  .catch(function(err){
    console.log(err)
  })
});

router.post('/updatekaro/:aaidee',function(req,res){
  userdata.findOneAndUpdate({
    _id : req.params.aaidee
  },{vichar : req.body.updatethought
  })
  .then(function(val){
    res.redirect('/read');
  }).catch(function(err){
    console.log(err);
  })
})

module.exports = router;

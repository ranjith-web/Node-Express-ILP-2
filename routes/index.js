var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');
var db = require('../public/inMemoryDB/postMemoryDb');
/* GET home page. */
var _data;

router.get('/', function(req, res, next) {
  res.render('issueTracker/index', db.list());  
});

router.post('/update', function(req, res, next) {
  db.update(req.body);
  res.redirect('/issueTracker');
});

router.get('/edit/:id', function(req, res){
  var post = db.getById(req.params.id);
  res.render('issueTracker/editIssue', post);
});

router.get('/create', function(req, res){
  res.render('issueTracker/createIssue');
});

router.post('/addIssues', function(req, res){
  db.add(req.body);
  res.redirect('/issueTracker');
});

router.get('/delete/:id', function(req, res){
  console.log("req.params.id===========>", req.params.id)
  db.remove(req.params.id);
  res.redirect('/issueTracker');
})
// router.get('/json/issueTracker.json', function (req, res) {
//   console.log(req.body.title);
//   console.log(req.body.description);
//   res.send('Post page');
// });
module.exports = router;

var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gibson Les Paul 2019' });
  
});

/* A dynamic placeholder */
router.get('/:user', function(req, res, next) {
  console.log('data:',data);
  console.log('user:',req.params.user);
  res.render('desc', data[req.params.user]);
});

module.exports = router;


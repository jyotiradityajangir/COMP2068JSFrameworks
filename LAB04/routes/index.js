var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Beatles - Home' });
});

/* GET John Lennon page */
router.get('/john', function(req, res, next) {
  res.render('john', { title: 'John Lennon' });
});

/* GET Paul McCartney page */
router.get('/paul', function(req, res, next) {
  res.render('paul', { title: 'Paul McCartney' });
});

/* GET George Harrison page */
router.get('/george', function(req, res, next) {
  res.render('george', { title: 'George Harrison' });
});

/* GET Ringo Starr page */
router.get('/ringo', function(req, res, next) {
  res.render('ringo', { title: 'Ringo Starr' });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const characters = require('../models/characters');


router.get('/', function(req, res){
  res.render('index');
})

router.get('/all', function(req, res) {
 res.render('all', { characters: characters.all });
});

router.get('/starWars', function(req, res) {
  res.render('starWars', { characters: characters.filter('sw') });
});

router.get('/starTrek', function(req, res) {
  res.render('starTrek', { characters: characters.filter('st') });
});

module.exports = router;

const express = require('express');
const mustacheEx = require('mustache-express');
const app = express();
const characters = require('./models/characters');

app.engine('mustache', mustacheEx());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  res.render('index');
})

app.get('/all', function(req, res) {
 res.render('all', {characters: characters.all});
});

app.get('/starWars', function(req, res) {
  res.render('starWars', { characters: characters.filter('sw') });
});



app.get('/starTrek', function(req, res) {
  res.render('starTrek', { characters:
  characters.filter('st')});
});

app.listen(3000, function() {
  console.log('Oh, hello there port 3000');
});

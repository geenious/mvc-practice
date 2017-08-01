const express = require('express');
const mustacheExpress = require('mustache-express');
const routes = require('./routes/routes');
const mongoClient = require('mongodb').MongoClient;

const app = express();

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', routes);

const url = 'mongodb://localhost:27017/scifi_people';

app.get('/all', function(req, res) {
  db.collection('characters')
  .find({})
  .toArray(function(err, results) {
    console.log(results);
  })
});

let db;

mongoClient.connect(url, function(err, database) {
  if (err) {
    console.error(err);
  }
  else {
    db = database;
    app.listen(3000, function() {
      console.log('Oh, hello there port 3000');
    });
  }
});

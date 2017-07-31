const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const routes = require('./routes/routes');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, function() {
  console.log('Oh, hello there port 3000');
});

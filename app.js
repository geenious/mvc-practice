const express = require('express');
const mustacheEx = require('mustache-express');
const app = express();
const characters = require('./models/characters');

app.engine('mustache', mustacheEx());

app.set('view engine', 'views');
app.set('views', __dirname + '/views');

app.use()

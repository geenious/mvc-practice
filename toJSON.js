const people = require('./models/characters.js');

people.all.forEach(function(person) {

  console.log(JSON.stringify(person));
});

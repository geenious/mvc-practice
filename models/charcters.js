const peeps = [
  {name: 'Jean Luc Picard', type: 'st'},
  {name: 'Luke Skywalker', type:'sw'},
  {name: 'Yoda', type: 'sw'},
  {name: 'Worf', type: 'st'},
  {name: 'Laforge', type: 'st'},
  {name: 'Chewie', type: 'sw'},
  {name: 'Hans Solo', type: 'sw'}
];

function getCharacters(name) {
  return peeps.find(function (characters) {
    return charcters.name == name;
  });
}

module.exports = {
  all: peeps,
  find: getCharacters
}

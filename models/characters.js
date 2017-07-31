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
    return characters.name == name;
  });
}

function filterCharacters(type) {
  return peeps.filter(function(types) {
    return types.type == type;
  });
};

//this is the jank way of doing the above function 'filter'
// function starWar() {
//   let peepArr = [];
//   for (let i=0; i < peeps.length; i++){
//     if(peeps[i].type === 'sw'){
//       peepArr.push(characters[i]);
//     }
//   }


function sum(a, b) {
  return a + b;
}

module.exports = {
  all: peeps,
  find: getCharacters,
  filter: filterCharacters,
  sum: sum
};

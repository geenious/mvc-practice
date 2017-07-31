const characters = require('./models/characters');




// test('adds 1 + 2 to equal 3', function() {
//   expect(characters.sum(1, 2)).toBe(3);
// });

test('can filter to just star wars people', function () {
  const result = characters.filter('sw');
  expect(result[0].name).toBe('Luke Skywalker');
  expect(result.length).toBe(4);
});

test('can filter to just star trek people', function () {
  const result = characters.filter('st');
  expect(result[0].name).toBe('Jean Luc Picard');
});

test('can get all characters', function () {
  const result = characters.all;
  expect(result.length).toBe(7);
});

test('can select specific character', function() {
  const result = characters.find('Laforge');
  expect(result.name).toBe('Laforge');
})

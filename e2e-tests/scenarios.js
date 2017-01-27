'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


// Element locators
var pokemons = element.all(by.repeater('pokedex').column('pokemon.id'));

it('should sort pokedex by id in !sortReverse order', function() {
  expect(pokemons.get(0).getText()).toBe('001');
  expect(pokemons.get(1).getText()).toBe('002');
  expect(pokemons.get(2).getText()).toBe('003');
  expect(pokemons.get(3).getText()).toBe('004');
  expect(pokemons.get(4).getText()).toBe('005');
});



});

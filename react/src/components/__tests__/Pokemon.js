import React from 'react'
import { create } from 'react-test-renderer';

const pokemons = require('../../data/pokemon.json')

import Pokemon from '../Pokemon';
describe('Pokemon', () => {
  pokemons.map(pokemon => (
    it(`should render ${pokemon.name} uncaught`, () => {
      expect(
        create(
          <Pokemon {...pokemon} />
        )
      ).toMatchSnapshot()
    })
  ))
  pokemons.map(pokemon => (
    it(`should render ${pokemon.name} caught`, () => {
      expect(
        create(
          <Pokemon {...pokemon} caught />
        )
      ).toMatchSnapshot()
    })
  ))
});

import React from 'react';
import { storiesOf, action, describe, it, specs,
beforeEach, before, after, afterEach, xdescribe,
fit, xit } from "../../.storybook/facade";
import expect from 'expect'
import { create } from 'react-test-renderer';

import Pokemon from '../components/Pokemon'
import pokemons from '../data/pokemon'

require('../App.css')

pokemons.map(pokemon => (
  storiesOf(pokemon.name, module)
    .add('caught', () => {
      const story = <Pokemon {...pokemon} caught onSelect={action('clicked')} />
      specs(() => describe(pokemon.name, () => (
        it(`should render ${pokemon.name} caught`, () => {
          expect(
            create(
              <Pokemon {...pokemon} />
            )
          ).toMatchSnapshot()
        })
      )))
      return story
    })

    .add('uncaught', () => {
      const story = <Pokemon {...pokemon} onSelect={action('clicked')}/>
      return story
    })
))

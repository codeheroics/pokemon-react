import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Pokemon from '../components/Pokemon'
import pokemons from '../data/pokemon'

require('../App.css')

pokemons.map(pokemon => (
  storiesOf(pokemon.name, module)
    .add('caught', () => <Pokemon {...pokemon} caught onSelect={action('clicked')} />)
    .add('uncaught', () => <Pokemon {...pokemon} onSelect={action('clicked')}/>)
))

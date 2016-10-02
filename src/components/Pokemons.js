import React from 'react'

import Pokemon from './Pokemon'

const Pokemons = ({ pokemons, onSelect }) => (
  <div className="Pokemons">
    {pokemons.map(({ caught, id, identifier, name }) => (
      <Pokemon
        caught={caught}
        id={id}
        key={identifier}
        onSelect={onSelect}
        name={name}
      />
    ))}
  </div>
)

export default Pokemons

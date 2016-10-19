import React from 'react';

const pikachuImage = 'https://codeheroics.github.io/pokemon-sprites/25.png';
const pichuImage = 'https://codeheroics.github.io/pokemon-sprites/172.png';

const pikachuData = { name: 'Pikachu', image: pikachuImage };
const pichuData = { name: 'Pichu', image: pichuImage};
const pokemons = [pikachuData, pichuData];

import Pokemon from './Pokemon';

class Pokemons extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {pokemons.map(pokemon => (
          <Pokemon
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    );
  }
}

export default Pokemons;

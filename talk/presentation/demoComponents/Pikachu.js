import React from 'react';
import Pokemon from './Pokemon';
const pikachuImage = 'https://codeheroics.github.io/pokemon-sprites/25.png';

class Pikachu extends React.Component {
  render() {
    return (
        <Pokemon name="Pikachu" image={pikachuImage} />
      );
  }
}

export default Pikachu;

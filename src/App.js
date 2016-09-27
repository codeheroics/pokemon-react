import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import pokemons from './data/pokemon'

import Search from './components/Search'

const LS_KEY = 'caughtPokemons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { caughtPokemons: JSON.parse(localStorage.getItem(LS_KEY) || '{}') }
  }

  toggleCaught = (id) => {
    const updatedCaughtPokemons = {
      ...this.state.caughtPokemons,
      [id]: !this.state.caughtPokemons[id]
    }
    this.setState({ caughtPokemons: updatedCaughtPokemons })
    localStorage.setItem(LS_KEY, JSON.stringify(updatedCaughtPokemons))
    console.log(updatedCaughtPokemons);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pokémon-React</h2>
          <h3>Gotta catch'em all!</h3>
        </div>
        <div className="App-main">
          <h3>Search for Pokémons and mark them as caught</h3>
          <Search
            pokemons={pokemons.map(pokemon => ({
              ...pokemon,
              caught: !!this.state.caughtPokemons[pokemon.id]
            }))}
            onSelect={this.toggleCaught}
          />
        </div>
      </div>
    );
  }
}

export default App;

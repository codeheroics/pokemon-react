import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search'

class App extends Component {
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
          <Search pokemons={[{ name: 'pikachu' }]} />
        </div>
      </div>
    );
  }
}

export default App;

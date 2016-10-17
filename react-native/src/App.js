import React, { Component } from 'react'
import { AsyncStorage, View, Image, Text, StyleSheet } from 'react-native'

import logo from './logo.png'

import pokemonsJSON from './data/pokemon'

import Search from './components/Search'

const LS_KEY = 'caughtPokemons'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 20
  },
  imageContainer: {
    alignItems: 'center'
  },
  image: {
    width: 96,
    height: 96,
  },
  h1: {
    color: '#FFF',
    fontSize: 20
  },
  h2: {
    color: '#FFF',
    fontSize: 18
  },
  h3: {
    fontSize: 16
  },
  main: {
    alignItems: 'center',
    padding: 20,
    flex: 1
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { caughtPokemons: {} }
  }
  componentWillMount() {
    AsyncStorage.getItem(LS_KEY).then(caughtPokemonsString => {
      this.setState({ caughtPokemons: JSON.parse(caughtPokemonsString || '{}') })
    })
  }

  toggleCaught = (id) => {
    const updatedCaughtPokemons = {
      ...this.state.caughtPokemons,
      [id]: !this.state.caughtPokemons[id]
    }
    this.setState({ caughtPokemons: updatedCaughtPokemons })
    AsyncStorage.setItem(LS_KEY, JSON.stringify(updatedCaughtPokemons))
  }

  render() {
    const { caughtPokemons } = this.state
    const pokemons = pokemonsJSON.map(pokemon => ({
      ...pokemon,
      caught: !!caughtPokemons[pokemon.id]
    }))

    const caughtNb = pokemons.filter((({ caught }) => caught)).length

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}><Image source={logo} style={styles.image} /></View>
          <View><Text style={styles.h1}>Welcome to Pokémon-React</Text></View>
          <View><Text style={styles.h2}>Gotta catch'em all! {caughtNb} already!</Text></View>
        </View>
        <View style={styles.main}>
          <View><Text style={styles.h3}>Search for Pokémons and mark them as caught</Text></View>
          <Search
            pokemons={pokemons}
            onSelect={this.toggleCaught}
          />
        </View>
      </View>
    )
  }
}

export default App

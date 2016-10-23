import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import Pokemons from './Pokemons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    alignItems: 'center'
  }
})

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
     }
  }

  search = (searchTerm) => {
    this.setState({ searchTerm })
  }

  render() {
    const { searchTerm } = this.state
    const { pokemons: allPokemons, onSelect } = this.props
    const displayedPokemons = (searchTerm ?
      allPokemons.filter(({ identifier }) => identifier.includes(searchTerm)) :
      allPokemons
    ).slice(0, 151)

    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={this.search}
            placeholder="Enter a Pokémon name"
            style={{ minWidth: 150 }}
          />
        </View>
        <Pokemons
          pokemons={displayedPokemons}
          onSelect={onSelect}
        />
      </View>
    )
  }
}

export default Search

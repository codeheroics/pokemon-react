import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import Pokemons from './Pokemons'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
     }
  }

  search = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm } = this.state
    const { pokemons: allPokemons, onSelect } = this.props
    const displayedPokemons = (searchTerm ?
      allPokemons.filter(({ identifier }) => identifier.includes(searchTerm)) :
      allPokemons
    ).slice(0, 151)

    return (
      <View className="Search">
        <View>
          <TextInput onChange={this.search} />
        </View>
        <View>
          <Pokemons
            pokemons={displayedPokemons}
            onSelect={onSelect}
          />
        </View>
      </View>
    )
  }
}

export default Search

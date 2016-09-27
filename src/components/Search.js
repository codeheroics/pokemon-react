import React, { Component } from 'react'

import SearchResults from './SearchResults'


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
    const { caughtPokemons, searchTerm } = this.state
    const { pokemons: allPokemons, onSelect } = this.props
    const displayedPokemons = (searchTerm ?
      allPokemons.filter(({ identifier }) => identifier.includes(searchTerm)) :
      allPokemons
    ).slice(0, 151)

    return (
      <div className="Search">
        <div>
          <input type="text" onChange={this.search} />
        </div>
        <div>
          <SearchResults
            pokemons={displayedPokemons}
            onSelect={this.props.onSelect}
          />
        </div>
      </div>
    );
  }
}

export default Search;

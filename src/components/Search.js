import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  search = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm } = this.state
    const { pokemons: allPokemons } = this.props
    const displayedPokemons = searchTerm ?
      allPokemons.filter(({ name }) => name.includes(searchTerm)) :
      allPokemons

    return (
      <div className="Search">
        <div>
          <input type="text" onChange={this.search} />
        </div>
        <div>
          Search results: {displayedPokemons.length}
        </div>
      </div>
    );
  }
}

export default Search;

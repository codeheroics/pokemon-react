import React from 'react';

const SearchResults = ({ pokemons }) => (
  <div className="SearchResults">
    {pokemons.map(({ id, identifier, name }) => (
      <div className="SearchResult" key={identifier}>
        <div>
          <img
            alt={name}
            src={require(`../data/sprites/${id}.png`)}
          />
        </div>
        {name}
      </div>
    ))}
  </div>
)

export default SearchResults;

import React from 'react';

const SearchResults = ({ pokemons, onSelect }) => (
  <div className="SearchResults">
    {pokemons.map(({ caught, id, identifier, name }) => (
      <div
        className={`SearchResult ${caught ? 'Caught' : 'Uncaught'}`}
        key={identifier}
        onClick={() => onSelect(id)}
      >
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

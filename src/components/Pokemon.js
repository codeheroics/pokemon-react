import React, { Component } from 'react'

class Pokemon extends Component {
  onSelect = () => this.props.onSelect(this.props.id)

  render() {
    const { caught, id, identifier, name } = this.props
    return (
      <div
        className={`Pokemon ${caught ? 'Caught' : 'Uncaught'}`}
        key={identifier}
        onClick={this.onSelect}
      >
        <div>
        <img
          alt={name}
          src={require(`../data/sprites/${id}.png`)}
        />
        </div>
        {name}
      </div>
    )
  }
}

export default Pokemon

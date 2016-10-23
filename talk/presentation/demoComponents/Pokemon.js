import React, { Component } from 'react';

class Pokemon extends Component {
  onSelect = () => this.props.onSelect(this.props.id)

  shouldComponentUpdate({ caught }) {
    return this.props.caught !== caught;
  }

  render() {
    const { caught, id, identifier, name, image } = this.props;
    return (
      <div
        className={`Pokemon ${caught ? 'Caught' : 'Uncaught'}`}
        key={identifier}
        onClick={this.onSelect}
      >
        <div>
        <img
          alt={name}
          src={image}
          width="400"
          height="400"
        />
        </div>
        {name}
      </div>
    );
  }
}

export default Pokemon;

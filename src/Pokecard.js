import React, { Component } from 'react';

const imgApi =
  ' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
  render() {
    const pokImage = `${imgApi}${this.props.id}.png`;

    return (
      <div>
        <h1>Pokecard</h1>
        <img src={pokImage} />
      </div>
    );
  }
}

export default Pokecard;

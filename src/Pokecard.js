import React, { Component } from 'react';
import './Pokecard.css';

const imgApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    function pad(n) {
      return ('000000' + n).slice(-3);
    }
    const pokImage = `${imgApi}${pad(this.props.id)}.png`;

    const { name, type, base_experience } = this.props;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className='Pokecard-image'>
          <img src={pokImage} alt={name} />
        </div>
        <div className='Pokecard-text'> Type: {type}</div>
        <div className='Pokecard-text'> Exp : {base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;

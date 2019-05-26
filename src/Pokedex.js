import React, { Component } from 'react';
import Pokecard from './Pokecard';

const pokemonApi = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokedex extends Component {
  //   static defaultProps = {
  //     pokemons:
  //   };

  render() {
    const pokemons = [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ];
    const pokemonsId = pokemons.map(element => element.id);
    // for (let i =0; i<pokemonsId.length; i++){

    // console.log(pokemonsId[i]);
    // }
    const mega = pokemonsId.toString();

    const { id, name, type, base_experience } = this.props;

    const images = `${pokemonApi}${mega}.png`;

    return <div>{images} </div>;
  }
}

export default Pokedex;

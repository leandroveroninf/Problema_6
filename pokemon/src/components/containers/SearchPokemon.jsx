import React from 'react';
import {useSelector} from "react-redux";
import Pokemon from '../pures/Pokemon';
import SearchPokemonPure from '../pures/SearchPokemonPure';
import style from "../../css/module/SearchPokemon.module.css"

export default function SearchPokemon() {

    const { pokemnons } = useSelector((state) => state.pokemon);
    
  return (
    <div>
        
        <SearchPokemonPure />

        <div className={style.pokemons}>
        <div className={style.container}>
            {pokemnons ? pokemnons.map(({id, name, height, weight, types, url}) => 
                (
                    <Pokemon key={id} id={id} name={name} height= {height} weight={weight} types={types} url={url} />
                )
            ): <div></div>}
            </div>
        </div>
    </div>
  )
}

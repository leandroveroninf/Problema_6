import {deletPokemon, searchPokemon} from "./pokemonSlice";
import axios from "axios"

export const searchPokemonAPI = (namePokemon) =>  async (dispach)=>{
    try {
        
        const { data: {name, id, height, types, weight, sprites: {other: {home : {front_default: url}}}} } = await axios(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        
        dispach(searchPokemon({
            id,
            name,
            height,
            weight,
            types,
            url
        }));
    } catch (error) {
        console.log(error);
    }
}


export const deletPokemonId = (id)=> (dispach)=> dispach(deletPokemon(id));

import {createSlice} from "@reduxjs/toolkit";
import axios from "axios"
//Nombre, número, tipo, peso, altura y una imágen

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemnons: []
    },
    reducers:{
        searchPokemon(state, action){
            state.pokemnons.push(action.payload);
        }
    }
});


export const { searchPokemon } = pokemonSlice.actions


export const searchPokemonAPI = (namePokemon) =>  async (dispach)=>{
    const { data: {name, id, height, types, weight, sprites: {other: {home : {front_default: url}}}} } = await axios(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
    
    dispach(searchPokemon({
        id,
        name,
        height,
        weight,
        types,
        url
    }));
}



export default pokemonSlice.reducer
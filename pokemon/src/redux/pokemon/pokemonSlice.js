import {createSlice} from "@reduxjs/toolkit";

//Nombre, número, tipo, peso, altura y una imágen

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemnons: []
    },
    reducers:{
        searchPokemon(state, action){
            state.pokemnons.push(action.payload);
        },
        deletPokemon(state, action){
            const filterPofemon = state.pokemnons.filter(({id}) => id !== action.payload);
            state.pokemnons = filterPofemon;
        }
    }
});


export const { searchPokemon, deletPokemon } = pokemonSlice.actions

export default pokemonSlice.reducer
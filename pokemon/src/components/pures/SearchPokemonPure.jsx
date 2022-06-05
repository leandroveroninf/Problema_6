import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import style from "../../css/module/SearchPokemonPure.module.css"
import { searchPokemonAPI } from '../../redux/pokemon/actions';

export default function SearchPokemonPure() {
  
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handelOnChange = (e) => {
    setName(e.target.value);
  };

  const handelOnClick = () => {
      dispatch(searchPokemonAPI(name));
      setName("");
  };
  return (
    <div className={style.containerSearch} >
     <input
        onChange={handelOnChange}
        placeholder="Buscar Pokemon"
        type="text"
        name="searchPokemon"
        value={name}
    />
    <button onClick={handelOnClick}>Buscar</button>
  </div>
  )
}

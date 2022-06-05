import React from 'react'
import { useDispatch } from 'react-redux';
import style from "../../css/module/Pokemon.module.css";
import { deletPokemonId } from '../../redux/pokemon/actions';

export default function Pokemon({id, name, height, weight, types, url}) {

  const dispatch = useDispatch();

  const handelOnClick = ()=>{
    console.log(id);
    dispatch(deletPokemonId(id));
  }


  return (
    <div className={style.container} >
    <div className={style.divHeader}>
          <button className={style.btnEliminar} onClick={handelOnClick} >X</button>
          <span>{name.toUpperCase()}</span>
    </div>
    <div className={style.imagenPokemon} >
        <img src={url} className="App-logo" alt="logo" />

    </div>
    <div className={style.descripcionPokemon} >
        
        <p className={style.descPok}><span>Id</span><span>{id}</span></p>
        <p className={style.descPok}><span>Height</span><span>{height}</span></p>
        <p className={style.descPok}><span>Weight</span><span>{weight}</span></p>
        <p>Type</p>
        <p className={style.descPokType}>
            {types.map(({type:{name: typeName}}, i) => <samp key={i}> {typeName} </samp>)}
        </p>
    </div>
    </div>
  )
}

import React from 'react'
import style from "../../css/module/Pokemon.module.css";

export default function Pokemon({name, height, weight, types, url}) {
  return (
    <div className={style.container} >

    <div className={style.imagenPokemon} >
        <img src={url} className="App-logo" alt="logo" />

    </div>
    <div className={style.descripcionPokemon} >
        <p className={style.descPok}><span>Name</span><span>{name}</span></p>
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

import React from 'react';
import Fruta from './Fruta';
import AdicionarFrutas from './AdicionarFrutas';
import { useSelector } from 'react-redux';

const ListaFrutas = () =>{

    const frutas = useSelector(state=>state.frutasReducers.frutas);
   

    return (
        <>
        <h1>Lista de Frutas</h1>
        <AdicionarFrutas/>
 
        {frutas.map(fruta => (
            <Fruta key={fruta.id} fruta={fruta}/>
        ))}
        </>
    )
}

export default ListaFrutas
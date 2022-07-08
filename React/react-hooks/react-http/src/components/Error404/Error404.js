import React from 'react';
import error404 from './error404.png';
import './Error404.css'

function Error404(){
    return(
        <>
            <h1>Erro_404</h1>
            <h3>Pagina não encontrada</h3>
            <img src={error404} alt='pagina_404'/>
        </>
    )
}

export default Error404
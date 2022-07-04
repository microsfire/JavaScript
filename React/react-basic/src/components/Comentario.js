import React from 'react';
import {formatRelative, subDays} from 'date-fns'
import {ptBR} from 'date-fns/locale'

// Inports do componets
import './Comentario.css';
import imgUser from './user.png';

/*
const Comentario = () => {
    const somar = n => n + 2;
    const n1 = 7;
    const n2 = 9;
    return(
        <div className='Comentario'>
        <h1>microsfire</h1>
        <h3>{n1 + n2 + somar(2)}</h3>
        <p>Desenvolvimento de aplicações web e mobile</p>
    </div>
    );   
}
*/

const Comentario = props => {
    /*
    // Posso definir o estilo no proprio componente
    const estilo = {
        color:'yellow',
        padding:'10px',
        fontSize:'30px'  
    }*/
    return(
        <div className='Comentario'>
            <img className='avatar' src={imgUser} alt={props.nome}/>
            <div className='conteudo'>
            {/** Adicionando o estilo 
            <h2 style={estilo}>{props.nome}</h2>*/}
            <h2 className='nome'>{props.nome}</h2>
            <p className='email'>{props.email}</p>
            <p className='msg'>{props.children}</p>
            <p className='data'>{formatRelative(subDays(new Date(), 0), new Date(),{ locale: ptBR })}</p>
            <button className={'btn'} onClick={props.onRemove}>&times;</button>
            </div>
        </div>
    );
}

export default Comentario;
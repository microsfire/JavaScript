import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import './DetalhesUsuario.css';
// import Error404 from '../Error404/Error404';


function DeatalhesUsuario(){

    const {id} = useParams();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            if(dados.data){
                setUsuario({
                    id: dados.data.id,
                    nome: dados.data.first_name,
                    sobrenome: dados.data.last_name,
                    email: dados.data.email,
                    foto: dados.data.avatar
                })
            }
        })
    },[id])

    if(usuario.nome !== undefined){
        return <>
            <h1>{usuario.nome} {usuario.sobrenome}</h1>
            <img className="img_avatar" src={usuario.foto} alt={usuario.nome}/>
            <p>{usuario.email}</p>
            <Link to="/usuarios">Voltar</Link>
        </>
    }

    return(
        <>
            <h1>Usuario não encontrado</h1>
            {/* <Error404/> */}
            <Link to="/usuarios">Voltar</Link>
        </>
    )
}

export default DeatalhesUsuario
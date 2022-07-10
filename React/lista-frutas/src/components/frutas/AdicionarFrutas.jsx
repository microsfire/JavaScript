import React, {useState} from 'react';

const AdicionarFrutas = () => {

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);

    const adicionarFruta = event => {
        event.preventDefault();

        const fruta = {
            id: new Date(),
            nome,
            quantidade
        };

        console.log('adicionarFruta',fruta);
    }


  return (
    <form onSubmit={adicionarFruta}>
        <input type="text" 
        name={nome} 
        placeholder='Fruta' 
        required 
        onChange={event => setNome(event.target.value)}/>

        <input type="number" 
        name={quantidade} 
        required 
        onChange={event => setQuantidade(event.target.value)}/>

        <button type="submit">Adicionar</button>
    </form>
  )
}

export default AdicionarFrutas
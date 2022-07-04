import './App.css';
import './components/Comentario.css';
import Comentario from './components/Comentario';
import { Component } from 'react';

class App extends Component{
  // Criando um state para manipular os objetos
  state = {
    comentarios: [
      {
        nome: 'Maŕcio',
        email: 'microsfire@msn.com',
        data: new Date(),
        msg: 'Deus é bom!'

      },
      {
        nome: 'Adilma',
        email: 'adilma@msn.com',
        data: new Date(),
        msg: 'Glorias a Deus!'

      },
      {
        nome: 'John',
        email: 'john@msn.com',
        data: new Date(),
        msg: 'Deus seja louvado!'

      }

    ],
    novoComentario: {
      nome: '',
      email: '',
      msg: ''
    }
  }

  addComentario = evento => {
    // Anulando o evento padrão
    evento.preventDefault();
    // Pegando os dados do ob novoComentario e add um novo campo
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    // Adicionando o novo comentario aos comentarios em state
    this.setState({comentarios: [...this.state.comentarios, novoComentario],
    // Limpando o form do novo comentario
    novoComentario: {nome: '', email: '', msg: ''}});
  }
  // Removendo um comentario
  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({comentarios: lista })
  }
  // Recuperando dados digitados pelo usuario
  getDados = evento => {
    const {name, value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

  // Renderizar o componete dentro de uma class
  render() {
    return (
      <div className='App'>
      <h1 className='titulo'>Meu projeto</h1>
      

      {this.state.comentarios.map((comentario, indice) => (
        <Comentario
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data.toString()}
          // Passando a referencia do metodo para Comentario.js
          onRemove={this.removerComentario.bind(this, comentario)}>
          {comentario.msg}
          </Comentario>
      ))}

        <form method='post' onSubmit={this.addComentario} className='formulario'>
          <h2>Adicionar Comentário</h2>
          <div>
            <input 
            type='text' 
            name='nome' 
            placeholder='Digite seu nome' 
            value={this.state.novoComentario.nome}
            onChange={this.getDados} required>
            </input>
          </div>
          <div>
            <input 
            type='email' 
            name='email' 
            placeholder='Digite seu email'
            value={this.state.novoComentario.email}
            onChange={this.getDados} required>
            </input>
          </div>
          <div>
            <textarea name='msg' rows='4' value={this.state.novoComentario.msg}
            onChange={this.getDados} required/>
          </div>
          <button className='btn-enviar' type='submit' value='Submit'>Comentar</button>

        </form>
        

     </div>
    )
  }
}

export default App;

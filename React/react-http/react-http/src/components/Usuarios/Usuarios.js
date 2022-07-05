import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
        /*{ id: 1, nome: 'João', sobrenome: 'Silva', email: 'joao@mail.com' },
        { id: 2, nome: 'Maria', sobrenome: 'Santos', email: 'maria@mail.com' }*/
      ]
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      //METODO DELETE
      fetch(`https://reqres.in/api/users/${usuario.id}`,{
        method: 'DELETE'
      })
        .then(resposta =>{
          console.log(resposta)
          if(resposta.ok){
            let usuarios = this.state.usuarios
            usuarios = usuarios.filter(x => x.id !== usuario.id)
            this.setState({ usuarios: usuarios })
          }   
        })
    }
  }

  componentDidMount(){
    //METODO GET o fetch é por padrão
   fetch('https://reqres.in/api/users')
    .then(resposta => resposta.json())
    .then(dados => {
      //console.log(dados.data)

      const usuarios = dados.data.map(usuario => ({
        id: usuario.id,
        nome: usuario.first_name,
        sobrenome: usuario.last_name,
        email: usuario.email
      }))
      //console.log(usuarios,)
      //this.setState({usuarios: usuarios})
      this.setState({usuarios})
    })
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios
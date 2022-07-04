import React, {Component} from 'react';

class MeuComponente extends Component{

  /*METODOS DE MONTAGEM DE UM COMPONETE E SEU CICLO DE VIDA*/


  // 1º metodo a ser chamado
  constructor(props) {
    super(props);
    // Correto this.state = objeto
    this.state = {numero: 5};

    //Não posso chamar o setState aqui no construtor
    //this.setState({numero: 5});
    //this.state.numero = 5;
    console.log('Construtor');

    //Posso fazer o bind() aqui
    this.addNumero = this.addNumero.bind(this)
  }

  // 2º metodo a ser chamado
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps......')
    console.log(props);
    console.log(state);
    console.log(props);
    //return {numero: 7};
    return null;
  }

  // 3º metodo a ser chamado
  // Aqui devo criar minhas requisiçoes ajax...
  componentDidMount(){
    console.log('ComponentDidMount');
  }

  shouldComponentUpdate(nexProps, nextState){
    console.log('shouldComponentUpdate....');
    console.log('estato atual', this.state);
    console.log(nexProps);
    console.log('Proximo estado',nextState);
    return true;

  }

  componentDidUpdate(){
    console.log('componentDidUpdate...')
  }

  addNumero = () => {
    console.log('setState...');
    let n = this.state.numero;
    n += 1;
    this.setState({numero: n});
  }

  render(){
    console.log('Render');
    return <div>
      
      <p>Óla Meu componente</p>
      <p>{this.state.numero}</p>
      {/*Acessando uma propiedade*/}
      <p>{this.props.titulo}</p>
      {/**Ja fix o bind() no construtor */}
      <button onClick={this.addNumero}>Adicionar</button>
    </div>
    
  }

}

export default MeuComponente;
//const soma=()=>4 + 5;
//const soma = (n1, n2) => n1 + n2;
//const quadrado = n => n * n;

//console.log(soma(4, 32));
//console.log(quadrado(9));

/*
class Pessoa {
    constructor(nome, idade, email, telefone){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
    }

    imprimir = () =>`${this.nome} ${this.idade} ${this.email} ${this.telefone}`;

    
}





const cliente = new Pessoa('Marcio', 37, 'microsfire@msn.com', '(71) 98855-0069');

//resgatando o elemento body
let body = document.querySelector('body');

//create element
let h1 = document.createElement('h1');
let txtp = document.createTextNode(`${cliente.imprimir()}`);

h1.appendChild(txtp);
body.appendChild(h1);
*/

const num = [3.99, 5.54, 4.88, 2.28, 12.99, 5.98];

const addDezPorCento = total => (total + ((total / 100) * 10)).toFixed(2);



const somar = [...num].reduce((a, b) => a + b, 5);


console.log(somar);
console.log(addDezPorCento(somar));


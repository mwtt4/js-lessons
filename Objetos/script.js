var pessoa = {
  nome: 'Guilherme',
  idade: '23',

}


// Sempre para puxar um método você deve colocar o "."

// var quadrado = {
//   lados : 4, 
//   area: function (lado) {
//   return lado * lado;
//   },
// this ele puxa o objeto, no caso o "quadrado"
//   perimetro: function (lado) {
//   return this.lados * lado;
//   }
// }

// No JS ES6+ para criar uma função não é mais necessário escrever function  (), basta a penas colocar o nome e após o ()

var quadrado = {
  lados : 4, 
  area(lado) {
  return lado * lado;
  },
// this ele puxa o objeto, no caso o "quadrado"
  perimetro(lado) {
  return this.lados * lado;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight () {
   return this.height / 2;
  }
}

menu.color = 'blue';
menu.esconder = function () {
  console.log('Escondi');
}

menu.backgroundColor = '#000';
var bg = menu.backgroundColor;


///Exercício

// Crie um objeto com o seus dados pessoais

var dadosPessoais = {
  nome: 'Guilherme',
  sobrenome: 'Gomes',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi'
}
carro.preco = 2000;

// Crie um objeto que represente um labrador, 
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}
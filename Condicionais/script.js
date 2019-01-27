var possuiGraduacao = true;
var possuiDoutorado = true; 


// O IF sempre verifica se a condição é veradeira
if(possuiGraduacao) {
  console.log('É verdadeiro');
  var x = 10;
  } 
  
  else if (possuiDoutorado) {
  console.log('Possui Doutorado');
}

else { 
  console.log('Não possui nada');
}

var nome = 'André';

// Se "nome" existe
if (nome) {
  console.log(nome);
}
//5-5 = 0 e 0  é um valor falso ai ele já para a partir dai.

var condicional = (5 - 10) && (5 + 5);
if (condicional) {
  console.log('Verdadeiro', condicional);
}
else {
  console.log('Falso');
}

// || OU retorna sempre o valor verdadeiro

var condicional2 = (5- 5) || (5 + 5) || (10 - 2);
console.log(condicional2);


var corFavorita = 'Azul';

switch(corFavorita) { 
  case 'Azul' : 
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
  console.log('Olhe para o sol');
  break;
}

///////////////////////  Exercicios

var minhaIdade = '22';
var idadePrimo = '25';

if (minhaIdade > idadePrimo) {
  console.log('Sua idade é maior');
}
else if (minhaIdade === idadePrimo) {
  console.log('É igual');
}
else { 
  console.log('É menor');
}

// && retorna o ultimo valor verdadeiro ou se o primeiro valor for falso

var expressao = (5-2) && (5- '') && (5-2);
console.log(expressao);

var nome = 'Andre';

var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China 

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes');
}
else {
  console.log('Brasil tem menos habitantes');
}

if(('Gato' === 'gato') && (5>2)) {
  console.log('Verdadeiro');
}
else {
  console.log('Falso');
}







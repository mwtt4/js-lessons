// Define a função
function areaQuadrado (lado) { 
  return lado * lado;
}

// Ativa a função
areaQuadrado();

console.log(areaQuadrado(10));


// Os parâmetros são peso e altura
function imc (peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

function imc2 (peso, altura) {
  var imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8);

// Os valores que são passados são os argumentos.
console.log(imc(80,1.8));


function corFavorita (cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  }
  else if (cor === 'verde') {
    return 'Eu gosto de mato';

  }
  else { 
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function(){console.log('oi')}); 



function terceiraIdade(idade) {
  console.log(typeof idade);

  //Se o tipo do valor idade for diferente de número
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número'
 }
     else if(idade >= 60) {
      console.log('É idoso');
      return true;
  } 
  else {
    return false;
  }
  console.log(idade);
}

console.log(terceiraIdade('oi'));

function faltaVisitar (paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados}`;
 }
faltaVisitar(20);

var profissao = 'Desenvolvedor Jr'; 
 
function dados() {  
   var nome = 'Guilherme';   
   var idade = 22;  
    function outrosDados() {    
    var endereco = 'São Paulo';    
    var idade = 23;    
    return `${nome}, ${idade}, ${endereco}, ${profissao}`; 
    return outrosDados();
     }   
     return outrosDados(); 
     } 
 
console.log(dados()); 
// Retorna Guilherme, 23, São Paulo, Desenvolvedor Jr' 
//outrosDados();  
// retorna um erro

/// Exercícios 


function perimetroQuadrado (quadrado, lado) {
  var lado = 4;
  var perimetroQuadrado = quadrado * lado; 
  return perimetroQuadrado;
}

perimetroQuadrado(20);

function nomeCompleto (nome, sobrenome) {
    var nome = 'Guilherme';
    var sobrenome = 'Gomes';
    return `${nome}, ${sobrenome}`;
}

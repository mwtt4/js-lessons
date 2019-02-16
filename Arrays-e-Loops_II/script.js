//var ultimoItem = videoGames.pop(); 


// numero = numero + 1
for (var numero = 0; numero < 4; numero++) {  //enquanto o numero 0 for menor que o 10 atribuia +1
    console.log(numero);

}

var videoGames = ['PS4', 'Switch', 'XBOX','3DS'];

for(var item = 0; item <4; item++) {
    console.log(videoGames[item]); 
    if (videoGames[item] === 'PS4') {
    break;
    }
}


// var Frutas = ['Banana', 'Laranja', 'Melancia','Limao'];


//Frutas.forEach(function (fruta, index) { // O index define exatamente qual a numeração do Array
//    console.log(fruta, index)

//})


// Exercícios 

// Crie uma array com os anos que o Brasil foi campeão da Copa
//1959,  1962, 1970, 2002 

var BrasilCopas = ['1959', '1962', '1994', '2002'];

//Interaja com o array utilizando um loop para mostar no console
//a seguinte mensagem : "O Brasil ganhou a copa de ${ano}"

for(var i = 0; i < BrasilCopas.length; i++) {
    console.log('O Brasil ganhou a copa de:' + BrasilCopas[i]);
}


//BrasilCopas.forEach(function(copas) {
//    console.log(`O Brasil Ganhou ${}`)
//})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera 

var Frutas = ['Pera', 'Laranja', 'Melancia','Limao'];

for(var fruit = 0; fruit < 4; fruit++) {
    console.log(Frutas[fruit]);
   if (Frutas[fruit] === 'Pera') {
       break;
   }
}

// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma do array

var UltimaFruta = Frutas[3]; // Ou Frutas.length - 1 











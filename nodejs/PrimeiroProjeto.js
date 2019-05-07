 console.log('Meu primeiro código!!');
n
// const count = 5;
// console.log('count: %d', count);
// // Prints: count: 5, to stdout
// console.log('count:', count);
// // Prints: count: 5, to stdout
// console.log(`count: ${count}`);


//DESAFIO contar tempo inicial, contar tempo final - imprimir tempo gasto
var dataInicial = new Date();

for(let i=1;i<1000000;i++){
    var j = i++;
}
var tempo = new Date();
var tempoFinal = parseInt(tempo.getMilliseconds());  
var tempoInicial = parseInt(dataInicial.getMilliseconds());

var resultado = tempoFinal - tempoInicial;
console.log('O tempo total gasto foi: '+resultado+' milisegundos');



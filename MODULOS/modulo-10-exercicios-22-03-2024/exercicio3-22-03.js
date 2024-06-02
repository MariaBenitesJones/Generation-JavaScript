const leia = require('readline-sync')

let positivo = 0, numero= 0;

do {
numero = leia.questionInt("Digite um numero: ")  
if(numero >= 1){
 positivo += numero;
}  
} while (numero != 0);
console.log(`Soma de todos os numeros positivos digitados: ${positivo}`);




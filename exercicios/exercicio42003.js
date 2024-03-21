const leia = require('readline-sync')

let n1, n2, n3, n4, diferenca;

n1 = leia.questionFloat("\nDigite um numero: ");
n2 = leia.questionFloat("\nDigite um numero: ");
n3 = leia.questionFloat("\nDigite um numero: ");
n4 = leia.questionFloat("\n2Digite um numero: ");

diferenca = (n1*n2)-(n3*n4);

console.log("\nA diferença entre os numeros é de: "+diferenca);
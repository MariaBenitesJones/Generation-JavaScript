const leia = require('readline-sync')

let salario;
let abono;
let NovoSalario;

salario = leia.questionFloat("\nDigite o valor do seu salario: "); 

abono = leia.questionFloat("\nDigite o valor de seu abono: ")

NovoSalario = salario+abono;

console.log("\nSeu novo salario é: "+NovoSalario);

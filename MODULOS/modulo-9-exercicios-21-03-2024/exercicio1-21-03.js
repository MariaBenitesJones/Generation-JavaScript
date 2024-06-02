const leia = require('readline-sync')

let a,b,c,soma;

console.log("\nConta: A+B é maior, menor ou igual a C ???");
a = leia.questionFloat("\nDigite o numero referente a letra A: ");
b = leia.questionFloat("\nDigite o numero referente a letra B: ");
c = leia.questionFloat("\nDigite o numero referente a letra C: ");

soma= a+b;

if (soma > c ) {
    console.log("\nA soma de "+a+" + "+b+" é maior que "+c);
}
else if (soma < c ) {
    console.log("\nA soma de "+a+" + "+b+" é menor que "+c);
}
else{
    console.log("\nA soma de "+a+" + "+b+" é igual a "+c);
}
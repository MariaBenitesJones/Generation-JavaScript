const leia = require('readline-sync')

let n1, n2, n3, n4, media;

n1 = leia.questionFloat("Digite sua primeira nota: ");
n2 = leia.questionFloat("Digite sua segunda nota: ");
n3 = leia.questionFloat("Digite sua terceira nota: ");
n4 = leia.questionFloat("Digite sua quarta nota: ");

 media = (n1+n2+n3+n4)/4;

console.log("\nSua media é: "+media);
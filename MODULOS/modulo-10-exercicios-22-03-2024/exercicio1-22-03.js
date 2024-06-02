const leia = require('readline-sync')

let n1, n2, sub;

n1 = leia.questionInt("Digite o primeiro numero: ");
n2 = leia.questionInt("Digite o segundo numero: ");

if (n1 < n2) {
    for (n1 = n1; n1 <= n2; n1++) {
        if (n1 % 3 == 0 && n1 % 5 == 0) {
            console.log(`${n1} é multiplo por 3 e 5`)
        }
    }
} else {
    console.log("Intervalo inválido!")
}





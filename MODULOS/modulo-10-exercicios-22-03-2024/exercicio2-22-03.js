const leia = require('readline-sync')

let menor21=0, maior50=0;


let idade = leia.questionInt("Digite a sua idade: ")
while (idade > 0) {
    if (idade < 21) {
        menor21++
    }
    if (idade > 50) {
        maior50++
    }
    idade = leia.questionInt("Digite a sua idade: ")
}
console.log(`Total de pessoas com menos de 21 anos: ${menor21} 
Total de pessoas maiores de 50 anos: ${maior50}`)

// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na
// tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade seja
// maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

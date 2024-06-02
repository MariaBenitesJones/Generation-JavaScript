const leia = require('readline-sync')

let codigo, quantidade, nota;

console.log("-------------------------------" +
    "\n1- Cachorro Quente - R$ 10.00" +
    "\n2- X-Salada - R$ 15.00" +
    "\n3- X-Bacon - R$ 18.00" +
    "\n4- Bauru - R$ 12.00" +
    "\n5- Refrigerante - R$ 8.00" +
    "\n6- Suco de Laranja - R$ 13.00" +
    "\n--------------------------------\n")

codigo = leia.questionInt("\nDigite o codigo do pedido: ");

switch (codigo) {
    case 1:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 10 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o Cachorro Quente\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    case 2:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 15 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o X-Salada\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    case 3:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 18 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o X-Bacon\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    case 4:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 12 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o Bauru\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    case 5:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 8 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o Refrigerante\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    case 6:
        quantidade = leia.questionInt("\nDigite a quantidade: ");
        nota = 13 * quantidade;
        console.log("\n------------------------------\n" +
            "\nSeu pedido foi o Suco de Laranja\n" +
            "\nQuantidade: " + quantidade + "\n" +
            "\nValor total: R$" + nota)
        break;
    default:
        console.log("Codigo inexistente, digite um codigo existente!")
        break;
}




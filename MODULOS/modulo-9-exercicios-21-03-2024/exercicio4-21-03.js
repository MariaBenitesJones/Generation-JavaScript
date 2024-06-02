const leia = require('readline-sync')

let codigo, nome, reajuste, salario, NovoSalario;

console.log
    ("     -------------------------------" +
        "\n             1- Gerente" +
        "\n             2- Vendedor" +
        "\n             3- Supervisor" +
        "\n             4- Motorista" +
        "\n             5- Estoquista" +
        "\n             6- Tecnico de TI" +
        "\n    -------------------------------\n")

nome = leia.question("\nDigite seu nome: ");
codigo = leia.questionInt("\nDigite o codigo referente ao seu cargo: ");
salario = leia.questionInt("\nDigite seu salario: ");

switch (codigo) {
    case 1:
        NovoSalario = salario + (0.10 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo: Gerente\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    case 2:
        NovoSalario = salario + (0.07 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo: Vendedor\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    case 3:
        NovoSalario = salario + (0.09 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo: Supervisor\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    case 4:
        NovoSalario = salario + (0.06 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo: Motorista\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    case 5:
        NovoSalario = salario + (0.05 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo: Estoquista\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    case 6:
        NovoSalario = salario + (0.08 * salario)
        console.log("\nOlá, " + nome + "\n" +
            "\nSeu cargo:  Tecnico de TI\n" +
            `\nSeu novo salario é de R$${NovoSalario.toFixed(2)}`)
        break;
    default:
        console.log("\nCodigo incorreto, digite um codigo existente")
        break;
}
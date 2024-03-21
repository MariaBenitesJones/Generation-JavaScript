const leia = require('readline-sync')

let SalarioBruto, AdicionalNoturno, HorasExtras, Descontos, SalarioLiquido;

SalarioBruto = leia.questionFloat("\nDigite seu salario Bruto: ");
AdicionalNoturno = leia.questionFloat("\nDigite seu adicional noturno: ");
HorasExtras = leia.questionFloat("\nDigite suas horas extras: ");
Descontos = leia.questionFloat("\nDigite seu desconto: ");

SalarioLiquido = (SalarioBruto+AdicionalNoturno+(HorasExtras*5)-Descontos)

console.log("\nSeu salario liquido é: "+SalarioLiquido);




const leia = require('readline-sync')

let n, ImpPar;

n = leia.questionInt("\nDigite um numero inteiro: ")

ImpPar = n%2;

if(n > 0 && ImpPar == 0){
    console.log("\nO numero "+n+" é positivo e Par");
}
else if(n > 0 && ImpPar == 1){
    console.log("\nO numero "+n+" é positivo e Impar");
}
else if(n < 0 && ImpPar == 0){
    console.log("\nO numero "+n+" é negativo e Par");
}
else if(n < 0 && ImpPar == 1 || ImpPar == -1 ){
    console.log("\nO numero "+n+" é negativo e Impar");
}
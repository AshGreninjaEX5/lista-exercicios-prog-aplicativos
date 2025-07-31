onst prompt = require("prompt-sync")();

let idade = Number(prompt("digite a idade da pessoa: "));
let sexopessoa = prompt("digite o sexo da pessoa: ");

if(sexopessoa == 'm' && idade >= 18){
    console.log("essa pessoa deve se alistar!");
}else{
    console.log("essa pessoa nao precisa se alistar!");
}

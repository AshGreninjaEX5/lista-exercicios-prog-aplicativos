const prompt = require("prompt-sync")();

let numeros = new Array(5);

numeros[0] = Number(prompt("digite o numero1: "));
numeros[1] = Number(prompt("digite o numero2: "));
numeros[2] = Number(prompt("digite o numero3: "));
numeros[3] = Number(prompt("digite o numero4: "));
numeros[4] = Number(prompt("digite o numero5: "));

let maiornumero = numeros[0];

for(let i = 1; i < 5; i++){
    if(numeros[i] > maiornumero){
        maiornumero = numeros[i];
    }
}

console.log(`o maior numero entre os digitados foi o: `, maiornumero);

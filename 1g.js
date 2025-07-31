const prompt = require("prompt-sync")();

let numero = Number(prompt("digite um numero: "));

if(numero % 3 == 0){
    console.log(`o numero ${numero} e multiplo de 3`);
}else{
    console.log(`o numero ${numero} nao e multiplo de 3`);
}

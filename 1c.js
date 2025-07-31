const prompt = require("prompt-sync")();

let num1 = prompt("digite o valor do 1° numero ");
let num2 = prompt("digite o valor do 2° numero ");

console.log(`o valor da soma do 1° numero (${num1}) e do 2° numero (${num2}) é igual a ${Number(num1)+Number(num2)}`);

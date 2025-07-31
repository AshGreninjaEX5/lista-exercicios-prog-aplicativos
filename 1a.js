const prompt = require("prompt-sync")();

let nome = prompt("digite seu nome ");
let idd = prompt("digite a sua idade ");
let alt = prompt("digite a sua altura em metros ");

console.log(`meu nome é ${nome}, tenho ${idd} anos e ${alt}m de altura`);

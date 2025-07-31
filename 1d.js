const prompt = require("prompt-sync")();

let valorproduto = 120.00;
let descontoproduto = 0.85;
let taxaentrega = 10;
let valorfinal = valorproduto * descontoproduto + taxaentrega;

console.log(`o valor final do pedido e de r$${valorfinal}`);

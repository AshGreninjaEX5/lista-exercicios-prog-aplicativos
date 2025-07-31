const prompt = require("prompt-sync")();

let distanciaviagem = Number(prompt("digite a distancia da viagem: "));
let consumomediokml = Number(prompt("digite o consumo medio do carro (em km/l): "));
let precogasolina = Number(prompt("digite o preco da gasolina: "));

let litrosnecessarios = distanciaviagem / consumomediokml;
let custoviagem = litrosnecessarios * precogasolina;

console.log(`a quantidade de litros necessarios para completar a viagem de ${distanciaviagem}km e de: ${litrosnecessarios.toFixed(2)}`);
console.log(`a viagem vai custar: ${custoviagem.toFixed(2)}`);

const prompt = require("prompt-sync")();

let valortotal = Number(prompt("digite o valor total da conta: "));
let quantidadeclienteseletuadores = Number(prompt("digite a quantidade de clientes que efetuarao o pagamento: "));

let valordividido = valortotal / quantidadeclienteseletuadores;

console.log(`o valor de r$${valortotal} dividido entre ${quantidadeclienteseletuadores} pessoas foi de: r$${valordividido.toFixed(2)}`);

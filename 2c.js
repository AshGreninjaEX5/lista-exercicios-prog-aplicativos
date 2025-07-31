const prompt = require("prompt-sync")();

let idade = Number(prompt("digite a idade da pessoa: "));

if(idade <= 12){
    console.log(`e uma crianca (ou um bebe)`);
}
else if(idade <= 17){
    console.log(`e um adolescente`);
}
else if(idade <= 64){
    console.log(`e um adulto`);
}
else if(idade > 64){
    console.log(`e um idoso`);
}

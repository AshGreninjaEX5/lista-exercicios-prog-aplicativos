const prompt = require("prompt-sync")();

let nota1 = Number(prompt("digite a nota1 do aluno: "));
let nota2 = Number(prompt("digite a nota2 do aluno: "));
let nota3 = Number(prompt("digite a nota3 do aluno: "));

let mediaaluno = (nota1 + nota2 + nota3) / 3;
let mediaescola = 7;

if(mediaaluno >= mediaescola){
    console.log(`aprovado! (${mediaaluno}>=${mediaescola})`);
}else{
    console.log(`reprovado (${mediaaluno}<${mediaescola})`);
}

const prompt = require("prompt-sync")();

class usuario {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

function validarcadastro(nome, idade, email){

    if(!nome){
        return false;
    }

    if(isnan(idade) || idade < 18){
        return false;
    }

    if (!email.includes('@')) {
        return false;
    }

    return true;
}

let nome = prompt("digite o seu nome completo: ");
let idade = Number(prompt("digite quantos anos voce tem: "));
let email = prompt("digite o seu email: ");

let cadastrovalido = validarcadastro(nome, idade, email);

if(cadastrovalido){
    const usuario1 = new usuario(nome, idade, email);
    console.log("cadastro realizado com sucesso!");
    console.log(`informacoes registradas:`, usuario1);
}else{
    console.log("preencha os dados corretamente!");
}

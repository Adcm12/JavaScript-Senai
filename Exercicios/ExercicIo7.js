/*Crie uma funçaoo que receba o nome de uma pessoa como argumeto e retorne uma saudaçao personalizada. em seguida, chame a funçaoo e exiba a saudaçao no console.*/

function saudacao(nome) {
    return `Olá, ${nome}! Seja bem-vindo`;
}
const nome = "David";
const mensagem = saudacao(nome);
console.log(mensagem);

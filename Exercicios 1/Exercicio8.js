/*Crie uma funçao que receba a idade de uma pessoa  e retorne se ela e maior de idade ou menor de idade. em seguida, chame a funçao e exiba o resultado no console.*/
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

const idade = 20;
const resultado = verificarIdade(idade);
console.log(resultado); 
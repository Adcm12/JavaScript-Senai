// 4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

function exercicio4(array) {
    console.log("--- Exercício 4 ---");
    if (array.length === 0) {
        return "O arrayay está vazio.";
    }

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
        min = array[i];
        }
        if (array[i] > max) {
        max = array[i];
        }
    }
    return `O menor número é ${min} e o maior número é ${max}.`;
}
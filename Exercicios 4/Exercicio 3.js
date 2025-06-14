// 3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function exercicio3(array) {
    console.log("--- Exercício 3 ---");
    let sum = 0;
    for (const number of array) {
        sum += number;
    }
    return sum;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = exercicio3(numeros);
console.log(`A soma dos elementos é: ${resultado}`); 

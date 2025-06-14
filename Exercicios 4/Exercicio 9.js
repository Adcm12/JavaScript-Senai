// 9. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

function exercicio9(numeros, targetNumber) {

    console.log("--- Exercício 9 ---");
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === targetNumber) {
        return i;
        }
    }
    return -1;
}

const numeros = [10, 20, 30, 40, 50];
const targetNumber = 40;
const resultado = exercicio9(numeros, targetNumber);
console.log(`O número ${targetNumber} está na posição: ${resultado}`); // Saída: O número 30 está na posição: 2

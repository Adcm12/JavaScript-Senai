// 5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

function exercicio5() {

    console.log("--- Exercício 5 ---");
    const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
        }
    }
}
exercicio5();
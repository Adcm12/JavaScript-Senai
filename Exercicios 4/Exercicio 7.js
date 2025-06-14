// 7. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

function exercicio7(array) {
    console.log("--- Exercício 7 ---");
    array.forEach((element, index) => {
        console.log(`Índice: ${index}, Elemento: ${element}`);
    });
}

const numeros = [10, 20, 30, 40, 50];
exercicio7(numeros);
// 8. Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, callback) {
    console.log("--- Exercício 8 ---");
    for (const element of array) {
        console.log(callback(element));
    }
}

// Exemplo de função de callback que dobra o valor
function dobrarValor(valor) {
    return valor * 2;
}

const numeros = [1, 2, 3, 4, 5];
executaOperacaoEmArray(numeros, dobrarValor);

/*Crie uma funçao que receba tres numeros como parametros e determine qual deles e o maior. 
Utilize estructuras condicionales para comparar os valores .*/

function encontrarMaiorNumero(num1, num2, num3) {
    let maior = num1; 

    if (num2 > maior) {
        maior = num2; 
    }

    if (num3 > maior) {
        maior = num3; 
    }

    return maior; 
}
const numero1 = 100;
const numero2 = 20;
const numero3 = 158;
const maiorNumero = encontrarMaiorNumero(numero1, numero2, numero3);
console.log(`O maior número entre ${numero1}, ${numero2} e ${numero3} é: ${maiorNumero}`); // O maior número entre 10, 20 e 15 é: 20
// 6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

function exercicio6(array) {
  console.log("--- Exercício 6 ---");
  if (array.length === 0) {
    return 0; // or handle error as appropriate
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = exercicio6(numeros);
console.log(`A média dos números é: ${resultado}`);
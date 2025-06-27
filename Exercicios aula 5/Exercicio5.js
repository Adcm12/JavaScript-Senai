// Exercício 5: Criação de um objeto calculadora
const calculadora = {
  soma: function(a, b) {
    return a + b
  },
  subtracao: function(a, b) {
    return b - a
  },
  multiplicacao: function(a, b) {
    return a * b
  },
  divisao: function(a, b) {
    if (b === 0) {
      return "Não é possível dividir por zero"
    }
    return a / b
  }
}

console.log("Soma:", calculadora.soma(10, 5))
console.log("Subtração (5 do 10):", calculadora.subtracao(10, 5))
console.log("Multiplicação:", calculadora.multiplicacao(10, 5))
console.log("Divisão:", calculadora.divisao(10, 5))
console.log("Divisão por zero:", calculadora.divisao(10, 0))

calculadora.calcularMedia = function(numeros) {
  if (numeros.length === 0) {
    return 0
  }
  let somaTotal = 0
  for (const num of numeros) {
    somaTotal += num
  }
  return somaTotal / numeros.length
}

const meusNumeros = [10, 20, 30, 40, 50]
console.log("Média dos números:", calculadora.calcularMedia(meusNumeros))
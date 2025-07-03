/* Calculadora de Juros Compostos: No sistema financeiro da empresa, é necessário criar uma
calculadora de investimentos. Desenvolva uma função (calcularJurosCompostos) que receba
um capitalInicial, uma taxaDeJuros (mensal, ex: 0.05 para 5%), e um tempoEmMeses. A função
deve retornar o montante final, utilizando a fórmula: M=C∗(1+i)t. */

function calcularJurosCompostos(capitalInicial, taxaDeJuros, tempoEmMeses) {
    const montanteFinal = capitalInicial * Math.pow((1 + taxaDeJuros), tempoEmMeses)
    return montanteFinal
}

const capitalInicial = 1000 
const taxaDeJuros = 0.05 
const tempoEmMeses = 12 

const montanteFinal = calcularJurosCompostos(capitalInicial, taxaDeJuros, tempoEmMeses)
console.log(`O montante final após ${tempoEmMeses} meses é: R$ ${montanteFinal.toFixed(2)}`)



/*Sistema de Notas Fiscais: Dado um array de objetos itens, onde cada item tem nome,
precoUnitario e quantidade, escreva uma função (calcularTotalNota) que use .reduce() (ou
forEach) para calcular o valor total da nota fiscal (soma de precoUnitario * quantidade de todos
os itens).
*/
const itens = [
  { nome: 'Teclado', precoUnitario: 150, quantidade: 2 },
  { nome: 'Mouse', precoUnitario: 80, quantidade: 3 },
  { nome: 'Monitor', precoUnitario: 1200, quantidade: 1 }
]

const calcularTotalNota = (itens) => {
  return itens.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0)
}

console.log('Valor Total da Nota:', calcularTotalNota(itens))
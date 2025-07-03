/*Gerador de Relatório Final: Integre vários dos conceitos. Crie uma função
(gerarRelatorioCompleto) que receba um array de vendas (como no exercício 6). A função
deve: a. Calcular o total de vendas (reduce). b. Identificar o produto mais caro (map e sort ou
reduce). c. Criar um objeto relatorio com totalVendas, produtoMaisCaro e dataRelatorio (data
atual). d. Converter o objeto relatorio final para uma string JSON e imprimi-la no console.
*/
const vendas = [
  { nome: 'Laptop', precoUnitario: 4500, quantidade: 2 },
  { nome: 'Smartphone', precoUnitario: 3000, quantidade: 3 },
  { nome: 'Tablet', precoUnitario: 1800, quantidade: 5 }
]

const gerarRelatorioCompleto = (vendas) => {
  // a. Calcular o total de vendas
  const totalVendas = vendas.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0)

  // b. Identificar o produto mais caro (por preço unitário)
  const produtoMaisCaro = vendas.reduce((maisCaro, itemAtual) => {
    return itemAtual.precoUnitario > maisCaro.precoUnitario ? itemAtual : maisCaro
  }, vendas[0])

  // c. Criar um objeto relatorio
  const relatorio = {
    totalVendas,
    produtoMaisCaro: {
      nome: produtoMaisCaro.nome,
      preco: produtoMaisCaro.precoUnitario
    },
    dataRelatorio: new Date().toISOString()
  }

  // d. Converter para JSON e imprimir
  const relatorioJson = JSON.stringify(relatorio, null, 2)
  console.log(relatorioJson)
}

gerarRelatorioCompleto(vendas)
/* Relatório de Vendas: O time de e-commerce precisa de um relatório. Você recebeu um array
de objetos vendas, onde cada objeto tem produto e valor. Crie uma função
(gerarRelatorioVendas) que use .map() para criar um novo array de strings, onde cada string
tem o formato: "Produto: [nome do produto], Valor: R$ [valor]". */

function gerarRelatorioVendas(vendas) {
    return vendas.map(venda => `Produto: ${venda.produto}, Valor: R$ ${venda.valor.toFixed(2)}`)
}

const vendas = [
    { produto: "Camiseta", valor: 49.90 },
    { produto: "Calça Jeans", valor: 129.90 },
    { produto: "Tênis Esportivo", valor: 299.90 }
]

const relatorioVendas = gerarRelatorioVendas(vendas)
console.log("Relatório de Vendas:")
relatorioVendas.forEach(relatorio => {
    console.log(relatorio)
})

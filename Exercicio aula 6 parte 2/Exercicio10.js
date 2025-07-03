/*Desestruturação de Dados (Destructuring): Crie uma função que receba um objeto produto
com as propriedades id, nome, preco e categoria. Dentro da função, utilize a desestruturação
de objetos para extrair nome e preco em variáveis separadas e imprima-as no console.
*/
const produto = {
  id: 101,
  nome: 'Notebook Gamer',
  preco: 7500,
  categoria: 'Eletrônicos'
}

const exibirDetalhesProduto = (produto) => {
  const { nome, preco } = produto
  console.log(`Produto: ${nome}, Preço: R$${preco}`)
}

exibirDetalhesProduto(produto)
/* 3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
    id (number): identificador do produto.
    nome (string): nome do produto.
    preco (number): preço do produto.*/

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99,
    departamento: "Roupas",
    estoque: 100,
};

const produtoString = JSON.stringify(produto);
console.log('Produto em formato de string JSON:', produtoString);


/* 2 - Crie um arquivo chamado dados.json contendo informações em
formato JSON. O arquivo pode representar, por exemplo, dados de
produtos de uma loja ou qualquer outra informação que você deseje.

Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele,
utilize o método require para importar o conteúdo do arquivo
dados.json.

Imprima no console o objeto JavaScript resultante da leitura do
arquivo. */

const dados = require('./Exercicio2.json');

console.log('\nDados do JSON:\n');

for (const produto of dados.produtosDaLoja) {
  console.log('--- Novo Produto ---');
  console.log('Departamento:', dados.departamento);
  console.log(`ID: ${produto.id}`);
  console.log(`Nome: ${produto.nome}`);
  console.log(`Preço: ${produto.preco}`);
  console.log('--------------------');
}
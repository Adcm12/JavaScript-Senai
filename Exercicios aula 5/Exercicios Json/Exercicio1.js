/* Crie um arquivo chamado dados.json contendo informações
fictícias em formato JSON. O arquivo pode representar, por exemplo,
dados de produtos, usuários ou qualquer outra informação que você
deseje. */

const dados = require('./Exercicio1.json');
console.log(dados); 

console.log('\nAcessando propriedades específicas\n')
console.log('Nome do primeiro produto:', dados.produtos[0].nome)
console.log('Email do segundo usuário:', dados.usuarios[1].email)
console.log('Sede da empresa:', dados.empresa.sede)
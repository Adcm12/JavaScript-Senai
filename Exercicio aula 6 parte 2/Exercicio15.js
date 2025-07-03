/*Atualização e Envio de Dados: Crie um objeto representando um pedido. Adicione um novo
item a este pedido (que deve ser um array de produtos dentro do objeto). Em seguida, converta
o objeto pedido inteiro para uma string JSON, simulando o envio desses dados atualizados para
um servidor.
*/
const pedido = {
  idPedido: 5432,
  cliente: 'Mariana Costa',
  produtos: [
    { idProduto: 7, nome: 'Cadeira Gamer', quantidade: 1 }
  ]
}

const novoProduto = { idProduto: 12, nome: 'Mesa de Escritório', quantidade: 1 }
pedido.produtos.push(novoProduto)

const pedidoJsonParaEnvio = JSON.stringify(pedido)

console.log('Pedido atualizado para envio:', pedidoJsonParaEnvio)
